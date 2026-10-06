# Živější kavárny a hlubší řízení celé sítě

Aktuální stav: implementační audit všech šesti částí a hlášek je uzavřený; podrobnosti a meze ověření jsou v DEPTH-AUDIT.md. Následující etapové zápisy zachovávají tehdejší stav.

Plný uživatelský rozsah: všech šest naposledy navržených částí plus oprava spodních hlášek. Cíl se nedokončuje samotnou první etapou. Zachovat staré firmy, placené fyzické zdroje, společné účetnictví, neutrální migrace, současnou navigaci a offline hraní.

| Požadavek | Stav nyní | Podmínka dokončení a důkaz |
|---|---|---|
| Viditelný provoz | Implementováno; závěrečný audit prošel | Skupiny příchozích, skutečná stojící fronta, obsloužení s kávou, sezení a odchody kvůli frontě/místům/kávě/zavření; vyprodané jídlo podle skutečných denních požadavků. Kliknutí vysvětlí stav a skutečný počet. Objekty jsou omezené reprezentativní skupiny desetiminutových intervalů, nikoli nový účetní provoz. Model a skutečná 3D scéna, aktuální rozhraní a prohlížeč; závěrečné prověření skupin a pointer adaptéru viz DEPTH-AUDIT.md. |
| Dispozice a vlastní návrhy | Implementováno; závěrečný audit prošel | Audit průchozích hostovských/pracovních tras a stolů, sdílená úzká místa, porovnání návrhu s provozem, placená vlastní vitrína s technologií pro pečivo. Poloha vitríny přidá čtvrtinu skutečné trasy ke stávajícímu pracovnímu pohybu a tím ovlivní skutečnou obsluhu. Celý návrh lze uložit a zaplatit znovu při otevření; čisté prohlížení/cancel a stale potvrzení. |
| Porady vedení | Implementováno a ověřeno v této etapě | Jmenní skuteční ředitelé připraví důvod, konkrétní akci, cenu, odhad před/po a rezervu. Zakladatel odmítne nebo schválí přesnou aktuální nabídku. Pozdější report uchová tehdejší odhad a skutečný výsledek, s rozlišením dalších vlivů týdne. |
| Experimenty na pobočkách | Implementováno a ověřeno v této etapě | Volba skutečných testovacích a srovnávacích poboček, ceny/receptura/snídaně, trvání a skutečné náklady. Zmrazená výchozí situace a průběžný výsledek, rozdíly mezi skupinami, upozornění na malý nebo narušený vzorek. Po skončení konkrétní schválené zavedení nebo obnovení nastavení bez resetu majetku. |
| Hlubší franšízy a akvizice | Akvizice i franšízy: závěrečný audit prošel | Franšízant jako konkrétní provozovatel se schopnostmi, kontroly kvality a nápravné plány s termíny/náklady/důsledky. Před převzetím platitelná prověrka skutečných poboček, nájmů, vybavení/zásob a týmu; vyjednávání nabídky, aktuální převod jednou a placená integrace do vlastních standardů. |
| Prestiž vlastní kávy | Implementováno; závěrečný audit prošel | Konečné aukční mikroloty s pravým původem, fyzická zásilka/sklad/pražení, limitovaná sklizeň. Soutěž spotřebuje skutečný vlastní autentický vzorek, zaplatí vstup, porovná kvalitu/chuť/čerstvost; důvěra/poptávka jsou omezené a podmíněné dostupnou kávou. Získaná ocenění a šarže mají neměnnou historii a validní import. |
| Hlášky nad spodním menu | Ověřeno v místním prohlížeči | Při týdnu i uložení horní vrstva a skutečný dynamický odstup 12 px od horního okraje spodního menu/týdenního panelu, desktop i mobil. Aktualizace při změně lišty/viewportu; podpora popover top layer pro hlášky v dialogu a fallback z-index. Viditelné 6,5 s, čitelné 16 px, aria status. |

## První etapa — současné důkazy

`tests/cafe-life.cjs` ověřuje čistý rozbor, všechny sousední průchozí cesty, skutečnou změnu obsluhy mezi dvěma polohami vitríny, cenu přestavby, potřebnou technologii, uložený návrh, neplatnou starou nabídku a import. Všech 432 vizuálních snímků zachovává firmu i účetní historii. Denní skutečné nedodané požadavky na jídlo se rozloží mezi časové intervaly podle obsloužených hostů, jejich součet se nemění. Nejde o počet unikátních zákazníků; host už mohl dostat kávu.

`tests/cafe-life-scene.mjs` ověřuje skutečné stage objekty, omezený počet, count/reason, neprůchodné překážky, stojící frontu, geometrii vitríny a odstranění/reset objektů. Původní `game-scene.mjs` a `growth-interface.cjs` také prošly. GPU kreslení samostatný node test nepokrývá.

Prohlížeč místního náhledu: skutečný T31 z oddělené testovací firmy, dva odchody kvůli kávě v 9:00 a skutečná fronta, otevření prostorového návrhu a jeho trasy. Oprava hlášek: mobil 387 × 768, spodní panel začíná y593, hláška končí y581; desktop 1440 × 900, spodní panel y744, hláška končí y732. Jsou v horní vrstvě prohlížeče. Uživatelova produkční firma nebyla nahrazena ani odehrána.

Úplná současná regrese po opravě výkonu a přidání dlouhé/maximální sítě prošla s 793 PASS výstupy včetně souhrnných řádků. Syntaxe všech 73 skriptů a samostatné HTML s placeným šestitýdenním založením a všemi 33 stránkami také prošly. Výstup této etapy zahrnuje první tři části a opravu hlášek. Další etapy mají samostatné migrační, účetní a rozhraní důkazy; jejich stav zůstává otevřený až do úplného auditu všech požadavků.

## Porady vedení — třetí část

Řídicí přehled a kancelář mají vstup do porady. Jedna porada za týden, posledních 26 v archivu, nejvýše jeden konkrétní návrh od každého z pěti skutečně obsazených oddělení. Chybějící ředitel nebo tým nevytváří práci zdarma. HR nabídne dostupný nábor nebo školení, Finance skutečnou jistinu úvěru, Obchod cenu/menu nebo místní marketing, Produkt výzkum konkrétní receptury a IT dosud nefinancovaný projekt. Tato etapa netvrdí optimalizaci všech možných zásahů celé firmy.

Každý návrh obsahuje dobové jméno/PID, skutečný důvod, přesnou cenu, nový pravidelný závazek, chráněnou rezervu fixního provozu/marketingu/IT a blízkých faktur. Jednotýdenní model odehraje kopii celé firmy s fyzickou kávou, týmy, společnými sklady, konkurencí a dosavadními automatikami. Uvnitř kopie se nevytvářejí nepotřebné textové priority; fyzický provoz a účetnictví běží stejně. U skutečného týdne se propočítají pouze tři již vybrané zobrazené priority, jejich pořadí a pravidla se nemění.

Schválení prověří identitu autora, úplný aktuální otisk firmy, cenu a dostupnost celého zásahu, včetně čtvrtletního rozpočtu. Změněný návrh je nutné přepočítat; odmítnutí je zdarma. Dříve schválený odhad se nepřepisuje. Po následujícím týdnu vznikne skutečný report firmy a případné pobočky, IT postupu nebo výzkumu; původní odhad a skutečnost jsou vedle sebe. Skutečnost zahrnuje další zásahy/události, není izolovaným kauzálním důkazem. Neschválené nabídky po týdnu expirují.

Modelové testy ověřují neutrální migraci, autoritu, všech pět skutečných akcí, čisté kopie, ceny/mezd a IT, stejné výsledky odhadu a skutečnosti bez dalšího ručního zásahu, jistinu bez duplicitního nákladu, výzkum bez přepsání hotových šarží, zrušení, čtvrtletní limity bez částečného náboru, změnu ředitele, poškozené importy a skutečné dlouhé/velké firmy. Testovací firmy pro kanceláře a maximální síť jsou předem financované zátěžové scénáře; nedokazují vítěznou kampaň z počátečních 500 000 Kč.

Současné jsdom rozhraní ověřuje reálné vstupy, chybějící podmínky, pět nabídek, bezplatný návrh/cancel/odmítnutí, přesné placené potvrzení, disabled staré nabídky, přepočet, archiv, navigaci a import. Místní WebGL prohlížeč skutečně schválil školení za 5 000 Kč a uzavřel T8: původní odhad −147 517 Kč a 516 hostů odpovídá skutečnému reportu. Desktop 1440 × 900 a mobil 390 × 844; mobilní tabulka se posouvá v sobě, stránka nepřetéká. Produkční firma uživatele nebyla nahrazena ani odehrána.

Akvizice jsou nyní implementované. Prestiž vlastní kávy zůstává otevřená; celý cíl zůstává aktivní.

Doplňující důkaz hlášky při otevřeném dialogu: mobil 390 × 844, neplatný limit porady, otevřený modal; hláška v horní vrstvě končí y766 a spodní menu začíná y778. Neplatný formulář nezaložil další poradu.


## Experimenty — čtvrtá část

Řídicí přehled a kontext vlastní stálé kavárny otevřou experimenty. Dvě skutečné různé skupiny po 1–8 pobočkách, poslední uzavřený týden jako neměnný základ, 2/4/8/12 týdnů měření a rezerva 1–8 týdnů. Test ceny posune pouze nápoje o ±5/10/15/20 Kč. Test kávy vybírá jinou existující recepturu a uchová její tehdejší verzi; nevytváří zásobu ani automaticky nemění dodavatele. Test pečiva zvolí skutečný externí/vlastní odběr, recepturu, kusy, cenu a týdenní limit. Chybějící pec za 48 000 Kč je výslovná část nabídky.

Příprava stojí 3 000 Kč + 2 000 Kč/testovanou pobočku, přes společný marketingový rozpočet a skutečný náklad firmy. Majetek je investice s dosavadními odpisy. Návrh nic neplatí; celý zásah se v izolované kopii prověří včetně rezervy, dostupnosti, kvartálního limitu a boardu. Potvrzení vyžaduje přesně prověřenou aktuální nabídku. Automatika obou skupin drží ceny a volbu kávy; ostatní práce pokračují a jejich změny se zaznamenávají.

Každý skutečný týden uchová dostupnost, lokální výsledek/tržby, hosty, kvalitu, ztráty zásob/kapacity, prodané/nedodané jídlo a náklad odpadu. Chybějící pobočka má prázdné hodnoty a nedoplňuje nulový fiktivní provoz. Report má průměry na pobočku/týden a rozdíl změn testu proti srovnávací skupině. Výchozí stav je jeden poslední skutečný týden, nikoli náhodná přidělená kontrola. Malá skupina, krátké měření, různá okolí/města, změny nabídky/týmu/vybavení/marketingu a skutečné výpadky jsou zřetelná omezení. Společné peníze, kapacity a sklad mohou obě skupiny ovlivnit; report nedokazuje příčinu ani nezaručuje zisk. Příprava centrály a investice jsou uvedeny zvlášť a nepřičítají se podruhé k lokálním nákladům.

Ranní pečivo prodává fyzické zásoby skutečným obslouženým ranním hostům do 11 h. Pozdě dovezené pečivo nevytvoří ranní prodej. Sendviče mají původní plán a prodej, případný zapnutý doprodej po 16 h dál prodává skutečné zbytky se slevou. Původní výroba, gramáže, transport, FIFO, cash a odpad se účtují beze změny. Časové rozložení tržby pečiva a chybějících kusů odpovídá ránu; součty týdne se nemění. Záznam zůstane správný i po změně dnešní nabídky. Editor má svůj aktuální půdorys a nepřehrává hosty z minulého týdne.

Po měření test čeká na rozhodnutí: obnovit jen testovaná nastavení zdarma, ponechat variantu, nebo prověřit konkrétní síťové zavedení. Zásoby, tým, majetek a uplynulé výsledky se neresetují. Zavedení stojí 2 000 Kč + 500 Kč za další pobočku plus chybějící pec. Zahrnuje stále vlastněné testovací pobočky; ty nedostanou cenu podruhé. Změněnou kávovou/jídelní recepturu nelze zavést pod starým testem. Stále probíhající test lze zastavit a obnovit. Nejvýše osm běžících/nevyhodnocených testů a 32 uzavřených archivů; staré firmy dostanou pouze prázdný archiv, bez změny nastavení a peněz. Import prověřuje rozsah, skupiny, časování, účty, varianty, skutečná pole, zachování počtů a chronologii.

`tests/experiments.cjs` má jedenáct scénářů: čisté návrhy a migrace, placené a stale nabídky, rezervy/kvartální rozpočty, skutečné výsledky proti ledgeru, automatické pravomoci, ruční změny a chybějící pobočka, fyzické pečivo/pec/odpad/ranní tržby, 432 čistých snímků včetně odděleného editoru, bezplatné obnovení bez nového nákupu, nedublované zavedení, nulový prodej bez nové kávy, omezený archiv a 18 kaváren s osmi skutečnými souběžnými testy. Vstupní firmy jsou předem financované regresní scénáře, pobočky/lidé/dodávky procházejí placenou přípravou. Nejde o novou zakladatelskou kampaň. `experiments-interface.cjs` ověřuje skutečné formuláře, skupiny, ceny, cancel, stale potvrzení, report, varování, zavedení a pečivo s placenou pecí.

Místní prohlížeč skutečně spustil test ceny za 5 000 Kč na Letné proti Vinohradům, uzavřel T15/T16 a potvrdil zavedení za 2 500 Kč. Report poctivě uvádí dva krátké týdny, různá okolí a týden s nedostatkem kávy. Ranní pečivo zaplatilo 48 000 Kč za pec plus 5 000 Kč přípravy; T17 prodalo 36 kusů a vykázalo 1 524 Kč odpadu. Zastavení bylo zdarma a uložená firma se znovu načetla se dvěma kavárnami a stejnou hotovostí. Desktop 1440 × 900 má dialog 940 px a začíná na nadpisu. Mobil 390 × 844 má tabulku posuvnou uvnitř 309 px, stránka nepřetéká. Žádné browser konzolové chyby. Produkční firma uživatele nebyla nahrazena ani odehrána.

Aktuální úplná regrese úspěšně skončila s 805 PASS výstupy včetně souhrnů; samostatná aktuální sada navíc ověřila osm skutečných souběžných experimentů na 18 pobočkách. Kontrola všech 73 skriptů, offline skutečné placené šestitýdenní otevření a všech 33 stránek také prošly. Renderer se neměnil; používá již sestavený lokální bundle Three. Prestiž vlastní kávy je dál otevřená.


## Akvizice — převzetí a integrace

Placená prověrka trvá dva skutečné týdny a stojí 8 000 Kč plus 2 500 Kč za původně prověřovanou adresu. Eviduje konkrétní pracovní identity a úvazky, skutečné opotřebení vybavení, obnovitelné nájmy a placenou fyzickou kávu. Historické sklady se nedoplňují. Podrobnější evidence majetku a základní nájem s obnovou za 26 týdnů vznikají při začátku evidence; předtím soupeři měli souhrnné náklady a počty pracovníků. Nově placená káva navazuje na jejich existující ekonomiku, používá FIFO, skutečné gramy, odpad a omezenou hotovost. Vliv okolí se započítá před spotřebou. Uzavřená adresa odepisuje skutečné zásoby i zbytkový majetek, uvolňuje jmenné pracovníky a zachovává účetní součty.

Jeden návrh ceny za týden, poplatek 1 500 Kč i při odmítnutí. Přijatá cena platí pouze pro nezměněnou firmu do dalšího týdne. Koupě vyžaduje cenu před převedením cizí hotovosti, místo ve společných skladech, příslušné pravomoci a chráněnou rezervu celé nové sítě. Celý převod se nejdřív prověří v kopii a provede pouze jednou. Přechází skutečný tým, opotřebené vybavení, nájem, zásoby, hotovost a jistina; receptura zachovává původ směsi bez falešného označení vlastní sklizně. Manažeři přejdou do dostupných talentů. Velkoobchodní smlouvy vyžadují nové sjednání.

Přehled převzaté firmy ukazuje aktuální zásobování a přímé placené nastavení dodavatele před dalším týdnem; stará prověrka je rozbalitelný archiv. Integrace umožňuje skutečný uložený návrh, jinou existující směs, servis a jmenné školení. Koordinace stojí 2 000 Kč za pobočku; ostatní změny mají skutečné ceny včetně výkupních kreditů. Zásoby se nevytvářejí volbou receptury. Dva skutečné týdny s 85 % poptávky uchovají jednotlivé výsledky a nedostatky kávy. Výsledky se pozdější dodávkou nepřepisují.

`acquisitions.cjs` ověřuje dvanáct scénářů včetně fyzického FIFO a účetnictví, změněných nabídek a rozpočtů bez částečného převodu, převzatého dluhu, původních identit, skladové kapacity, integrace a kreditů, poškozených importů a dalších 26 skutečných sezónních týdnů s kontrolou importu a spotřeby. Rozhraní ověřuje skutečné formuláře a návazné reporty, zrušení, zastaralá potvrzení, převod jednou, výsledky a přímé zásobování.

Místní prohlížeč: předem financovaná izolovaná testovací firma s placeným založením kavárny, týden 18. Prověrka 15 500 Kč, skutečné týdny 18/19, přijatá nabídka 3 464 899 Kč, převzatá hotovost 1 977 188 Kč a tři pobočky v T20. Integrace 115 360 Kč, skutečné výsledky T20/T21 včetně nedostatků kávy. Následně skutečný dodavatel za poplatek 3 000 Kč a placená dodávka: T23 již prodal 1 800 šálků, v Praze zůstalo 36 kg. Načtení v T20/T22/T24 zachovalo firmu. Desktop 1440 × 900, mobil 390 × 844: žádné vodorovné přetékání, nadpis na začátku dialogu. Nejde o důkaz vítězné zakladatelské kampaně; uživatelova produkční firma nebyla nahrazena ani odehrána.

Obnova uložení: pokud kontrola odmítne místní uloženou firmu, původní obsah se zachová beze změny. Před uložením nové firmy vznikne samostatná záloha; při nedostatku úložiště se původní soubor nepřepíše. Nabídka Více otevře původní text a stažení. Test pokrývá přesný obsah, obnovení stránky, omezené úložiště i běžnou platnou firmu.

Celý uživatelský cíl zůstává aktivní: aukční mikroloty a soutěže vlastní kávy jsou nadále neimplementované.

Aktuální úplná regrese skončila úspěšně s 820 PASS výstupy včetně souhrnů. Samostatná aktuální akviziční sada následně přidala skutečný bankrot a odpisy; všech dvanáct modelových scénářů prošlo. Aktuální rozhraní navíc ověřilo přímé zásobování a čisté zrušení. Syntaxe všech 73 skriptů a samostatné HTML s placeným šestitýdenním založením a všemi 33 stránkami také prošly.


## Franšízy · 6. října 2026

# Franšízy: provozovatel, skutečný výsledek a náprava

Nová franšíza se vybírá přímo z volné adresy při pověsti 65. Nabídka ukáže konkrétního dostupného člověka, jeho provozní/lidské/kávové schopnosti, značku, recepturu, cíle, dodávky a chráněnou rezervu centrály. Externí provozovatel dostane identitu až podpisem; dostupný talent se skutečně přesune ze seznamu. Aktivní provozovatel se nemůže současně stát zaměstnancem centrály nebo soupeře. Zaměstnanecké odvolání a povýšení neobejdou jeho smlouvu.

Centrála platí 25 % základního otevření, původní přípravu za 8 000 Kč, výběr/smlouvu za 12 000 Kč a případný skutečný poplatek dodavatele (místní 3 000 Kč, výběrový 5 000 Kč). Nabídka před potvrzením prověří všechny části v kopii firmy, čtvrtletní limity, pravomoci a rezervu. Zastaralá nabídka a zrušení nezmění peníze, personální rezervace ani zásoby. Příprava trvá standardně pět týdnů; zkouška musí počkat na fyzicky zaplacenou kávu. Zásoba není vytvářena volbou receptury.

Dosavadní franšízy pokračují původním způsobem. Podrobná smlouva je dobrovolný placený krok za 6 000 Kč, který nepřepisuje historii ani nedoplňuje majetek. Předchozí manažer se vrátí mezi skutečné talenty. Nová evidence uložené firmy je neutrální a prázdná.

## Řízení a ekonomika

Cíl a limit místního marketingu lze změnit po prověření zdarma. Nové cíle neupravují zaplacené audity a nápravné plány. Provozovatel řídí směny a ceny podle schopností. Pro cíl výsledku porovná zachování, ceny ±5 Kč a jednu změnu konkrétní směny; pro kapacitu porovná přidání člověka. Odhad používá aktuální fyzickou kávu a stejný model fronty/kapacity, bez slibované budoucí výroby a jídla. Změna musí zlepšit model výsledku nejméně o 300 Kč; kapacitní cíl připustí větší obsluhu při zhoršení nejvýše 5 000 Kč. Nejde o záruku skutečného zisku. Rozhodnutí a skutečný výsledek posledního týdne jsou dohledatelné ve smlouvě.

Skutečný prodej sdílí stávající fyzické FIFO a účetnictví. Centrála přijímá 11 % hrubých tržeb a hradí skutečně spotřebovanou kávu; tento náklad není placen podruhé. Provozovatel má samostatný provozní výsledek před daní a odpisy: čisté tržby po DPH minus licenční poplatek, směnové mzdy, odměna, odvody, nájem, suroviny menu, provoz, energie, marketing, provoz techniky a karetní poplatky. Report nepředstírá hotovostní účet partnera. Směnový tým franšízy má souhrnné počty, nikoli zdarma vytvořené jmenné zaměstnance. Posledních 26 skutečných finančních týdnů je otevřitelných v posuvné tabulce.

## Kontroly a důsledky

Externí kontrola stojí 5 000 Kč a uzavře jeden skutečný následující týden. Uchová dobový standard i skutečnou kvalitu, obsluhu, nedostatky kávy/kapacity a opotřebení. Bez prodaného vzorku je kvalita prázdná a nedostatek kávy se hlásí; nevznikne falešné úspěšné hodnocení. Cíl kvality 60–90, stav techniky alespoň 75 %, nedodání kávy nejvýše 10 % a kapacitní ztráty nejvýše 20 % poptávky.

Nález přidá termín a přímé rozhodnutí do aktuálního týdenního přehledu. Opakovaný audit neposouvá původní termín. Náprava má 2–6 týdnů, cenu skutečných zařízení, volitelné školení +8 kávy za 12 000 Kč, návrh směn za 6 000 Kč a koordinaci/závěrečné ověření za 5 000 Kč. Skutečnou práci zaplatíš nyní; provede se po prvním týdnu. Ověřují se i týdny po provedení. Dodávky a budoucí mzdy pokračují samostatně; plán nevytvoří kávu.

Pozastavená licence neprodává, nespotřebovává kávu a nevytváří licenční tržbu; partnerovi dál běží fixní náklady. Náprava může povolit zkušební obnovení se 70 % poptávky. Plná licence se vrátí až po skutečném splnění původních standardů. Nesplnění nebo prošlý termín vede k pozastavení. Pozastavenou smlouvu lze ukončit za nulové vrácení; partnerovo vybavení se nepřevede zdarma, provozovatel se vrátí mezi talenty a zaplacené zásoby/historie zůstanou. Stejná adresa může později projít novým placeným otevřením; původní uzavřená příprava a smlouva se nepřepisují.

## Současné důkazy

`tests/franchises.cjs`: 20 scénářů neutrální migrace, skutečné identity a fyzické přípravy, plateb a rezerv, účetních součtů, auditu, pozastavení, placené práce a neměnných standardů, chybějící kávy, zrušení/ukončení, pracovní ochrany, týdenního rozhodnutí, starší franšízy, změny cíle, porovnání cen/směn, nového otevření na téže adrese a dalších 28 skutečných sezónních týdnů s importem. Poškozené peníze, identity, časování a nálezy se odmítají bez změny vstupu či firmy.

`tests/franchises-interface.cjs` používá všechny současné skripty a skutečná tlačítka: mapa, správný poplatek dodavatele, návrh/cancel/stale podpis, přesná platba, příprava, oddělený výsledek, placený audit, přímý odkaz týdne, náprava, skutečné obnovení, bezplatná změna cíle a opakované načtení archivu. Samostatné HTML ověřuje všech 75 skriptů, lokální Three, všech 33 stránek a placený šestitýdenní start pouze z 500 000 Kč.

Místní prohlížeč: izolovaná předem financovaná firma, skutečně zaplacené vlastní otevření a dodávky, testovací zpřístupnění pověsti 70. V T8 podpis franšízy za 100 500 Kč, šest skutečných týdnů a obsluha fyzickou kávou. Další samostatný scénář simuluje opotřebení zařízení na 50 % před auditorem: audit za 5 000 Kč uzavřel T14 a zobrazil termín T18. Náprava za 30 120 Kč skutečně splnila T18 s 621 hosty, kvalitou 71 a stavem 98 %. Změna cíle na výsledek v T19 vedla k ranní směně 4 místo 5; model a skutečný partnerský výsledek dosáhly −28 434 Kč při 616 hostech. Ztráta se nezamlčuje a plná licence nezaručuje rentabilitu. Načtení v T20 zachovalo smlouvu, audit a čtyři týdny nápravy. Uživatelova produkční firma nebyla nahrazena ani odehrána.

Desktop 1440 × 900: dialog 900 px a nadpis na začátku. Mobil 390 × 844: stránka 390 px, dialog 345 px bez přetékání; tabulka 600 px se posouvá uvnitř 309 px. Bez chyb a varování konzole. Mobilní kontrola je emulovaný viewport.

Celý poslední cíl zůstává aktivní. Aukční mikroloty a soutěže vlastní kávy ještě zbývají, stejně jako závěrečný audit všech šesti částí a hlášek.

Úplná současná regrese franšízové etapy: 842 PASS výstupů včetně souhrnů. Doplňující okamžité uložení externího provozovatele prošlo; aktuální franšízová sada má 20 scénářů bez další změny herního modelu. Celý cíl zůstává aktivní pro prestiž kávy a závěrečný audit.


## Prestiž vlastní kávy — šestá část

Aktuální implementace, ovládání, skutečné platby/vzorky, původy, výsledky a důkazy jsou v `PRESTIGE.md`. Plný regresní běh úspěšně skončil s 864 PASS výstupy včetně souhrnných řádků. Syntaktická kontrola všech 77 současných skriptů prošla. Další kontrola konkrétní karty limitované edice a jejího skutečného pražení prošla v aktuálním rozhraní i místním WebGL prohlížeči. Celý cíl zůstává aktivní až do závěrečného auditu všech šesti částí, hlášek a aktuálních výstupů.
