import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from './features/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const authToken = this.authService.getToken();

    if (authToken) {
      this.authService.getCurrentUser();
    }
  }
}
