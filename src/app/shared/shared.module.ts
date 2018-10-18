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
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { ReactiveFormsModule } from '@angular/forms';

const matModules = [
  MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatProgressBarModule,
  MatBottomSheetModule,
  MatListModule,
  MatInputModule,
  MatProgressSpinnerModule
];
const sharedModules = [...matModules, FlexLayoutModule, ReactiveFormsModule];

@NgModule({
  imports: [CommonModule],
  declarations: [RelativeTimePipe],
  exports: [sharedModules, RelativeTimePipe]
})
export class SharedModule {}
