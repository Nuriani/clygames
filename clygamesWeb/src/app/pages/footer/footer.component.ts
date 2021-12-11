import { Component, OnInit } from '@angular/core';
import { faFacebook, faDiscord, faTwitter, faInstagram, faYoutube, faSteam } from '@fortawesome/fontawesome-free-brands';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  /* Icons */
  faFacebook = faFacebook as IconProp;
  faDiscord  = faDiscord as IconProp;
  faTwitter = faTwitter as IconProp;
  faInstagram  = faInstagram as IconProp;
  faYoutube = faYoutube as IconProp;
  faSteam = faSteam as IconProp;

  constructor() {
  }

  ngOnInit(): void {
  }

}
