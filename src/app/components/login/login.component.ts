import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginAutorizado = false;

  ngOnInit(): void {
    this.obterLoginStatus();
  }
  obterLoginStatus() {
    this.loginAutorizado = !!localStorage.getItem("login");
  }

  obterDescricaoLogin = () =>
    this.loginAutorizado ?
    "Estou Autorizado" : "Nao estou Autorizado";

  loginClick() {
    if (this.loginAutorizado)
      localStorage.clear();
    else
      localStorage.setItem("login", "sim");

    this.obterLoginStatus();
  }
}
