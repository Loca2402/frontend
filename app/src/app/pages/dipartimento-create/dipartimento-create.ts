import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-dipartimento-create',
  imports: [CommonModule, RouterLink, FormsModule], 
  templateUrl: './dipartimento-create.html',
  styleUrl: './dipartimento-create.css',
})
export class DipartimentoCreateComponent {
  
  dipartimento = {
  codice: '',
  nome: '',
  ateneo: ''
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

  this.http.post("http://localhost:8080/api/dipartimenti", this.dipartimento).subscribe({
    next: () => {
      this.loading = false;
      this.router.navigate(['/dipartimenti']);
    },
    error: (err) => {
      this.loading = false;
      this.errore = 'Errore durante il salvataggio!';
      console.error(err);
    }
  });
}
}
