import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { CreateEmpComponentComponent } from './create-emp-component/create-emp-component.component';
import { UpdateEmpComponentComponent } from './employee-component/update-emp-component/update-emp-component.component';
import { ShowEmpDetailComponentComponent } from './employee-component/show-emp-detail-component/show-emp-detail-component.component';



const appRoutes: Routes = [
  {path: '', component: EmployeeComponentComponent},
  {path: 'save', component: CreateEmpComponentComponent},
  {path: 'update/:id', component: UpdateEmpComponentComponent},
  {path: 'show/:id', component: ShowEmpDetailComponentComponent},
  {path: 'delete/:id', component: EmployeeComponentComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    EmployeeComponentComponent,
    CreateEmpComponentComponent,
    UpdateEmpComponentComponent,
    ShowEmpDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
