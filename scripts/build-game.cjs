const fs=require('fs');
const {rollup}=require('rollup');
const {nodeResolve}=require('@rollup/plugin-node-resolve');
(async()=>{
  const bundle=await rollup({input:'source/game-renderer.mjs',plugins:[nodeResolve()],onwarn(w,warn){if(w.code!=='CIRCULAR_DEPENDENCY')warn(w);}});
  await bundle.write({file:'dist/game-renderer.js',format:'iife',name:'KavarnaScene',compact:true,banner:'/* Bundled locally; no runtime network dependency.\n'+fs.readFileSync('node_modules/three/LICENSE','utf8')+' */'});
  await bundle.close();
  console.log('Local 3D renderer bundled; no runtime CDN.');
})().catch(e=>{console.error(e);process.exitCode=1;});
