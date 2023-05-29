import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output()
  valueChanged: EventEmitter<number> = new EventEmitter<number>();

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
    this.onChange(this.value);
    this.valueChanged.emit(this.value);
  }

  decrement() {
    if (this.value !== 1) {
      this.value -= 1;
      this.onChange(this.value)
      this.valueChanged.emit(this.value);
    }
  }

  onValueChanged() {
    if (typeof this.value === 'number') {
      this.onChange(this.value);
      this.valueChanged.emit(this.value)
    } else {
      // if the user insert invalid valid value
      setTimeout(() => this.value = 1, 0);
    }

  }

}
