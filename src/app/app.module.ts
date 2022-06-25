import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ReadComponent} from './read/read.component';
import {ReadComponent2} from './read2/read.component';
import {CreateComponent} from './create/create.component';
import {UpdateComponent} from './update/update.component';
import { ReadItemsComponent } from './read/read-items/read-items.component';
import { ReadItemsComponent2 } from './read2/read-items/read-items.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ReadBarComponent } from './read/read-bar/read-bar.component';
import { ReadBarComponent2 } from './read2/read-bar/read-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    ReadComponent2,
    CreateComponent,
    UpdateComponent,
    ReadItemsComponent,
    ReadItemsComponent2,
    NavbarComponent,
    ReadBarComponent,
    ReadBarComponent2,
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