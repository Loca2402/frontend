import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-ateneo-create',
  imports: [CommonModule, RouterLink, FormsModule], 
  templateUrl: './ateneo-create.html',
  styleUrl: './ateneo-create.css',
})
export class AteneoCreateComponent {
  
  ateneo = {
  codice: '',
  nome: '',
  citta: ''
};

 constructor(
    private http: HttpClient,
    private router: Router
  ) {}

errore: string = '';
loading: boolean = false;

// 2. Il metodo si deve chiamare salva() come nell'HTML
salva(): void {
  this.loading = true;
  this.errore = '';

  this.http.post("http://localhost:8080/api/atenei", this.ateneo).subscribe({
    next: () => {
      this.loading = false;
      this.router.navigate(['/atenei']);
    },
    error: (err) => {
      this.loading = false;
      this.errore = 'Errore durante il salvataggio!';
      console.error(err);
    }
  });
}
}