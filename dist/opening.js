'use strict';
// Projects allow the real company ledger to advance before its first serving cafe.
const OPENING_BASE6={fresh,validateSave,nextWeek,openStore,buyRoaster,buyBakery5,companyValue,weeklyFixed,simulateProjects,collectDigest6,digestPending6,occupant,owned,staffAssignments,staffAssignmentsForPeople6,entityFor,economicPayroll6,reportRoster5,peopleAll6,peopleOwned6,districtDemand6,roasterCapacity,bakeryCapacity5};
function ensureOpening6(v){if(v.opening6===undefined)v.opening6={started:false,projects:[],history:[]};return v;}
fresh=function(...args){return ensureOpening6(OPENING_BASE6.fresh(...args));};ensureOpening6(state);
function hasOpeningWork6(v=state){return Boolean(v.opening6?.projects.some(p=>p.status==='active')||v.roasters.some(r=>r.tenure6==='owned')||v.bakery5?.bakeries.length);}
function allowEmptyOpening6(v){return v.opening6?.started===true&&(v.opening6.projects.length>0||v.opening6.history.length>0);}
const OPENING_PHASES6=['Hledání a smlouva','Rekonstrukce a instalace','Nábor a příprava týmu','Zkušební provoz'];
let openingTurn6=null,activatingOpening6=null;
function openingById6(id){return (state.opening6?.projects||[]).find(p=>p.id===id);}
function openingLive6(p){return p.entity?({cafe:state.stores,roaster:state.roasters,bakery:state.bakery5.bakeries}[p.kind]).find(x=>x.id===p.entity):null;}
function openingReserved6(id){return (state.opening6?.projects||[]).find(p=>p.kind==='cafe'&&p.location===id&&p.status==='active'&&!p.entity&&p.id!==activatingOpening6);}
function openingPersonBusy6(pid){return (state.opening6?.projects||[]).some(p=>p.status==='active'&&(p.manager?.pid===pid||p.people.some(x=>x.pid===pid)));}
const OPENING_ACADEMY_BUSY6=academyBusy6;
academyBusy6=function(pid){return OPENING_ACADEMY_BUSY6(pid)||openingPersonBusy6(pid);};
owned=function(id){return OPENING_BASE6.owned(id)||Boolean(openingReserved6(id));};
function openingUnits6(p){return p.kind==='cafe'?p.people.reduce((n,x)=>n+x.contract,0):p.people.length;}
function openingWages6(p){if(p.entity||!p.hired)return 0;const factor=cityWageFactor6(p.city);return p.people.reduce((n,x)=>n+(p.kind==='cafe'?6500*x.contract/2*x.payFactor*(x.contract===2?1.25:1):p.kind==='bakery'?6500*x.payFactor*1.25:5500)*factor,0);}
function openingManagerWage6(p){return (p.manager?.salary||0)*(p.kind==='cafe'?1:cityWageFactor6(p.city));}
function openingOperating6(p){return p.entity?0:p.holdingRent+openingManagerWage6(p)+openingWages6(p);}
function openingCandidatePlan6(kind,need,pids){const market=kind==='cafe'?state.baristaCandidates:kind==='bakery'?state.academy6.bakerCandidates:[];
 if(pids!==undefined&&(!Array.isArray(pids)||new Set(pids).size!==pids.length||pids.length>24))throw Error('Vyber různé dostupné pracovníky.');
 const selected=pids? pids.map(pid=>{const p=market.find(x=>x.pid===pid);if(!p||academyBusy6(pid))throw Error('Kandidát je zaměstnaný nebo rezervovaný ve výcviku.');return p;}):[];
 if(!pids){const sorted=market.filter(p=>!academyBusy6(p.pid)).slice().sort((a,b)=>(b.academy6?.length||0)-(a.academy6?.length||0));let units=0;for(const p of sorted){if(units>=need)break;if(kind==='cafe'&&p.contract>need-units&&sorted.some(x=>!selected.includes(x)&&x.contract<=need-units))continue;selected.push(p);units+=kind==='cafe'?p.contract:1;}}
 return selected.map(p=>p.pid);
}
function openingQuote6(kind,data){
 if(!['cafe','roaster','bakery'].includes(kind)||!data||(state.opening6?.projects||[]).filter(p=>p.status==='active').length>=8)throw Error('Vyber druh provozu; nejvýše osm současných příprav.');
 let blueprint,city,name,need,type=null,location=null;
 if(kind==='cafe'){
  const l=loc(data.location);if(!l||owned(l.id)||occupant(l.id)||!unlocked(l.city))throw Error('Adresa není volná nebo město není odemčené.');
  if(state.auctions.some(a=>!a.closed&&a.location===l.id)||state.market3.exclusive.some(a=>a.location===l.id&&a.holder!=='player'&&a.until>=state.week))throw Error('Nejdřív vyřeš nájemní práva k adrese.');
  if(data.franchise&&state.reputation<65)throw Error('Franšíza vyžaduje pověst 65.');
  location=l.id;city=l.city;name=l.name;blueprint=data.franchise?{location:l.id,brand:data.brand||state.brands[0].id,blend:data.blend||state.blends[0].id,cost:round(l.setup*.25),design:null,premises:null}:openingQuote5(l.id,data.design||'base',data.brand||state.brands[0].id,data.blend||state.blends[0].id,data.options);
  if(!brand(blueprint.brand)||!blend(blueprint.blend))throw Error('Vyber platnou značku a kávu.');
  const shifts=data.shifts||[1,1,1];if(!Array.isArray(shifts)||shifts.length!==3||shifts.some(n=>!Number.isInteger(n)||n<0||n>7)||!shifts.some(n=>n>0))throw Error('Vyber tři skutečné směny s nejvýše sedmi lidmi.');blueprint.shifts=[...shifts];need=data.franchise?0:shifts.reduce((n,x)=>n+x,0);
 }else if(kind==='roaster'){
  const cfg=ROASTER_OPTIONS.find(x=>x.id===data.type);if(!cfg||state.roasters.length+(state.opening6?.projects||[]).filter(p=>p.kind==='roaster'&&p.status==='active'&&!p.entity).length>=8||typeof data.name!=='string'||!data.name.trim()||data.name.trim().length>40||!CITIES.some(c=>c.name===data.city))throw Error('Vyber platnou pražírnu, město a název.');
  type=cfg.id;city=data.city;name=data.name.trim();need=2;blueprint={type,cost:cfg.cost,capacity:cfg.capacity,upkeep:cfg.upkeep};
 }else{
  const cfg=BAKERY_TYPES5[data.type];if(!Object.hasOwn(BAKERY_TYPES5,data.type)||!state.stores.some(s=>!s.franchise&&loc(s.id).city===data.city)||state.bakery5.bakeries.length+(state.opening6?.projects||[]).filter(p=>p.kind==='bakery'&&p.status==='active'&&!p.entity).length>=8)throw Error('Pekárna potřebuje město s vlastní kavárnou a volné místo mezi osmi výrobnami.');
  type=data.type;city=data.city;name=cfg.name+' · '+city;need=cfg.staff;blueprint={type,cost:cfg.cost,capacity:cfg.capacity,upkeep:cfg.upkeep};
 }
 if(state.founderShare<50&&state.expansionBudget<blueprint.cost)throw Error('Příprava provozu potřebuje expanzní mandát boardu.');
 const staff=openingCandidatePlan6(kind,need,data.staffPids),manager=data.managerPid?state.talents.find(p=>p.pid===data.managerPid):null;
 if(data.managerPid&&(!manager||academyBusy6(manager.pid)))throw Error('Vedoucí není volný pro přípravu provozu.');
 const holdingRent=data.franchise?0:kind==='cafe'?(blueprint.premises?blueprint.premises.rent+blueprint.premises.upkeep:loc(location).rent):round(blueprint.upkeep*.6),durations=[1,2,1,1],admin=8000,managerFee=manager?Math.max(4000,12000-state.departments.hr*1500):0;
 let running=null;if(kind==='cafe'&&!data.franchise){const demo=makeStore(location);installDesign5(demo,blueprint.design);demo.daily.shifts=[...blueprint.shifts];demo.crew.employees=staff.map(id=>state.baristaCandidates.find(p=>p.pid===id));planCrew5(demo);const pay=economicStoreEstimate6(demo);running=round(pay.wages+pay.overtime+pay.payroll+pay.utilities+holdingRent+3200+demo.marketing+blueprint.changes.info.effects.cost+(manager?.salary||0)*(1+ECONOMY_RULES6.employer));}
 return {kind,location,type,city,name,week:state.week,cash:state.cash,blueprint:JSON.parse(JSON.stringify(blueprint)),designId:data.design||'base',franchise:Boolean(data.franchise),need,staffPids:staff,managerPid:manager?.pid||null,managerFee,holdingRent,admin,cost:blueprint.cost+admin+managerFee,durations,totalWeeks:durations.reduce((n,x)=>n+x,0),running};
}
// Budget excludes hoped-for sales: preparation, paid coffee and a usable operating reserve.
function openingFunding6(q,provider='local'){
 if(q.kind!=='cafe'||q.franchise)return null;const cfg=Object.hasOwn(COFFEE_SUPPLIERS6,provider)?COFFEE_SUPPLIERS6[provider]:null;if(!cfg)throw Error('Vyber platného dodavatele pro rozpočet.');const people=q.staffPids.map(id=>state.baristaCandidates.find(x=>x.pid===id)),demo={kind:'cafe',city:q.city,people,hired:true,entity:null},crew=round(openingWages6(demo)*(1+ECONOMY_RULES6.employer)),manager=round((state.talents.find(x=>x.pid===q.managerPid)?.salary||0)*(1+ECONOMY_RULES6.employer)),preWeeks=q.durations.slice(0,3).reduce((n,x)=>n+x,0),trialWeeks=Object.values(q.blueprint.design.equipment).includes('compact')?2:1;
 const holding=preWeeks*(q.holdingRent+manager)+q.durations[2]*crew,recruitment=people.length*crewFee5(),coffee=cfg.fee+2*(25*cfg.price+cfg.freight),trial=trialWeeks*q.running,reserve=3*q.running,required=round(q.cost+holding+recruitment+coffee+trial+reserve);
 return {provider,holding,recruitment,coffee,trial,reserve,required,shortfall:Math.max(0,required-state.cash),afterPreparation:round(state.cash-required+reserve),weeks:preWeeks+trialWeeks,safe:state.cash>=required};
}
function startOpening6(kind,data,expected){
 guard();const q=openingQuote6(kind,data);if(expected&&JSON.stringify(q)!==JSON.stringify(expected))throw Error('Adresa, lidé nebo rozpočet se změnili. Obnov nabídku přípravy.');spend(q.cost);
 if(state.founderShare<50)state.expansionBudget-=q.blueprint.cost;
 const market=kind==='cafe'?state.baristaCandidates:kind==='bakery'?state.academy6.bakerCandidates:null,people=q.staffPids.map(pid=>market.splice(market.findIndex(p=>p.pid===pid),1)[0]);
 if(kind==='roaster')for(let i=0;i<q.need;i++)people.push({pid:uid('roastworker'),name:['Adam Pražák','Lucie Berková'][i],payFactor:1});
 const manager=q.managerPid?state.talents.splice(state.talents.findIndex(p=>p.pid===q.managerPid),1)[0]:null;
 const fee=q.blueprint.premises?.fee||0;state.pendingExpense3=(state.pendingExpense3||0)+q.admin+q.managerFee;
 const p={id:uid('opening'),kind,location:q.location,type:q.type,city:q.city,name:q.name,blueprint:q.blueprint,inspection:false,blueprintNeed:q.need,designId:q.designId,franchise:q.franchise,need:q.need,people,manager,status:'active',phase:0,elapsed:0,phaseElapsed:0,durations:q.durations,created:state.week,plannedEnd:state.week+q.totalWeeks-1,holdingRent:q.holdingRent,leaseSigned:state.week,leaseDue:state.week+(q.blueprint.premises?.term||26),leaseKind:q.blueprint.premises?.options.kind||'legacy',paidCapital:q.blueprint.cost-fee,admin:q.admin,managerFee:q.managerFee,recruitment:0,operating:0,extras:0,hired:false,entity:null,closed:null,result:null,history:[],phaseHistory:[],lastTurn:state.week-1,blocked:null,policy:{personal:true,accelerate:true,quality:true,budget:10000,reserve:2},spent:0,trialFault:false,trialProgress:0};
 state.opening6.projects=(state.opening6?.projects||[]).filter(x=>x.status==='active').concat((state.opening6?.projects||[]).filter(x=>x.status!=='active').slice(-111));state.opening6.started=true;(state.opening6?.projects||[]).push(p);
 if(kind==='cafe'&&fee){propertyExpense5(fee);propertyEvent5(p.leaseKind==='owned'?'buy':'lease',p.location,{price:p.blueprint.premises.price,fee,deposit:p.blueprint.premises.deposit,refund:0,cash:-p.blueprint.premises.advance,gain:0});}
 for(const worker of people)if(kind!=='roaster')characterMemory6(worker,'Rezervace pro nový provoz '+p.name+'.');if(manager)characterMemory6(manager,'Převzal/a přípravu provozu '+p.name+'.');
 log('Zahájena příprava: '+p.name,money(q.cost)+' zaplaceno. Před zkušebním provozem nejsou zákazníci ani výroba; čas, držení prostoru a nábor se platí.');return p;
}
function prepareOpeningWeek6(){
 for(const p of (state.opening6?.projects||[]).filter(p=>p.status==='active'&&!p.entity)){
  p.blocked=null;p.spent=0;
  if(p.kind==='cafe'&&!p.franchise&&state.week>=p.leaseDue&&p.leaseKind!=='owned'){p.holdingRent=round(propertyMarket5(p.location,p.blueprint.premises?.options.space||'existing').rent*PREMISES_LEASES5.flex.rent);p.leaseKind='flex';p.leaseSigned=state.week;p.leaseDue=state.week+PREMISES_LEASES5.flex.term;log('Příprava: nájem přešel na flexibilní',p.name+' · '+money(p.holdingRent)+'/týden. Původní jistota se nenavyšuje.');}
  if(p.phase===2&&!p.hired){
   if(openingUnits6(p)<p.need){p.blocked='Chybí skuteční pracovníci: '+openingUnits6(p)+' / '+p.need+'.';continue;}
   const fee=p.people.length*(p.kind==='cafe'?crewFee5():8000);
   if(state.cash<fee){p.blocked='Na nábor chybí '+money(fee)+'.';continue;}
   spend(fee);state.pendingExpense3=(state.pendingExpense3||0)+fee;p.recruitment+=fee;p.spent+=fee;p.hired=true;log('Připraven tým: '+p.name,p.people.length+' skutečných pracovníků · '+money(fee)+' nábor. Mzdy začínají tento týden.');
  }
 }
}
companyValue=function(){return OPENING_BASE6.companyValue()+(state.opening6?.projects||[]).filter(p=>p.status==='active'&&!p.entity).reduce((n,p)=>n+p.paidCapital,0);};
weeklyFixed=function(){return OPENING_BASE6.weeklyFixed()+(state.opening6?.projects||[]).filter(p=>p.status==='active').reduce((n,p)=>n+openingOperating6(p),0);};
economicPayroll6=function(){return OPENING_BASE6.economicPayroll6()+(state.opening6?.projects||[]).filter(p=>p.status==='active'&&!p.entity).reduce((n,p)=>n+openingManagerWage6(p)+openingWages6(p),0);};
simulateProjects=function(){const base=OPENING_BASE6.simulateProjects(),items=(state.opening6?.projects||[]).filter(p=>p.status==='active'&&!p.entity).map(p=>({id:p.id,operating:openingOperating6(p),salary:openingManagerWage6(p),wages:openingWages6(p),holding:p.holdingRent}));if(openingTurn6)openingTurn6.paid=items;return base+items.reduce((n,p)=>n+p.operating,0);};
staffAssignments=function(){return OPENING_BASE6.staffAssignments().concat((state.opening6?.projects||[]).filter(p=>p.status==='active'&&p.manager).map(p=>({kind:'opening',id:p.id,entity:p,person:p.manager,label:p.name+' · příprava'})));};
staffAssignmentsForPeople6=function(v){return OPENING_BASE6.staffAssignmentsForPeople6(v).concat(v.opening6?.projects.filter(p=>p.status==='active'&&p.manager).map(p=>p.manager)||[]);};
entityFor=function(kind,id){return kind==='opening'?openingById6(id):OPENING_BASE6.entityFor(kind,id);};
function openingStyle6(p){return p.manager?.character6?CHARACTER_TYPES6[p.manager.character6.trait].strategy:null;}
function setOpeningPolicy6(id,data){guard();const p=openingById6(id);if(!p||p.status!=='active'||!data||['personal','accelerate','quality'].some(k=>typeof data[k]!=='boolean')||!Number.isInteger(data.budget)||data.budget<0||data.budget>50000||!Number.isInteger(data.reserve)||data.reserve<1||data.reserve>8)throw Error('Nastav platné pravomoci přípravy a limit 0–50 000 Kč.');p.policy={...data};}
function addOpeningWorker6(id,pid){guard();const p=openingById6(id);if(!p||p.status!=='active'||p.entity||p.hired||!['cafe','bakery'].includes(p.kind)||p.people.length>=24)throw Error('Lidi lze doplnit před náborem do přípravy kavárny nebo pekárny.');const market=p.kind==='cafe'?state.baristaCandidates:state.academy6.bakerCandidates,worker=market.find(x=>x.pid===pid);if(!worker||academyBusy6(pid))throw Error('Kandidát není dostupný.');market.splice(market.indexOf(worker),1);p.people.push(worker);characterMemory6(worker,'Rezervace pro nový provoz '+p.name+'.');}
function openingTeamQuote6(id,data){
 const p=openingById6(id);if(!p||p.kind!=='cafe'||p.franchise||p.status!=='active'||p.entity||p.hired)throw Error('Rezervace týmu se mění před placeným náborem. Po instalaci spravuj zaměstnance v týmu kavárny.');
 const shifts=data?.shifts,pids=data?.pids;if(!Array.isArray(shifts)||shifts.length!==3||shifts.some(n=>!Number.isInteger(n)||n<0||n>7)||!shifts.some(Boolean)||!Array.isArray(pids)||pids.length>24||new Set(pids).size!==pids.length)throw Error('Vyber platné směny a různé pracovníky.');
 const people=pids.map(pid=>{const person=p.people.find(x=>x.pid===pid)||state.baristaCandidates.find(x=>x.pid===pid&&!academyBusy6(pid));if(!person)throw Error('Pracovník už není dostupný. Obnov rezervaci.');return person;}),units=people.reduce((n,x)=>n+x.contract,0),need=shifts.reduce((n,x)=>n+x,0);if(units<need)throw Error('Tým pokrývá '+units+' z '+need+' období. Vyber dalšího pracovníka nebo zmenši směny.');
 return {id,week:state.week,shifts:[...shifts],pids:[...pids],previous:p.people.map(x=>x.pid),units,need,recruitment:people.length*crewFee5(),payroll:round(openingWages6({...p,people,hired:true})*(1+ECONOMY_RULES6.employer))};
}
function setOpeningTeam6(id,data,expected){
 guard();const q=openingTeamQuote6(id,data);if(expected&&JSON.stringify(q)!==JSON.stringify(expected))throw Error('Tým nebo týden se změnily. Obnov návrh.');const p=openingById6(id),all=[...p.people,...state.baristaCandidates];
 const released=p.people.filter(x=>!q.pids.includes(x.pid));state.baristaCandidates=state.baristaCandidates.filter(x=>!q.pids.includes(x.pid)).concat(released);p.people=q.pids.map(pid=>all.find(x=>x.pid===pid));p.need=q.need;p.blueprintNeed=q.need;p.blueprint.shifts=[...q.shifts];log('Upraven rezervovaný tým: '+p.name,p.people.length+' lidí · směny '+q.shifts.join(' / ')+'. Nábor a mzdy se zaplatí až ve fázi náboru.');return q;
}
function openingStarterRecoveryQuote6(id){
 const p=openingById6(id);if(!state.bootstrap6?.cashOnly||state.stores.length||state.sold||!p||p.kind!=='cafe'||p.franchise||p.status!=='active'||p.entity||p.phase>=3||p.leaseKind!=='legacy'||(p.blueprint.premises?.deposit||0)>0||state.opening6.projects.filter(x=>x.status==='active').length!==1)throw Error('Zmenšit lze jedinou připravovanou první vlastní kavárnu v základním nájmu před zkouškou.');
 const b=openingQuote5(p.location,'starter',p.blueprint.brand,p.blueprint.blend,{kind:'legacy',space:'starter'}),difference=round(p.paidCapital-b.cost);if(difference<=0)throw Error('Projekt už nemá dražší vybavení nebo prostor, které by šlo vrátit.');const refund=round(difference*.8),writeoff=difference-refund,manager=p.manager?.pid||null;
 return {id,week:state.week,cash:state.cash,capital:p.paidCapital,blueprint:b,shifts:[...p.blueprint.shifts],hired:p.hired,manager,refund,writeoff,after:round(state.cash+refund),rent:b.premises.rent};
}
function recoverOpeningStarter6(id,expected){
 const q=openingStarterRecoveryQuote6(id);if(expected&&JSON.stringify(q)!==JSON.stringify(expected))throw Error('Projekt nebo hotovost se změnily. Obnov nabídku zmenšení.');if(q.after<0)throw Error('Vrácení vybavení už nestačí na splacení záporné hotovosti.');const p=openingById6(id);
 p.blueprint={...q.blueprint,shifts:q.shifts};p.designId='starter';p.paidCapital=q.blueprint.cost;p.holdingRent=q.rent;p.extras+=q.writeoff;state.pendingWriteoff3=(state.pendingWriteoff3||0)+q.writeoff;state.cash+=q.refund;
 if(p.manager){state.talents.push(p.manager);p.manager=null;}state.over=state.cash<0;log('Zmenšena první příprava: '+p.name,money(q.refund)+' vráceno za vybavení před otevřením a menší prostor; '+money(q.writeoff)+' odpis. Další vedení přebírá zakladatel. Nábor, dosavadní nájmy a mzdy se nevrací.');return q;
}
function openingCoffeeAvailable6(p){return p.franchise||p.kind!=='cafe'||state.batches.some(b=>b.blend===p.blueprint.blend&&b.zone===p.city&&b.kg>=.018&&state.week-b.roastedWeek<8)||state.bootstrap6?.orders.some(o=>o.location===p.location&&o.blend===p.blueprint.blend&&o.received===null&&o.due<=state.week);}
function activateOpening6(p){
 if(p.entity)return;let e;
 if(p.kind==='cafe'){
  e=makeStore(p.location,p.blueprint.brand,p.blueprint.blend);e.franchise=p.franchise;
  if(p.franchise){e.manager=person3({...MANAGERS[1]});delete e.crew;}
  else{
   e.equipment={};e.serviceCondition=100;installDesign5(e,p.blueprint.design);e.capital6=p.blueprint.cost-(p.blueprint.premises?.advance||0);e.daily.shifts=[...p.blueprint.shifts];e.daily.auto=false;e.crew.employees=p.people;e.manager=p.manager;planCrew5(e);
   const q=p.blueprint.premises;if(q){Object.assign(e.premises5,{enabled:true,kind:p.leaseKind,space:q.options.space,deposit:q.deposit,signed:p.leaseSigned,term:p.leaseDue-p.leaseSigned,autoRenew:true});if(p.leaseKind==='owned')state.property5.assets.push({id:'building-'+e.id,location:e.id,space:q.options.space,bought:p.created,book:q.price,upkeep:q.upkeep});else Object.assign(e.lease,{rent:p.holdingRent,due:p.leaseDue});}else Object.assign(e.lease,{rent:p.holdingRent,due:p.leaseDue});
   p.trialFault=!p.inspection&&Object.values(p.blueprint.design.equipment).includes('compact');if(p.trialFault){for(const item of Object.values(e.equipment))if(item.model==='compact')item.condition=78;log('Zkušební provoz: závada levného vybavení',p.name+' · stav kompaktních zařízení 78 %, jeden týden zkoušky navíc. Obnovení stavu vyžaduje placený servis.');}
  }
  state.stores.push(e);state.studio5.opening=false;state.market3.exclusive=state.market3.exclusive.filter(a=>a.location!==p.location);
 }else{
  const before=state.cash,mandate=state.expansionBudget;state.cash+=p.blueprint.cost;
  try{e=p.kind==='roaster'?OPENING_BASE6.buyRoaster(p.type,p.name,p.city):OPENING_BASE6.buyBakery5(p.type,p.city);}finally{state.cash=before;state.expansionBudget=mandate;}
  e.manager=p.manager;if(p.kind==='bakery'){e.cost=p.blueprint.cost;state.academy6.teams.find(t=>t.bakery===e.id).people=p.people;}else{e.cost6=p.blueprint.cost;e.openingWorkers6=p.people;}
 }
 p.entity=e.id;p.people=[];p.manager=null;syncEconomicAssets6();log('Začíná zkušební provoz: '+p.name,'Již zaplacené vybavení je instalováno. Omezená poptávka / výrobní kapacita; skutečné mzdy, zásoby a tržby.');
}
const OPENING_PREPARE6=prepareOpeningWeek6;
prepareOpeningWeek6=function(){OPENING_PREPARE6();if(typeof runCoffeeAgreements6==='function')runCoffeeAgreements6();for(const p of (state.opening6?.projects||[]).filter(p=>p.status==='active')){
 p.turnAction='Plánovaný postup';p.turnSteps=1;p.turnAuthor=p.manager?.name||'Zakladatel';p.turnStrategy=openingStyle6(p);
 if(p.phase===1&&p.policy.personal&&p.manager){
  if(p.turnStrategy==='opener'&&p.policy.accelerate&&p.manager.strength.operations>=75){p.turnSteps=2;p.turnAction='Organizace dvou instalačních kroků během jednoho zaplaceného týdne';}
  if(p.turnStrategy==='quality'&&p.policy.quality&&!p.inspection&&p.policy.budget>=1800&&state.cash-1800>=weeklyFixed()*p.policy.reserve){spend(1800);state.pendingExpense3=(state.pendingExpense3||0)+1800;p.extras+=1800;p.spent+=1800;p.inspection=true;p.turnAction='Zaplacená kontrola a seřízení před zkušebním provozem';}
 }
 if(p.phase===2&&!p.blocked&&p.kind==='cafe'&&!p.franchise){const coffee=state.batches.some(b=>b.blend===p.blueprint.blend&&b.zone===p.city&&b.kg>=.018&&state.week-b.roastedWeek<8),incoming=state.bootstrap6?.orders.some(o=>o.location===p.location&&o.blend===p.blueprint.blend&&o.received===null);if(!coffee&&!incoming)p.blocked='Chybí zaplacená káva. Sjednej dodavatele a objednávku v zásobování.';}
 if(p.phase===3&&!p.entity){if(!openingCoffeeAvailable6(p))p.blocked='Zkušební provoz čeká na skutečné doručení zaplacené kávy.';else activateOpening6(p);}
 }};
function openingTrial6(id){return (state.opening6?.projects||[]).find(p=>p.status==='active'&&p.phase===3&&p.entity===id);}
districtDemand6=function(s){return OPENING_BASE6.districtDemand6(s)*(openingTrial6(s.id)?.kind==='cafe'?.35:1);};
roasterCapacity=function(r){return OPENING_BASE6.roasterCapacity(r)*(openingTrial6(r.id)?.kind==='roaster'?.5:1);};
bakeryCapacity5=function(b){return OPENING_BASE6.bakeryCapacity5(b)*(openingTrial6(b.id)?.kind==='bakery'?.5:1);};
function progressOpenings6(week){
 for(const p of (state.opening6?.projects||[]).filter(p=>p.status==='active'&&p.lastTurn<week)){
  p.lastTurn=week;p.elapsed++;const paid=openingTurn6?.paid?.find(x=>x.id===p.id),live=openingLive6(p),operating=paid?paid.operating+(paid.salary+paid.wages)*ECONOMY_RULES6.employer:0;p.operating+=operating;
  const phase=p.phase,steps=p.blocked?0:Math.min(p.turnSteps||1,p.durations[phase]-p.phaseElapsed);p.phaseElapsed+=steps;
  const row={week,phase,steps,author:p.turnAuthor||'Zakladatel',strategy:p.turnStrategy||null,action:p.blocked||p.turnAction||'Plánovaný postup',operating,cost:p.spent||0,expectedEnd:p.plannedEnd,actualElapsed:p.elapsed,trialProfit:live?.last&&openingTurn6?.week===week?(live.last.profit??null):null,trialOutput:live?.last&&openingTurn6?.week===week?(p.kind==='cafe'?live.last.served:p.kind==='roaster'?live.last.output:live.last.produced):null};p.history.push(row);p.history=p.history.slice(-52);
  if(p.blocked)continue;
  if(phase===3){p.trialProgress++;if(p.trialFault&&p.trialProgress===1){p.phaseElapsed=0;p.turnAction='Závada prodlužuje zkoušku o zaplacený týden';continue;}}
  if(p.phaseElapsed>=p.durations[phase]){p.phaseHistory.push({phase,finished:week,elapsed:p.elapsed});p.phaseElapsed=0;if(phase<3)p.phase++;else{p.status='completed';p.closed=week;p.result={planned:p.plannedEnd,actual:week,delay:week-p.plannedEnd,capital:p.paidCapital,expenses:p.admin+p.managerFee+p.recruitment+p.operating+p.extras,trialWeeks:p.trialProgress,profit:live?.last?.profit??null};log('Příprava dokončena: '+p.name,'Provoz přechází na plnou poptávku / kapacitu. Skutečně '+p.elapsed+' týdnů; proti plánu '+p.result.delay+' týdnů.');}}
 }
}
collectDigest6=function(h,...args){progressOpenings6(h.week);const result=OPENING_BASE6.collectDigest6(h,...args);for(const p of (state.opening6?.projects||[]).filter(p=>p.status==='active'||p.closed===h.week)){result.items.push({category:p.blocked?'action':'operations',key:'opening-'+p.id+'-'+h.week,title:p.name+' · '+(p.status==='completed'?'otevřeno':OPENING_PHASES6[p.phase]),text:p.blocked||(p.status==='completed'?'Skutečný termín T'+p.closed+', plán T'+p.plannedEnd+'. Příprava: '+money(p.result.expenses)+' nákladů vedle investice.':p.history.at(-1)?.action||'Příprava pokračuje.'),view:'city',target:p.id,due:null,severity:p.blocked?2:1,pending:Boolean(p.blocked)});}return result;};
digestPending6=function(i){return i.key.startsWith('opening-')?(state.opening6?.projects||[]).some(p=>i.key.startsWith('opening-'+p.id+'-')&&p.status==='active'&&p.blocked):OPENING_BASE6.digestPending6(i);};
nextWeek=function(){guard();if(!state.stores.length&&!hasOpeningWork6())throw Error('Nejdřív vyber prostor a zahaj přípravu první kavárny.');const old=openingTurn6,initial=state.cash;openingTurn6={week:state.week,paid:[]};try{prepareOpeningWeek6();const h=OPENING_BASE6.nextWeek();h.cash=round(state.cash);h.cashChange=round(state.cash-initial);state.opening6.history.push({week:h.week,operating:openingTurn6.paid.reduce((n,r)=>n+r.operating+(r.salary+r.wages)*ECONOMY_RULES6.employer,0),active:(state.opening6?.projects||[]).filter(p=>p.status==='active').length,completed:(state.opening6?.projects||[]).filter(p=>p.closed===h.week&&p.status==='completed').length});state.opening6.history=state.opening6.history.slice(-26);return h;}finally{openingTurn6=old;}};
peopleAll6=function(v=state){return OPENING_BASE6.peopleAll6(v).concat((v.opening6?.projects||[]).filter(p=>p.status==='active').flatMap(p=>p.people.filter(x=>p.kind!=='roaster').map(person=>({person,kind:p.kind==='cafe'?'barista':'baker'}))));};
peopleOwned6=function(){return OPENING_BASE6.peopleOwned6().concat((state.opening6?.projects||[]).filter(p=>p.status==='active'&&p.hired&&p.kind!=='roaster').flatMap(p=>p.people.map(person=>({person,kind:p.kind==='cafe'?'barista':'baker',target:p.id,role:'opening'}))));};
openStore=function(id,brandId=state.brands[0].id,blendId=state.blends[0].id,franchise=false,designId='base',expected,options){const data={location:id,brand:brandId,blend:blendId,franchise,design:designId,options:options||expected?.premises?.options};if(expected){const current=openingQuote5(id,designId,brandId,blendId,data.options);if(JSON.stringify(current)!==JSON.stringify(expected))throw Error('Nabídka prostoru nebo vybavení se změnila.');}return startOpening6('cafe',data);};
buyRoaster=function(type,name,city='Praha'){return startOpening6('roaster',{type,name,city});};
buyBakery5=function(type,city){return startOpening6('bakery',{type,city});};
function openingCancelQuote6(id){const p=openingById6(id);if(!p||p.status!=='active'||p.entity)throw Error('Zrušit lze přípravu před zahájením skutečného provozu.');const q=p.blueprint.premises,deposit=q?.deposit||0,building=q?.price||0,fitout=p.paidCapital-deposit-building,refund=round(deposit+building*.9+Math.max(0,fitout)*.35);return {id,week:state.week,cash:state.cash,capital:p.paidCapital,refund,writeoff:p.paidCapital-refund,phase:p.phase,hired:p.hired,people:p.people.map(p=>p.pid),manager:p.manager?.pid||null};}
function cancelOpening6(id,expected){guard();const q=openingCancelQuote6(id);if(expected&&JSON.stringify(q)!==JSON.stringify(expected))throw Error('Příprava se změnila. Obnov vyúčtování ukončení.');const p=openingById6(id);state.cash+=q.refund;state.pendingWriteoff3=(state.pendingWriteoff3||0)+q.writeoff;const market=p.kind==='cafe'?state.baristaCandidates:p.kind==='bakery'?state.academy6.bakerCandidates:null;if(market)market.push(...p.people);if(p.manager)state.talents.push(p.manager);p.people=[];p.manager=null;p.status='cancelled';p.closed=state.week;p.result={planned:p.plannedEnd,actual:state.week,refund:q.refund,writeoff:q.writeoff};log('Příprava ukončena: '+p.name,'Vráceno '+money(q.refund)+', znehodnocení již zaplaceného majetku '+money(q.writeoff)+'. Lidé jsou znovu dostupní; již zaplacená káva se nevytváří podruhé.');}
REPORT_GROUPS5.openings={name:'Příprava provozů',primary:'operating',secondary:'steps'};
REPORT_FIELDS5.openings={operating:['Prostor, mzdy a odvody','money','sum'],cost:['Zásahy přípravy','money','sum'],steps:['Dokončené kroky fáze','count','sum'],elapsed:['Skutečné týdny přípravy','count','last'],trialProfit:['Výsledek zkušebního provozu','money','sum']};
reportRoster5=function(kind){return kind==='openings'?(state.opening6?.projects||[]).map(p=>({id:p.id,name:p.name,scope:p.city+' · '+(p.status==='active'?OPENING_PHASES6[p.phase]:p.status==='completed'?'Otevřeno':'Ukončeno')})):OPENING_BASE6.reportRoster5(kind);};
const OPENING_NEXT_REPORT6=nextWeek;
nextWeek=function(){const h=OPENING_NEXT_REPORT6();for(const p of state.opening6.projects){const row=p.history.find(r=>r.week===h.week);if(row)state.performance5.at(-1).records.push({kind:'openings',id:p.id,name:p.name,scope:p.city,owner:row.author,issue:row.action,severity:p.blocked?2:0,values:{operating:row.operating,cost:row.cost,steps:row.steps,elapsed:row.actualElapsed,trialProfit:row.trialProfit}});}return h;};
function validateOpeningPart6(v){
 const a=v.opening6,fail=()=>{throw Error('Soubor obsahuje neplatnou přípravu provozu, rezervaci lidí nebo vyúčtování.');},n=(x,min=0,max=1e12)=>Number.isFinite(x)&&x>=min&&x<=max,int=(x,min=0,max=100000)=>Number.isInteger(x)&&n(x,min,max),id=x=>typeof x==='string'&&/^[a-z0-9-]{1,60}$/.test(x),str=(x,max)=>typeof x==='string'&&x.length<=max;
 if(!a||typeof a.started!=='boolean'||!Array.isArray(a.projects)||a.projects.length>119||!Array.isArray(a.history)||a.history.length>26||a.projects.filter(p=>p.status==='active').length>8||new Set(a.projects.map(p=>p.id)).size!==a.projects.length||a.projects.length&&!a.started)fail();
 const reservations=new Set(),entities=new Set();
 for(const p of a.projects){
  if(!p||!id(p.id)||!/^opening-\d+$/.test(p.id)||!['cafe','roaster','bakery'].includes(p.kind)||!['active','completed','cancelled'].includes(p.status)||!CITIES.some(c=>c.name===p.city)||!str(p.name,60)||!int(p.phase,0,3)||!int(p.elapsed)||!int(p.phaseElapsed,0,2)||!Array.isArray(p.durations)||JSON.stringify(p.durations)!=='[1,2,1,1]'||!int(p.created,1,v.week)||p.plannedEnd!==p.created+4||!int(p.lastTurn,p.created-1,v.week-1)||!int(p.need,0,24)||p.blueprintNeed!==p.need||!Array.isArray(p.people)||p.people.length>24||typeof p.franchise!=='boolean'||typeof p.hired!=='boolean'||typeof p.inspection!=='boolean'||typeof p.trialFault!=='boolean'||!int(p.trialProgress,0,2)||!str(p.designId,60)||!n(p.holdingRent)||!int(p.leaseSigned,1,v.week)||!int(p.leaseDue,p.leaseSigned,v.week+104)||!['legacy','flex','standard','secure','owned'].includes(p.leaseKind)||!['paidCapital','admin','managerFee','recruitment','operating','extras','spent'].every(k=>n(p[k]))||p.admin!==8000||!['personal','accelerate','quality'].every(k=>typeof p.policy?.[k]==='boolean')||!int(p.policy.budget,0,50000)||!int(p.policy.reserve,1,8)||p.blocked!==null&&!str(p.blocked,500)||!Array.isArray(p.history)||p.history.length>52||!Array.isArray(p.phaseHistory)||p.phaseHistory.length>4||p.phaseElapsed>=p.durations[p.phase]||p.lastTurn!==p.created+p.elapsed-1||p.phaseHistory.length!==(p.status==='completed'?4:p.phase)||p.phase===3&&!p.hired)fail();
  const b=p.blueprint;if(!b||!n(b.cost,1)||p.paidCapital!==b.cost-(b.premises?.fee||0))fail();
  if(p.kind==='cafe'){
   if(!loc(p.location)||loc(p.location).city!==p.city||!v.brands.some(x=>x.id===b.brand)||!v.blends.some(x=>x.id===b.blend)||!Array.isArray(b.shifts)||b.shifts.length!==3||b.shifts.some(x=>!int(x,0,7))||p.need!==(p.franchise?0:b.shifts.reduce((n,x)=>n+x,0)))fail();
   if(p.franchise){if(b.cost!==round(loc(p.location).setup*.25)||b.design!==null)fail();}else{try{designInfo5(b.design);}catch{fail();}const prop=b.premises;if(prop){const kind=prop.options?.kind,space=prop.options?.space;if(!Object.hasOwn(PREMISES_SPACES5,space)||kind!=='owned'&&!Object.hasOwn(PREMISES_LEASES5,kind)||!['price','rent','deposit','fee','upkeep','advance','setup'].every(k=>n(prop[k],k==='setup'?-1e12:0))||prop.advance!==prop.price+prop.deposit+prop.fee||prop.setup!==round(loc(p.location).setup*(PREMISES_SPACES5[space].setup-1))||kind==='owned'&&(prop.deposit!==0||prop.rent!==0||prop.fee!==round(prop.price*.02))||kind!=='owned'&&(prop.price!==0||prop.deposit!==prop.rent*PREMISES_LEASES5[kind].deposit||prop.fee!==PREMISES_LEASES5[kind].fee||prop.term!==PREMISES_LEASES5[kind].term))fail();}if(Math.abs(b.cost-loc(p.location).setup-studioChanges5(null,b.design,true).cost-(prop?.setup||0)-(prop?.advance||0))>.01)fail();}
   if(p.status==='active'&&!p.entity){if(reservations.has(p.location)||v.stores.some(s=>s.id===p.location)||v.rivals.some(r=>r.stores.includes(p.location)))fail();reservations.add(p.location);}
  }else{const cfg=p.kind==='roaster'?ROASTER_OPTIONS.find(x=>x.id===p.type):Object.hasOwn(BAKERY_TYPES5,p.type)?BAKERY_TYPES5[p.type]:null;if(!cfg||b.cost!==cfg.cost||b.capacity!==cfg.capacity||b.upkeep!==cfg.upkeep||p.location!==null||p.franchise)fail();}
  if(p.entity!==null){if(!id(p.entity)||entities.has(p.entity)||p.phase!==3||p.people.length||p.manager||!p.hired)fail();entities.add(p.entity);const list=p.kind==='cafe'?v.stores:p.kind==='roaster'?v.roasters:v.bakery5.bakeries;if(p.status==='active'&&!list.some(e=>e.id===p.entity))fail();}
  if(p.status==='active'){if(p.closed!==null||p.result!==null||p.phase<2&&p.hired||p.entity&&p.phase!==3)fail();}else if(!int(p.closed,p.created,v.week)||p.people.length||p.manager||!p.result||p.status==='completed'&&(!p.entity||p.phase!==3||p.result.actual!==p.closed||p.result.delay!==p.closed-p.plannedEnd||p.result.capital!==p.paidCapital||p.result.expenses!==p.admin+p.managerFee+p.recruitment+p.operating+p.extras)||p.status==='cancelled'&&(p.entity||!n(p.result.refund)||!n(p.result.writeoff)||Math.abs(p.result.refund+p.result.writeoff-p.paidCapital)>.01))fail();
  let week=p.created-1;for(const row of p.history){if(!int(row.week,week+1,v.week-1)||!int(row.phase,0,3)||!int(row.steps,0,2)||!str(row.author,60)||!str(row.action,500)||row.strategy!==null&&!Object.hasOwn(MANAGER_STRATEGIES6,row.strategy)||!n(row.operating)||!n(row.cost)||row.expectedEnd!==p.plannedEnd||!int(row.actualElapsed,1,p.elapsed)||row.trialProfit!==null&&!n(row.trialProfit,-1e12)||row.trialOutput!==null&&!n(row.trialOutput))fail();week=row.week;}
  for(let i=0;i<p.phaseHistory.length;i++){const step=p.phaseHistory[i];if(step.phase!==i||!int(step.finished,p.created,p.lastTurn)||!int(step.elapsed,1,p.elapsed))fail();}
  if(p.people.some(x=>p.kind==='roaster'&&(!id(x.pid)||!str(x.name,60)||x.payFactor!==1)))fail();
 }
 let week=0;for(const h of a.history){if(!int(h.week,week+1,v.week-1)||!n(h.operating)||!int(h.active,0,8)||!int(h.completed,0,8))fail();week=h.week;}
}
validateSave=function(input){const copy=JSON.parse(JSON.stringify(input));ensureOpening6(copy);const a=copy.opening6;if(!a||!Array.isArray(a.projects)||!Array.isArray(a.history)||a.projects.some(p=>!p||!Array.isArray(p.people)))throw Error('Soubor obsahuje neplatnou přípravu provozu.');const held=[];
 for(const p of a.projects){if(p.manager){copy.talents.push(p.manager);held.push({id:p.id,role:'manager',pids:[p.manager.pid]});p.manager=null;}if(p.people.length&&p.kind!=='roaster'){const key=p.kind==='cafe'?'baristaCandidates':'bakerCandidates',market=p.kind==='cafe'?copy[key]:copy.academy6[key];held.push({id:p.id,role:p.kind,pids:p.people.map(p=>p.pid)});market.push(...p.people);p.people=[];}}
 const v=OPENING_BASE6.validateSave(copy);for(const row of held){const p=v.opening6.projects.find(p=>p.id===row.id),market=row.role==='manager'?v.talents:row.role==='cafe'?v.baristaCandidates:v.academy6.bakerCandidates;const people=row.pids.map(id=>market.splice(market.findIndex(p=>p.pid===id),1)[0]);if(row.role==='manager')p.manager=people[0];else p.people=people;}ensureOpening6(v);validateOpeningPart6(v);if(new Set(peopleAll6(v).map(x=>x.person.pid)).size!==peopleAll6(v).length)throw Error('Osoba má duplicitní rezervaci.');return v;};
