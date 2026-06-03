
import { Component, OnInit} from '@angular/core'; 
import { RouterOutlet } from '@angular/router';
import { Health } from './services/health';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  backendStatus = 'non verificato';

  constructor(
    private health: Health,
  ) {}

  ngOnInit(): void {
    this.health.checkHealth().subscribe({
      next: (response) => {
        console.log('risposta backend:', response);
          this.backendStatus = response['STATUS']; 
        },
      error: () => {
        this.backendStatus = 'Errore collegamento backend';
      }
    });
  }
}