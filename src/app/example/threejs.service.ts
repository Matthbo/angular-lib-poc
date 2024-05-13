import { Injectable } from '@angular/core';
import * as THREE from 'three';

export type ThreejsServiceConfig = {
  fov: number;
  width: number;
  height: number;
}

export type ThreejsSimpleScene = {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer
}

export type ThreejsSimpleCubeProps = {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
}

export type ThreejsSimpleCube = {
  cube: THREE.Mesh
}

@Injectable()
export class ThreejsService {

  intializeSimpleScene({ fov, width, height }: ThreejsServiceConfig): ThreejsSimpleScene {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(fov, width / height, 1, 100);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    return { scene, camera, renderer };
  }

  renderSimpleCube({ scene, camera }: ThreejsSimpleCubeProps): ThreejsSimpleCube {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xfdc300 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 3;
    return { cube };
  }


}
