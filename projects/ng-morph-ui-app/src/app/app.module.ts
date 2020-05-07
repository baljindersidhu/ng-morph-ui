import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooModule } from 'projects/ng-morph-ui/src/public-api';
import { HomeComponent } from './components/home/home.component';
import { HandbookComponent } from './components/handbook/handbook.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HandbookWelcomePageComponent } from './components/handbook-welcome-page/handbook-welcome-page.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HandbookComponent,
		SidenavComponent,
		HandbookWelcomePageComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FooModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
