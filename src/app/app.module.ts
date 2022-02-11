import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {  Routes, RouterModule } from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TdfDemoComponent } from './tdf-demo/tdf-demo.component';
import { MdfDemoComponent } from './mdf-demo/mdf-demo.component';
import { GetUserComponent } from './get-user/get-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { GetOneUserComponent } from './get-one-user/get-one-user.component';
import { SuccessComponent } from './success/success.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { EmpGuard } from './emp.guard';
import { HomeComponent } from './home/home.component';


//common
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { RaiseticketComponent } from './raiseticket/raiseticket.component';
//Admin
import { AdminComponentComponent } from './admin/admin-component/admin-component.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { DeleteProductComponent } from './admin/delete-product/delete-product.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';
import { ViewRequestsComponent } from './admin/view-requests/view-requests.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './admin/delete-employee/delete-employee.component';
import { GenerateReportComponent } from './admin/generate-report/generate-report.component';
import { SelectItemsComponent } from './user/cart/select-items/select-items.component';
import { DeleteItemsComponent } from './user/cart/delete-items/delete-items.component';
import { ViewItemsComponent } from './user/cart/view-items/view-items.component';
import { CheckOutComponent } from './user/cart/check-out/check-out.component';
import { OrderStatusComponent } from './user/order-status/order-status.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { FundsComponent } from './user/funds/funds.component';
//Employee
import { EmployeeComponentComponent } from './employee/employee-component/employee-component.component';
import { SendRequestComponent } from './employee/send-request/send-request.component';
import { UpdateOrderStatusComponent } from './employee/update-order-status/update-order-status.component';
import { UnlockUserComponent } from './employee/unlock-user/unlock-user.component';
import { PageNotFoundComponent } from './helper/page-not-found/page-not-found.component';
import { ExceptionComponent } from './helper/exception/exception.component';
import { ModelComponentComponent } from './model/model-component/model-component.component';

let routeConfig:Routes=[
{path:'',component:GetUserComponent},
{path:'FetchAll',component:GetUserComponent},
{path:'Signup' , component!:SignupComponent},
{path:'addemployee' , component!:AddEmployeeComponent},
{path:'FetchByID',component:GetOneUserComponent},
{path:'AddUser',component:AddUserComponent},
{path:'UpdateUser',component:UpdateUserComponent},
{path:'DeleteById',component:DeleteUserComponent},
{path:'mdf',component:MdfDemoComponent},
{path:'Success/:un',component:SuccessComponent,canActivate:[EmpGuard],children:[{path:'',component:DashboardComponent},
{path:'dashboard',component:DashboardComponent},
{path:'settings',component:SettingsComponent}
  ]
  }
]
@NgModule({
  declarations: [
  
    AppComponent,
    TdfDemoComponent,
    MdfDemoComponent,
    GetUserComponent,
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    GetOneUserComponent,
    SuccessComponent,
    DashboardComponent,
    ProfileComponent,
    SettingsComponent,
    HomeComponent,
    AdminComponentComponent,
    EmployeeComponentComponent,
    SigninComponent,
    SignupComponent,
    LogoutComponent,
    RaiseticketComponent,
    AddProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    ViewRequestsComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    GenerateReportComponent,
    SelectItemsComponent,
    DeleteItemsComponent,
    ViewItemsComponent,
    CheckOutComponent,
    OrderStatusComponent,
    EditProfileComponent,
    FundsComponent,
    SendRequestComponent,
    UpdateOrderStatusComponent,
    UnlockUserComponent,
    PageNotFoundComponent,
    ExceptionComponent,
    ModelComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule , ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
