# Přestavba Coffee Tycoonu na prostorovou hru

Cíl uživatele: redesign celé hry a posun od klikačky k hernímu světu, podle přiloženého videa `ScreenRecording_10-04-2026 23-56-02_1.mov`. Video zobrazuje skutečnou 3D čtvrť, otáčení a přibližování kamery, výběr budovy s kontextovou správou, HUD nad scénou a přechod dne/noci. Původní ekonomika, provozy a uložené hry se mají zachovat.

## Požadovaný výsledek a důkazy

| Požadavek | Co prokáže dokončení | Stav |
|---|---|---|
| Hlavním pracovním prostorem je skutečný 3D svět | WebGL scéna s prostorovou geometrií; kamerou lze otáčet a přibližovat; nejde o statický podklad | Implementováno; skutečný WebGL obraz neověřen |
| Budovy jsou skutečné adresy a podniky | Výběr 3D objektu otevře konkrétní adresu/majetek; po skutečném nákupu/spuštění se změní vlastnictví a budova | Model/DOM/geometrie ověřeny; skutečný prostorový klik čeká |
| Kontextové hraní přímo ve scéně | Nabídka prostoru, průzkum, otevření, dodavatel, servis, lidé a report vybrané kavárny fungují nad světem | DOM a skutečné platby ověřeny |
| Vlastní interiér je prostorový a upravitelný | Skutečný půdorys 8×6, výběr a přesun vybavení, přidání/odebrání stolu; návrh/platba/přístupnost/kapacita zůstávají ve stejném modelu | Skutečná přestavba, průchodnost a šablona ověřeny; obraz čeká |
| Živý provoz a pohyb odpovídají firmě | Lidé v interiéru vycházejí ze skutečného rozpisu/fronty/obsluhy, rozvoz z vlastních vozů a zaplacených tras; údaje nevytvářejí dodatečné tržby | Jmenné směny, archivní půdorys a cesty ověřeny; pohyb je ilustrace souhrnů |
| Den/noc a navigace jako ve videu | Světla/okna, pohyb kamery, výběr města, seznam vlastních podniků a orientace; mobilní a klávesnicové ovládání | Geometrie/světla/DOM implementovány; obraz a mobilní dotyk čekají |
| Celá firma zůstává hratelná | Přímá prostorová správa plus dostupná pokročilá správa všech 23 dokončených systémů; společný jazyk ovládání | Všech 33 stránek zachováno, DOM a regresní testy prošly |
| Nový začátek, uložení a offline | Stále jen 500k, žádný vlastní podnik; starý save bez resetu; samostatná offline hra s lokální 3D knihovnou | Start/import/offline ověřeny; všech 69 skriptů lokálně |
| Ověřené vydání | Modelové/regresní testy, ovládání, geometrie/raycast/kamera, skutečný founder tok, offline a úspěšná soukromá publikace. Reálný WebGL obraz musí mít vlastní důkaz; test DOM ani fotografie reference ho nenahrazuje | Publikace první etapy potvrzena; zbývá skutečný WebGL obraz a ovládání |

Přestavba mění hlavní způsob hraní, nepřidává jen další reportovou stránku. Podrobná správa slouží jako zázemí světa. Zákaz dříve odmítnuté automatizace prohlížeče se neobchází; skutečné renderovací ověření vyžaduje dostupnou autorizovanou cestu.

## Edice 06.0 — důkazy první etapy

- `tests/game-world.cjs`: všech 18 měst ze skutečného stavu, žádné počáteční podniky, šestitýdenní skutečné otevření, jmenné směny všech šesti dnů/tří období, čisté návrhy, přesná přestavba, neplatná/stará nabídka bez platby, zařízení a servis.
- `tests/game-scene.mjs`: skutečné Three objekty, zásah paprsku do střechy každé adresy i kávovaru, konečné projekce kamery, osvětlení dne/noci, skutečný a zaparkovaný vůz, 48 polí, jmenné osoby, místa u konkrétních stolů, cesty mimo blokované buňky, opětovné použití osob a uvolnění geometrie. Tento test **nevykresluje WebGL**.
- `tests/game-interface.cjs`: celý zakladatelský tok s 500 000 Kč, čistá/zrušená a placená příprava/dodavatel, původní záznam provozu i po přestavbě, potvrzení 25k přestavby, menší stůl a uložená šablona, model kávovaru/servis, všech pět druhů dalších podniků, klávesnicové formuláře a import. Běží v jsdom se skutečnou větví bez GPU; není důkazem vzhledu.

3D městská čtvrť je herní uspořádání skutečných adres, nikoliv zeměpisně přesná Praha nebo Tokio. Auta veřejného provozu jsou dekorace. Vlastní dodávka jede jen při skutečném řidiči, povolené trase a doloženém nákladu posledního týdne; animace neprokazuje živou aktuální polohu. Lidé přehrávají počty skutečné směny na cestách odvozených z půdorysu; ekonomický model neukládá jednotlivé trajectories hostů. Klikání a animace nepřidávají druhé příjmy.

Celý původní cíl zůstává otevřený: obraz, prostorové ovládání, plynulost a mobilní zobrazení nejsou potvrzené reálným prohlížečem. Edice 06.0 je první hratelná prostorová etapa, nikoliv prohlášení, že je celý redesign dokončen.

Úplné `npm test` prošlo s 724 PASS výstupy včetně regresních kampaní. Následná úprava zachování zaměření časového posuvníku má vlastní nový DOM test a kontrolu syntaxe. Offline ověření samostatného aktuálního souboru prošlo zakladatelským tokem a všemi 33 stránkami.

## Kontrola dotykového výběru

Kontrola zdroje odhalila, že uvolnění druhého prstu nebo návrat tažením do výchozího místa mohly vybrat budovu při ovládání kamery. Výběr nyní vyžaduje jediný primární dotyk bez předchozího pohybu. Více prstů, pravé/střední tlačítko, zrušení kontaktu, uvolnění mimo scénu a ztráta zaměření výběr ruší. `tests/game-picking.mjs` ověřuje skutečný adaptér DOM událostí v jsdom; pohyb kamery a dotyk na reálném displeji stále potřebují kontrolu v prohlížeči.

Kontrola životního cyklu navíc odhalila prázdnou scénu po návratu přes historii prohlížeče: dřívější renderer se uvolnil, ale podpis scény zůstal platný. Obnovení stránky nyní obnoví renderer i data a správně skryje náhradní seznam. DOM test s výslovnou testovací náhradou rendereru prokazuje obnovení a nulovou změnu ekonomiky; neslouží jako GPU důkaz.
