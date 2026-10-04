# Kavárna — edice 05.2

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
- Automatické místní ukládání, export/import a migrace verzí 1, 2, 3 a 4.

## Plán zásobování v edici 05.2

Nová obrazovka **Plán zásobování** nabízí 4, 8 nebo 13 příštích týdnů se základní, nižší (−15 %) nebo vyšší (+15 %) návštěvností. Výhled simuluje kopii firmy stejnými týdenními funkcemi jako hra. Zachová skutečnou firmu, generátor událostí i zásoby; základní výsledek odpovídá pokračování současnými pravidly bez dalších ručních změn. Výhled končí, pokud firma přestane pokračovat.

Přehled ukazuje spotřebu zelených zrn, příjezdy objednávek a sklizní, potřebu a pokrytí kaváren, zásoby v městech, expresní nákupy a využití pražíren. Upozorňuje na výpadky konkrétní směsi, odložené pražení, více než 95 % využití výroby a odpisy zásob či experimentů. Poptávka kaváren v grafu je spotřeba při uskutečnitelné obsluze; ztráty kvůli frontě se neoznačují za nedostatek kávy. Kontrakty a e-shop jsou zahrnuté ve skutečném výrobním a prodejním modelu, nikoli v grafu spotřeby kaváren. Veškeré údaje jsou odhady herního modelu.

Každá pražírna může dostat explicitní pravidla automatické výroby: cílovou zásobu na 0,5–3 týdny odběru, týdenní limit 0–500 000 Kč, hotovostní rezervu 1–8 týdnů a povolení či zákaz expresních nákupů. Limit je společný pro všechny šarže pražírny během tahu a zahrnuje nově placená expresní zrna a zpracování 55 Kč/kg zelené kávy. Mzdy, servis, stávající zásoby a běžné objednávky se účtují samostatně. Nevyhovující celá šarže se odloží; report uvádí důvod. Ruční pražírna se sama nezapne. Provozy bez uloženého plánu používají původní pravidla, včetně původní rezervy a bez nového limitu. Reset plán odstraní.

**Nákupní návrh:** návrh nahradí očekávané expresní nákupy zelených zrn ve druhém a třetím týdnu výhledu. Množství můžeš ručně změnit a porovnat objednávku v další kopii firmy: výpadky, expresní nákupy a konečnou hotovost. Samotný návrh a porovnání nejsou výdaj. Potvrzení objedná každou položku jednou za aktuální cenu, s maximem 2 500 kg na původ a rezervou na dva týdny fixních nákladů. Platnost ceny a týdne se znovu ověří; neplatná položka nebo nedostatek peněz odmítne celý nákup před změnou firmy.

Standardní objednávka přijede v týdnu následujícím po objednání. Nejbližší tah proto může mít nedostatek i po nákupu. Zelená zrna také nenahradí chybějící kapacitu, pražírnu, městskou zásobu či přepravní trasu. Plány i poslední skutečný souhrn zásobování se ukládají ve stávajícím formátu hry verze 5; starší postupy dostávají původní pravidla. Verze aplikace je 5.2.0.

## Report výkonu v edici 05.1

Tlačítko **Otevřít report** je v horní liště, přehled také v navigaci jako **Report firmy**. Šest částí pokrývá kavárny, pražírny, plantáže, lidi a vedení, oddělení a firmu se soupeři. Vyber poslední týden, čtyři týdny nebo čtvrtletí; lze seřadit podle problémů, výsledku nebo názvu. Každý řádek otevře detail s týdenními výsledky, odpovědností a odkazem na řízení. U kavárny jsou i náklady, rozhodnutí a vstup do průběhu dne.

Po tahu se uloží kompaktní záznam skutečných výsledků. Uchovává se 26 týdnů, včetně historických rolí lidí, kteří odešli. Změna osoby nebo otevření pobočky nevytvoří zpětné výsledky. Součty provozů pokrývají pouze týdny s jejich vlastními záznamy; přehled uvádí rozsah dostupných dat. Trend srovnává průměr primárního výsledku za týden s předchozím stejně dlouhým obdobím, s uvedením počtu dostupných týdnů.

Starší uložená firma získá poslední dostupné výsledky provozů a firem. Historické náklady pražírny, výsledky osob a oddělení, které předchozí edice nezaznamenávala, se nevymýšlejí. Pražírny a plantáže zobrazují výrobu, sklizeň a náklady; nemají přiřazený fiktivní prodejní zisk. Soupeři mají skutečnou hotovost a výsledek simulace, jejich samostatné tržby model neukládá. Výsledky svěřených kaváren jsou kontext práce vedoucího, nikoli izolované skóre jeho zásluh.

Report ani jeho detail nemění peníze, zásoby nebo čas. Automatické ukládání a export zahrnují historii, herní formát zůstává verze 5. Verze aplikace je 5.1.0. Výrobní report nyní zahrnuje také ruční pražení dokončené v příslušném týdnu.

## Co přidává edice 05

**Interiér a pracovní cesty:** editor půdorysu 8 × 6 polí. Přesun objednávek, mlýnku, přípravy, výdeje, mytí a zásob mění délku pracovních cest a výkon. Stoly určují dostupná místa; okénko potřebuje zakoupené vybavení a umístění. Půdorys musí mít průchozí dveře a přístup ke všem prvkům. Změny jsou nejprve návrh; platná potvrzená přestavba stojí 25 000 Kč. Historický report si uchovává původní půdorys.

**Skutečné směny:** tři čtyřhodinová období, 0–7 baristů v každém. Mzdy závisí na součtu směn. Kancelářská lokalita má jinou špičku než studentská nebo turistická. Ruční rozpis vypne automatickou změnu počtu lidí; návrh podle špičky je potřeba uložit. Odpovědnost lze výslovně přidělit vedoucímu, oblastnímu nebo provoznímu řediteli.

**Organizace firmy:** šest konkrétních ředitelů — Provoz, HR, Finance, Obchod, Produkt a IT. Vyžadují místo v kanceláři; oboroví ředitelé také obsazené oddělení, provozní ředitel tři kavárny. Identita a kariéra se zachovávají při změně role. Nábor stojí 20 000 Kč a role má mzdu 135 % základu kandidáta. Mandát stanoví týdenní limit a rezervu 1–8 týdnů. Ředitelé skutečně servisují přidělené provozy, rozkládají povolené směny, školí, splácejí dluh, přijímají smlouvy, vyvíjejí receptury a financují IT. Report uvádí autora, provedený zásah nebo důvod odložení a následný výsledek firmy. IT mandát zahajuje nový projekt; již přidělený projektový rozpočet se mění v centrále.

Denní model je společný pro hraní i investiční plánovač. Zásoby se spotřebují jednou, skutečné směny a ředitelské mzdy se objeví v účetnictví. Přehrávka poskytuje diagram stanovišť a časovou osu, nikoli individuální 3D animaci každého hosta.

## Co přidává edice 04

**Živý provoz:** šest skutečných dnů od 7 do 19 hodin, po desetiminutových intervalech. Týdenní počet obsloužených nyní určuje denní průběh front, práce, sezení a zavírání. Nedostatek kávy se promítne do skutečných prodejů. Časová osa a půdorys přehrávají poslední dokončený týden bez změn peněz nebo zásob. Každá kavárna má svůj přehled příchodů, obsluhy, odchodů a tržeb.

**Odpovědné vedení:** manažeři navrhují změny výroby, týmu, vybavení, marketingu nebo školení s investicí, týdenním nákladem a měřitelným cílem. Výsledek se hodnotí podle průměru čtyř reportů. Plány potřebují schválení; automatiku lze výslovně povolit s limitem a rezervou. Board zohledňuje úspěšnost posledních osmi plánů. Návrhy se kontrolují proti aktuálnímu autorovi a vybavení.

**Strategičtí soupeři:** CEO, objemová/prémiová/velkoobchodní strategie, volba adres podle návratnosti, rezerva, vlastní výdaje za expanzi a nové výrobní zázemí. Soupeři mohou cílit kampaní na nedostatečně obsloužené hosty. Obchodní partnerství hradí odběratel ze své hotovosti, trvá dvanáct týdnů a používá skutečnou kávu hráče. Jejich vlastní provoz se počítá agregovaným modelem.

**Kávová laboratoř:** experimenty o 5–30 kg zelených zrn spotřebují zásoby, výrobní kapacitu, pražení a degustaci. Oddělená šarže zabírá sklad, stárne a může propadnout. Hodnocení pěti segmentů je dostupné po tahu. Uvedení vytvoří podpisovou recepturu, starší prodejní šarže si ponechají skutečný chuťový profil. Přímá změna receptury zruší platnost staré degustace. Soutěže mají poplatek, ocenění a časový odstup.

**Trhy a kapitál:** čtyři třináctitýdenní hospodářské fáze, obsazenost měst, nájmy obnovované po 26 týdnech a náklady koordinace velké sítě. IT a regionální vedení koordinaci zlevňují. Růstový úvěr vyžaduje rezervu a zisk; při porušení má firma čtyři týdny na nápravu. IPO vyžaduje osm poboček, historii, Finance a zisk; mění kapitál i vlastnictví. Kvartální závazek investorům lze volit na začátku kvartálu. Zpětný odkup zvyšuje podíl zakladatele.

**Osobní příběhy:** čtyři povahy, přetížení, mentoring, rozvoj kávy, bonusy a přísliby povýšení. Podpora má cenu a konkrétní dopady. Nesplněný slib ovlivní spokojenost a důvěru. HR mírní přetížení, mentor pomáhá motivaci a kvalitě provozu, kávový specialista zlepšuje pražení.

## Spuštění a kontrola

`npm ci`, `npm run check`, `npm test`. Pro místní hraní `npm run dev` a http://localhost:4173.

`node scripts/package-offline.cjs /absolutni/cesta` vytvoří samostatné HTML se styly a dvanácti skripty. Hosting používá `dist/` a stávající `.openai/hosting.json`.

## Struktura

Klasické skripty sdílí jeden stav a načítají se v pořadí `engine.js`, `tycoon.js`, `empire.js`, `operations.js`, `reports.js`, `supply.js`, `app.js`, `tycoon-ui.js`, `empire-ui.js`, `operations-ui.js`, `reports-ui.js`, `supply-ui.js`. Prvních šest tvoří ekonomiku, simulaci, reporty a zásobování; dalších šest rozhraní. Plánovač simuluje kopii skutečné firmy včetně deterministického generátoru událostí a nových systémů.

Testy zahrnují 107 scénářů ekonomiky, reportů a zásobování, ovládání všech 23 obrazovek, úpravy půdorysu klávesnicí, směny, mandáty, migrace čtyř předchozích verzí a dlouhé kampaně. Kampaně edice 05 mají dohromady 570 týdnů, regresní kampaně předchozích edic dalších 1 220. Samostatné HTML má vlastní ověření skriptů, týdenního tahu a všech obrazovek. Kontrola rozhraní používá jsdom; vizuální kontrola v reálném prohlížeči nebyla dostupná.

Ekonomika je herní model v Kč. Zjednodušuje daně, odpisy, měny, chování hostů i provoz soupeřů. Prodejní mix vychází z agregované poptávky. Manažerské a investorské cíle jsou závazky hodnocené simulací, nikoli záruka dosaženého výsledku. Plánovač předpokládá pokračování současných pravidel bez budoucích ručních zásahů.
