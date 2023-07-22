/* --- PAGES --- */
import {  SettingsComponent } from './settings.component';

/* --- MODULES --- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderPipeModule } from 'src/app/pipes/order/order.module';
import { FilterPipeModule } from 'src/app/pipes/filter/filter.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFooterModule } from 'src/app/libs/mat-footer/mat-footer.module';
import { MatContentModule } from 'src/app/libs/mat-content/mat-content.module';
import { MatBackButtonModule } from 'src/app/libs/mat-back-button/mat-back-button.module';
import { MatMenuButtonModule } from 'src/app/libs/mat-menu-button/mat-menu-button.module';

const routes: Routes = [
    {
        path: '',
        component: SettingsComponent
    }
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        MatSortModule,
        MatIconModule,
        MatTableModule,
        MatInputModule,
        MatFooterModule,
        MatSelectModule,
        MatButtonModule,
        OrderPipeModule,
        MatTooltipModule,
        FilterPipeModule,
        MatToolbarModule,
        MatContentModule,
        MatFormFieldModule,
        MatBackButtonModule,
        MatMenuButtonModule,
        ReactiveFormsModule,
        MatProgressBarModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        SettingsComponent
    ]
})

export class SettingsComponentModule { }
