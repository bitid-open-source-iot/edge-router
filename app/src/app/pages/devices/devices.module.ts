/* --- PAGES --- */
import { DevicesPage } from './devices.page';
import { DevicesViewerPage } from './viewer/viewer.page';
import { DevicesEditorPage } from './editor/editor.page';

/* --- DIALOGS --- */
import { InputOutputDialog } from './editor/input-output/input-output.dialog';

/* --- MODULES --- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsModule } from 'src/app/libs/options/options.module';
import { ConfirmModule } from 'src/app/libs/confirm/confirm.module';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFooterModule } from 'src/app/libs/mat-footer/mat-footer.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
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
        component: DevicesPage
    },
    {
        path: 'viewer',
        component: DevicesViewerPage
    },
    {
        path: 'editor',
        component: DevicesEditorPage
    }
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        OptionsModule,
        MatSortModule,
        MatIconModule,
        ConfirmModule,
        MatTableModule,
        MatInputModule,
        MatDialogModule,
        MatFooterModule,
        MatSelectModule,
        MatButtonModule,
        MatTooltipModule,
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
        DevicesPage,
        InputOutputDialog,
        DevicesViewerPage,
        DevicesEditorPage
    ]
})

export class DevicesPageModule { }
