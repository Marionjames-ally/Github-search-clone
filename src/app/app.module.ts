import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { RepositoryComponent } from './repository/repository.component';
import { ServiceComponent } from './service/service.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    RepositoryComponent,
    ServiceComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
