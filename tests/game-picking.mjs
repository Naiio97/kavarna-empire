import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {bindScenePicking} from '../source/game-picking.mjs';
const dom=new JSDOM('<canvas></canvas><button>Panel</button>'),w=dom.window,d=w.document,canvas=d.querySelector('canvas'),panel=d.querySelector('button');let picks=0;
const dispose=bindScenePicking(canvas,()=>picks++);
function event(type,target=canvas,{id=1,x=10,y=10,button=0,pointerType='touch',...extra}={}){const e=new w.Event(type,{bubbles:true});Object.assign(e,{pointerId:id,clientX:x,clientY:y,button,pointerType,...extra});target.dispatchEvent(e);}
function blocked(fn){const previous=picks;fn();assert.equal(picks,previous);}
event('pointerdown');event('pointerup');assert.equal(picks,1);
event('pointerdown');event('pointerup',canvas,{x:15});assert.equal(picks,2);
blocked(()=>{event('pointerdown');event('pointermove',d,{x:40});event('pointermove',d,{x:10});event('pointerup');});
blocked(()=>{event('pointerdown');event('pointerdown',canvas,{id:2,x:30});event('pointerup',canvas,{id:2,x:30});event('pointerup');});
blocked(()=>{event('pointerdown');event('pointerup',panel);event('pointerup');});
blocked(()=>{event('pointerdown');event('pointercancel',d);event('pointerup');});
blocked(()=>{event('pointerdown');event('lostpointercapture');event('pointerup');});
blocked(()=>{event('pointerdown');w.dispatchEvent(new w.Event('blur'));event('pointerup');});
for(const options of [{button:1,pointerType:'mouse'},{button:2,pointerType:'mouse'},{ctrlKey:true},{metaKey:true},{altKey:true}])blocked(()=>{event('pointerdown',canvas,options);event('pointerup',canvas,options);});
event('pointerdown',canvas,{id:7,pointerType:'mouse'});event('pointerup',canvas,{id:7,pointerType:'mouse'});assert.equal(picks,3);
blocked(()=>{event('pointerdown',canvas,{id:8});event('pointerup',canvas,{id:9});event('pointercancel',canvas,{id:8});});
dispose();blocked(()=>{event('pointerdown');event('pointerup');});w.close();
console.log('PASS: actual picking event adapter accepts a single tap and primary mouse click; rejects drag-and-return, two-finger pinch, panel/outside release, cancel/lost capture/blur, auxiliary/modifier clicks, mismatched contact and events after disposal. No browser/GPU automation used.');
