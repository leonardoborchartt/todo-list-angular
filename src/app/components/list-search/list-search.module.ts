import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListSearchComponent } from './list-search.component';
import { ListItemModule } from '../list-item/list-item.module';



@NgModule({
  declarations: [ListSearchComponent],
  exports:[ListSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ListItemModule
  ]
})
export class ListSearchModule { }
