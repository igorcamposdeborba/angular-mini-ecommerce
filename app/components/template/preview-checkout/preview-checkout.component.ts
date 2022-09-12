import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/product/product.service';

@Component({
  selector: 'app-preview-checkout',
  templateUrl: './preview-checkout.component.html',
  styleUrls: ['./preview-checkout.component.css']
})
export class PreviewCheckoutComponent implements OnInit {

  public product : any;

  constructor(private productService : ProductService) { 
    this.product = this.productService.getProductClicked();
  }
  
  ngOnInit(): void {
  }
  
  public clearChart() : any {
    const element = document.getElementById('clear-div');
    if (element != null) {
      element.remove();
    }
  } 
}

