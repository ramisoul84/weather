import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, HttpClientModule, CommonModule],
  declarations: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
