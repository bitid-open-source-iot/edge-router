import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthManager } from './services/auth/auth.service';

const routes: Routes = [
    {
        path: 'sign-in',
        loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInPageModule)
    },
    {
        path: 'devices',
        canActivate: [AuthManager],
        loadChildren: () => import('./pages/devices/devices.module').then(m => m.DevicesPageModule)
    },
    {
        path: 'mapping',
        canActivate: [AuthManager],
        loadChildren: () => import('./pages/mapping/mapping.module').then(m => m.MappingPageModule)
    },
    {
        path: 'live-logs',
        canActivate: [AuthManager],
        loadChildren: () => import('./pages/live-logs/live-logs.module').then(m => m.LiveLogsPageModule)
    },
    {
        path: 'change-email',
        canActivate: [AuthManager],
        loadChildren: () => import('./pages/change-email/change-email.module').then(m => m.ChangeEmailPageModule)
    },
    {
        path: 'import-export',
        canActivate: [AuthManager],
        loadChildren: () => import('./pages/import-export/import-export.module').then(m => m.ImportExportPageModule)
    },
    {
        path: 'change-password',
        canActivate: [AuthManager],
        loadChildren: () => import('./pages/change-password/change-password.module').then(m => m.ChangePasswordPageModule)
    },
    {
        path: '**',
        redirectTo: 'devices'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
