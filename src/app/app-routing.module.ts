import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ItemsComponent } from './items.component';
import { ResolverService } from './resolver.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: { dummyJSON: ResolverService },
  },
  {
    path: 'items',
    component: ItemsComponent,
    resolve: { dummyJSON: ResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
