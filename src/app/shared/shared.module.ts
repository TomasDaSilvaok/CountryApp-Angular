import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about/about.component';

@NgModule({
  declarations: [HomePageComponent, AboutPageComponent],
  imports: [CommonModule],
  exports: [AboutPageComponent, HomePageComponent],
})
export class SharedModule {}
