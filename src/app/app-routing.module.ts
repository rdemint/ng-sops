import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SopComponent } from './sop/sop/sop.component';
import { SopContainerComponent } from './sop/sop-container/sop-container.component';


const routes: Routes = [
  {
    path: "",
    component: SopComponent,
  },
  {
    path: "help",
    component: SopContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
