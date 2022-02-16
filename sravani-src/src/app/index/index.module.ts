

// Core Dependencies
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { ProductmainModule } from "../productmain/productmain.module";
import { IndexRoutes } from "./index-routing.module";

// Components
import { IndexComponent } from "./index.component";
import { LoginComponent } from "../login/login.component";

@NgModule({
  imports: [
    CommonModule,
    ProductmainModule,
    
    RouterModule.forChild(IndexRoutes),
  ],
  declarations: [
    IndexComponent,

  ],
  schemas: [],
  exports: [],
  providers: [],
})
export class IndexModule {}



