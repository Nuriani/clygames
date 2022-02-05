import { Component, OnInit } from '@angular/core';
import { faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
   /* Icons */
   faLinkedin = faLinkedin as IconProp;

  constructor() { }

  ngOnInit(): void {
  }

}
