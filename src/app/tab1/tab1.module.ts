import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab1Page } from "./tab1.page";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { Tab1PageRoutingModule } from "./tab1-routing.module";
import { ColorSketchModule } from "ngx-color/sketch";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    DragDropModule,
    ColorSketchModule,
  ],
  declarations: [Tab1Page],
})
export class Tab1PageModule {}
