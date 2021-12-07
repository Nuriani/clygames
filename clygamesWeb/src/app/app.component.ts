import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'clygamesWeb';
  private idiomas: Array<string>;
  faCoffee = faCoffee;

  constructor(public translate: TranslateService) {
    this.idiomas = ['es', 'en'];
    translate.addLangs(this.idiomas);
    translate.setDefaultLang('en');
  }

  cambioIdioma(data: any) {
    this.translate.use(data.target.id);
  }
}
