// A pick is a single primary-pointer tap. Camera gestures never select furniture.
export function bindScenePicking(canvas,pick,travel=7){
 const contacts=new Map(),doc=canvas.ownerDocument,view=doc.defaultView;
 const id=e=>e.pointerId??0;
 const down=e=>{
  const primary=e.button===0||e.pointerType==='touch';
  const contact={x:e.clientX,y:e.clientY,moved:false,eligible:primary&&!e.ctrlKey&&!e.metaKey&&!e.altKey};
  contacts.set(id(e),contact);
  if(contacts.size>1)for(const p of contacts.values())p.eligible=false;
 };
 const move=e=>{const p=contacts.get(id(e));if(p&&Math.hypot(e.clientX-p.x,e.clientY-p.y)>travel)p.moved=true;};
 const up=e=>{const p=contacts.get(id(e));contacts.delete(id(e));if(p&&p.eligible&&!p.moved&&Math.hypot(e.clientX-p.x,e.clientY-p.y)<=travel&&e.target===canvas)pick(e);};
 const cancel=e=>contacts.delete(id(e)),reset=()=>contacts.clear();
 canvas.addEventListener('pointerdown',down);
 doc.addEventListener('pointermove',move,true);
 doc.addEventListener('pointerup',up,true);
 doc.addEventListener('pointercancel',cancel,true);
 canvas.addEventListener('lostpointercapture',cancel);
 view?.addEventListener('blur',reset);
 return ()=>{reset();canvas.removeEventListener('pointerdown',down);doc.removeEventListener('pointermove',move,true);doc.removeEventListener('pointerup',up,true);doc.removeEventListener('pointercancel',cancel,true);canvas.removeEventListener('lostpointercapture',cancel);view?.removeEventListener('blur',reset);};
}
