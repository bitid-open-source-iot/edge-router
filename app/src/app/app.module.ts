/* --- MODULES --- */
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SplashscreenModule } from './libs/splashscreen/splashscreen.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* --- SERVICES --- */
import { ApiService } from './services/api/api.service';
import { MenuService } from './services/menu/menu.service';
import { AdminService } from './services/admin/admin.service';
import { ToastService } from './services/toast/toast.service';
import { ConfigService } from './services/config/config.service';
import { DevicesService } from './services/devices/devices.service';
import { FiltersService } from './services/filters/filters.service';
import { MappingService } from './services/mapping/mapping.service';
import { FormErrorService } from './services/form-error/form-error.service';
import { LocalstorageService } from './services/localstorage/localstorage.service';
import { SessionStorageService } from './services/session-storage/session-storage.service';

/* --- COMPONENTS --- */
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        MatIconModule,
        MatListModule,
        MatRippleModule,
        MatSidenavModule,
        HttpClientModule,
        MatToolbarModule,
        AppRoutingModule,
        MatSnackBarModule,
        MatFormFieldModule,
        SplashscreenModule,
        BrowserAnimationsModule
    ],
    providers: [
        ApiService,
        MenuService,
        AdminService,
        ToastService,
        ConfigService,
        DevicesService,
        FiltersService,
        MappingService,
        FormErrorService,
        LocalstorageService,
        SessionStorageService
    ],
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent
    ]
})

export class AppModule { }
