import { Component } from '@angular/core';
import { Inject, LOCALE_ID } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SeamaLabProject';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'عربي' },
    
  ];
  constructor(@Inject(LOCALE_ID) protected localeId: string) { }
}
