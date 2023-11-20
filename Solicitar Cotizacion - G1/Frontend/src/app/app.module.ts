import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitarCotizacionComponent } from './componentes/solicitar-cotizacion/solicitar-cotizacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { RegistrarPredioComponent } from './componentes/registrar-predio/registrar-predio.component';
import { VerCatalogoComponent } from './componentes/ver-catalogo/ver-catalogo.component';
import { FormatoSolicitudComponent } from './componentes/formato-solicitud/formato-solicitud.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    SolicitarCotizacionComponent,
    MenuPrincipalComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    RegistrarPredioComponent,
    VerCatalogoComponent,
    FormatoSolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
