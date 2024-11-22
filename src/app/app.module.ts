import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({ "projectId": "clases-6", "appId": "1:496521316193:web:38d3724fa03201e92e6720", "storageBucket": "clases-6.firebasestorage.app", "apiKey": "AIzaSyCu77EaUsMBBM5wCUCc7MGdVJEgUiQsrwc", "authDomain": "clases-6.firebaseapp.com", "messagingSenderId": "496521316193", "measurementId": "G-WCJSMF326R" })), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"clases-6","appId":"1:496521316193:web:38d3724fa03201e92e6720","storageBucket":"clases-6.firebasestorage.app","apiKey":"AIzaSyCu77EaUsMBBM5wCUCc7MGdVJEgUiQsrwc","authDomain":"clases-6.firebaseapp.com","messagingSenderId":"496521316193","measurementId":"G-WCJSMF326R"}))],
  bootstrap: [AppComponent],
})
export class AppModule { }
