import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {ChipsModule } from 'primeng/chips';
import {FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import {MultiSelectModule} from "primeng/multiselect";
import {PasswordModule} from "primeng/password";
import {DividerModule} from "primeng/divider";
import {CalendarModule} from "primeng/calendar";
import { UsersComponent } from './pages/users/users.component';
import { TableComponent } from './components/table/table.component';
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {TagModule} from "primeng/tag";
import {SliderModule} from "primeng/slider";
import {ProgressBarModule} from "primeng/progressbar";
import { ProductsComponent } from './pages/products/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TableComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CascadeSelectModule,
    ChipsModule,
    FormsModule,
    HttpClientModule,
    MultiSelectModule,
    PasswordModule,
    DividerModule,
    CalendarModule,
    TableModule,
    DropdownModule,
    TagModule,
    SliderModule,
    ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
