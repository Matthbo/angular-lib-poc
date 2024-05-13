import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { ThreejsService, ThreejsServiceConfig } from '../threejs.service';
import type * as THREE from 'three';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrl: './draw.component.scss'
})
export class DrawComponent implements AfterViewInit {

  protected sceneConfig: ThreejsServiceConfig = {
    fov: 90,
    width: 600,
    height: 600
  }

  protected scene?: THREE.Scene;
  protected camera?: THREE.PerspectiveCamera;
  protected renderer: THREE.WebGLRenderer | null = null;
  private cube?: THREE.Mesh

  @ViewChild('container') protected container!: ElementRef<HTMLDivElement>;

  constructor(private threeService: ThreejsService) { }

  ngAfterViewInit(): void {
    const { scene, camera, renderer } = this.threeService.intializeSimpleScene(this.sceneConfig);
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.container.nativeElement.firstChild?.remove();
    this.container.nativeElement.appendChild(renderer.domElement);
    const { cube } = this.threeService.renderSimpleCube({ scene, camera });
    this.cube = cube;

    this.update();
  }

  private update() {
    if (this.renderer) {
      requestAnimationFrame(this.update.bind(this));

      if (this.cube) {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.05;
      }

      this.renderer.render(this.scene!, this.camera!);
    }
  }

}
