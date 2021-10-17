import { Directive, ElementRef, EventEmitter, OnInit, Output, Self } from '@angular/core';
import { Book } from './book';


@Directive({
  selector: '[ad-loaded]'
})
export class LoadedDirective implements OnInit
{

  @Output()
  public loaded = new EventEmitter<{ element: ElementRef, book: Book }>();
  constructor(private element: ElementRef<any>, @Self() private book: Book)
  {

  }
  ngOnInit(): void
  {
    this.loaded.next({element: this.element, book: this.book});

  }



}
