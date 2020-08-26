import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view.component';
import { ListSearchModule } from '../list-search/list-search.module';



@NgModule({
  declarations: [ListViewComponent],
  exports:[ListViewComponent],
  imports: [
    CommonModule,
    ListSearchModule
  ]
})
export class ListViewModule { }
