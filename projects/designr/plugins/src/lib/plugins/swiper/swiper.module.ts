import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperComponent } from './swiper.component';
import { SwiperDirective } from './swiper.directive';

@NgModule({
	imports: [CommonModule],
	declarations: [SwiperComponent, SwiperDirective],
	exports: [CommonModule, SwiperComponent, SwiperDirective]
})
export class SwiperModule {
}
