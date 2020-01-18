import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserHttpService {
  user:User;
  userName:string;
  getUsers: any;

  constructor(private http:HttpClient) { 
    this.user = new User("","","","","","","");

  }
  userRequest() {
    interface ApiResponse{
      login:string;
      name:string;
      bio:any;
      public_repos: number;
      followers: number;
      following:number;
      avatar_url:any;
      html_url:any;
    }
  }
}
