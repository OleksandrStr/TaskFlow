import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private subscriptions = new Subscription();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const currentUserSub = this.authService.getCurrentUser().subscribe({
      next: (currentUser) => {
        this.authService.setCurrentUser(currentUser);
      },
      error: () => {
        this.authService.setCurrentUser(null);
      },
    });

    this.subscriptions.add(currentUserSub);
  }
}
