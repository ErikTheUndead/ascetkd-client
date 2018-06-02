import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule],
  declarations: []
})
export class SharedModule {}
