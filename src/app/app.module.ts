import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';

import { AppSettings } from './app.settings';
import { HttpService } from './services/http.service';
import { AllCartService } from './services/all-cart.service';
import { SearchPipe } from './pipes/search.pipe';

import { AppRoutingModule, routableComponents } from './app.routing.module';
import { FiltersPipe } from './pipes/filters.pipe';
import { NumberMaxPipe } from './pipes/number-max.pipe';
import { AgePipe } from './pipes/age.pipe';
import { NgArrayPipesModule, NgStringPipesModule } from 'angular-pipes';

@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    SearchPipe,
    FiltersPipe,
    NumberMaxPipe,
    AgePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgArrayPipesModule,
    NgStringPipesModule
  ],
  providers: [HttpService, AllCartService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
