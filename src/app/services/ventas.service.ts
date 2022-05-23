import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../pages/interface/producto';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private apiUrl: string = 'https://apis-prueba.pruebasgt.com';
  constructor(private _http: HttpClient) { }
  agregarCart: any = [];
  
  buscarProducto(): Observable<any> {
    return this._http.get(`${this.apiUrl}/api/products`);
  }

  addCart(product: Product) {
    let save;
    if(this.verificar(product) === 'false') {
      console.log('no hay')
      save = {
        ...product,
        cantidad: 1
      };
    } else {
      //ACA CAMBIAR CANTIDAD
      save = {
        ...product,
        cantidad: 1
      };
      
    }
    this.agregarCart.push(save)
    localStorage.setItem('cart', JSON.stringify(this.agregarCart));
  }

  verificar(product: Product): any {
    // console.log(product)
    let msj: any;
    for (let i = 0; i < this.agregarCart.length; i++) {
      if (product.id === this.agregarCart[i]['id']) {
        msj = i;
        this.agregarCart.splice(i, 1);
        localStorage.setItem('cart', JSON.stringify(this.agregarCart));
      } else {
        msj = 'false'
      }
    }
    return msj;
  }
}
