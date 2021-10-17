import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit
{
  public isShow = false;
  @ViewChild('ngIfShown') ngIfShown?: ElementRef;
  @ViewChild('switchTrue') switchTrue?: ElementRef;
  @ViewChild('switchFalse') switchFalse?: ElementRef;


  ngAfterViewInit(): void
  {
    console.log('После инициализации представления');
    console.log(this.ngIfShown);
    console.log(this.switchTrue);
    console.log(this.switchFalse);
  }

  //#region
  onLoaded(arg: { element: ElementRef, book: Book })
  {

    console.log('Загрузка');
    console.log(arg.element);
    console.log(arg.book);

    setTimeout(() =>
    {
      arg.book.title += ' _';
    }, 2000);
  }
  //#endregion

}
