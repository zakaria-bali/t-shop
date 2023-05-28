import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-increment-decrement',
  templateUrl: './increment-decrement.component.html',
  styleUrls: ['./increment-decrement.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: IncrementDecrementComponent,
    },
  ],
})
export class IncrementDecrementComponent implements ControlValueAccessor {

  value: number = 1;
  isDisabled: boolean = false;

  onChange = (value: number) => {};

  onTouched = () => {};

  writeValue(value: number): void {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn: VoidFunction): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: VoidFunction): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled
  }

  increment() {
    this.value += 1;
    this.onChange(this.value)
  }

  decrement() {
    if (this.value !== 1) {
      this.value -= 1;
      this.onChange(this.value)
    }
  }

  updateValue() {
    this.onChange(this.value)
  }

}
