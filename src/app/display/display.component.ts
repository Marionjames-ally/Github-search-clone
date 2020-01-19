import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  providers:[UserService],
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  user:User;
  userName:string;

  constructor(private userRequestService: UserService) {
    
    this.userRequestService.userName = "Marionjames-ally";
    this.userRequestService.userRequest();
    this.user = this.userRequestService.user;
  }
  

  userLookup(){
    this.userRequestService.userLookup(this.userName);
    this.userRequestService.userRequest();
    this.user = this.userRequestService.user; 
  }
  ngOnInit() {
  }

}
