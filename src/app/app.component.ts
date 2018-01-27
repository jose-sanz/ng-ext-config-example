import { Component } from '@angular/core';

import { environment } from '../environments/environment';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ng-ext-config-example';
  myFancyProperty = this.configService.getConfiguration().myFancyProperty;
  configFile = environment.configFile;

  constructor(private configService: ConfigService) { }

}
