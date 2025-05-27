import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadingListComponent } from './reading-list.component';

const routes: Routes = [
  {
    path: '',
    component: ReadingListComponent
  }
];

@NgModule({
  declarations: [
    ReadingListComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadingListRoutingModule { }
