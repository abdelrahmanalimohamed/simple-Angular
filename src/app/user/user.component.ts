import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserservicesService } from '../userservices.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  Users: Observable<User[]> | undefined;

  constructor(private formbuilder: FormBuilder , private httpclient: HttpClient , private userservices: UserservicesService) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(){
    this.Users = this.userservices.getallUsers();
  }

}
