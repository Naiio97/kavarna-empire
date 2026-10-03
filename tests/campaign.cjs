const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');const c=vm.createContext({Intl,console});vm.runInContext(fs.readFileSync('dist/engine.js','utf8'),c);const r=s=>vm.runInContext(s,c);
r('state=fresh();hire("karlin",0);openStore("letna");hire("letna",1);openStore("vinohrady");hire("vinohrady",2);');
for(let i=0;i<120;i++){
 r('state.roasters.filter(q=>q.condition<65).forEach(q=>{if(state.cash>weeklyFixed()*3+18000)maintainRoaster(q.id)})');
 const h=r('nextWeek()');assert(Number.isFinite(h.profit));assert(Number.isFinite(h.cash));assert(r('state.batches.every(b=>b.kg>=0)'));assert(r('state.green.every(b=>b.kg>=0)'));assert(!r('state.over'),'Natural campaign bankrupt at week '+r('state.week'));
 if(r('state.roasters.length<8')&&r('state.cash>weeklyFixed()*7+320000')&&r('state.roasters.reduce((a,q)=>a+roasterCapacity(q)*.84,0)<Object.values(productionNeeds()).reduce((a,n)=>a+n,0)*1.5'))r('buyRoaster("artisan","Síťová výroba "+state.week)');
 if(r('state.cash>weeklyFixed()*7+450000')&&r('state.stores.length<16')){const id=r('LOCATIONS.filter(l=>unlocked(l.city)&&!owned(l.id)&&!occupant(l.id)&&l.setup<state.cash-weeklyFixed()*7).sort((a,b)=>a.setup-b.setup)[0]?.id');if(id){r(`openStore(${JSON.stringify(id)});hire(${JSON.stringify(id)},0)`);}else if(r('state.cash>3000000')){const rival=r('state.rivals.filter(q=>!q.bankrupt&&rivalValuation(q)<state.cash-weeklyFixed()*7).sort((a,b)=>rivalValuation(a)-rivalValuation(b))[0]?.id');if(rival)r(`acquireRival(${JSON.stringify(rival)})`);}}
 if(i===35&&r('state.cash>600000'))r('buyOffice("studio");setDepartment("hr",1);setDepartment("product",1);researchBlend("blend-1");researchBlend("blend-1");researchBlend("blend-1")');
}
console.log(r('JSON.stringify({week:state.week,cash:Math.round(state.cash),stores:state.stores.length,cities:new Set(state.stores.map(s=>loc(s.id).city)).size,reputation:state.reputation,win:state.win,rivals:state.rivals.map(q=>({name:q.name,stores:q.stores.length}))})'));
assert(r('state.stores.length>=12'));assert(r('state.win'));console.log('PASS: 120-week natural campaign reaches international victory.');
