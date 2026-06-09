import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-studenti-list',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './studenti-list.html',
  styleUrl: './studenti-list.css',
})
export class StudentiListComponent implements OnInit {
  listaStudenti:any[]=[];
  listaStudentiCompleta:any[]=[];
   mostraBarraRicerca: boolean = false;
  filtri = {
    id: '',
    matricola: '',
  };
  constructor(
    private http:HttpClient,
    private cd: ChangeDetectorRef,
    private location: Location

  ) {}

  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/api/studenti").subscribe({
      next:(response) => 
        {console.log(response);

          if (response && response.result) {
          this.listaStudenti = response.result;
        } else {
          this.listaStudenti = response; 
        }
        this.listaStudentiCompleta = this.listaStudenti;
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
      this.location.go('/studenti/search'); 
    } else {
      this.location.go('/studenti'); 
      this.resetFiltri(); 
    }
  }

  eseguiRicerca(): void {
    this.listaStudenti = this.listaStudentiCompleta.filter((studente) => {
      const matchId = !this.filtri.id || String(studente.id).includes(this.filtri.id);
      const matchMatricola = !this.filtri.matricola || String(studente.matricola).includes(this.filtri.matricola);

      return matchId && matchMatricola;
    });

    this.cd.detectChanges();
  }

  resetFiltri(): void {
    this.filtri = { id: '', matricola: ''};
    this.listaStudenti = this.listaStudentiCompleta;
    this.cd.detectChanges();
  }


}