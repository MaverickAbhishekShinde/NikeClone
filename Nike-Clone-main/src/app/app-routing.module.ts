import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { NikeComponent } from './components/home/nike/nike.component';

const routes: Routes = [
  {path:"nike",component:NikeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
