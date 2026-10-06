'use strict';
// The founder starts with cash only; supplier coffee is purchased and delivered physically.
const BOOTSTRAP_BASE6={fresh,validateSave,processShipments,nextWeek,collectDigest6,companyValue,businessUnitCost5,board};
const COFFEE_SUPPLIERS6={local:{name:'Sousedská pražírna',price:480,quality:75,lead:1,freight:400,fee:3000,capacity:300},specialty:{name:'Výběrový partner',price:620,quality:86,lead:1,freight:500,fee:5000,capacity:200}};
function ensureBootstrap6(v){if(v.bootstrap6===undefined)v.bootstrap6={cashOnly:false,suppliers:[],orders:[],last:null,history:[],pendingFees:0};return v;}
function cashOnlyFounder6(v){
 v.cash=500000;v.reputation=0;v.stores=[];v.roasters=[];v.warehouses=[];v.green=[];v.batches=[];v.shipments=[];v.estates=[];v.offices=[];v.routes=[];v.transfers=[];v.contracts=[];v.regions=[];
 for(const key of Object.keys(v.departments))v.departments[key]=0;
 v.studio5.opening=true;v.economy6.assets=[];v.academy6.facility=null;v.academy6.teams=[];v.bootstrap6.cashOnly=true;v.deliveryPolicy='planned';
 for(const b of v.brands){b.reputation=0;for(const key of Object.keys(b.identity5.awareness))b.identity5.awareness[key]=0;}
 v.logs=[{week:1,text:'Začínáš od nuly.',detail:'Pouze 500 000 Kč. Vyber prostor, zaplať vybavení, naber skutečné lidi a sjednej dodávky kávy. Žádný sklad ani pražírna nejsou tvoje.'}];return v;
}
fresh=function(...args){const v=ensureBootstrap6(BOOTSTRAP_BASE6.fresh(...args));return (args[0]||'sandbox')==='sandbox'?cashOnlyFounder6(v):v;};ensureBootstrap6(state);if(state.week===1&&state.scenario==='sandbox'&&!state.stores.length&&!state.history.length)cashOnlyFounder6(state);
function allowUnbuiltCompany6(v){return v.bootstrap6?.cashOnly===true;}
function coffeeSupplierReady6(location){return state.stores.some(s=>s.id===location&&!s.franchise)||state.opening6.projects.some(p=>p.status==='active'&&p.kind==='cafe'&&!p.franchise&&p.location===location&&p.phase>=2);}
function coffeeSupplierTarget6(location){return state.stores.find(s=>s.id===location&&!s.franchise)||state.opening6.projects.find(p=>p.status==='active'&&p.kind==='cafe'&&!p.franchise&&p.location===location);}
function cafeCoffeeStatus6(location,blendId){
 const city=loc(location).city,kg=state.batches.filter(b=>b.zone===city&&b.blend===blendId&&state.week-b.roastedWeek<8).reduce((n,b)=>n+b.kg,0),orders=state.bootstrap6.orders.filter(o=>o.location===location&&o.blend===blendId&&o.received===null),incoming=orders.reduce((n,o)=>n+o.kg,0),agreement=state.bootstrap6.suppliers.find(a=>a.location===location&&a.blend===blendId&&a.status==='active');
 const result=(code,title,text,attention=false)=>({code,title,text,attention,kg,incoming,agreement:agreement?.id||null,action:agreement?'Upravit dodávky':kg>0||incoming>0?'Prověřit zásobování':'Sjednat dodavatele kávy'});
 if(kg>=.018)return result('stock','Káva na skladě',kg.toFixed(1)+' kg použitelné kávy ve městě.');
 if(incoming>0)return result('transit','Káva na cestě',incoming+' kg zaplaceno · doručení od T'+Math.min(...orders.map(o=>o.due))+'.');
 if(!agreement)return result('missing','Chybí dodávka kávy','Vybraná receptura není zásoba. Sjednej dodavatele nebo zajisti skutečnou kávu.',true);
 if(!agreement.enabled)return result('paused','Dodavatel pozastavený','Smlouva existuje, automatické objednávky jsou vypnuté.',true);
 if(!coffeeSupplierReady6(location))return result('scheduled','Dodavatel sjednaný','První objednávka se spustí po instalaci, ve fázi náboru. Teď stačí pokračovat v přípravě.');
 try{const q=supplierCoffeeQuote6(agreement.provider,location,blendId,Math.min(100,agreement.target));if(q.cost>agreement.budget)return result('budget','Dodávku blokuje rozpočet','Objednávka '+money(q.cost)+' překračuje limit '+money(agreement.budget)+'.',true);if(state.cash-q.cost<weeklyFixed()*agreement.reserve)return result('reserve','Dodávku blokuje rezerva','Objednávka '+money(q.cost)+' by porušila chráněnou hotovostní rezervu.',true);}catch(e){return result('blocked','Dodávka čeká',e.message,true);}
 return result('scheduled','Dodavatel sjednaný','Objednávka se provede při dalším odehraném týdnu podle uloženého limitu.');
}
function supplierCoffeeQuote6(provider,location,blendId,kg){
 const cfg=Object.hasOwn(COFFEE_SUPPLIERS6,provider)?COFFEE_SUPPLIERS6[provider]:null,target=coffeeSupplierTarget6(location),b=blend(blendId);
 if(!cfg||!target||!b||!Number.isInteger(kg)||kg<5||kg>100||!coffeeSupplierReady6(location))throw Error('Káva potřebuje vlastní kavárnu nebo připravený prostor ve fázi náboru; objednávka má 5–100 kg.');
 const own=(state.bootstrap6?.orders||[]).filter(o=>o.provider===provider&&o.ordered===state.week).reduce((n,o)=>n+o.kg,0);
 if(own+kg>cfg.capacity)throw Error('Dodavatel už vyčerpal kapacitu tohoto týdne.');
 return {provider,location,blend:blendId,kg,week:state.week,cash:state.cash,unit:cfg.price,cost:cfg.price*kg+cfg.freight,quality:cfg.quality,due:state.week+cfg.lead,city:loc(location).city,profile:{primary:b.primary,secondary:b.secondary,share:b.share,roast:b.roast}};
}
function orderSupplierCoffee6(provider,location,blendId,kg,expected){
 guard();const q=supplierCoffeeQuote6(provider,location,blendId,kg);if(expected&&JSON.stringify(q)!==JSON.stringify(expected))throw Error('Dodavatel, prostor nebo hotovost se změnily. Obnov nabídku.');spend(q.cost);
 const order={...q,id:uid('suppliercoffee'),ordered:q.week,roasted:q.week,received:null};delete order.cash;delete order.week;(state.bootstrap6?.orders||[]).push(order);log('Objednána hotová káva: '+COFFEE_SUPPLIERS6[provider].name,kg+' kg do '+loc(location).name+' · '+money(q.cost)+' · doručení T'+q.due+'. Platba vytváří zásobu, ne druhý provozní výdaj.');return order;
}
function coffeeAgreementQuote6(provider,location,blendId,data){
 const cfg=Object.hasOwn(COFFEE_SUPPLIERS6,provider)?COFFEE_SUPPLIERS6[provider]:null,target=coffeeSupplierTarget6(location);
 if(!cfg||!target||!blend(blendId)||!data||!Number.isInteger(data.target)||data.target<5||data.target>100||!Number.isInteger(data.budget)||data.budget<0||data.budget>100000||!Number.isInteger(data.reserve)||data.reserve<1||data.reserve>8||typeof data.enabled!=='boolean')throw Error('Vyber vlastní budoucí kavárnu, směs, cílovou zásobu a rozpočet dodavatele.');
 if((state.bootstrap6?.suppliers||[]).some(s=>s.location===location&&s.status==='active'))throw Error('Kavárna už má aktivní smlouvu dodavatele.');
 return {provider,location,blend:blendId,...data,fee:cfg.fee,week:state.week,cash:state.cash,unit:cfg.price,freight:cfg.freight,lead:cfg.lead};
}
function signCoffeeAgreement6(provider,location,blendId,data,expected){
 guard();const q=coffeeAgreementQuote6(provider,location,blendId,data);if(expected&&JSON.stringify(q)!==JSON.stringify(expected))throw Error('Smlouva nebo hotovost se změnily. Obnov nabídku.');spend(q.fee);state.pendingExpense3=(state.pendingExpense3||0)+q.fee;state.bootstrap6.pendingFees+=q.fee;
 const agreement={...q,id:uid('coffeesupplier'),signed:state.week,status:'active',spent:0,last:null};delete agreement.cash;delete agreement.week;(state.bootstrap6?.suppliers||[]).push(agreement);log('Sjednán dodavatel: '+COFFEE_SUPPLIERS6[provider].name,loc(location).name+' · '+money(q.fee)+' sjednání. Káva se objednává a platí zvlášť až po přípravě prostoru.');return agreement;
}
function setCoffeeAgreement6(id,data){guard();const a=(state.bootstrap6?.suppliers||[]).find(s=>s.id===id&&s.status==='active');if(!a||!data||typeof data.enabled!=='boolean'||!Number.isInteger(data.target)||data.target<5||data.target>100||!Number.isInteger(data.budget)||data.budget<0||data.budget>100000||!Number.isInteger(data.reserve)||data.reserve<1||data.reserve>8)throw Error('Nastav platný mandát dodavatele.');Object.assign(a,Object.fromEntries(['enabled','target','budget','reserve'].map(k=>[k,data[k]])));}
function cancelCoffeeAgreement6(id){guard();const a=(state.bootstrap6?.suppliers||[]).find(s=>s.id===id&&s.status==='active');if(!a)throw Error('Smlouva už není aktivní.');a.status='cancelled';a.enabled=false;log('Dodavatel ukončen',loc(a.location).name+' · již zaplacené zásilky se stále doručí.');}
// A city's physical coffee pool is shared once. Targets are additive; orders
// cover consumption until the new paid delivery arrives, within existing limits.
function coffeeReplenishmentPlans20(){
 const agreements=(state.bootstrap6?.suppliers||[]).filter(a=>a.status==='active'),groups=new Map(),plans=new Map();
 for(const a of agreements){const city=loc(a.location).city,key=city+'|'+a.blend,ready=a.enabled&&coffeeSupplierReady6(a.location);plans.set(a.id,{ready,stock:0,incoming:0,need:0,consumption:0,target:a.target});if(!groups.has(key))groups.set(key,[]);groups.get(key).push(a);}
 for(const members of groups.values()){
  const first=members[0],city=loc(first.location).city,lead=COFFEE_SUPPLIERS6[first.provider].lead,stock=state.batches.filter(b=>b.blend===first.blend&&b.zone===city&&state.week+lead-b.roastedWeek<8).reduce((n,b)=>n+b.kg,0),incoming=(state.bootstrap6?.orders||[]).filter(o=>o.city===city&&o.blend===first.blend&&o.received===null&&o.due<=state.week+lead).reduce((n,o)=>n+o.kg,0);
  const consumption=typeof tnPure7==='function'?tnPure7(()=>state.stores.filter(s=>!s.franchise&&s.blend===first.blend&&loc(s.id).city===city).map(s=>{const d=demandForStore(s,seasonGlobalEvent5()?.factor||1);return {id:s.id,kg:d.potential*(d.dose||.018)};})):[];
  const used=consumption.reduce((n,x)=>n+x.kg,0)*lead,totalTarget=members.filter(a=>plans.get(a.id).ready).reduce((n,a)=>n+a.target,0),total=totalTarget+used,shortage=Math.max(0,total-stock-incoming);
  for(const a of members){const ownUse=consumption.find(x=>x.id===a.location)?.kg||0,ready=plans.get(a.id).ready,desired=ready?a.target+used*a.target/totalTarget:0;plans.set(a.id,{ready,stock,incoming,consumption:ownUse,target:totalTarget||a.target,need:ready?Math.max(0,Math.ceil(shortage*desired/total-1e-8)):0});}
 }
 return plans;
}
function runCoffeeAgreements6(){
 const plans=coffeeReplenishmentPlans20();
 for(const a of (state.bootstrap6?.suppliers||[]).filter(a=>a.status==='active')){
  a.spent=0;const {stock,incoming,need}=plans.get(a.id);
  let reason=!a.enabled?'Mandát pozastaven.':!coffeeSupplierReady6(a.location)?'Čeká na připravený prostor a tým.':need<5?'Společná zásoba a včasné objednávky pokrývají cíle i spotřebu do doručení.':null;
  if(!reason){try{const q=supplierCoffeeQuote6(a.provider,a.location,a.blend,Math.min(100,need));if(q.cost>a.budget)reason='Objednávka překračuje týdenní limit.';else if(state.cash-q.cost<weeklyFixed()*a.reserve)reason='Objednávka by porušila hotovostní rezervu.';else{orderSupplierCoffee6(a.provider,a.location,a.blend,q.kg,q);a.spent=q.cost;reason='Zaplaceno '+q.kg+' kg, doručení T'+q.due+'. Cíl počítá společnou zásobu a spotřebu do doručení.';}}catch(e){reason=e.message;}}
  a.last={week:state.week,stock,incoming,need,spent:a.spent,reason};
 }
}

processShipments=function(){BOOTSTRAP_BASE6.processShipments();for(const o of (state.bootstrap6?.orders||[]).filter(o=>o.received===null&&o.due<=state.week)){
 const available=coffeeSupplierTarget6(o.location);if(!available){o.received=state.week;if(state.turnLedger3)state.turnLedger3.writeoff+=o.cost;else state.pendingWriteoff3=(state.pendingWriteoff3||0)+o.cost;log('Dodávka kávy bez příjemce',loc(o.location).name+' · projekt nebo kavárna skončily, odpis '+money(o.cost)+'.');continue;}
 state.batches.push({blend:o.blend,kg:o.kg,quality:o.quality,cost:o.cost/o.kg,roastedWeek:o.roasted,zone:o.city,profile:{...o.profile},supplier6:o.provider,destination6:o.location});o.received=state.week;log('Doručena káva: '+loc(o.location).name,o.kg+' kg od '+COFFEE_SUPPLIERS6[o.provider].name+'. Dodávka nevytváří vlastní pražírnu ani sklad.');
}};
businessUnitCost5=function(b){if(stock(b.id)>0||state.roasters.length)return BOOTSTRAP_BASE6.businessUnitCost5(b);const provider=(state.bootstrap6?.suppliers||[]).find(s=>s.blend===b.id&&s.status==='active')?.provider||'local';return COFFEE_SUPPLIERS6[provider].price;};
companyValue=function(){return BOOTSTRAP_BASE6.companyValue()+(state.bootstrap6?.orders||[]).filter(o=>o.received===null).reduce((n,o)=>n+o.cost,0);};
board=function(type,...args){if(type==='roastery'&&!state.roasters.length)throw Error('Nejdřív pořiď vlastní pražírnu; není co rozšiřovat.');return BOOTSTRAP_BASE6.board(type,...args);};
nextWeek=function(){const initial=state.cash,week=state.week;const h=BOOTSTRAP_BASE6.nextWeek();h.cashChange=round(state.cash-initial);const last={week,ordered:(state.bootstrap6?.orders||[]).filter(o=>o.ordered===week).reduce((n,o)=>n+o.kg,0),paid:(state.bootstrap6?.orders||[]).filter(o=>o.ordered===week).reduce((n,o)=>n+o.cost,0),received:(state.bootstrap6?.orders||[]).filter(o=>o.received===week).reduce((n,o)=>n+o.kg,0),fees:state.bootstrap6.pendingFees};state.bootstrap6.pendingFees=0;state.bootstrap6.last=last;state.bootstrap6.history.push({...last});state.bootstrap6.history=state.bootstrap6.history.slice(-26);state.bootstrap6.orders=(state.bootstrap6?.orders||[]).filter(o=>o.received===null||week-o.received<=26);state.bootstrap6.suppliers=(state.bootstrap6?.suppliers||[]).filter(a=>a.status==='active'||week-a.signed<=52);return h;};
SCENARIOS.sandbox.cash=500000;SCENARIOS.sandbox.description='500 000 Kč a nic dalšího. Prostor, vybavení, tým i dodavatele kávy si zajistíš sám.';
let bootstrapTurn6=null;
collectDigest6=function(h,...args){if(bootstrapTurn6){h.cash=round(state.cash);h.cashChange=round(state.cash-bootstrapTurn6.cash);}const result=BOOTSTRAP_BASE6.collectDigest6(h,...args);for(const a of (state.bootstrap6?.suppliers||[]).filter(a=>a.status==='active'&&a.last?.week===h.week))if(a.last.need>=5&&!a.last.spent&&cafeCoffeeStatus6(a.location,a.blend).attention)result.items.push({category:'action',key:'coffee-supplier-'+a.id+'-'+h.week,title:loc(a.location).name+' · dodávka kávy čeká',text:a.last.reason,view:'supply',target:a.id,due:null,severity:coffeeSupplierReady6(a.location)?2:1,pending:true});return result;};
const BOOTSTRAP_DIGEST_PENDING6=digestPending6;
digestPending6=function(i){return i.key.startsWith('coffee-supplier-')?(state.bootstrap6?.suppliers||[]).some(a=>i.key.startsWith('coffee-supplier-'+a.id+'-')&&a.status==='active'&&cafeCoffeeStatus6(a.location,a.blend).attention):BOOTSTRAP_DIGEST_PENDING6(i);};
const BOOTSTRAP_NEXT6=nextWeek;
nextWeek=function(){guard();if(!state.stores.length&&!hasOpeningWork6())throw Error('Nejdřív zahaj přípravu první kavárny.');const old=bootstrapTurn6;bootstrapTurn6={cash:state.cash,week:state.week};try{return BOOTSTRAP_NEXT6();}finally{bootstrapTurn6=old;}};
const BOOTSTRAP_ORDER6=orderSupplierCoffee6;
orderSupplierCoffee6=function(...args){if((state.bootstrap6?.orders||[]).filter(o=>o.received===null).length>=64)throw Error('Nejdřív dokonči některé z 64 zaplacených dodávek.');return BOOTSTRAP_ORDER6(...args);};
const BOOTSTRAP_SIGN6=signCoffeeAgreement6;
signCoffeeAgreement6=function(...args){const result=BOOTSTRAP_SIGN6(...args);state.bootstrap6.suppliers=(state.bootstrap6?.suppliers||[]).filter(a=>a.status==='active').concat((state.bootstrap6?.suppliers||[]).filter(a=>a.status==='cancelled').slice(-145));return result;};
const BOOTSTRAP_NEXT_BOUNDS6=nextWeek;
nextWeek=function(){const h=BOOTSTRAP_NEXT_BOUNDS6();state.bootstrap6.orders=(state.bootstrap6?.orders||[]).filter(o=>o.received===null).concat((state.bootstrap6?.orders||[]).filter(o=>o.received!==null).slice(-200));return h;};
function validateBootstrapPart6(v){const a=v.bootstrap6,fail=()=>{throw Error('Soubor obsahuje neplatného dodavatele, zaplacenou kávu nebo počáteční firmu.');},n=(x,min=0,max=1e12)=>Number.isFinite(x)&&x>=min&&x<=max,int=(x,min=0,max=100000)=>Number.isInteger(x)&&n(x,min,max),id=x=>typeof x==='string'&&/^[a-z0-9-]{1,60}$/.test(x),str=(x,max)=>typeof x==='string'&&x.length<=max,profile=x=>x&&Object.hasOwn(ORIGINS,x.primary)&&Object.hasOwn(ORIGINS,x.secondary)&&n(x.share,0,100)&&int(x.roast,1,3);
 if(!a||typeof a.cashOnly!=='boolean'||!n(a.pendingFees)||!Array.isArray(a.suppliers)||a.suppliers.length>256||!Array.isArray(a.orders)||a.orders.length>264||a.orders.filter(o=>o.received===null).length>64||!Array.isArray(a.history)||a.history.length>26||new Set(a.orders.map(o=>o.id)).size!==a.orders.length||new Set(a.suppliers.map(o=>o.id)).size!==a.suppliers.length)fail();const locations=new Set(),capacity={};
 for(const s of a.suppliers){const cfg=Object.hasOwn(COFFEE_SUPPLIERS6,s.provider)?COFFEE_SUPPLIERS6[s.provider]:null;if(!cfg||!id(s.id)||!/^coffeesupplier-\d+$/.test(s.id)||!loc(s.location)||!v.blends.some(b=>b.id===s.blend)||!['active','cancelled'].includes(s.status)||!int(s.signed,1,v.week)||typeof s.enabled!=='boolean'||!int(s.target,5,100)||!int(s.budget,0,100000)||!int(s.reserve,1,8)||!n(s.spent,0,100000)||s.fee!==cfg.fee||s.unit!==cfg.price||s.freight!==cfg.freight||s.lead!==cfg.lead||s.status==='cancelled'&&s.enabled)fail();if(s.status==='active'){if(locations.has(s.location))fail();locations.add(s.location);}if(s.last&&(!int(s.last.week,s.signed,v.week)||!['stock','incoming','need','spent'].every(k=>n(s.last[k]))||!str(s.last.reason,500)))fail();}
 for(const o of a.orders){const cfg=Object.hasOwn(COFFEE_SUPPLIERS6,o.provider)?COFFEE_SUPPLIERS6[o.provider]:null;if(!cfg||!id(o.id)||!/^suppliercoffee-\d+$/.test(o.id)||!loc(o.location)||o.city!==loc(o.location).city||!v.blends.some(b=>b.id===o.blend)||!int(o.kg,5,100)||o.unit!==cfg.price||o.cost!==cfg.price*o.kg+cfg.freight||o.quality!==cfg.quality||!int(o.ordered,1,v.week)||o.roasted!==o.ordered||o.due!==o.ordered+cfg.lead||o.received!==null&&!int(o.received,o.due,v.week-1)||!profile(o.profile))fail();const key=o.provider+'-'+o.ordered;capacity[key]=(capacity[key]||0)+o.kg;if(capacity[key]>cfg.capacity)fail();}
 let week=0;for(const h of a.history){if(!int(h.week,week+1,v.week-1)||!['ordered','paid','received','fees'].every(k=>n(h[k]))||h.ordered>500||h.paid>400000)fail();week=h.week;}if(a.last&&JSON.stringify(a.last)!==JSON.stringify(a.history.at(-1)))fail();
 for(const b of [...v.batches,...v.transfers.flatMap(t=>t.batches)])if(b.supplier6!==undefined&&(!Object.hasOwn(COFFEE_SUPPLIERS6,b.supplier6)||!loc(b.destination6)))fail();
}
validateSave=function(input){const copy=JSON.parse(JSON.stringify(input));ensureBootstrap6(copy);const v=BOOTSTRAP_BASE6.validateSave(copy);ensureBootstrap6(v);validateBootstrapPart6(v);return v;};
