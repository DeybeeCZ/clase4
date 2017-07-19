import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MenuComponent } from './menu/menu.component'
import { ItemMenuComponent } from './menu/item_menu.component'
import { InfoComponent } from './info/info.component'
import { ActionComponent } from './actions/action.component'
import { ColorComponent } from './color/color.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent,
  MenuComponent,
  ItemMenuComponent,
  InfoComponent,
  ActionComponent,
  ColorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
