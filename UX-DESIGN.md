# Ovládání firmy — edice 05.27

## Audit a změna

Původní navigace vystavovala 33 stejně výrazných stránek v dlouhém seznamu. Pekárna měla devět velkých sekcí za sebou; finance kombinovaly plán, vysvětlení zisku, peníze, závazky i opakovanou správu kontraktů. Sídlo míchalo pořízení prostor, vedoucí, oddělení a digitální projekty. Horní lišta měla současně postup tahu, servis a několik reportů.

Nová navigace má osm nativně rozbalitelných oblastí. Při otevření stránky se rozbalí odpovídající oblast a aktuální stránka má `aria-current`. Ostatní oblasti zůstávají dostupné. Horní místní navigace ukazuje pouze stránky vybrané oblasti; cesta a název dávají stejný kontext. Výchozí mapa zůstává bez vybrané adresy a firma bez majetku. Průvodce prvním podnikem odvozuje své kroky ze skutečných příprav a dodavatelů.

| Oblast | Obsah |
|---|---|
| Přehled | Výsledky, kalendář, problémy, cíle/scénáře |
| Kavárny | Síť, menu/vybavení, návrhy/směny, den, hosté |
| Expanze | Mapa/adresy, nájmy/budovy, soupeři, investice, trhy |
| Káva a zásobování | Receptury/produkty, původ, laboratoř, pražírny, zelená káva, kavárenské dodávky, plantáže, sklady/doprava |
| Jídlo a pekárna | Prodej; výroba/plán; receptury/značka; odběratelé; flotila |
| Lidé a centrála | Týmy/akademie, vedoucí/regiony, sídlo, organizace, řízení, plány |
| Obchod a značky | Kávoví odběratelé, branding/marketing |
| Finance a board | Výsledek; peníze/financování; plán; závazky/obchod; vlastnictví |

## Podstránky a společná správa

Pekárna má pět podstránek, finance čtyři, sídlo tři a logistika dvě. Související karty se přesunou společně; neaktivní panel je opravdu skrytý pomocí `hidden`. Přepnutí panelu nepřekresluje formuláře: rozepsané hodnoty zůstávají, změnu provede až původní Uložit nebo platba. Návrat na stránku připomene poslední podstránku během této relace. Finanční přehled používá jeden souhrn obchodních výsledků a odkazy do skutečné správy odběratelů; kontrakty se v něm znovu needitují. Stávající podstránky produktů a akademie zůstávají součástí jejich společných stránek.

Nabídka **Reporty a údržba** sdružuje firemní report, týdenní přehled a společný servis. Postup týdne zůstává výrazným samostatným tlačítkem. Týdenní popup zůstává automatický a jeho pekárenská reklamace otevře přímo Odběratele. Žádná navigace nekupuje zboží, nepřijímá smlouvu ani nemění ekonomický stav. Označení týdenního přehledu za přečtený zůstává původní výslovnou akcí.

## Vyhledávání

Hledání prochází všechny 33 stránky a konkrétní podstránky: řidiče/flotilu, pekárenské odběratele, 250g produkty, akademii, čtvrtletní rozpočet atd. Přijímá více slov i text bez diakritiky. Přímé podstránky mají přednost před obecnou stránkou. Enter otevře první výsledek; bez výsledku zobrazí vysvětlení a nic nezmění. Ctrl/Cmd + K otevře hledání odkudkoli. Není nutná síť ani externí služba.

## Vzhled, ovládání a přístupnost

Sdílené tokeny ve `style.css`: mezery 8/12/20/28 px, rádius 10 px, sidebar 264 px, jednotná tmavě zelená a neutrální paleta, čitelnější sekundární text a jeden obrys fokusu. Používá systémová písma, zachovává obchodní karty a tabulky. Tabulky se na úzkém prostoru posouvají vodorovně; nevyžadují rozšíření celého dokumentu.

Na šířce do 900 px je navigace pod tlačítkem Menu. Stav tlačítka má `aria-expanded`; výběr stránky menu zavře. Karty a rozdělené sloupce přejdou na jeden sloupec, ukazatele na dva. Nejmenší šířka skládá formulář do jednoho sloupce. Reportová nabídka se zarovná tak, aby nevyčnívala doleva. Omezení pohybu respektuje `prefers-reduced-motion`.

- Oblasti používají nativní `details/summary`, ovladatelné klávesnicí.
- Místní navigace má popis a aktuální stránku.
- Podstránky používají `tablist/tab/tabpanel`, `aria-selected`, vazby na panel a jeden tabulátorem dosažitelný aktivní tab. Šipky, Home a End přepínají panel a fokus; Tab pokračuje do formulářů.
- Vyhledávání má skutečný label a živé výsledky; všechny výsledky jsou tlačítka.
- Dialog se pojmenuje podle nadpisu; otevření přesune fokus dovnitř. Nativní Escape zavírá dialog, pokud běží v prohlížeči. Zavření se vrací k dostupnému původnímu ovládacímu prvku. Přechod na stránku soustředí nadpis.
- Odkaz Přeskočit na správu firmy zkrátí pohyb přes navigaci.

## Migrace a ověření

Ekonomický model, identita provozů a struktura uložené hry se kvůli redesignu nemění. Skupiny a otevřená podstránka jsou stav ovládání této relace. Původní tlačítka a datové identifikátory zůstávají pro navazující reporty a týdenní zprávy. Historická 05.21 testovací sestava vynechá nový UI modul, současné modelové/ovládací/offline testy načítají všech 66 skriptů.

`tests/ux-interface.cjs` ověřuje osm skupin, všech 33 prázdných i naplněných stránek, vazby a stav panelů, klávesnici/fokus, rozepsaná pole bez ekonomické změny, hledání bez diakritiky/přímé cíle/prázdný výsledek, stav mobilního menu, skutečný placený kontrakt, cílovou podstránku týdenního přehledu, centrální servis/report a import. Nedeklaruje pixelovou kontrolu: automatizovaná prohlížečová vizuální kontrola zůstává nedostupná; ovládání se ověřuje v jsdom a responsivní pravidla statickou kontrolou CSS.
