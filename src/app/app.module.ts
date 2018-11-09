import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SortPipe } from './sort.pipe';
import { UsersService } from './users.service';
import { AppComponent } from './app.component';



@NgModule({
  imports: [BrowserModule,  HttpClientModule],
  declarations: [AppComponent, SortPipe],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
