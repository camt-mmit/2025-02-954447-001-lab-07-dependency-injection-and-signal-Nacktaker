import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-example-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './example-root.html',
  styleUrl: './example-root.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleRoot {}
