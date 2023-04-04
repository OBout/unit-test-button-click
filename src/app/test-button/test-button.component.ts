// src/app/test-button/test-button.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-test-button',
  templateUrl: './test-button.component.html',
  styleUrls: ['./test-button.component.scss']
})
export class TestButtonComponent {
  clicked = false;

  onButtonClick(): void {
    this.clicked = true;
  }
}
