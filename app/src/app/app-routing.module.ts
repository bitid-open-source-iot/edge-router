import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'devices',
        loadChildren: () => import('./pages/devices/devices.module').then(m => m.DevicesPageModule)
    },
    {
        path: 'mapping',
        loadChildren: () => import('./pages/mapping/mapping.module').then(m => m.MappingPageModule)
    },
    {
        path: 'live-logs',
        loadChildren: () => import('./pages/live-logs/live-logs.module').then(m => m.LiveLogsPageModule)
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
