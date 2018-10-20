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
import { UnderConstructionPageComponent } from './components/under-construction-page/under-construction-page.component';

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
  imports: [CommonModule, sharedModules],
  declarations: [RelativeTimePipe, UnderConstructionPageComponent],
  exports: [sharedModules, RelativeTimePipe, UnderConstructionPageComponent]
})
export class SharedModule {}
