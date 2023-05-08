import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { LeftBannerComponent } from './left-banner/left-banner.component';

const routes: Routes = [
  {path: '', component: EmployeeListComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'left-banner', component: LeftBannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

