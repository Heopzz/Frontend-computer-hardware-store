import { AuthService } from './auth.service';
import { Goods } from './../modules/Goods';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GoodsService {

urlJSON: string= '/assets/data-source.json';

apiUrl: string = '/api/goods/';


  constructor(private http: HttpClient, private authService: AuthService) { }


  getAllGoods(): Observable<Goods[]>{
    return this.http.get<Goods[]>(this.apiUrl);
  }

  createGoods(goods: Goods): Observable<Goods[]> {
    return this.http.post<Goods[]>(`${this.apiUrl}/add`, goods);
  }

  getGoodsById(id: number): Observable<Goods[]> {
    return this.http.get<Goods[]>(`${this.apiUrl}/${id}`);
  }

  updateGoods(id: number, goods: Goods): Observable<Goods[]> {
    return this.http.put<Goods[]>(`${this.apiUrl}/${id}`, goods);
  }

  deleteGoods(id: number | null): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);

  }

  searchGoods(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search?query=${query}`);
  }


}
