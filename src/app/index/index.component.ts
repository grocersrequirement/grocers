import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  carouselList = [
    {
      bannerImg: "./assets/Banner_img/img1.jpg",
       title: "",
       description: "",
    },
    {
      bannerImg: "./assets/Banner_img/img2.jpg",
      title: "",
      description:
        "",
    },
    {
      bannerImg: "./assets/Banner_img/img3.jpg",
      title: "",
      description: "",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
