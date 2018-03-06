import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// Angular Imports

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Service
import { DataService } from './data.service';

// Pages Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';


// Paste in your credentials that you saved earlier
const firebaseConfig = {
  apiKey: 'AIzaSyAXlIA3g2R_HRWcWjG60f6CDPXQVUr9P-Y',
  authDomain: 'giga-her.firebaseapp.com',
  databaseURL: 'https://giga-her.firebaseio.com',
  projectId: 'giga-her',
  storageBucket: '',
  messagingSenderId: '877166107352'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule,                            // And this
    MDBBootstrapModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
