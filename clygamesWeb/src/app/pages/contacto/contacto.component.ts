import { Component, OnInit } from '@angular/core';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  faEnvelope = faEnvelope as IconProp;
  faMapMarkerAlt = faMapMarkerAlt as IconProp;
  constructor() { }

  ngOnInit(): void {
  }

}
