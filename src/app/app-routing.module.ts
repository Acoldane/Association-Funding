import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { ReadComponent2 } from './read2/read.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'demandes', component: ReadComponent},
  { path: 'verification', component: CreateComponent},
  { path: 'associations', component: ReadComponent2},
  { path: 'association/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
