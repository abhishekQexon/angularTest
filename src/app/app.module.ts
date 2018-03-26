import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DetailsService } from './details.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule
  ],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
