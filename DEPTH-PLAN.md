# Živější kavárny a hlubší řízení celé sítě

Plný uživatelský rozsah: všech šest naposledy navržených částí plus oprava spodních hlášek. Cíl se nedokončuje samotnou první etapou. Zachovat staré firmy, placené fyzické zdroje, společné účetnictví, neutrální migrace, současnou navigaci a offline hraní.

| Požadavek | Stav nyní | Podmínka dokončení a důkaz |
|---|---|---|
| Viditelný provoz | Implementováno a ověřeno; zbývá finální audit celého rozsahu | Skupiny příchozích, skutečná stojící fronta, obsloužení s kávou, sezení a odchody kvůli frontě/místům/kávě/zavření; vyprodané jídlo podle skutečných denních požadavků. Kliknutí vysvětlí stav a skutečný počet. Objekty jsou omezené reprezentativní skupiny desetiminutových intervalů, nikoli nový účetní provoz. Model a skutečná 3D scéna, aktuální rozhraní a prohlížeč; další kontrola dotyku/skupin ještě před finálním dokončením. |
| Dispozice a vlastní návrhy | Implementováno a ověřeno; zbývá finální audit celého rozsahu | Audit průchozích hostovských/pracovních tras a stolů, sdílená úzká místa, porovnání návrhu s provozem, placená vlastní vitrína s technologií pro pečivo. Poloha vitríny přidá čtvrtinu skutečné trasy ke stávajícímu pracovnímu pohybu a tím ovlivní skutečnou obsluhu. Celý návrh lze uložit a zaplatit znovu při otevření; čisté prohlížení/cancel a stale potvrzení. |
| Porady vedení | Implementováno a ověřeno v této etapě | Jmenní skuteční ředitelé připraví důvod, konkrétní akci, cenu, odhad před/po a rezervu. Zakladatel odmítne nebo schválí přesnou aktuální nabídku. Pozdější report uchová tehdejší odhad a skutečný výsledek, s rozlišením dalších vlivů týdne. |
| Experimenty na pobočkách | Ještě neimplementováno | Volba skutečných testovacích a srovnávacích poboček, ceny/receptura/snídaně, trvání a skutečné náklady. Zmrazená výchozí situace a průběžný výsledek, rozdíly mezi skupinami, upozornění na malý nebo narušený vzorek. Po skončení konkrétní schválené zavedení nebo obnovení nastavení bez resetu majetku. |
| Hlubší franšízy a akvizice | Ještě neimplementováno | Franšízant jako konkrétní provozovatel se schopnostmi, kontroly kvality a nápravné plány s termíny/náklady/důsledky. Před převzetím platitelná prověrka skutečných poboček, nájmů, vybavení/zásob a týmu; vyjednávání nabídky, aktuální převod jednou a placená integrace do vlastních standardů. |
| Prestiž vlastní kávy | Ještě neimplementováno | Konečné aukční mikroloty s pravým původem, fyzická zásilka/sklad/pražení, limitovaná sklizeň. Soutěž spotřebuje skutečný vlastní autentický vzorek, zaplatí vstup, porovná kvalitu/chuť/čerstvost; důvěra/poptávka jsou omezené a podmíněné dostupnou kávou. Získaná ocenění a šarže mají neměnnou historii a validní import. |
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

Další tři části (experimenty, hlubší franšízy/akvizice a prestiž vlastní kávy) jsou nadále otevřené a ještě nejsou implementované. Celý cíl zůstává aktivní.

Doplňující důkaz hlášky při otevřeném dialogu: mobil 390 × 844, neplatný limit porady, otevřený modal; hláška v horní vrstvě končí y766 a spodní menu začíná y778. Neplatný formulář nezaložil další poradu.
