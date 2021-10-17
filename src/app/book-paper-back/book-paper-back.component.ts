import { Component, forwardRef, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'book-paper-back',
  templateUrl: './book-paper-back.component.html',
  styleUrls: ['./book-paper-back.component.scss'],
  providers: [
    {
      provide: Book,
      useExisting: forwardRef(() => BookPaperBackComponent)
    }
  ]
})
export class BookPaperBackComponent
  extends Book
  implements OnInit
{

  constructor() { super(); }
  ngOnInit(): void
  {
  }

}
