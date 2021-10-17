import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoadedDirective } from './loaded.directive';
import { BookHardCoverComponent } from './book-hard-cover/book-hard-cover.component';
import { BookPaperBackComponent } from './book-paper-back/book-paper-back.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadedDirective,
    BookHardCoverComponent,
    BookPaperBackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
