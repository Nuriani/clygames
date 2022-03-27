import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-arre-unicornio',
  templateUrl: './arre-unicornio.component.html',
  styleUrls: ['./arre-unicornio.component.scss']
})
export class ArreUnicornioComponent implements OnInit {

  public url: string;
  public safeUrl: SafeResourceUrl;
  private idioma: string;

  constructor(
    private translate: TranslateService,
    private sanitizer: DomSanitizer
  ) {
    this.idioma = this.translate.currentLang
      ? this.translate.currentLang
      : translate.getDefaultLang();
    this.url = this.crearUrl();
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    console.log(this.safeUrl);
    console.log(this.url);

    console.log(this.idioma);
  }

  ngOnInit(): void {}

  crearUrl() {
    if (this.idioma === 'es') {
      this.url = 'https://www.youtube.com/embed/fV8GvTlqcug';
    } else if (this.idioma === 'en') {
      this.url = 'https://www.youtube.com/embed/2dbaDD46XZ4';
    }

    return this.url;
  }

}
