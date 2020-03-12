import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { SortComponent } from './components/sort/sort.component'
import { YoutubeService } from '../youtube/services/youtube.service'
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    LoginComponent,
    SortComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [HeaderComponent],
  providers: [YoutubeService]
})
export class CoreModule { }
