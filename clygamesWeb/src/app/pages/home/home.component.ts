import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {

  public url: string;
  public link: any;
  private idioma: string;

  constructor(private translate: TranslateService, private sanitizer: DomSanitizer) {
    this.url = this.crearUrl();
    this.idioma = this.translate.currentLang ? this.translate.currentLang : translate.getDefaultLang();
    console.log(this.idioma);


  }

  ngOnInit(): void {

  }

  crearUrl() {
    if ( this.idioma === "es" ) {
      this.url = "https://www.youtube.com/embed/fV8GvTlqcug";
    } else if ( this.idioma === "en" ){
      this.url = "https://www.youtube.com/embed/2dbaDD46XZ4";
    }

    this.link = this.sanitizer.bypassSecurityTrustResourceUrl(this.url)
    return this.link;
  }
}
