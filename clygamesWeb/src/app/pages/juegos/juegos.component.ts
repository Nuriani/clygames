import { Component, OnInit } from '@angular/core';
import { faSteam } from '@fortawesome/fontawesome-free-brands';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.scss']
})
export class JuegosComponent implements OnInit {
  faSteam = faSteam as IconProp;
  constructor() { }

  ngOnInit(): void {
  }

}
