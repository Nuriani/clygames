import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
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
    this.translate.onLangChange.subscribe(() => {
      this.idioma = this.translate.currentLang ? this.translate.currentLang : translate.getDefaultLang();
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.url = this.crearUrl();
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  crearUrl(): string {
    if (this.idioma === 'es') {
      this.url = 'https://www.youtube.com/embed/fV8GvTlqcug';
    } else if (this.idioma === 'en') {
      this.url = 'https://www.youtube.com/embed/2dbaDD46XZ4';
    }

    return this.url;
  }
}
