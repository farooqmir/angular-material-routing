import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import { FilterAppModule } from './features/filters/filter.app.module';
//import { ButtonComponent } from './features/mat/components/buttons-indicators/button/button.component';
import { AppRoutModule } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { FilterAppRoutingModule } from './features/filters/shared/filter.routing';
import { MatXAppModule } from './features/mat/mat.module';

// @Component({
//   selector: 'app-rt',
//   template: ` this is RTapp- now route to your respective section
//    `
// })
//  class RootAppDemoComponent {
//   title = 'main-app';
// }
// @Component({
//   selector: 'app-rt2',
//   template: ` this is RTapp222- now route to your respective section
//    `
// })
//  class RootAppDemo2Component {
//   title = 'ddd-app';


// }

// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: 'rt'},
//   { path: 'rt', pathMatch: 'full', component: RootAppDemoComponent },

//   { path: 'rt2', pathMatch: 'full', component: RootAppDemo2Component}


// ];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
      AppRoutModule,
  // RouterModule.forRoot(routes, { enableTracing: true })
    FilterAppModule,
    MatXAppModule

  ],
  exports:  [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
