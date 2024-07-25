import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { DocumentsComponent } from './Pages/documents/documents.component';
import { AboutComponent } from './Pages/about/about.component';

const routes: Routes = [
  {path: '' , redirectTo : '/login', pathMatch : 'full'},
  {path:'login', component: LoginComponent },
  {path: 'home', component :HomeComponent },
  {path: 'documents', component : DocumentsComponent },
  {path:'about', component : AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
