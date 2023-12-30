import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing/routing.module';
import { SliderComponent } from './slider/slider.component';
import { ProductsComponent } from './products/products.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    ProductsComponent,
    
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    NgbModule,
    CarouselModule,
    BrowserAnimationsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})

export class AppModule { }
