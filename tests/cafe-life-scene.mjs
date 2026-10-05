import assert from 'node:assert/strict';
import {cafeGuestStages9,occupiedCells} from '../source/game-navigation.mjs';
import {buildCafeScene,setCafeActors,animateWorld,disposeWorld,floorPoint} from '../source/game-scene.mjs';
const floor={width:8,height:6,items:[{id:'counter',kind:'counter',x:3,y:2},{id:'espresso',kind:'espresso',x:3,y:0},{id:'grinder',kind:'grinder',x:4,y:0},{id:'pickup',kind:'pickup',x:5,y:2},{id:'sink',kind:'sink',x:5,y:0},{id:'storage',kind:'storage',x:6,y:0},{id:'display',kind:'display',x:7,y:0},{id:'table',kind:'table2',x:1,y:3}]};
const slot={workers:2,occupied:2,queue:10,served:5,seated:2,arrivals:7,lostQueue:4,lostSeats:3,lostStock:2,lostClosing:1,foodMissing9:2},before=JSON.stringify(floor),actors=cafeGuestStages9(floor,slot),blocked=occupiedCells(floor);
assert.equal(JSON.stringify(floor),before);assert(actors.length<=30);
for(const stage of ['seated','queue','served','arrival','lostQueue','lostSeats','lostStock','lostClosing','foodMissing'])assert(actors.some(a=>a.stage9===stage));
for(const a of actors){for(const p of a.path||[])assert(!blocked.has(p.x+','+p.y));if(a.anchor9)assert(!blocked.has(a.anchor9.x+','+a.anchor9.y));for(let i=1;i<a.path.length;i++)assert.equal(Math.abs(a.path[i].x-a.path[i-1].x)+Math.abs(a.path[i].y-a.path[i-1].y),1);}
assert.equal(actors.filter(a=>a.stage9==='lostStock').length,1);assert.equal(actors.find(a=>a.stage9==='lostStock').total9,2);
assert(!cafeGuestStages9(floor,{workers:0}).length);
const scene=buildCafeScene({slot,crew:[{id:'staff1',name:'Jana'},{id:'staff2',name:'Pavel'}]},floor);assert(scene.objects.some(o=>o.userData.kind==='furniture'&&o.userData.id==='display'));assert(scene.objects.some(o=>o.userData.kind==='guest9'&&o.userData.title.includes('plná místa')));animateWorld(scene,10);
const waiting=scene.actors.filter(a=>a.stage9==='queue');for(const a of waiting){const p=floorPoint(a.anchor9.x,a.anchor9.y);assert.equal(a.mesh.position.x,p.x);assert.equal(a.mesh.position.z,p.z);}
const positions=waiting.map(a=>a.mesh.position.clone());animateWorld(scene,12);waiting.forEach((a,i)=>assert(a.mesh.position.equals(positions[i])));
setCafeActors(scene,{slot:{workers:0,served:2,seated:0},crew:[]});assert(scene.actors.every(a=>!a.seat&&!a.anchor9));setCafeActors(scene,{slot:{},crew:[]});assert(!scene.objects.some(o=>['worker','guest9'].includes(o.userData.kind)));assert(scene.actorPool.every(a=>!a.mesh.visible));disposeWorld(scene);
console.log('PASS: bounded representative guest stages, real loss counts and labels, static physical queue, obstacle-free paths, food display geometry, pool reset and no phantom guests in empty slots');
