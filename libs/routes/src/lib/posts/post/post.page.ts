import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'main[tm]',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>{{ id }} post works!</p> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostPage {
  id = this.route.snapshot.params['id'];
  constructor(private route: ActivatedRoute) {}
}
