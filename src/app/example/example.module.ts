import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawComponent } from './draw/draw.component';
import { ThreejsService } from './threejs.service';

/* You can also use standalone components but for this example we export the module */

@NgModule({
  declarations: [DrawComponent],
  imports: [CommonModule],
  exports: [DrawComponent],
  providers: [ThreejsService]
})
export class ExampleModule { }
