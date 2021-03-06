import { BrowserModule } from '@angular/platform-browser'
import { NgModule, ErrorHandler } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { environment } from '../environments/environment'

import { AngularFireModule } from '@angular/fire'

import { ErrorHandlerService } from './error-handler.service'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoggedInComponent } from './logged-in/logged-in.component'
import { LocationsComponent } from './locations/locations.component'
import { LocationEditComponent } from './locations/location-edit/location-edit.component'
import { LocationViewComponent } from './locations/location-view/location-view.component'
import { LocationListComponent } from './locations/location-list/location-list.component'
import { LocationComponent } from './locations/location/location.component'
import { LoginComponent } from './login/login.component'
import { UsersComponent } from './users/users.component'
import { LocationCategoriesComponent } from './locations/location-categories/location-categories.component'
import { LocationTagsComponent } from './locations/location-tags/location-tags.component'
import { AboutComponent } from './about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    LoggedInComponent,
    LocationsComponent,
    LocationEditComponent,
    LocationViewComponent,
    LocationListComponent,
    LocationComponent,
    LoginComponent,
    UsersComponent,
    LocationCategoriesComponent,
    LocationTagsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: ErrorHandler, useClass: ErrorHandlerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
