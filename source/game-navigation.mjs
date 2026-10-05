// Visual routes use exactly the 8 × 6 occupancy rules of the economic floor.
const SIZE={counter:[2,1],table:[2,1]};
export function occupiedCells(floor){const cells=new Set();for(const i of floor.items){const [w,h]=SIZE[i.kind]||[1,1];for(let x=i.x;x<i.x+w;x++)for(let y=i.y;y<i.y+h;y++)cells.add(x+','+y);}return cells;}
const key=p=>p.x+','+p.y;
export function walkPath(floor,start,goal){
 const blocked=occupiedCells(floor),queue=[start],previous=new Map([[key(start),null]]);
 if(blocked.has(key(start))||blocked.has(key(goal)))return [];
 for(let n=0;n<queue.length;n++){
  const p=queue[n];if(key(p)===key(goal)){const path=[];let k=key(p);while(k!==null){const [x,y]=k.split(',').map(Number);path.unshift({x,y});k=previous.get(k);}return path;}
  for(const [dx,dy] of [[1,0],[0,1],[-1,0],[0,-1]]){const next={x:p.x+dx,y:p.y+dy},k=key(next);if(next.x>=0&&next.x<8&&next.y>=0&&next.y<6&&!blocked.has(k)&&!previous.has(k)){previous.set(k,key(p));queue.push(next);}}
 }return [];
}
export function stationApproach(floor,item,start={x:0,y:5}){
 if(!item)return start;const [w,h]=SIZE[item.kind]||[1,1],choices=[];
 for(let x=item.x;x<item.x+w;x++)choices.push({x,y:item.y-1},{x,y:item.y+h});
 for(let y=item.y;y<item.y+h;y++)choices.push({x:item.x-1,y},{x:item.x+w,y});
 return choices.map(p=>({p,path:walkPath(floor,start,p)})).filter(x=>x.path.length).sort((a,b)=>a.path.length-b.path.length)[0]?.p||start;
}
export function workerRoute(floor,index){
 const kinds=['counter','espresso','pickup','sink','storage'],targets=kinds.slice(index%kinds.length).concat(kinds.slice(0,index%kinds.length)),path=[];
 let pos=stationApproach(floor,floor.items.find(i=>i.kind===targets[0]));
 for(const kind of [...targets.slice(1),targets[0]]){const next=stationApproach(floor,floor.items.find(i=>i.kind===kind),pos);const leg=walkPath(floor,pos,next);path.push(...(path.length?leg.slice(1):leg));pos=next;}return path.length?path:[pos];
}
export function guestRoute(floor){const entry={x:0,y:5},counter=stationApproach(floor,floor.items.find(i=>i.kind==='counter')),pickup=stationApproach(floor,floor.items.find(i=>i.kind==='pickup'),counter),exit={x:7,y:5};return [...walkPath(floor,entry,counter),...walkPath(floor,counter,pickup).slice(1),...walkPath(floor,pickup,exit).slice(1),...walkPath(floor,exit,entry).slice(1)];}
export function seatPositions(floor){const seats=[];for(const i of floor.items){if(!['table','table2','barseat'].includes(i.kind))continue;for(const x of i.kind==='table'?[i.x,i.x+1]:[i.x])for(const side of i.kind==='barseat'?[1]:[1,-1])seats.push({x,y:i.y,offset:.4*side,angle:side===1?Math.PI:0});}return seats;}

// Each visible actor represents a bounded sample of the recorded ten-minute slot.
export function cafeGuestStages9(floor,slot){
 const entry={x:0,y:5},exit={x:7,y:5},counter=stationApproach(floor,floor.items.find(i=>i.kind==='counter')),pickup=stationApproach(floor,floor.items.find(i=>i.kind==='pickup'),counter),toCounter=walkPath(floor,entry,counter),toPickup=walkPath(floor,counter,pickup),out=walkPath(floor,pickup,exit),counterOut=walkPath(floor,counter,exit),display=stationApproach(floor,floor.items.find(i=>i.kind==='display'),counter),displayOut=walkPath(floor,display,exit),seats=seatPositions(floor),result=[];
 const add=(stage,total,limit,path,title,reason,extra=()=>({}))=>{for(let i=0;i<Math.min(limit,total);i++)result.push({kind:'guest',stage9:stage,index:result.length,total9:total,path,title9:title,reason9:reason,...extra(i)});};
 add('seated',slot.occupied||0,Math.min(12,seats.length),[], 'Host u stolu','Host má kávu a obsazené místo.',i=>({seat:seats[i]}));
 const waiting=toCounter.slice().reverse();add('queue',slot.queue||0,Math.min(6,waiting.length),[], 'Host ve frontě','Čeká na obsluhu. Délku čekání a odchody vyhodnocuje skutečný rozpis směn.',i=>({anchor9:waiting[i]}));
 add('served',Math.max(0,(slot.served||0)-(slot.seated||0)),4,[...toPickup,...out.slice(1)],'Obsloužený host','Dostal skutečně započítanou objednávku.');
 add('arrival',slot.arrivals||0,2,toCounter,'Příchod do kavárny','Příchozí host ze skutečné návštěvnosti tohoto intervalu.');
 for(const [stage,field,title,reason] of [['lostQueue','lostQueue','Odchod: dlouhá fronta','Čekání přesáhlo trpělivost hostů.'],['lostSeats','lostSeats','Odchod: plná místa','Pro hosta nebylo volné místo.'],['lostStock','lostStock','Odchod: chybějící káva','Sklad neměl dost skutečné kávy k obsloužení.'],['lostClosing','lostClosing','Odchod: zavření','Objednávka se nestihla do zavření.']])add(stage,slot[field]||0,1,stage==='lostStock'?out:counterOut,title,reason);
 if(slot.foodMissing9)add('foodMissing',slot.foodMissing9,1,displayOut,'Host: vyprodané jídlo','Vybraný výrobek nebyl dostupný. Host odchází bez vybraného jídla; může už mít zaplacenou kávu.',()=>({unit9:'požadavků na jídlo'}));
 return result;
}
