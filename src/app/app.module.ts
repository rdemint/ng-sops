import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SopComponent } from './sop/sop/sop.component';
import { SopContainerComponent } from './sop/sop-container/sop-container.component';

@NgModule({
  declarations: [
    AppComponent,
    SopComponent,
    SopContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
