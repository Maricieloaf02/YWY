import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }

  getPersona() {
    const url = 'http://127.0.0.1:5000/persona';
    return this.http.get(url);
  }

  addPersona(persona: any) {
    const url = 'http://127.0.0.1:5000/persona';
    return this.http.post<number>(url, persona);
  }

  getRol() {
    const url = 'http://127.0.0.1:5000/rol';
    return this.http.get(url);
  }

  addRol(rol: any) {
    const url = 'http://127.0.0.1:5000/rol';
    return this.http.post<number>(url, rol);
  }

  getSolicitante() {
    const url = 'http://127.0.0.1:5000/solicitante';
    return this.http.get(url);
  }

  addSolicitante(solicitante: any) {
    const url = 'http://127.0.0.1:5000/solicitante';
    return this.http.post<number>(url, solicitante);
  }

  getSolicitud() {
    const url = 'http://127.0.0.1:5000/solicitud';
    return this.http.get(url);
  }

  addSolicitud(solicitud: any) {
    const url = 'http://127.0.0.1:5000/solicitud';
    return this.http.post<number>(url, solicitud);
  }

  getTipoDocumento() {
    const url = 'http://127.0.0.1:5000/tipo_documento';
    return this.http.get(url);
  }

  addTipoDocumento(tipoDocumento: any) {
    const url = 'http://127.0.0.1:5000/tipo_documento';
    return this.http.post<number>(url, tipoDocumento);
  }

  getPredio() {
    const url = 'http://127.0.0.1:5000/predio';
    return this.http.get(url);
  }

  addPredio(predio: any): Observable<any> {
    const url = 'http://127.0.0.1:5000/predio';
    return this.http.post<number>(url, predio);
  }


  getServicio() {
    const url = 'http://127.0.0.1:5000/servicio';
    return this.http.get(url);
  }

  addServicio(servicio: any) {
    const url = 'http://127.0.0.1:5000/servicio';
    return this.http.post<number>(url, servicio);
  }

  getTipoPredio() {
    const url = 'http://127.0.0.1:5000/tipo_predio';
    return this.http.get(url);
  }

  addTipoPredio(tipoPredio: any) {
    const url = 'http://127.0.0.1:5000/tipo_predio';
    return this.http.post<number>(url, tipoPredio);
  }

  getUbigeo() {
    const url = 'http://127.0.0.1:5000/ubigeo';
    return this.http.get(url);
  }

  addUbigeo(ubigeo: any) {
    const url = 'http://127.0.0.1:5000/ubigeo';
    return this.http.post<number>(url, ubigeo);
  }

  getAreaComun() {
    const url = 'http://127.0.0.1:5000/areaComun';
    return this.http.get(url);
  }

  addAreaComun(areaComun: any) {
    const url = 'http://127.0.0.1:5000/areaComun';
    return this.http.post<number>(url, areaComun);
  }

  getPredioAreaComun() {
    const url = 'http://127.0.0.1:5000//predio_area_comun';
    return this.http.get(url);
  }

  addPredioAreaComun(predioAreaComun: any) {
    const url = 'http://127.0.0.1:5000//predio_area_comun';
    return this.http.post<number>(url, predioAreaComun);
  }
}
