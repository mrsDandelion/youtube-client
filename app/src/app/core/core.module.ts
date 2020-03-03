import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { SortComponent } from './components/sort/sort.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    LoginComponent,
    SortComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent],
})
export class CoreModule { }
