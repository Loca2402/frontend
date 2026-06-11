import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-atenei-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './atenei-list.html',
  styleUrl: './atenei-list.css',
})
export class AteneiListComponent implements OnInit {
  listaAtenei:any[]=[];
  constructor(
    private http:HttpClient,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/api/atenei").subscribe({
      next:(response) => 
        {console.log(response);

          if (response && response.result) {
          this.listaAtenei = response.result;
        } else {
          this.listaAtenei = response; 
        }
        this.cd.detectChanges();

    },
      error: (err) => {
    console.error("errore durante la chiamata", err);
  }
  })
}

  eliminaAteneo(ateneoId: number): void {
  if (confirm("Eliminare la riga selezionata?")) {
    this.http.delete<any>(`http://localhost:8080/api/atenei/${ateneoId}`).subscribe({
      next: (response) => {
        console.log("Cancellazione completata:", response);
        this.listaAtenei = response;
        this.cd.detectChanges();
      },
      error: (err) => {
         console.error("errore durante la rimozione", err);
      }
  })
}

}

}
