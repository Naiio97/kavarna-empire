const fs=require('fs'),path=require('path');
const output=path.resolve(process.argv[2]||'../../outputs');fs.mkdirSync(output,{recursive:true});
let html=fs.readFileSync('dist/index.html','utf8');html=html.replace('<link rel="stylesheet" href="style.css">',()=>'<style>'+fs.readFileSync('dist/style.css','utf8')+'</style>');
for(const file of [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(x=>x[1]))html=html.replace('<script src="'+file+'"></script>',()=>'<script>'+fs.readFileSync('dist/'+file,'utf8').replace(/<\/script/gi,'<\\/script')+'</script>');
if(/<script\s+src=|<link[^>]+stylesheet|@import\s/.test(html))throw Error('Offline artifact still needs external assets.');
for(const name of ['kavarna-v5-27.html','kavarna.html'])fs.writeFileSync(path.join(output,name),html);
console.log('Offline game created: '+path.join(output,'kavarna-v5-27.html')+' ('+Buffer.byteLength(html)+' bytes)');
