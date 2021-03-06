import { Component, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { faDiscord, faTwitter, faSteam } from '@fortawesome/fontawesome-free-brands';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  idioma:string= 'en';
  faDiscord  = faDiscord as IconProp;
  faTwitter = faTwitter as IconProp;
  faSteam = faSteam as IconProp;
  @Output () enviarIdioma = new EventEmitter<string>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  onEnviarIdioma(data:any) {
    this.enviarIdioma.emit(data);
  }

}
