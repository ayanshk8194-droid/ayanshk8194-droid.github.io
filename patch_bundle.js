const fs = require('fs');
let content = fs.readFileSync('app.bundle.js', 'utf8');

// 1. Fix asset loading error
const target1 = '.catch(a)})))}';
const replacement1 = '.catch(()=>{i(null)})))}';

if (content.includes(target1)) {
    content = content.replace(target1, replacement1);
    console.log("Patch 1 (asset loading) applied successfully!");
}

// 2. Add window.onGameEnd hook when game finishes
const target2 = 'nt.play()),Yn("end-game"';
const replacement2 = 'nt.play()),window.onGameEnd&&window.onGameEnd(ke.score),Yn("end-game"';

if (content.includes(target2)) {
    content = content.replace(target2, replacement2);
    console.log("Patch 2 (onGameEnd hook) applied successfully!");
}

fs.writeFileSync('app.bundle.js', content, 'utf8');
console.log("Done! app.bundle.js has been patched.");