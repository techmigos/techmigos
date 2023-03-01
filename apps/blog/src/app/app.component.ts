import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'body[tm]',
  template: `<router-outlet></router-outlet>`,
  styles: [],
})
export class AppComponent {}
