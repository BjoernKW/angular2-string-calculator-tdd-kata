import { Component } from '@angular/core';
import { StringCalculatorService } from "./stringCalculator.service";

@Component({
  selector: 'calculator-form',
  templateUrl: './calculator.component.html',
  providers: [StringCalculatorService],
})
export class CalculatorComponent {
  numbers: string;
  result: number;

  constructor(private stringCalculator: StringCalculatorService) {
  }

  add(numbers: string): number {
    return this.stringCalculator.add(numbers);
  }

  submit() {
    this.result = this.add(this.numbers);
  }
}
