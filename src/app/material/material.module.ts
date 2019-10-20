import { NgModule } from '@angular/core';
import * as Material from '@angular/material'

const material = [
  Material.MatToolbarModule,
  Material.MatSidenavModule,
  Material.MatListModule,
  Material.MatButtonModule,
  Material.MatIconModule,
  Material.MatInputModule,
  Material.MatGridListModule,
  Material.MatCardModule

]
@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
