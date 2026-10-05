import {Vector3,Box3,MathUtils} from 'three';
export const CAMERA_LIMITS={minZoom:.65,maxZoom:5,minPolarAngle:.18*Math.PI,maxPolarAngle:.40*Math.PI};
// Orthographic zoom changes framing, never the safe distance from the city.
// Fit depth against the actual world even when focused on an outer district.
export function protectCamera(camera,target,bounds){const centre=bounds.getCenter(new Vector3()),radius=bounds.getSize(new Vector3()).length()/2,offset=camera.position.clone().sub(target),distance=Math.max(offset.length(),target.distanceTo(centre)+radius+12);if(offset.lengthSq()<1e-9)offset.set(1,1,1);camera.position.copy(target).add(offset.setLength(distance));camera.zoom=MathUtils.clamp(camera.zoom,CAMERA_LIMITS.minZoom,CAMERA_LIMITS.maxZoom);camera.near=.1;camera.far=Math.max(100,distance+target.distanceTo(centre)+radius+30);camera.lookAt(target);camera.updateMatrixWorld(true);camera.updateProjectionMatrix();}
export function worldBounds(world){world.group.updateMatrixWorld(true);return new Box3().setFromObject(world.group);}
