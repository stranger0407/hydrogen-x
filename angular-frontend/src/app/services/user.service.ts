import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, ApiResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  signup(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/signup`, user);
  }

  getAllUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/users`);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/users/${id}`);
  }

  updateUser(id: number, user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/users/${id}`, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/users/${id}`);
  }
}
