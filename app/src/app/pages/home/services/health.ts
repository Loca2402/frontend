import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Health {
  private apiUrl = 'http://localhost:8080/health';
  constructor(private http:HttpClient) {}
    checkHealth(): Observable<any> {
      return this.http.get<any>(this.apiUrl);
    
  }
}
