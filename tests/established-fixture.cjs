// Historical 05.21 startup fixture for unchanged subsystem regression scenarios.
// It keeps the prior 650k/contract-roaster starting conditions and instant setup;
// the shipping application's cash-only/staged-opening boundary is exercised by
// opening.cjs, opening-interface.cjs and opening-campaign.cjs with all 56 scripts.
// No exported game setting or UI can select this fixture.
const fs=require('fs');
exports.html=()=>fs.readFileSync('dist/index.html','utf8').replace(/<script src="(?:opening|bootstrap)(?:-ui)?\.js"><\/script>\s*/g,'');
