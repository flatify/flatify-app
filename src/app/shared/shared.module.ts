import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatBottomSheetModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatToolbarModule
} from '@angular/material';

const matModules = [
  MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatProgressBarModule,
  MatBottomSheetModule,
  MatListModule,
  MatInputModule
];
const sharedModules = [...matModules, FlexLayoutModule];

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [sharedModules]
})
export class SharedModule {
}
