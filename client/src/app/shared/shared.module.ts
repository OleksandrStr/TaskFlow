import { NgModule } from '@angular/core';
import { InlineFormComponent } from './components';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InlineFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InlineFormComponent],
})
export class SharedModule {}
