import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NestedComponent1Component } from './components/nested-component-1/nested-component-1.component';
import { NestedComponent2Component } from './components/nested-component-2/nested-component-2.component';
import { EmpleadosListaComponent } from './components/empleados-lista/empleados-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    NestedComponent1Component,
    NestedComponent2Component,
    EmpleadosListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
