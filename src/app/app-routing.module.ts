import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { ReadComponent2 } from './read2/read.component';
import {CreateComponent} from './create/create.component';
import {ReadComponent3} from './read3/read.component';
import {CreateAssocComponent} from './create-assoc/create.component';
import {ReadEventListComponent} from './read-event/read.component';
import {SignUpComponent} from './signup/signup.component';
import {LoginComponent} from './signup/login/login.component';
import {HomeComponent} from './home/home.component';
import {EventDetailsComponent} from './read-event/read-event-item/event-details/event-details.component';
import {AssocDetailsComponent} from './read2/read-assos/assoc-details/assoc-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'demandes', component: ReadComponent},
  { path: 'associations', component: ReadComponent2},
  { path: 'create', component: CreateComponent},
  { path: 'create-assoc', component: CreateAssocComponent},
  { path: 'validation', component: ReadComponent3},
  { path: 'evenements', component: ReadEventListComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'login', component: LoginComponent},
  { path: 'associations/:id', component: AssocDetailsComponent},
  { path: 'evenements/:id', component: EventDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
