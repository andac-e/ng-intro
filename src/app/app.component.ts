import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "intro";
  test: string = "test";
  isLoading: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.isServiceSuccess();
  }

  isServiceSuccess() {
    setTimeout(() => {
      this.isLoading = false;
      this.test = "davuthan";
    }, 1500);
  }
}
