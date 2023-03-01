import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'techmigos-root',
  template: `<h1>Welcome to {{ title }}</h1>`,
  styles: [],
})
export class AppComponent {
  title = 'blog';
}
