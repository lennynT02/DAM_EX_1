import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private urlApiBooks = "https://gutendex.com/books/?ids=1,2,3,4,5,6,7,8,9,10"
  private urlApiRobot = "https://robohash.org/"

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get(this.urlApiBooks)
  }

  getRobot(id: string): Observable<any> {
    return this.http.get(this.urlApiRobot + id)
  }
}
