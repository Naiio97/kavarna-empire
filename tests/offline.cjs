const fs=require('fs'),path=require('path'),assert=require('node:assert/strict'),vm=require('vm'),{JSDOM}=require('jsdom');
const file=path.resolve(process.argv[2]||'../../outputs/kavarna-v4.html'),html=fs.readFileSync(file,'utf8');
assert(!/<script\s+src=|<link[^>]+stylesheet|@import\s/.test(html));
const dom=new JSDOM(html,{url:'https://offline-test.invalid/',runScripts:'outside-only'}),w=dom.window;w.scrollTo=()=>{};w.HTMLDialogElement.prototype.showModal=function(){this.open=true};w.HTMLDialogElement.prototype.close=function(){this.open=false};
for(const s of w.document.querySelectorAll('script'))vm.runInContext(s.textContent,dom.getInternalVMContext());
assert.equal(w.document.querySelectorAll('script').length,6);
assert.equal(vm.runInContext('state.version',dom.getInternalVMContext()),4);
w.document.querySelector('#next').click();assert.equal(vm.runInContext('state.week',dom.getInternalVMContext()),2);
for(const b of w.document.querySelectorAll('[data-view]')){b.click();assert(!/undefined|NaN/.test(w.document.querySelector('#content').textContent),b.dataset.view);}
assert.equal(w.document.querySelectorAll('[data-view]').length,19);
console.log('PASS: standalone HTML contains six working scripts, needs no external assets, advances a real week and renders all nineteen views.');dom.window.close();
