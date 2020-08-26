import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDoneComponent } from './components/list-done/list-done.component';
import { ListViewComponent } from './components/list-view/list-view.component';

const routes: Routes = [
  { path:'home', component: ListViewComponent},
  { path:'done', component: ListDoneComponent},
  { path:'**', redirectTo:'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
