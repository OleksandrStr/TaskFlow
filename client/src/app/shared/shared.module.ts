import { NgModule } from '@angular/core';
import { InlineFormComponent, NavBarComponent } from './components';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const components = [InlineFormComponent, NavBarComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [components],
})
export class SharedModule {}
