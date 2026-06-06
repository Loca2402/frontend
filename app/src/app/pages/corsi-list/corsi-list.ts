import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-corsi-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './corsi-list.html',
  styleUrl: './corsi-list.css',
})
export class CorsiListComponent implements OnInit {
  listaCorsi:any[]=[];
  constructor(
    private http:HttpClient,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/api/corsi").subscribe({
      next:(response) => 
        {console.log(response);

          if (response && response.result) {
          this.listaCorsi = response.result;
        } else {
          this.listaCorsi = response; 
        }
        this.cd.detectChanges();

    },
      error: (err) => {
    console.error("errore durante la chiamata", err);
  }
  })
  }

}


