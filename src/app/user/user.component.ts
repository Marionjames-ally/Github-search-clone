import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { UserHttpService } from '../user-http.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users = User;

  constructor(UserHttpService:UserHttpService) { 
    this.users = UserHttpService.getUsers()
  }

  ngOnInit() {
    
  }

}
