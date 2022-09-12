import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public indexSelected : number;
  public counterItemChart : number = 0;

  // objeto produto para escolher pelo id quantos eu vou mostrar
  products = [
    {
      id: 0,
      image: '../../../../assets/pizza-1.jpeg',
      description: '2 Pizzas GRANDES com até dois sabores em cada por apenas R$79,99'
    }, {
      id: 1,
      image: '../../../../assets/pizza-2.jpeg',
      description: '2 Pizzas médias + Guaraná 2 litros por apenas R$ 54.99.'
    }, {
      id: 3,
      image: '../../../../assets/pizza-3.jpeg',
      description: '1 Pizza Grande por apenas R$ 29,99! Sabores disponíveis: Calabresa e Mussarela, aproveite! '
    }, {
      id: 4,
      image: '../../../../assets/pizza-4.jpg',
      description: '1 Pizza Grande + 01 refrigerante Fruki 2 litros por apenas R$ 54,99!'
    }]

    productChart : Array<{id : number, image : string, description : string}> = []; // produto temporário no carrinho

  constructor(private snackBar: MatSnackBar) { 
    this.indexSelected = -1;
   } // receber uma notificação como Objeto com visual de notificação mobile

   public showMessage(message: string) : void {
    this.snackBar.open(message, 'X', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  public getAllProducts() : Array<{id : number, image : string, description : string}> {
    return this.products;
  } 

  public getProductById(index : number) : any {
    if (this.indexSelected === -1) { // exception
      return null;
    }
    for (let i=0; i < this.products.length; i++) {
      if (this.products[i].id == index) {
        return this.products[i];
      }
    }
  }

  public setIndexProductClicked(i : number): void {
    this.indexSelected = i;
  }

  public getProductClicked() : any {
    for (let i=0; i < this.products.length; i++) {
      if (this.products[i].id == this.indexSelected) {
        this.productChart = this.products.slice(i, i+1);   // colocar o pedido dentro do array de objeto carrinho
        return this.productChart[0];
      }
    } return {};
  }

}
