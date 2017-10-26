import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent {
  @Input() title = 'Title';
  @Input() subTitle = 'Subtitle';
  @Input() icon = 'person';
  @Input() color = 'blue';

}
