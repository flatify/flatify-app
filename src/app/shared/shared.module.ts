import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatDialogModule, MatIconModule, MatToolbarModule } from '@angular/material';

const matModules = [
  MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule
];
const sharedModules = [...matModules, FlexLayoutModule];

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [sharedModules]
})
export class SharedModule {
}
