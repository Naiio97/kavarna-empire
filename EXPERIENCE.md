# Obtížnost, kariéry a automatický týden · 6. října 2026

## Ovládání

Více → Obtížnost nabízí Pohodovou, Podnikatele a Experta. Změna pokračuje se stejnou firmou, penězi, lidmi a historií. Mění budoucí poptávku (108 / 100 / 92 %), interval provozních událostí (8 / 6 / 4 týdny) a rozhodování expanze soupeřů (12 / 8 / 6 týdnů). Soupeř potřebuje vlastní peníze a volnou adresu. Stávající smlouvy se změnou obtížnosti nepřepočítávají. Platná potvrzená nabídka má nulový poplatek; zrušení a zastaralé potvrzení nic nemění.

Lidé → Vedení, kariéry a nástupci; také Více → Vedoucí a regiony → Otevřít vedení a nástupce. Přímý vstup mají osobní profily a žádosti v týdenním reportu. Kariéry používají původní konkrétní osoby a jejich povahu, vztah, spokojenost, ambice a paměť.

Po každém skutečně odehraném týdnu se automaticky otevře Týdenní přehled firmy. Nahoře jsou všechny současné nevyřízené žádosti z tohoto týdne, jména, termíny a přímá tlačítka. Následují skutečný výsledek, hotovost, hosté, priority a události. Pokračovat v řízení označí týden jako přečtený. Přehled i archiv lze znovu otevřít tlačítkem Přehled. Historické hodnoty se nepřepisují dnešní firmou; tlačítko otevře dnešní možnosti. Opětovné načtení samo znovu neotevírá starý report. Čisté simulace a náhledy report nevyvolávají. Stejný hook obsluhuje mapu, firemní správu a WebMCP.

Tato etapa mění dřívější režim malého nepřerušujícího souhrnu na uživatelem požadovaný automatický velký přehled. Neobsahuje nové scénáře.

## Skutečné kariéry

Po čtyřech týdnech zkušeností může vzniknout individuální cíl podle povahy: specialista produkt, mentor vedení lidí, organizátor provoz, průkopník regionální odpovědnost. Cíl dovednosti požaduje skutečný pokrok +8, nejvýše 99; region vyžaduje skutečné povýšení. Ambice alespoň 70 mají osm týdnů, nižší dvanáct, a kratší prodlevu do dalšího cíle. Maximálně rozvinutý člověk nedostane nesplnitelnou dovednost nad limit.

Cíl není automatický slib firmy. Zaplacené školení používá skutečný původní rozvoj a cenu (18 000 Kč, s HR 12 000 Kč), mzda trvale mění smluvní závazek, povýšení stojí 20 000 Kč a potřebuje skutečnou dostupnou regionální roli a podmínky. Náhled v kopii ukáže jednorázovou cenu, změnu týdenních nákladů a chráněnou rezervu 1–8 týdnů včetně blízkých splatností. Platba respektuje čtvrtletní limit lidí. Změna firmy zneplatní potvrzení. Kariérní krok zůstává v osobní paměti. Splnění nebo vypršení cíle mění vztah a zachová původní cíl v archivu.

Spokojenost pod 25, nebo vztah pod 15 společně se spokojeností pod 50, vyvolá konkrétní varování. Člověk nezmizí v témže tahu; má tři další skutečné týdny do odchodu. Zotavení na spokojenost alespoň 45 a vztah alespoň 40 výpověď zruší. Při odchodu zůstává identita, zkušenost a historie, odpovědnost je skutečně prázdná. Existující konkurenční nabídky a placené udržení pokračují; tato etapa nedává imunitu proti přestupu.

## Zaplacený nástupce

Vyber současného mentora a konkrétního dostupného kandidáta. Příprava stojí 18 000 Kč, zaúčtuje se jednou jako výdaj a sama nikoho nenajme. Čtyři budoucí týdny se skutečně vedoucím přidají nejvýše jeden bod konkrétní dovednosti za týden. Archiv uchová datum a stav před/po. Při odchodu původního mentora je výcvik pozastavený. Kandidát může být přijat jinam; potom se plán označí nedostupný. Zrušení zastaví další výcvik, zachová zaplacenou historii a již získané dovednosti, bez vrácení poplatku.

Připravený nástupce se objeví jako konkrétní žádost v týdenním reportu. Jmenování vyžaduje výslovné potvrzení skutečného náboru a změny pravidelných mezd, s rezervou, čtvrtletním limitem a kontrolou zastaralé nabídky. Lze potvrdit i dřívější převzetí: dialog výslovně ukazuje například 0/4 týdny a člověk dostane jen současné skutečné dovednosti. Nevyrobí se zbývající výcvik. Původní člověk se uchová, kandidát nezůstane současně na trhu práce. Kavárna, pražírna, plantáž, pekárna, region, vedení oddělení a akademie používají svoje původní skutečné náborové a mzdové funkce. Franšízový tým řídí partner.

## Ověření a meze

`tests/experience.cjs`: 16 modelových případů – neutrální migrace, skutečná poptávka tří obtížností, potvrzení bez restartu, konkrétní cíl/ambice, čistá a zaplacená změna dovedností, neměnný archiv, tři skutečné týdny výpovědi, zotavení, čtyři doložené týdny výcviku, přesný nábor/zaúčtování jednou, předčasné jmenování, pozastavený mentor/nedostupný kandidát, rezerva/čtvrtletní limit/zastaralé potvrzení a poškozené importy. Dlouhá část odehraje 30 skutečných týdnů a průběžně prověří import. Izolovaná firma je předfinancovaná; otevření, dodavatel, nábor i udržení konkurenčně osloveného manažera jsou skutečně placené.

`tests/experience-interface.cjs`: všech 79 současných skriptů, skutečná tlačítka obtížnosti, zrušení bez změny, osm automaticky otevřených týdnů, označení přečteného reportu, přímý vstup Lidé, rozvojové školení, placená příprava, čtyři skutečné týdny, přímá týdenní žádost, zaplacený nábor a předčasná varianta s výslovným varováním, import a tichý náhled. Existující zakladatelské UI testy ověřují automatický report i před otevřením první kavárny bez přidaných peněz.

Skutečný místní prohlížeč používá oddělenou předfinancovanou firmu s placeným založením, dodavatelem a vedoucím. Odehrání T12 samo otevřelo čtyři aktuální požadavky včetně jmenné výpovědi, kariérního cíle a žádosti baristy. Přímá žádost otevřela stejnou osobu. Příprava Davida Veselého ubrala přesně 18 000 Kč; předčasné jmenování 12 000 Kč a zachovalo 0/4 týdny výcviku. Výsledný dialog zůstává otevřený. Desktop 1440 × 900 a emulovaný mobil 390 × 844, mobilní stránka bez vodorovného přetečení, dialog 358 px. Žádost má na desktopu textový sloupec 715 px; mobilní text 320 px a tlačítko na dalším řádku. Odehrání T13 přes WebMCP také samo otevřelo přehled a skutečný výsledek jmenování. Změna na Expert zachovala firmu a hotovost. Konzole bez varování a chyb. Produkční firma uživatele nebyla nahrazena ani odehrána.

Kariéry jsou herní pravidla; neprobíhá jazykový model ani nekonečné generování biografií. Fiktivní povahy a vztahy navazují na již existující model, žádosti jsou konkrétní měřitelné cíle. Čtyři týdny výcviku nezaručí nejvyšší kvalifikaci. Obtížnost nenahrazuje provozní rozhodnutí ani neodpouští reálné náklady.

## Závěrečná kontrola etapy

Všechny sady uvedené v `npm test` byly dokončené úspěšně. Při přechodu na automatický report byly staré UI očekávání upravené v zakladatelském toku, mapě, vedení a franšízách: přečíst/uzavřít skutečný automatický report před dalším dialogem. Regrese byla dokončená po těchto cílených opravách, navazující sady se spouštěly od poslední opravené chyby. Poslední ověření: 16 nových modelových případů, současné 79skriptové ovládání, syntaxe všech skriptů a čistý Git diff. Samostatné offline HTML ověřuje všech 79 vložených skriptů, 33 stránek, skutečné šestitýdenní otevření z 500 000 Kč bez přidaného kapitálu, přetrvání uložené firmy a žádné externí JS/CSS. Browser ověřuje skutečný WebGL náhled a výše uvedené dialogy; mobil je emulovaný viewport.
