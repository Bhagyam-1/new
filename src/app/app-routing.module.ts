import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './component/document/document.component';

const routes: Routes = [
  {path:'',redirectTo:'document',pathMatch:'full'},
  {path: 'document', component:DocumentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
