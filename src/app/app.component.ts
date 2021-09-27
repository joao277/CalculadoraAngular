import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Calculadora';

  public num1!: number;
  public num2!: number;
  public num3!: number;

  adicao(){
    this.num3= this.num1+this.num2;
  }

  subtracao(){
    this.num3= this.num1-this.num2;
  }

  multiplicacao(){
    this.num3= this.num1*this.num2;
  }

  divisao(){
    this.num3= this.num1/this.num2;
  }

}
