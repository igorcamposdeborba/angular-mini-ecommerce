import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/components/product/product.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public product : any;

  constructor(private productService : ProductService, private router : Router) { 
    this.product = this.productService.getProductClicked();
  } 


  public messageSent() : void {
    this.productService.showMessage('Pedido enviado'); // usar método do service para mostrar notificação
    this.router.navigate(['']); // navegar para home
  }
  

}
