import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-studente-detail',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './studente-detail.html',
  styleUrl: './studente-detail.css',
})
export class StudenteDetailComponent implements OnInit{
  studente:any=null;
  listaCorsi: any[] = [];             
  mostraBarraRicerca: boolean = false; 
  
  filtri = {
    idCorso: '',
    annoAccademico: '',
    stato: '',
    dataIscrizione: ''
  };
  constructor(
    private http:HttpClient,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idStudente = this.route.snapshot.paramMap.get('id'); 
    this.http.get<any>(`http://localhost:8080/api/studenti/${idStudente}`).subscribe({
      next:(response) => 
        {console.log(response);

          if (response && response.result) {
          this.studente = response.result;
        } else {
          this.studente = response; 
        }
        this.cd.detectChanges();

    },
      error: (err) => {
    console.error("errore durante la chiamata", err);
  }
  });

  this.http.get<any>("http://localhost:8080/api/corsi").subscribe({
      next: (response) => {
        this.listaCorsi = response && response.result ? response.result : response;
        this.cd.detectChanges();
      }
    });
  }

  toggleRicerca(): void {
    this.mostraBarraRicerca = !this.mostraBarraRicerca;
    if (!this.mostraBarraRicerca) {
      this.resetFiltri();
    }
  }

  eseguiRicerca(): void {
    if (!this.filtri.idCorso || !this.studente) return;

    const payload = {
      annoAccademico: this.filtri.annoAccademico,
      stato: this.filtri.stato,
      dataIscrizione: this.filtri.dataIscrizione,
      studente: { id: this.studente.id },
      corso: { idCorso: Number(this.filtri.idCorso) }
    };

    this.http.post<any>("http://localhost:8080/api/iscrizioni", payload).subscribe({
      next: (response) => {
        console.log("Iscrizione completata:", response);
        this.mostraBarraRicerca = false;
        this.resetFiltri();
        this.cd.detectChanges();
      },
      error: (err) => { console.error("Errore durante l'iscrizione", err); }
    });
  }

  resetFiltri(): void {
    this.filtri = { idCorso: '', annoAccademico: '', stato: '', dataIscrizione: '' };
    this.cd.detectChanges();
  }
}

