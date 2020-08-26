import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDoneComponent } from './list-done.component';
import {ListItemModule} from '../../components/list-item/list-item.module'


@NgModule({
  declarations: [ListDoneComponent],
  exports:[ListDoneComponent],
  imports: [
    CommonModule,
    ListItemModule
  ]
})
export class ListDoneModule { }
