import { Component, forwardRef, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'book-hard-cover',
  templateUrl: './book-hard-cover.component.html',
  styleUrls: ['./book-hard-cover.component.scss'],
  providers: [
    {
      provide: Book,
      useExisting: forwardRef(() => BookHardCoverComponent)
    }
  ]

})
export class BookHardCoverComponent
  extends Book
  implements OnInit
{

  constructor() { super(); }

  ngOnInit(): void
  {
  }

}
