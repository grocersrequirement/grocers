import { IndexComponent } from "../index/index.component";
import { CartComponentComponent } from "../user/cart/cart-component";

//import { ProductListComponent } from "./product-list/product-list.component";
import { Routes } from "@angular/router";

//import { ProductDetailComponent } from "./product-detail/product-detail.component";

export const ProductMainRoutes: Routes = [
  {
    path: "products",
    children: [
      {
        path: "",
        component: IndexComponent,
      },
      // {
      //   path: "all-products",
      //   component: ProductListComponent,
      // },
     
      {
        path: "carts",
        component: CartComponentComponent,
      },
      // {
      //   path: "checkouts",
      //   loadChildren: () =>
      //     import("./checkout/checkout.module").then((m) => m.CheckoutModule),
      // },
      // {
      //   path: "product/:id",
      //   component: ProductDetailComponent,
      // },
    ],
  },
];
