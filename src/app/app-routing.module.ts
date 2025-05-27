import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { IndexComponent } from './components/index/index.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'docs',
    loadChildren: () => import('./components/docs/docs.module').then(m => m.DocsModule),
  },
  {
    path: 'reading-list',
    loadChildren: () => import('./components/reading-list/reading-list.module').then(m => m.ReadingListModule),
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
