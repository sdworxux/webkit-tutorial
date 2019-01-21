import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SdUiModule } from '@sdworx/sd-components';

export * from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    SdUiModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
