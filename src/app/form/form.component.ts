import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  onClickSum() {
    this.result = this.num1 + this.num2;
  }

  onClickSub() {
    this.result = this.num1 - this.num2;
  }

  onClickMulti() {
    this.result = this.num1 * this.num2;
  }

  onClickDiv() {
    this.result = this.num1 / this.num2;
  }

  onClickMedia() {
    this.result = (this.num1 + this.num2)/2;
  }

  onClickExponencia() {
    this.result = this.num1 ** this.num2;
  }
}
