// import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
// import { AutorizacaoService } from '../service/autorizacao.service';
// import { Injectable, inject } from '@angular/core';
// @Injectable()
// class RouteAccessControlGuard {
//   constructor(private AutorizacaoService: AutorizacaoService,
//     private _router: Router) {
//   }
//   canActivate(
//     route:ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean {
//     const usuarioEstaLogado = this.AutorizacaoService.obterLoginStatus()
//     return usuarioEstaLogado
//   }
// }

// export const autorizadoGuard: CanActivateFn = (route, state):boolean => {
//     return inject(RouteAccessControlGuard).canActivate(route,state);
// };

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  ROUTER_CONFIGURATION,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AutorizacaoService } from '../service/autorizacao.service';

@Injectable({
  providedIn: 'root',
})
export class AutorizadoGuard implements CanActivate {
  constructor(
    private autorizadoService: AutorizacaoService,
    private routerService: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const usuarioEstaLogado = this.autorizadoService.obterLoginStatus();
    if (usuarioEstaLogado) return true;
    // const demorar: Promise<boolean> = new Promise<boolean>((res) => {
    //   setTimeout(() => {
    //     res(true);
    //   }, 3000);
    // });
    // return demorar;
    this.routerService.navigate(['/login']);
    return false;
  }
}
