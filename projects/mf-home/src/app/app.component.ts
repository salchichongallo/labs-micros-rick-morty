import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div style="outline: 1px solid salmon">
      <h2>{{ title }}!</h2>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = "mf-home";
}
