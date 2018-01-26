import { Component } from '@angular/core';

import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ng-ext-config-example';
  myFancyProperty = this.configService.getConfiguration().myFancyProperty;

  constructor(private configService: ConfigService) { }

}
