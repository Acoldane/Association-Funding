import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { ReadComponent2 } from './read2/read.component';
import {CreateComponent} from "./create/create.component";
import {ReadEventComponent} from "./read3/read-event/read-event.component";
import {ReadComponent3} from "./read3/read.component";
import {CreateAssocComponent} from './create-assoc/create.component';
import {ReadEventListComponent} from "./read-event/read.component";

const routes: Routes = [
  { path: 'demandes', component: ReadComponent},
  { path: 'associations', component: ReadComponent2},
  { path: 'create', component: CreateComponent},
  { path: 'create-assoc', component: CreateAssocComponent},
  { path: 'validation', component: ReadComponent3},
  { path: 'evenements', component: ReadEventListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
