import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../interfaces';


@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftComponent {

  @Input() gift: IProduct;
  @Input() currentlyClicked = false;
  @Output() giftClick: EventEmitter<IProduct> = new EventEmitter();
  @Output() addGift: EventEmitter<IProduct> = new EventEmitter();

  public currentQty = 0;

  public onGiftClick(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.giftClick.emit(this.gift);
  }

  public onAddClick(): void {
    this.addGift.emit(this.gift);
  }

}
