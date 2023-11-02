import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  exports:[
    MatPaginatorModule,
    MatTabsModule,
    MatSnackBarModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
