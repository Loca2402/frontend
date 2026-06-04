import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Health } from './services/health';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  backendStatus = 'non verificato';

  constructor(private health: Health) {}

  ngOnInit(): void {
    this.health.checkHealth().subscribe({
      next: (response: any) => {
        console.log('risposta backend:', response);
        this.backendStatus = response['STATUS'] ?? response.status ?? 'non verificato';
      },
      error: () => {
        this.backendStatus = 'Errore collegamento backend';
      }
    });
  }
}