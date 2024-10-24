import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardsComponent {}
