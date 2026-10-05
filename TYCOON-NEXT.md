# Coffee Tycoon – šest oblastí dalšího řízení

Cíl uživatele: „udělej vše co navrhuješ“. Rozsah odpovídá všem šesti návrhům z chatu, nikoli jen novému dashboardu.

1. **Manažeři**: nastavitelný cíl, společný týdenní limit a rezerva, konkrétní pravomoci pro ceny/marketing/směny/lidi/servis/školení/kávu; fyzické zdroje a ruční rozpis; významné změny jako ověřitelné návrhy, jednoznačné schválení/zamítnutí; důvod, cena, předpoklad a skutečný výsledek každého kroku.
2. **Mapa**: vrstvy poptávky, aktuálních nabídkových nájmů, místní konkurence; přímo u adresy investice, odhad hostů a návratnosti, srozumitelné předpoklady; všechny mapy a fallback; průzkum a existující otevření propojené.
3. **Provoz**: skutečné odchody kvůli frontě/místům/zavření/kávě, špičky a poruchy; srovnání návrhů posílení směn, vybavení, menu a rozmístění s cenou a očekávaným přínosem; přímé cesty z kavárny i přehrávky.
4. **Vlastní káva**: pojmenované kolekce/receptury, cílový chuťový profil a skupina zákazníků, pražicí recepty a původ, čerstvost a konzistence skutečných šarží, obal a příběh; dopad skutečné kvality a konzistence na důvěru v značku a zákaznickou poptávku; verzování a fyzický vzorek pro uvedení změny.
5. **Board a oddělení**: cíle a rozpočty pro HR/Finance/Obchod/Produkt/IT, konkrétní odpovědná osoba, měřitelné týdenní výstupy a náklady; skutečné projekty a zásahy, ochrana již sjednaných závazků; historie tehdejších cílů, bez vydávání zisku firmy za přínos jednotlivce.
6. **Přehled týdne**: nejvýše tři prioritní problémy s příčinou a doloženými hodnotami; konkrétní doporučení, cena a očekávaný přínos, včetně dostupnosti/pravomocí; relevantní správa/preview; neměnný historický snímek a současná nabídka odděleně.

Společné podmínky: zachovat firmy a startovní rozpočet, neutrální migrace, placené změny pouze platnou potvrzenou nabídkou či povoleným mandátem, čtvrtletní limity, mzdy a zásoby jsou skutečné. Samotné prohlížení a simulace nic neúčtují. Import kontroluje nové záznamy. Desktop a mobil, WebGL i fallback, nové modelové/DOM/geometrické testy, cílené dlouhé kampaně a úplná regrese, offline balíček a online vydání. Dokončení vyžaduje důkaz ke každému bodu.

Stav: všech šest oblastí implementováno v `dist/tycoon-next.js` a `dist/tycoon-next-ui.js` a připojeno do současné 71skriptové hry. Nové řízení se zapíná jednotlivě; migrace nepřepisuje hotovost, vlastní provozy ani původní pravidla firmy.

## Důkazy a ovládání

| Oblast | Dostupnost a ověřený výsledek |
|---|---|
| Manažeři | Řídicí přehled → Manažeři nebo mapa → vlastní kavárna → Cíl manažera. 8 pravomocí, zisk/obsluha/kvalita, společný týdenní limit včetně nové mzdy a marketingu, rezerva včetně závazků. Model ověřuje skutečné kandidáty, ruční rozpis, nulový limit, zastaralou nabídku, změnu autora/mandátu/zásob, potvrzení právě jednou a následný skutečný výsledek. |
| Mapa | Vrstva Budovy/Poptávka/Nájem/Konkurence/Výsledek a Porovnat adresy. Všech 18 měst používá současné adresy a nabídky. Model kontroluje nulovou změnu firmy i externího účetního kontextu; DOM také fallback. Browser ověřil WebGL popisky a mobilní ovládání. Investiční odhad ukazuje skutečnou přípravu a rezervu; návratnost je podmíněný místní model. |
| Diagnostika | Vlastní kavárna → Provozní rozbor, také z týdenního přehledu. Čtyři skutečné příčiny odchodů, doložené špičky a pracovníci; čisté modelové varianty cen, směn, servisů, školení, vybavení a vlastních dispozic. Placení až platnou konkrétní nabídkou. Zrušení potvrzení nemění firmu. Browser: desktop i 390 × 844, nulové vodorovné přetečení. |
| Káva | Káva → Řídit kolekce. 500 g vlastní autentické kávy, reálná degustace a případná etiketa, čtyři osy chuti, cílová skupina, kvalita, stáří, tolerance, obal/příběh. Model ověřuje smíšený sklad bez spotřeby dodavatelského vzorku, neměnné revize nového pražení, skutečné podání a důvěru i vadný slib. Produkt a jeho sáčky uchovávají revizi. Browser: zrušení zachovalo návrh; uvedení stálo 7 500 Kč a spotřebovalo 500 g; návazný produkt převzal název, obal, značku, příběh a město. |
| Oddělení a board | Řídicí přehled → Oddělení; také přímo stanice v kanceláři. HR, Finance, Obchod, Produkt, IT mají vlastní limit/rezervu/cíl, skutečného ředitele, tým, mzdy, zásah a neměnnou historii. Bez týmu nevzniká práce. Finance splácí skutečné úvěry; IT respektuje již sjednané projekty. Board a původní nákupní pravidla zůstávají ve svých skutečných správách. |
| Týden | Nejvýše tři priority pro různé cíle; skutečné příčiny a tehdejší cena/přínos jsou historické. Tlačítko otevírá dnešní správu a novou nabídku, samo nic nekupuje. Doporučení obsluhy vyžaduje zlepšení služby proti zachování stavu a nevybírá pouze zvýšení ceny. Firma má samostatnou prioritu pro rozdíl výsledku mimo vlastní kavárny. Prohlížeč ověřil aktuální směrování i čitelné ovládání. |

## Kontroly

- `tests/tycoon-next.cjs`: 19 modelových scénářů; fyzické zdroje, skutečné placené změny, neměnná historie, migrace a import, 30 běžných týdnů s aktivním mandátem.
- `tests/tycoon-next-interface.cjs`: 71 skriptů, mapa a fallback, přímé kontextové cesty, změna cílů, zrušení nákupu, starý report vs. nová nabídka, kolekce a nedostatečný vzorek, pokročilé nákupní a boardové ovládání, jedinečná ID.
- Syntaktická kontrola 71 skriptů a lokální Rollup/Three sestavení. Úplná regrese `npm test` prošla s 761 PASS výstupy (včetně souhrnných řádků); nejde o počet jedinečných testů.
- Offline ověření: všech 71 vložených skriptů, žádný externí JS/CSS, všech 33 stránek, skutečné šestitýdenní otevření bez přidaných peněz, zaznamenaný interiér a import firmy.
- Reálný browser: WebGL, vrstvy mapy, nový report a následný provozní rozbor; vlastní kolekce s potvrzenou platbou a fyzickým vzorkem, návazný prodej; desktop a 390 × 844. Konzole bez chyb/varování. Použita oddělená předfinancovaná testovací firma; uživatelova online firma nebyla odehrána ani nahrazena.

Důkazy v balíčku: `kavarna-v6-0-rozhodovaci-mapa.png`, `kavarna-v6-0-priority-rizeni.png`, `kavarna-v6-0-rizeni-mobil.png`.

## Meze modelu

Odhad není garantovaný příští výsledek; pracuje s dnešní dostupnou kávou a posledním známým příspěvkem jídla/balení, nezaručuje další počasí ani sdílenou zásobu. Investiční odhad navíc výslovně modeluje koupenou místní dodávku. Návratnost neobsahuje centrálu ani daň celé firmy. Kávové chuťové sliby patří novým autentickým šaržím, dodavatelská káva sama nebuduje jejich důvěru. Změna výsledku oddělení není důkaz výlučné příčinnosti zásahu ředitele. Mobilní ověření je emulovaný viewport; fyzické vícedotykové zařízení ani hardwarový FPS benchmark nejsou měřené.
