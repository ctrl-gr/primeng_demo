import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ChoosePlayerComponent } from './pages/choose-player/choose-player.component';
import {CascadeSelectModule} from "primeng/cascadeselect";
import {ChipsModule } from 'primeng/chips';
import {FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import {MultiSelectModule} from "primeng/multiselect";


@NgModule({
  declarations: [
    AppComponent,
    ChoosePlayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CascadeSelectModule,
    ChipsModule,
    FormsModule,
    HttpClientModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
