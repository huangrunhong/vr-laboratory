import { Mesh, Object3D } from 'three';

const isMesh = (object: Object3D): object is Mesh => object instanceof Mesh;

export default isMesh;
