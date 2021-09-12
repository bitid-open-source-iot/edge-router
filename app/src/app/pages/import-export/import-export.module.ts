/* --- PAGES --- */
import { ImportExportPage } from './import-export.page';

/* --- MODULES --- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatContentModule } from 'src/app/libs/mat-content/mat-content.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuButtonModule } from 'src/app/libs/mat-menu-button/mat-menu-button.module';
import { MatBackButtonModule } from 'src/app/libs/mat-back-button/mat-back-button.module';
import { Routes, RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: ImportExportPage
    }
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatToolbarModule,
        MatContentModule,
        MatFormFieldModule,
        MatMenuButtonModule,
        MatBackButtonModule,
        ReactiveFormsModule,
        MatProgressBarModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ImportExportPage
    ]
})

export class ImportExportPageModule { }
