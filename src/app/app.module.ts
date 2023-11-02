import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material/material.module';
import { ApiCallService } from '../shared/services/api-call.service';
import { CarouselComponent } from '../shared/components/carousel/carousel.component';
import { ArtworksComponent } from '../shared/components/artworks/artworks.component';
import { HomeComponent } from '../shared/components/home/home.component';
import { ViewartComponent } from '../shared/components/viewart/viewart.component';
import { SnackbarComponent } from '../shared/components/snackbar/snackbar.component';
import { FavouritesComponent } from '../shared/components/favourites/favourites.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedialogComponent } from '../shared/components/sharedialog/sharedialog.component';
import { AboutComponent } from '../shared/components/about/about.component';
import { DocumentComponent } from '../shared/components/document/document.component';
import { LoginComponent } from '../shared/components/login/login.component';
import { SignupComponent } from '../shared/components/signup/signup.component';
import { UserdetailsService } from '../shared/services/userdetails.service';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    ArtworksComponent,
    HomeComponent,
    ViewartComponent,
    SnackbarComponent,
    FavouritesComponent,
    SharedialogComponent,
    AboutComponent,
    DocumentComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [ApiCallService,UserdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
