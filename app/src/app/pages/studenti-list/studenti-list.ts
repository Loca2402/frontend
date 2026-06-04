import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studenti-list',
  imports: [CommonModule],
  templateUrl: './studenti-list.html',
  styleUrl: './studenti-list.css',
})
export class StudentiListComponent implements OnInit {
  listaStudenti:any[]=[];
  constructor(
    private http:HttpClient,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/api/studenti").subscribe({
      next:(response) => 
        {console.log(response);

          if (response && response.result) {
          this.listaStudenti = response.result;
        } else {
          this.listaStudenti = response; 
        }
        this.cd.detectChanges();

    },
      error: (err) => {
    console.error("errore durante la chiamata", err);
  }
  })
  }

}



