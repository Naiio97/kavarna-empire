# Coffee Tycoon 06.0 — prostorová přestavba

Podle dodaného videa je hlavním pracovním prostorem skutečná 3D čtvrť: moderní budovy, prostorový výběr, otočení/přiblížení kamery, kontextová správa a den/noc. Podrobná ekonomika celé firmy zůstává společná s dosavadními uloženými hrami.

## Požadovaný výsledek a důkazy

| Požadavek | Ověřený výsledek |
|---|---|
| Skutečný 3D svět | WebGL obraz ve skutečném prohlížeči, viditelné střechy, skla, stíny, stromy a doprava. Tažení otáčí kamerou. |
| Budovy propojené s firmou | Kliknutí na střechu vybralo Letnou. Placená příprava měnila budovu; po šesti skutečných týdnech vznikla vlastní kavárna. |
| Kontextové hraní | Příprava 268 000 Kč, dodavatel 3 000 Kč, servis vybraného kávovaru 3 600 Kč a report proběhly přes skutečné UI v oddělené testovací firmě. |
| Upravitelný prostor | Vykreslený půdorys 8 × 6; výběr kávovaru přímo v prostoru; přesun do 0/0 a přidání malého stolku kliknutím. Stolek blokující průchod odmítnut, bezpečná pozice přijata. |
| Platba a vlastní šablona | Uložena šablona „Letná · malý stolek“. Přestavba za 30 500 Kč změnila hotovost z 114 065 na 83 565 Kč právě jednou. Návrh před potvrzením nic nestál. |
| Provoz a historie | Přehrání dne změnilo čas 7:00 → 10:30 a pohyb hostů/pracovníků, peníze zůstaly stejné. Po přestavbě zůstává půdorys uzavřeného T6 původní. |
| Den/noc a ovládání | Skutečně viditelné změny oken, lamp a světlometů. Tažení nevybírá budovy; adaptér testuje i pinch, zrušení a pomocná tlačítka. |
| Celá firma | Zachováno všech 33 stránek. Vizuálně otevřen report firmy, detail kavárny a návrat do světa. Všechny prázdné i naplněné stránky mají DOM regresi. |
| Úzké zobrazení | Prohlížeč 387 × 768: žádný vodorovný přesah, kompaktní přehrávka a rolovací kontext nechávají prostor pro scénu. Široký pohled 1280 × 800. |
| Začátek a soubory | 500 000 Kč, žádná vlastní kavárna ani předvybraná adresa. Import a samostatné HTML obsahující všech 69 skriptů prochází ověřením. |

## Skutečná vizuální kontrola — 5. října 2026

Ověřeno přes autorizovaný in-app prohlížeč na samostatném lokálním původu, bez změny produkčního save uživatele. Snímky v uživatelských výstupech: `kavarna-v6-0-mesto.jpg`, `kavarna-v6-0-interier.jpg`, `kavarna-v6-0-noc.jpg`, `kavarna-v6-0-mobil.jpg`, `kavarna-v6-0-report.jpg`.

Vizuální QA vedla k opravám:
- Odstraněné velké rozmazané obdélníky za panely nad WebGL.
- Menší mobilní panely ponechávají místo pro kameru; při vstupu a zahájení návrhu se kontext vrací nahoru.
- Jednoznačné přístupné názvy formulářových polí a seznamů, ověřené skutečným výběrem podle názvu.
- Detail kavárny má tržby, výsledek a pojmenované odvody, přesčasy, energii, platební poplatky, DPH a odpisy; nezobrazuje „undefined“.
- Renderer používá podporovaný PCFShadowMap místo odstraněného PCFSoftShadowMap.

Lokální testovací HTTP server zpočátku při opakovaném načítání nedoručil některé ze 69 souborů. Pro kontrolu bez staré mezipaměti byl nastaven HTTP/1.1 a fronta 128 spojení; úplné načtení poté obnovilo původní uloženou testovací firmu. Tyto výpadky nebyly vydávány za chyby ekonomiky. Závěrečné načtení a vykreslení nehlásily nové chyby ani varování. Samostatné HTML žádné soubory nedotahuje.

## Automatické ověření a praktické meze

Úplné `npm test`: 725 PASS výstupů včetně dlouhých kampaní. Dodatečné aktuální testy prověřují názvy polí a úplný report. `npm run check` kontroluje všech 69 skriptů. Modelové testy kontrolují platby, neměnné historické půdorysy, neplatné/zastaralé nabídky a import. Geometrické testy skutečné Three objekty, raycast, světla, cesty, jmenné směny a uvolnění zdrojů. Testovací dvojník pro návrat přes historii neprokazuje GPU; skutečné WebGL snímky a interakce mají samostatný důkaz výše.

Tato edice je dokončenou první prostorovou verzí hry. Čtvrti jsou herní uspořádání adres, ne zeměpisně přesné mapy. Veřejná auta jsou dekorace. Osoby ilustrují skutečné souhrny směn a front na průchozích cestách; nejsou záznamem jednotlivých hostů. Vlastní dodávky používají skutečný vůz, řidiče, trasu a doložený náklad. Animace nepřidává další výnosy. Ekonomiku dál posouvá týdenní tah.

Mobilní kontrola je emulace rozměrů prohlížeče; fyzický vícedotykový displej a hardwarový FPS benchmark nebyly měřeny. Budoucí rozšiřování hry není tvrzením, že tato verze je bezchybná nebo poslední.

### Oprava přípravy a přehledů · 5. října 2026

Ve třetím týdnu se rezervovaný tým skutečně spravuje: výběr lidí, uvolnění rezervace a počty směn s pokrytím. Zaplacení náboru stále patří do fáze náboru. Káva má samostatné stavy smlouvy, dodání a zásoby; dodavatel čekající na instalaci negeneruje falešnou výzvu. Změna limitů nebo obnovení dodavatele nevyžaduje novou smlouvu. Historický přehled má jedinou konkrétní akci na zprávu a otevírá konkrétní projekt či smlouvu bez platby.

Prohlížeč ověřil nového zakladatele do T3, změnu ze dvou pracovníků na jednoho s pokrytím 1 / 1 / 0, zachování hotovosti i firmy po obnovení stránky, srovnané řádky přehledu a tři tlačítka nabídky. Mobilní nabídka se vejde do 387 px. Automatická regrese má 726 PASS výstupů; samostatné HTML se ověřuje zvlášť. Nové skutečné snímky jsou `kavarna-v6-0-oprava-*.jpg`.

## Rozpočet prvního provozu · 5. října 2026

Zakladatel má nadále 500 000 Kč. Nabídka první vlastní kavárny předvolí startovací prostor o 36 m² se 16 místy, základní vybavení a vedení zakladatelem; nájem a základní investice odpovídají menšímu provozu. Dodavatel předvolí Sousedskou pražírnu. Rozpočet před zahájením zahrnuje investici, držení prostoru, mzdy s odvody, nábor, sjednání a dvě dodávky kávy, zkoušku bez započtení tržeb a tři týdny fixní provozní rezervy. Nedofinancovaná první varianta se v dialogu nezahájí. Odhad nezaručuje budoucí zisk, počítá s uvedeným dodavatelem a nezahrnuje mimořádné události.

Jedinou první připravovanou vlastní kavárnu v základním nájmu před zkouškou lze zmenšit i při předprovozní platební neschopnosti. Vrací se 80 % rozdílu zaplaceného kapitálu, zbytek se skutečně odepisuje. Nábor, minulé nájmy a mzdy se nevrací. Lidé a dokončené fáze zůstávají, vedení převezme zakladatel. Nejde o automatickou změnu uložené firmy, půjčku ani dodání peněz. Změna nejde opakovat za další refundaci.

`startup-budget.cjs` ověřuje otevření a dvanáct běžných týdnů ve čtyřech pražských lokalitách z původních 500k bez změny cen, dodatečné hotovosti či půjček. Karlín po otevření ponechal 161 709 Kč a během dvanácti týdnů neklesl pod 153 208 Kč. Další scénáře reprodukují původní bankrot před otevřením a ověřují vrácení majetku, jednorázový odpis, zachování týmu, obnovení firmy, import, uvolnění vedoucího a odmítnutí zastaralé nabídky. `startup-budget-interface.cjs` ověřuje skutečné formuláře, blokování drahé první varianty, potvrzení/zrušení zmenšení i všech 33 stránek. Celá regrese má 735 PASS výstupů. Prohlížeč skutečně otevřel Karlín bez dodatečných peněz a ověřil mobilní rozpočet bez přetečení.

## Revize ovládání · 5. října 2026

Mapa i firemní správa používají stejnou stálou lištu. Na mobilu je dole. Více otevře vyhledatelných 33 stránek; zkratky míří přímo na konkrétní správu. Zpět zachovává kontext kavárny a rozepsané formuláře, pokud se firma mezitím nezměnila. Zrušení platby vrací původní dialog. Založení je dvoukrokové s kompaktním rozpočtem; projekt přípravy nabízí další skutečný krok.

Správa týmu je rozdělená na Směny, Pracovníky a Pravidla a výsledky. Dostupnost a školení jsou přímo na kartě člověka. Týden zobrazí malý souhrn, velký přehled otevřeš ručně. Report firmy používá jeden výběr kategorie. Ekonomika a formát uložené hry zůstávají společné.

Celá regrese prošla (736 PASS výstupů); syntaktická kontrola všech 69 skriptů také. Nový `ux-journey.cjs` pokrývá šest nepřerušujících týdnů, zrušení platby, historii, neuložené hodnoty, obnovení nepřečteného reportu a import. Skutečný prohlížeč ověřil 1280 × 800 a 387 × 768, dostupnost pracovníka, hledání, založení Karlína a šest týdnů do otevření bez přidané hotovosti. Nové snímky jsou `kavarna-v6-0-ovladani-lide.png` a `kavarna-v6-0-ovladani-mobil.png`. Podrobnosti a meze ověření uvádí `UX-DESIGN.md`.

## Další prostorová etapa

Aktuální mapa má samostatné stylizované profily všech 18 měst a provozy mají vlastní interiéry. Podrobný aktuální audit požadavků, důkazů a mezí je v `WORLD-DESIGN.md`; výše uvedená měření patří původní prostorové etapě.
