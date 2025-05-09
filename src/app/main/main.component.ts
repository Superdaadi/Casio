import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DisplayComponent } from "../display/display.component";
import { ActionsComponent } from '../actions/actions.component';
import { NumbersComponent } from '../numbers/numbers.component';
import * as math from 'mathjs';


@Component({  
  selector: 'app-main',
  standalone: true,
  imports: [
    DisplayComponent,
    ActionsComponent,
    NumbersComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  expression = '';
  ans: string = '';

  append(value: string) {
    this.expression += value;
  }

  clear() {
    this.expression = '';
  }

  deleteLast() {
    this.expression = this.expression.slice(0, -1);
  }

  useAns() {
    this.expression += this.ans;
  }

  evaluate() {
    try {
      const replacedExpr = this.expression
        .replace(/√/g, 'sqrt')  // In case of custom symbols
        .replace(/÷/g, '/')
        .replace(/×/g, '*');
      const result = math.evaluate(replacedExpr);
      this.ans = result.toString();
      this.expression = result.toString();
    } catch (e) {
      this.expression = 'Error';
    }
  }
}
