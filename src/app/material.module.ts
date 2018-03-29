import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const materialModules = [];

@NgModule({
  imports: [BrowserAnimationsModule, ...materialModules],
  exports: [...materialModules]
})
export class MaterialModule {}
