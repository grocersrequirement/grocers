import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

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
import { CartComponentComponent } from './user/cart/cart-component';


//common
//import { SigninComponent } from './signin/signin.component';
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
import { EEditProfileComponent } from './employee/edit-profile/edit-profile.component';
import { FundsComponent } from './user/funds/funds.component';
//Employee
import { EmployeeComponentComponent } from './employee/employee-component/employee-component.component';
import { SendRequestComponent } from './employee/send-request/send-request.component';
import { UpdateOrderStatusComponent } from './employee/update-order-status/update-order-status.component';
import { UnlockUserComponent } from './employee/unlock-user/unlock-user.component';
import { PageNotFoundComponent } from './helper/page-not-found/page-not-found.component';
import { ExceptionComponent } from './helper/exception/exception.component';
import { ModelComponentComponent } from './model/model-component/model-component.component';
import { LoginComponent } from './login/login.component';
import { UserComponentComponent } from './user/user-component/user-component.component';
// import { AdminComponent } from './admin/admin/admin.component';
// import { EmployeeComponent } from './employee/employee/employee.component';
import { AdminGuard } from './guard/admin.guard';
import { EmployeeGuard } from './guard/employee.guard';
import { UserGuard } from './guard/user.guard';
import { SigninComponent } from './signin/signin.component';
import { AdminComponent } from './admin/admin/admin.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { CartGuard } from './guard/cart.guard';



let routeConfig:Routes=[
  {path:'',component:PageNotFoundComponent},
  {path:'',redirectTo:'FetchAll',pathMatch:'full'},
{path:'',component:GetUserComponent},
{path:'FetchAll',component:GetUserComponent},
{path:'Signup' , component!:SignupComponent},
{path:'Raise',component:RaiseticketComponent},
{path:'addemployee' , component!:AddEmployeeComponent},
{path:'FetchByID',component:GetOneUserComponent},
{path:'AddUser',component:AddUserComponent},
{path:'Login',component:LoginComponent},
{path:'UpdateUser',component:UpdateUserComponent},
{path:'UserLogin',component!:SigninComponent},
{path:'AdminLogin',component:AdminComponent},
{path:'EmployeeLogin',component:EmployeeComponent},
{path:'DeleteById',component:DeleteUserComponent},
{path:'mdf',component:MdfDemoComponent},
// {path:'UpdateProduct',component:UpdateProductComponent},
{path:'AddProducts',component:AddProductComponent},
{path:'DeleteProducts',component:DeleteProductComponent},
{path:'ViewRequest',component:ViewRequestsComponent},
{path:'AddEmployee',component:AddEmployeeComponent},
{path:'DeleteEmployee',component:DeleteEmployeeComponent},
{path:'GenerateReport',component:GenerateReportComponent},
{path:'Logout',component:LogoutComponent},


{path:'Home',component:HomeComponent},

//Admin Features 
{path:'Admin/:un',component:AdminComponentComponent,canActivate:[AdminGuard],children:[
{path:'UpdateProduct',component:UpdateProductComponent},
{path:'AddProducts',component:AddProductComponent},
{path:'DeleteProducts',component:DeleteProductComponent},
{path:'ViewRequest',component:ViewRequestsComponent},
{path:'AddEmployee',component:AddEmployeeComponent},
{path:'DeleteEmployee',component:DeleteEmployeeComponent},
{path:'GenerateReport',component:GenerateReportComponent},
{path:'Logout',component:LogoutComponent}]},



{path:'User/:email',component:UserComponentComponent,canActivate:[UserGuard],children:[
  {path:'',component:EditProfileComponent},
  {path:'Order',component:OrderStatusComponent},
{path:'EditProfile',component:EditProfileComponent},
{path:'Funds',component:FundsComponent},
{path:'Cart',component:CartComponentComponent,canActivate:[CartGuard],children:[
  // {path:'',component:CartComponentComponent,pathMatch:'full'},
  {path:'Checkout',component:CheckOutComponent},
  {path:'ViewItems',component:ViewItemsComponent},
  {path:'UpdateItems',component: DeleteItemsComponent},
  {path:'DeleteItems',component:DeleteItemsComponent},//UpdateItems
  {path:'SelectItems',component:SelectItemsComponent}
]},
]},
// send request
// update order status
// unlock users
// edit profile
// logout
{path:'Employee/:id',component:EmployeeComponentComponent,canActivate:[EmployeeGuard],
children:
[{path:'',component:DashboardComponent},
{path:'SendRequest',component:SendRequestComponent},
{path:'Funds',component:FundsComponent},
{path:'UpdateOrder',component:UpdateOrderStatusComponent},
{path:'UnlockUsers',component:UnlockUserComponent},
{path:'EditProfile',component:EEditProfileComponent}
]},

{path:'Success/:un',component:SuccessComponent,canActivate:[EmpGuard],children:[{path:'',component:DashboardComponent},
{path:'dashboard',component:DashboardComponent},
{path:'profiles',component:ProfileComponent},{path:'settings',component:SettingsComponent}]
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
    SelectItemsComponent,
    ViewItemsComponent,
    CheckOutComponent,
    GenerateReportComponent,
    UpdateOrderStatusComponent,
    UnlockUserComponent,
    PageNotFoundComponent,
    ExceptionComponent,
    ModelComponentComponent,
    LoginComponent,
    SigninComponent,
    SendRequestComponent,
    EmployeeComponent,
    AdminComponent,
    UserComponentComponent,
    CartComponentComponent,
    EEditProfileComponent,
  ],
  imports: [
    BrowserModule, FormsModule , ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
