import { Component, OnInit } from '@angular/core';
import { AutorizacaoService } from 'src/app/service/autorizacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginAutorizado = false;

  constructor(
    private autorizarService: AutorizacaoService,
  ) {}
  ngOnInit(): void {}

  obterDescricaoLogin = () =>
    this.autorizarService.obterLoginStatus()
      ? 'Estou Autorizado'
      : 'Nao estou Autorizado';

  loginClick() {
    if (this.autorizarService.obterLoginStatus())
      this.autorizarService.deslogar();
    else this.autorizarService.autorizar();
  }
}
