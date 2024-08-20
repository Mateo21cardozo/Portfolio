import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private jsonUrl =
    'https://portfoliodb-ed8bb-default-rtdb.firebaseio.com/.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any[]> {
    return this.http
      .get<any>(this.jsonUrl)
      .pipe(map((response) => response.proyectos));
  }
}
