import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable, ObservedValueOf } from 'rxjs';  
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  url = 'https://localhost:44375/api';
  constructor(private http: HttpClient) { }

  getallUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.url + '/allusers');
  }

  getsingleuser(ID:string) : Observable<User>{
    return this.http.get<User>(this.url + '/user/' + ID)
  }

  createNewUser(name:string): Observable<User> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<User>(this.url + '/InsertUser/'+  
    name, httpOptions);  
  }
  
  updateUser(id:string , name:string): Observable<User> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<User>(this.url + '/updateuser/'+ 
    id, name,  httpOptions);  
  }
  deleteuser(userid: string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/deleteuser/' + userid,  
 httpOptions);  
  }    
}
