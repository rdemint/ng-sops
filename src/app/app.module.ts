import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SopComponent } from './sop/sop/sop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SopContainerComponent } from './sop/sop-container/sop-container.component';
import { NavComponent } from './nav/nav/nav.component';
import { ModifyHeaderContainerComponent } from './header/modify-header-container/modify-header-container.component';

@NgModule({
  declarations: [
    AppComponent,
    SopComponent,
    SopContainerComponent,
    NavComponent,
    ModifyHeaderContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
