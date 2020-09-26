import { Component } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { Color } from "../models/color";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  colorList: Color[];
  selectedColor: string;
  showColorPallete: boolean;

  constructor(public popoverController: PopoverController) {
    this.showColorPallete = false;
    this.colorList = [
      {
        sl: 1,
        color: "#ffffff",
        selected: false,
      },
      {
        sl: 2,
        color: "#34eb37",
        selected: false,
      },
      {
        sl: 3,
        color: "#7d34eb",
        selected: false,
      },
      {
        sl: 4,
        color: "#7d34eb",
        selected: false,
      },
    ];
    this.changeColor(1);
  }

  changeColor(sl) {
    console.log(sl);
    this.colorList.map((value) => {
      if (value.sl === sl) {
        value.selected = true;
        this.selectedColor = value.color;
      } else {
        value.selected = false;
      }
    });
  }

  showPallete() {
    this.showColorPallete = !this.showColorPallete;
  }
}
