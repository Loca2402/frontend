import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dipartimenti-list',
  imports: [CommonModule],
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

}

