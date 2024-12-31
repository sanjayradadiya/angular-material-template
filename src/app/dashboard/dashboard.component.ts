import { Component } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "../library/sidebar/sidebar.component";

@Component({
  selector: "app-dashboard",
  imports: [CommonModule, MaterialModule, SidebarComponent],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent {
  showFiller = false;
}
