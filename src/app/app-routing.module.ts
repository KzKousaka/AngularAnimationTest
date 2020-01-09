import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/test1' },
  { path: 'test1', component: Test1Component, data: { animation: 'Test1' } },
  { path: 'test2', component: Test2Component, data: { animation: 'Test2' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
