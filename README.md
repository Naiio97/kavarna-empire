# Kavárna — edice 04

Česká tahová strategie o celé kávové firmě. Jeden tah znamená týden. Při hraní nejsou potřeba placené služby, klíče ani instalované závislosti. Online verze používá soukromý přístup Sites; samostatný HTML soubor funguje offline.

## Herní systémy

- 18 měst, 111 adres, pět typů hostů, franšízy, tři soupeři a akvizice.
- Kanceláře, board a HR, Finance, Obchod, Produkt a IT.
- Vlastní plantáže, sklizně, receptury, obaly a branding kávy i kaváren.
- Pražírny se směnami, kapacitou, lidmi, údržbou, prioritami a výrobními reporty.
- Sedm položek menu, suroviny, gramáž, příprava, jídlo a devět investic do vybavení.
- Kariéry vedoucích, školení, mzdy, spokojenost, povýšení a konkurenční nabídky.
- Pět druhů provozních problémů se třemi řešeními a omezenými pravomocemi vedení.
- Městské zásoby, sklady, trasy, čerstvost šarží a dodavatelské smlouvy.
- Aukce adres, prioritní dodávky a nabídky na odkup firmy.
- Plánovač šesti typů investic se třemi variantami poptávky a horizontem 4–26 týdnů.
- Čtyři kampaně a tři obtížnosti. Po splnění cíle lze pokračovat.
- Automatické místní ukládání, export/import a migrace verzí 1, 2 a 3.

## Co přidává edice 04

**Živý provoz:** schéma interiéru, baristé, fronta, hosté u stolů a odchody. Jde o reprezentativní přehrávku posledního týdenního výsledku; postava zastupuje skupinu hostů. Přehrávka nemění tržby ani zásoby. Lze ji zastavit, krokovat nebo vrátit na začátek. Report rozlišuje nedostatek kávy a kapacity, odhaduje čekání a využití sezení.

**Odpovědné vedení:** manažeři navrhují změny výroby, týmu, vybavení, marketingu nebo školení s investicí, týdenním nákladem a měřitelným cílem. Výsledek se hodnotí podle průměru čtyř reportů. Plány potřebují schválení; automatiku lze výslovně povolit s limitem a rezervou. Board zohledňuje úspěšnost posledních osmi plánů. Návrhy se kontrolují proti aktuálnímu autorovi a vybavení.

**Strategičtí soupeři:** CEO, objemová/prémiová/velkoobchodní strategie, volba adres podle návratnosti, rezerva, vlastní výdaje za expanzi a nové výrobní zázemí. Soupeři mohou cílit kampaní na nedostatečně obsloužené hosty. Obchodní partnerství hradí odběratel ze své hotovosti, trvá dvanáct týdnů a používá skutečnou kávu hráče. Jejich vlastní provoz se počítá agregovaným modelem.

**Kávová laboratoř:** experimenty o 5–30 kg zelených zrn spotřebují zásoby, výrobní kapacitu, pražení a degustaci. Oddělená šarže zabírá sklad, stárne a může propadnout. Hodnocení pěti segmentů je dostupné po tahu. Uvedení vytvoří podpisovou recepturu, starší prodejní šarže si ponechají skutečný chuťový profil. Přímá změna receptury zruší platnost staré degustace. Soutěže mají poplatek, ocenění a časový odstup.

**Trhy a kapitál:** čtyři třináctitýdenní hospodářské fáze, obsazenost měst, nájmy obnovované po 26 týdnech a náklady koordinace velké sítě. IT a regionální vedení koordinaci zlevňují. Růstový úvěr vyžaduje rezervu a zisk; při porušení má firma čtyři týdny na nápravu. IPO vyžaduje osm poboček, historii, Finance a zisk; mění kapitál i vlastnictví. Kvartální závazek investorům lze volit na začátku kvartálu. Zpětný odkup zvyšuje podíl zakladatele.

**Osobní příběhy:** čtyři povahy, přetížení, mentoring, rozvoj kávy, bonusy a přísliby povýšení. Podpora má cenu a konkrétní dopady. Nesplněný slib ovlivní spokojenost a důvěru. HR mírní přetížení, mentor pomáhá motivaci a kvalitě provozu, kávový specialista zlepšuje pražení.

## Spuštění a kontrola

`npm ci`, `npm run check`, `npm test`. Pro místní hraní `npm run dev` a http://localhost:4173.

`node scripts/package-offline.cjs /absolutni/cesta` vytvoří samostatné HTML se styly a šesti skripty. Hosting používá `dist/` a stávající `.openai/hosting.json`.

## Struktura

Klasické skripty sdílí jeden stav a načítají se v pořadí `engine.js`, `tycoon.js`, `empire.js`, `app.js`, `tycoon-ui.js`, `empire-ui.js`. První tři tvoří ekonomiku a simulaci, další tři rozhraní. Plánovač simuluje kopii skutečné firmy včetně deterministického generátoru událostí a nových systémů.

Testy zahrnují 64 scénářů ekonomiky, ovládání všech 19 obrazovek, nové akce, migrace tří předchozích verzí a dlouhé kampaně. Rozšířené kampaně edice 04 mají dohromady 570 týdnů, regresní kampaně edice 03 dalších 530 a původní ekonomika 120. Kontrola rozhraní používá jsdom; nenahrazuje vizuální kontrolu v reálném prohlížeči.

Ekonomika je herní model v Kč. Zjednodušuje daně, odpisy, měny, chování hostů i provoz soupeřů. Prodejní mix vychází z agregované poptávky. Manažerské a investorské cíle jsou závazky hodnocené simulací, nikoli záruka dosaženého výsledku. Plánovač předpokládá pokračování současných pravidel bez budoucích ručních zásahů.
