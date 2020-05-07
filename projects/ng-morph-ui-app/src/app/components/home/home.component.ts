import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

	constructor(private navigation: NavigationService) { }

	ngOnInit(): void {
	}

	public openHandbook(): void{
		this.navigation.goToHandbook();
	}

}
