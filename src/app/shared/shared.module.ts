import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatAutocompleteModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSnackBarModule,
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
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatSelectModule
];
const sharedModules = [...matModules, FlexLayoutModule, ReactiveFormsModule];

@NgModule({
  imports: [CommonModule, sharedModules],
  declarations: [RelativeTimePipe, UnderConstructionPageComponent],
  exports: [sharedModules, RelativeTimePipe, UnderConstructionPageComponent]
})
export class SharedModule {}
