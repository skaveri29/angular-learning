import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { ParentComponent } from './lifeCycleHooks/parent/parent.component';

const routes: Routes = [
  {path:'',component:ReactiveComponent},
  {path:'template-driven',component:TemplateDrivenComponent},
  {path:'reactive',component:ReactiveComponent},
  {path:'pipes',component:PipesComponent},
  {path:'parent',component:ParentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
