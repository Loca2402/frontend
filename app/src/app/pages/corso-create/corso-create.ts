import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-corso-create',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './corso-create.html',
  styleUrl: './corso-create.css',
})
export class CorsoCreateComponent {
    corso = {
  codice: '',
  nome: '',
  annoAccademico: '',
  tipoTitolo: '',
  codiceDipartimento: null
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

  this.http.post("http://localhost:8080/api/corsi", this.corso).subscribe({
    next: () => {
      this.loading = false;
      this.router.navigate(['/corsi']);
    },
    error: (err) => {
      this.loading = false;
      this.errore = 'Errore durante il salvataggio!';
      console.error(err);
    }
  });
}
}

