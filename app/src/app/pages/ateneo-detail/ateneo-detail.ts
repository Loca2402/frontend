import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-atenei-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './ateneo-detail.html',
  styleUrl: './ateneo-detail.css',
})
export class AteneoDetailComponent implements OnInit {
  ateneo:any=null;
  constructor(
    private http:HttpClient,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const ateneoId = this.route.snapshot.paramMap.get('ateneoId'); 
    this.http.get<any>(`http://localhost:8080/api/atenei/${ateneoId}`).subscribe({
      next:(response) => 
        {console.log(response);

          if (response && response.result) {
          this.ateneo = response.result;
        } else {
          this.ateneo = response; 
        }
        this.cd.detectChanges();

    },
      error: (err) => {
    console.error("errore durante la chiamata", err);
  }
  })
  }

}
