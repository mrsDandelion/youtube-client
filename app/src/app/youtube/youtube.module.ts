import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeService } from './services/youtube.service'
import { BorderColorDirective } from './directives/border-color.directive';
import { SortPipe } from './pipes/sort.pipe';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { ResultListComponent } from './components/result-list/result-list.component';

@NgModule({
  declarations: [ResultListComponent, ResultItemComponent, BorderColorDirective, SortPipe],
  imports: [CommonModule],
  exports: [ResultListComponent],
  providers: [YoutubeService]
})
export class YoutubeModule { }
