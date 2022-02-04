import { MatDrawer } from '@angular/material/sidenav';
import { MenuService } from './services/menu/menu.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { SessionStorageService } from './services/session-storage/session-storage.service';
import { OnInit, Component, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	styleUrls: ['./app.component.scss'],
	templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

	@ViewChild(MatDrawer, { static: true }) private drawer?: MatDrawer;

	constructor(public menu: MenuService, private storage: SessionStorageService, private sanitizer: DomSanitizer, private iconRegistry: MatIconRegistry) {
		this.iconRegistry.addSvgIcon('add', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/add.svg'));
		this.iconRegistry.addSvgIcon('wifi', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/wifi.svg'));
		this.iconRegistry.addSvgIcon('menu', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/menu.svg'));
		this.iconRegistry.addSvgIcon('edit', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/edit.svg'));
		this.iconRegistry.addSvgIcon('close', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/close.svg'));
		this.iconRegistry.addSvgIcon('route', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/route.svg'));
		this.iconRegistry.addSvgIcon('email', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/email.svg'));
		this.iconRegistry.addSvgIcon('delete', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/delete.svg'));
		this.iconRegistry.addSvgIcon('logout', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/logout.svg'));
		this.iconRegistry.addSvgIcon('router', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/router.svg'));
		this.iconRegistry.addSvgIcon('storage', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/storage.svg'));
		this.iconRegistry.addSvgIcon('password', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/password.svg'));
		this.iconRegistry.addSvgIcon('visibility', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/visibility.svg'));
		this.iconRegistry.addSvgIcon('arrow_back', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/arrow_back.svg'));
		this.iconRegistry.addSvgIcon('file_upload', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/file_upload.svg'));
		this.iconRegistry.addSvgIcon('double_arrow', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/double_arrow.svg'));
		this.iconRegistry.addSvgIcon('content_copy', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/content_copy.svg'));
		this.iconRegistry.addSvgIcon('file_download', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/file_download.svg'));
		this.iconRegistry.addSvgIcon('import_export', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/import_export.svg'));
	}

	public title: any[] = [];
	public badges: any = {};
	public authenticated?: boolean;

	public async logout() {
		this.menu.close();
		this.storage.clear();
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
	}

}
