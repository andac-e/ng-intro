import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "button-component",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent {
  @Input()
  text!: string;
  @Input()
  route!: string;
  @Input()
  backgroundColor: string = "red" || "blue" || "black";
  @Output()
  throwConsole = new EventEmitter<string>();

  tiklamaMetodu() {
    this.throwConsole.emit("Test");
  }
}
