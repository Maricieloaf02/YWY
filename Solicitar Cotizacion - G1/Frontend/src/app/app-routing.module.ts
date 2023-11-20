import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//agregados
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { SolicitarCotizacionComponent } from './componentes/solicitar-cotizacion/solicitar-cotizacion.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarPredioComponent } from './componentes/registrar-predio/registrar-predio.component';
import { VerCatalogoComponent } from './componentes/ver-catalogo/ver-catalogo.component';
import { FormatoSolicitudComponent } from './componentes/formato-solicitud/formato-solicitud.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';

const routes: Routes = [  //Esto lo llene, antes de meter mi menu principal, esto estaba vacio
  { path: '', redirectTo: '/pagina3', pathMatch: 'full' }, //Indicamos que ni bien se ejecuta,se tenga la pagina1 de entrada
  { path: 'pagina3', component: LoginComponent },
  { path: 'pagina1', component: MenuPrincipalComponent },
  { path: 'pagina2', component: SolicitarCotizacionComponent },
  { path: 'pagina5', component: VerCatalogoComponent },
  { path: 'formato-solicitud', component: FormatoSolicitudComponent},
  { path: 'registro', component: RegistrarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
