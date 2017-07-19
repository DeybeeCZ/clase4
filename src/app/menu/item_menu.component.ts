import {Component,Input} from '@angular/core'

@Component({
    selector:'item-menu',
    template:'<li class="item" *ngIf="item2.visible === true"><a [href]="item2.link">{{item2.label}}</a></li>',
    styleUrls:['./item_menu.component.css']
})
export class ItemMenuComponent{
@Input()
item2:any

  
}