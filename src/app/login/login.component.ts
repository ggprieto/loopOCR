import { Component, OnInit } from '@angular/core';

import { RouterLink } from '@angular/router/src/directives/router_link';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
    init_plugins();
  }

  ingresar() {
    this.router.navigate([ '/dashboard' ]);
  }

}
