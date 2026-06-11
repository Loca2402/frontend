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
export class StudenteDetailComponent implements OnInit {
  studente: any = null;
  listaIscrizioni: any[] = [];
  listaCorsi: any[] = [];             
  mostraBarraRicerca: boolean = false; 
  
  statoSelezionato: string = '';
  mostraConferma: boolean = false;

  filtri = {
    idCorso: '',
    annoAccademico: '',
    stato: '',
    dataIscrizione: ''
  };

  constructor(
    private http: HttpClient,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idStudente = this.route.snapshot.paramMap.get('id'); 
    if (idStudente) {
      this.caricaDatiIniziali(idStudente);
    }
  }

  caricaDatiIniziali(idStudente: string): void {
    this.http.get<any>(`http://localhost:8080/api/studenti/${idStudente}`).subscribe({
      next: (response) => {
        if (response && response.result) {
          this.studente = response.result;
        } else {
          this.studente = response; 
        }
        this.cd.detectChanges();
      },
      error: (err) => console.error("Errore caricamento studente", err)
    });

    this.caricaIscrizioneStudente(idStudente);

    this.http.get<any>("http://localhost:8080/api/corsi").subscribe({
      next: (response) => {
        this.listaCorsi = response && response.result ? response.result : response;
        this.cd.detectChanges();
      },
      error: (err) => console.error("Errore recupero corsi", err)
    });
  }

  caricaIscrizioneStudente(idStudente: string | number): void {
    this.http.get<any>(`http://localhost:8080/api/iscrizioni/studente/${idStudente}`).subscribe({
      next: (res) => {
        const datiIscrizione = res && res.result ? res.result : (res || []);
        setTimeout(() => {
          this.listaIscrizioni = datiIscrizione;
          this.cd.detectChanges();
        }, 0);
      },
      error: (err) => console.error("Errore recupero iscrizioni", err)
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
        this.mostraBarraRicerca = false;
        this.resetFiltri();
        if (this.studente) {
          this.caricaIscrizioneStudente(this.studente.id);
        }
      },
      error: (err) => console.error("Errore durante l'iscrizione", err)
    });
  }

  modificaStato(): void {
    if (this.listaIscrizioni.length === 0 || !this.statoSelezionato) return;

    const idIscrizione = this.listaIscrizioni[0].id;
    const payload = { stato: this.statoSelezionato };

    this.http.patch(`http://localhost:8080/api/iscrizioni/${idIscrizione}/stato`, null, {
      params:{
        stato:this.statoSelezionato
      }
    }).subscribe({
      next: (response) => {
        console.log("modifica completata:", response);
        this.statoSelezionato = '';
        this.mostraConferma = true;
        if (this.studente) {
          this.caricaIscrizioneStudente(this.studente.id);
        }
      },
      error: (err) => console.error("Errore durante la modifica dello stato", err)
    });
  }

  resetFiltri(): void {
    this.filtri = { idCorso: '', annoAccademico: '', stato: '', dataIscrizione: '' };
    this.cd.detectChanges();
  }
}