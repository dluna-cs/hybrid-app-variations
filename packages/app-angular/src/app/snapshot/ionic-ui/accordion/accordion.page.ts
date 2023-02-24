import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
})
export class AccordionPage implements OnInit {
  description = '<b>Accordions</b> provide collapsible sections in your content to reduce vertical space while providing a way of organizing and grouping information. All <code>ion-accordion</code> components should be grouped inside <code>ion-accordion-group</code> components.';
  url = 'accordion';

  constructor() { }

  ngOnInit() {
  }

}
