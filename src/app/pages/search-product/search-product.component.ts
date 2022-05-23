import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { VentasService } from '../../services/ventas.service';
import { Product } from '../interface/producto';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  lstProduct: Product[] = [];
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  termino: string = '';
  debouncer: Subject<string> = new Subject();


  constructor(private ventasService: VentasService) { }

  ngOnInit(): void {
      this.ventasService.buscarProducto().subscribe(
        res => {
          this.lstProduct = res.data;
          console.log(this.lstProduct)
        }
      )
  }

  addCart(product: Product) {
    this.ventasService.addCart(product);
  }
}
