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

export type ThreejsSimpleSphere = {
  sphere: THREE.Mesh
}

export type * as THREE from 'three';

@Injectable()
export class ThreejsService {

  private _frankMaterial = new THREE.MeshBasicMaterial({ color: 0xfdc300 });

  intializeSimpleScene({ fov, width, height }: ThreejsServiceConfig): ThreejsSimpleScene {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(fov, width / height, 1, 100);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    return { scene, camera, renderer };
  }

  renderSimpleCube({ scene, camera }: ThreejsSimpleCubeProps): ThreejsSimpleCube {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const cube = new THREE.Mesh(geometry, this._frankMaterial);
    scene.add(cube);

    camera.position.z = 3;
    return { cube };
  }

  renderSimpleSphere({ scene, camera }: ThreejsSimpleCubeProps): ThreejsSimpleSphere {
    const geometry = new THREE.SphereGeometry(1);
    const sphere = new THREE.Mesh(geometry, this._frankMaterial);
    scene.add(sphere);

    camera.position.z = 3;
    return { sphere };
  }


}
