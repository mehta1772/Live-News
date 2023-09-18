import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';

const routes: Routes = [
  {path:'', component:TopHeadingComponenet}, //home
  {path:'tech', component:TechnewsComponent}, //techNews
  {path:'business', component:BusinessnewsComponent}, //businessNews
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
