import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HandbookComponent } from './components/handbook/handbook.component';
import { HandbookWelcomePageComponent } from './components/handbook-welcome-page/handbook-welcome-page.component';


const routes: Routes = [
	{path: 'home', component: HomeComponent},
	{path: '', redirectTo: '/home', pathMatch: "full"},
	{
		path: 'handbook', 
		component: HandbookComponent,
		children: [
			{path: 'welcome', component: HandbookWelcomePageComponent},
			{path: '', redirectTo: 'welcome', pathMatch: "full"}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
