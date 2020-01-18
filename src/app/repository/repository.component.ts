import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Repository } from '../repository';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

    repo:Repository;
    userName:string;
  repoName: string;

  constructor() { 
    this.repo = ("","","","","")new Repository
  }

  ngOnInit() {
  }

}
