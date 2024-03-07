import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe({
      next: (currentUser) => {
        this.authService.setCurrentUser(currentUser);
      },
      error: () => {
        this.authService.setCurrentUser(null);
      }
    });
  }
}
