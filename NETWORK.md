# Můj panel a pobočky · 6. října 2026

Otevření: **Více → Můj panel a pobočky**, stejná zkratka je na mapě vlastní sítě a v řídicím přehledu. Hledání „řídicí panel“ otevře výsledek i klávesou Enter. Čtyři záložky podporují šipky, Home a End.

## Osobní panel

Vyber ukazatele hotovosti, výsledku firmy, provozní rezervy, obsloužených hostů, kvality a počtu vlastních kaváren. Připni nejvýše osm vlastních poboček a vyber sledování nedostatku kávy, front, míst a ztrát. Nastavení se ukládá se stejnou firmou; zrušení nic nemění. Zisk, hosté a kvalita pocházejí z uzavřeného týdne, hotovost a rezerva ze současného stavu. Rezerva zahrnuje fixní provoz, marketing, projekty a blízké faktury. Není zárukou krytí budoucích proměnlivých výdajů. Rozbor připnuté pobočky se vrací na panel.

## Porovnání poboček

Skutečná historie za 1, 4 nebo 13 týdnů; město; vlastní/historické/současné/ztrátové pobočky; pořadí podle výsledku, hostů, podílu neobsloužených, čekání, kvality, vývoje nebo názvu. Každá karta ukazuje skutečný počet dostupných týdnů. Chybějící historie není nula. Vývoj porovnává průměr na skutečně zaznamenaný týden s předchozím stejně dlouhým obdobím. Místní výsledky nenahrazují finance celé firmy s centrálou, výrobou a daněmi. Historické provozy lze prohlížet; změny se provádějí jen na nynějších vlastních kavárnách. Franšízy mají samostatného provozovatele.

## Hromadné změny

Vyber pobočky a změnu: celé kávové menu +5/−5 Kč, model konkrétního vybavení, nebo servis jednoho typu existujícího zařízení. Ceny jídla nejsou součástí této změny. Volby zásahu, zařízení, limitu a rezervy se zachovají při návratu z nabídky. Náhled ukazuje nákup, výkup starého vybavení, čistou platbu, hotovost poté, týdenní závazky a chráněnou rezervu. Každá pobočka má vlastní cenu a provozní odhad před/po.

Náhled nic nekupuje. Výpočet spotřebuje společnou kávu ve zkušební kopii postupně, takže stejnou fyzickou zásobu neslíbí dvěma provozům. Budoucí počasí, hosté, dodávky a rozhodnutí vedoucích mohou výsledek změnit. Lepší zařízení může zvýšit náklady a snížit zisk. Servis účtuje dosavadní skutečnou cenu; zařízení v plném stavu se přeskočí. Již instalovaný stejný model se nepřekupuje.

Platí strop celé akce, rezerva 1–8 týdnů a původní čtvrtletní rozpočty. Celá akce se předem prověří v kopii a zapíše najednou: pokud druhá pobočka narazí na limit, první se nezaplatí. Změněná firma vyžaduje novou nabídku. Jednou potvrzenou nabídku nelze zaplatit znovu. Automatické vedení může později ceny upravit podle svého povoleného mandátu.

## Provedené změny

Posledních 26 zásahů uchovává cenu každé pobočky a původní odhad. Po uzavření týdne zásahu se doplní skutečný výsledek a hosté; dále se nemění. Tento výsledek zahrnuje i ostatní změny daného týdne a nedokazuje samotný účinek zásahu. Import kontroluje preference, cíle, částky a historii; staré firmy získají pouze neutrální nastavení panelu, žádné nové peníze či vybavení.

## Ověření a meze

Dvanáct modelových scénářů používá skutečně otevřené kavárny a odehrané týdny: archivní součty, filtr a trend, společná fyzická zásoba, přesné ceny/výkup/servis, čtvrtletní limit druhé pobočky bez částečné platby, účetní součty, neplatné a zastaralé nabídky, nezměněná historie a import. Současné ovládání načítá všech 83 skriptů a ověřuje úpravu/zrušení/uložení panelu, hledání a klávesnici, filtry, návrat z rozboru, výběr, náhled, nákup a skutečnou historii po týdnu. Celá regrese prošla; aktuální UI se po posledním doplnění hledání ověřilo zvlášť.

Místní skutečný browser: dvě kavárny Letná a Dejvice, Competition mlýnky v T24 za 126 966 Kč po výkupu, hotovost 19 268 353 → 19 141 387 Kč, týdenní závazky +1 300 Kč. Po uzavření T24 historie uchovala Dejvice −7 710 Kč / 495 hostů a Letná −5 624 Kč / 563 hostů. Obnovení stránky zachovalo obě připnuté kavárny a dokončený zásah. Desktop 1440 × 900 a mobil 390 × 844; panel i porovnání bez vodorovného přetečení. Testovací firma byla předem financovaná; samostatný offline průchod ověřuje otevření za šest skutečných týdnů ze startovních 500 000 Kč bez doplnění kapitálu. Produkční firma při testování nebyla odehrána ani nahrazena. Mobilní viewport není fyzický dotykový či FPS benchmark.

Snímky: kavarna-v6-0-muj-panel.png, kavarna-v6-0-porovnani-pobocek.png, kavarna-v6-0-hromadne-zmeny.png, kavarna-v6-0-panel-mobil.png. Hra má 83 lokálních skriptů a 33 hlavních podrobných obrazovek; nové panely jsou dostupné zkratkami. Offline HTML obsahuje také místní Three renderer a nepotřebuje externí JS/CSS.
