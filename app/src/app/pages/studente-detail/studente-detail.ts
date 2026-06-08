import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-studente-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './studente-detail.html',
  styleUrl: './studente-detail.css',
})
export class StudenteDetailComponent implements OnInit{
  studente:any=null;
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
  })
  }

}

