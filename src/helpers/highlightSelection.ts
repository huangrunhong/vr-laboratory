import { ObjectMap } from '@react-three/fiber';
import isMesh from './isMesh';
import { Color, MeshStandardMaterial } from 'three';

const highlightSelection =
  (object: ObjectMap, meshes: string[]) =>
  (...selected: number[]) =>
    meshes.forEach((target, index) => {
      const node = object.nodes[target];
      const meshes = isMesh(node) ? [node] : (node?.children?.filter(isMesh) ?? []);

      meshes.forEach((mesh) => {
        const material = [mesh.material].flat()[0]?.clone();

        if (material instanceof MeshStandardMaterial) {
          material.emissive = new Color(selected.includes(index) ? '#0064c0' : 'black');
        }

        mesh.material = material;
      });
    });

export default highlightSelection;
