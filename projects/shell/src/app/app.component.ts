import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div style="outline: 1px solid; padding: 1rem;" class="content">
      <h1>Welcome to {{ title }}!</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = "shell";
}
