import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Calculadora';

  public num1: number = 0;
  public num2: number = 0;
  public num3: number = 0;

  adicao(){
    this.num3 = this.num1+this.num2;
  }

  subtracao(){
    this.num3 = this.num1-this.num2;
  }

  multiplicacao(){
    this.num3 = this.num1*this.num2;
  }

  divisao(){
    this.num3 = this.num1/this.num2;
  }

  limpar(){
    this.num1 = 0;
    this.num2 = 0;
    this.num3 = 0
  }

}
