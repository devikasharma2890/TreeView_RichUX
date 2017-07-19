import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeModule } from 'angular-tree-component';
import { AppComponent } from './app.component';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import {CRMServices} from './services/crmservice';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TreeModule,
     HttpModule,
  ],
  providers: [CRMServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
