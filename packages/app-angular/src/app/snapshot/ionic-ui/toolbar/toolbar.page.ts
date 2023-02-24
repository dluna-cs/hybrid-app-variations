import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-toolbar',
  templateUrl: './toolbar.page.html',
  styleUrls: ['./toolbar.page.scss'],
})
export class ToolbarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleText() {
    const button = document.getElementById('changeText');
    const hasText = document.getElementById('childText');

    if (hasText) {
      button && button.removeChild(hasText);
    } else {
      const text = document.createElement('span');
      text.innerHTML = 'Toggle';
      text.id = 'childText';
      button && button.appendChild(text);
    }
  }
}
