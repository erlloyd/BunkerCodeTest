import { Component, OnInit } from '@angular/core';
import { Http }    from '@angular/http';
import 'rxjs/add/operator/map';

class User {
  firstName: string;
  lastName: string;
  favoriteColor: string;
};

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
    this.user = new User();
  }

  onSubmit() {
    this.http.post("https://bunkerdev.azure-api.net/codetest/api/people/add", this.user)
    .map(res => res.json().data)
    .subscribe(
      (value) => {
      this.summary = value.summary;
    });
  }
  user:User;
  summary: string;
}
