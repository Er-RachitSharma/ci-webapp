import { PnrService } from './pnr.service';
import { PracticeComponent } from './practice.component';
import { TodoComponent } from './todo.component';
import { WeatherComponent } from './weather.component';
import { ProductService } from './product-service';
import { ProductListingComponent } from './product-listing.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PnrComponent } from './pnr/pnr.component';
import { AppProductComponent } from './app-product/app-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListingComponent,
    WeatherComponent,
    TodoComponent,
    PracticeComponent,
    PnrComponent,
    AppProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
