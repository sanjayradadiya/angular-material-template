import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

const componentModules = [
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...componentModules],
  exports: [...componentModules],
})
export class MaterialModule {}
