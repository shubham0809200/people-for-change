import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OwrworkComponent } from './owrwork/owrwork.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SchoolOnWheelsComponent } from './owrwork/school-on-wheels/school-on-wheels.component';
import { SamzhoToExpressComponent } from './owrwork/samzho-to-express/samzho-to-express.component';
import { ComicsForChangeComponent } from './owrwork/comics-for-change/comics-for-change.component';
import { NayiRaaheinComponent } from './owrwork/nayi-raahein/nayi-raahein.component';
import { EdpComponent } from './owrwork/edp/edp.component';
import { UnnitiComponent } from './owrwork/unniti/unniti.component';
import { UnmanifestoComponent } from './owrwork/unmanifesto/unmanifesto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OwrworkComponent,
    AboutComponent,
    ContactComponent,
    SchoolOnWheelsComponent,
    SamzhoToExpressComponent,
    ComicsForChangeComponent,
    NayiRaaheinComponent,
    EdpComponent,
    UnnitiComponent,
    UnmanifestoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,


    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'owr-work', component: OwrworkComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
