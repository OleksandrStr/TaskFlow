import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';
import { HomeGuard } from './guards';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(homeRoutes)],
  providers: [HomeGuard],
  declarations: [HomeComponent],
})
export class HomeModule {}
