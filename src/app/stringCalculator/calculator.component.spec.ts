/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { FormsModule } from "@angular/forms";

describe('CalculatorComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        CalculatorComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(CalculatorComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
