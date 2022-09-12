import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/components/product/product.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public products;

  constructor(private productService : ProductService, private router : Router) { 
    this.products = productService.getAllProducts();
  }
  
  ngOnInit(): void {
  }

  cardClick(productId : number) : void {    
    this.productService.setIndexProductClicked(productId);
    this.router.navigate(['/contato']);
  }

}
