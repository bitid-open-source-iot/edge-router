import { MatDrawer } from '@angular/material/sidenav';
import { MenuService } from './services/menu/menu.service';
import { SplashScreen } from './libs/splashscreen/splashscreen';
import { LocalstorageService } from './services/localstorage/localstorage.service';
import { OnInit, Component, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	styleUrls: ['./app.component.scss'],
	templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

	@ViewChild(MatDrawer, { static: true }) private drawer?: MatDrawer;
	@ViewChild(SplashScreen, { static: true }) private splashscreen?: SplashScreen;

	constructor(public menu: MenuService) { }

	public title: any[] = [];
	public badges: any = {};
	public authenticated?: boolean;


	private async initialize() {
		await this.splashscreen?.show();

		await this.splashscreen?.hide();
	}

	ngOnInit(): void {
		this.menu.events.subscribe(event => {
			switch (event) {
				case ('open'):
					this.drawer?.open();
					break;
				case ('close'):
					this.drawer?.close();
					break;
				case ('toggle'):
					this.drawer?.toggle();
					break;
			}
		});

		this.menu.badge.subscribe((data: any) => {
			Object.keys(data).map(key => {
				(this.badges as any)[key] = data[key];
			});
		});

		this.initialize();
	}

}
