import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
    imports: [MatProgressBarModule, MatSnackBarModule],
    exports: [MatProgressBarModule, MatSnackBarModule],
})
export class MaterialModule { }