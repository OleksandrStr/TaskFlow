import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'inline-form',
  templateUrl: './inline-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InlineFormComponent {
  @Input() title = '';
  @Input() defaultText = 'Not defined';
  @Input() hasButton: boolean;
  @Input() buttonText = 'Submit';
  @Input() inputPlaceholder = '';
  @Input() inputType = 'input';

  @Output() submitEvent = new EventEmitter<string>();

  isEditing: boolean;
  form = this.fb.group({
    title: [''],
  });

  constructor(private fb: FormBuilder) {}

  edit(): void {
    if (this.isEditing) {
      return;
    }

    if (this.title) {
      this.form.patchValue({ title: this.title });
    }
    this.isEditing = true;
  }

  onSubmit(): void {
    if (this.form.value.title) {
      this.submitEvent.emit(this.form.value.title);
    }
    this.isEditing = false;
    this.form.reset();
  }
}
