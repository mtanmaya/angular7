import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CacheComponent } from './cache/cache.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cache', component: CacheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
