import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ReadComponent} from './read/read.component';
import {ReadComponent2} from './read2/read.component';
import { ReadAssosComponent } from './read/read-assos/read-assos.component';
import { ReadAssosComponent2 } from './read2/read-assos/read-assos.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ReadBarComponent } from './read/read-bar/read-bar.component';
import { ReadBarComponent2 } from './read2/read-bar/read-bar.component';
import {CreateComponent} from "./create/create.component";
import {ReadEventComponent} from "./read3/read-event/read-event.component";
import {ReadComponent3} from "./read3/read.component";
import {ReadBarComponent3} from "./read3/read-bar/read-bar.component";
import {CreateAssocComponent} from './create-assoc/create.component';
import {ReadBarEventComponent1} from "./read-event/read-bar/read-bar.component";
import {ReadEventComponent2} from "./read-event/read-event-item/read-event.component";
import {ReadEventListComponent} from "./read-event/read.component";
import {SignUpComponent} from "./signup/signup.component";
import {LoginComponent} from "./signup/login/login.component";
import { HomeComponent } from './home/home.component';
import { AssocDetailsComponent } from './read2/read-assos/assoc-details/assoc-details.component';
import { EventDetailsComponent } from './read-event/read-event-item/event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    ReadComponent2,
    ReadAssosComponent,
    ReadAssosComponent2,
    NavbarComponent,
    ReadBarComponent,
    ReadBarComponent2,
    CreateComponent,
    ReadEventComponent,
    ReadComponent3,
    ReadBarComponent3,
    CreateAssocComponent,
    ReadBarEventComponent1,
    ReadEventComponent2,
    ReadEventListComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    AssocDetailsComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
