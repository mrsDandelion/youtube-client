import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { SortComponent } from './components/sort/sort.component';
import { SortPipe } from './pipes/sort.pipe';
import { FormsModule } from '@angular/forms';
import { BorderColorDirective } from './directives/border-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    LoginComponent,
    ResultListComponent,
    ResultItemComponent,
    SortComponent,
    SortPipe,
    BorderColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
