import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dipartimenti-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './dipartimenti-list.html',
  styleUrl: './dipartimenti-list.css',
})
export class DipartimentiListComponent implements OnInit {
  listaDipartimenti:any[]=[];
  constructor(
    private http:HttpClient,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/api/dipartimenti").subscribe({
      next:(response) => 
        {console.log(response);

          if (response && response.result) {
          this.listaDipartimenti = response.result;
        } else {
          this.listaDipartimenti = response; 
        }
        this.cd.detectChanges();

    },
      error: (err) => {
    console.error("errore durante la chiamata", err);
  }
  })
  }

    eliminaDipartimento(dipartimentoId: number): void {
  if (confirm("Eliminare la riga selezionata?")) {
    this.http.delete<any>(`http://localhost:8080/api/dipartimenti/${dipartimentoId}`).subscribe({
      next: (response) => {
        console.log("Cancellazione completata:", response);
        this.listaDipartimenti = response;
        this.cd.detectChanges();
      },
      error: (err) => {
         console.error("errore durante la rimozione", err);
      }
  })
}

}

}

