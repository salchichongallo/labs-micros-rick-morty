import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { loadRemoteModule } from "@angular-architects/module-federation";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      loadRemoteModule({
        type: "manifest",
        remoteName: "mf-home",
        exposedModule: "./Module",
      }).then((m) => m.AppRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
