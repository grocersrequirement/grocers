import { pathToFileURL } from "url";

export class product{
  static find(arg0: (product: any) => boolean): import("./product").Product | undefined {
    throw new Error('Method not implemented.');
  }

    productid: number =0; productname:string="" ; quantity:number=0; description:string=""; price:number=0; image:string="";
}