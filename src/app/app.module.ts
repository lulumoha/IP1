import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { QuoteComponent } from './quote/quote.component';
import { HighlightDirective } from './highlight.directive';
import { DetailsComponent } from './details/details.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QuoteComponent,
    HighlightDirective,
    DetailsComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




