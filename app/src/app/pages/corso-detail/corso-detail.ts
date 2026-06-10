import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-corso-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './corso-detail.html',
  styleUrl: './corso-detail.css',
})
export class CorsoDetailComponent implements OnInit {
  corso:any=null;
  listaIscritti: any[] = [];
  constructor(
    private http:HttpClient,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idCorso = this.route.snapshot.paramMap.get('idCorso'); 
    this.http.get<any>(`http://localhost:8080/api/corsi/${idCorso}`).subscribe({
      next:(response) => 
        {console.log(response);

          if (response && response.result) {
          this.corso = response.result;
        } else {
          this.corso = response; 
        }
        this.cd.detectChanges();

    },
      error: (err) => {
    console.error("errore durante la chiamata", err);
  }
  })

  this.http.get<any>(`http://localhost:8080/api/corsi/${idCorso}/iscritti`).subscribe({
      next: (response) => {
        this.listaIscritti = response && response.result ? response.result : (response || []);
        this.cd.detectChanges();
      },
         error: (err) => console.error("Errore visualizzazione studenti", err)
      })

  }

}
