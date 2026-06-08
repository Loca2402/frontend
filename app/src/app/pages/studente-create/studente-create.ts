import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-studente-create',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './studente-create.html',
  styleUrl: './studente-create.css',
})
export class StudenteCreateComponent {
   studente = {
  matricola: '',
  nome: '',
  cognome: '',
  dataNascita:'',
  codiceFiscale:'',
  sesso:'',
  recapito: {
    email: '',
    telefono: '',
    indirizzo:'',
    comune:'',
    cap:''
  }
};

 constructor(
    private http: HttpClient,
    private router: Router
  ) {}

errore: string = '';
loading: boolean = false;

salva(): void {
  this.loading = true;
  this.errore = '';

  this.http.post("http://localhost:8080/api/studenti", this.studente).subscribe({
    next: () => {
      this.loading = false;
      this.router.navigate(['/studenti']);
    },
    error: (err) => {
      this.loading = false;
      this.errore = 'Errore durante il salvataggio!';
      console.error(err);
    }
  });
}
}
