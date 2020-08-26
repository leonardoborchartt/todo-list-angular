import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMenuComponent } from './list-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ListMenuComponent],
  exports:[ListMenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ListMenuModule { }
