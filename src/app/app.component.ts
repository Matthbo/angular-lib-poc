import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleModule, ThreejsService } from 'example-lib';
import type { THREE } from 'example-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExampleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  protected scene?: THREE.Scene;
  protected camera?: THREE.PerspectiveCamera;
  protected renderer: THREE.WebGLRenderer | null = null;

  @ViewChild('container') private container!: ElementRef<HTMLDivElement>;

  constructor(private threeService: ThreejsService) { }

  ngAfterViewInit(): void {
    const { camera, renderer, scene } = this.threeService.intializeSimpleScene({ fov: 90, width: 600, height: 600 });
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.container.nativeElement.appendChild(renderer.domElement);
    this.threeService.renderSimpleSphere({ scene, camera });

    this.update();
  }

  private update() {
    if (this.renderer) {
      requestAnimationFrame(this.update.bind(this));
      if(this.camera){
        this.camera.position.z *= 1.0001;

      }
      this.renderer.render(this.scene!, this.camera!);
    }
  }


}
