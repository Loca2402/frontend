import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-corsi-list',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './corsi-list.html',
  styleUrl: './corsi-list.css',
})
export class CorsiListComponent implements OnInit {
  listaCorsi:any[]=[];
  mostraBarraRicerca: boolean = false;
  filtri = {
    nome: '',
    tipoTitolo: '',
    annoAccademico: ''
  };
  constructor(
    private http:HttpClient,
    private cd: ChangeDetectorRef,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/api/corsi").subscribe({
      next:(response) => 
        {console.log(response);

          if (response && response.result) {
          this.listaCorsi = response.result;
        } else {
          this.listaCorsi = response; 
        }
        this.cd.detectChanges();

    },
      error: (err) => {
    console.error("errore durante la chiamata", err);
  }
  })
  }

  toggleRicerca(): void {
    this.mostraBarraRicerca = !this.mostraBarraRicerca;
    
    if (this.mostraBarraRicerca) {
      this.location.go('/corsi/search'); 
    } else {
      this.location.go('/corsi'); 
      this.resetFiltri(); 
    }
  }

  eseguiRicerca(): void {
    this.http.get<any>("http://localhost:8080/api/corsi/search", { params: this.filtri }).subscribe({
      next: (response) => {
        console.log("Risultati ricerca:", response);
        
        if (response && response.result) {
          this.listaCorsi = response.result;
        } else {
          this.listaCorsi = response;
        }
        this.cd.detectChanges();
      },
      error: (err) => {
        console.error("Errore durante la ricerca", err);
        this.listaCorsi = [];
        this.cd.detectChanges();
      }
    });
  }
  resetFiltri(): void {
    this.filtri = { nome: '', tipoTitolo: '', annoAccademico: '' };
    this.eseguiRicerca();
  }


}


