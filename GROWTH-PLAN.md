# Coffee Tycoon: živé město a růst firmy

Rozsah: všech pět navržených částí. Implementace je hotová v `dist/growth.js`, `dist/growth-ui.js` a existující 3D scéně. Společným cílem je konkrétní cena, placené fyzické zdroje a jasné ovládání.

| Část | Skutečný výsledek a ovládání |
|---|---|
| Živé město | Mapa → Proudy hostů. Všech 18 měst má kanceláře, školu a zastávku jako klikatelné zdroje. Zapnutí konkrétního města mění poptávku, složení kohort a časové příjezdy do skutečné fronty; automatický návrh směn používá stejné váhy. Ranní/polední/odpolední podíly a blízkost jsou dohledatelné u každé adresy. Všechny nové stavby používají společnou kontrolu souše. |
| Standardy | Řídicí přehled → Řídit růst firmy → Standardy. Vzor uloží skutečný interiér, modely vybavení, menu, směny a kávu pobočky stejné značky. Audit ukazuje rozdíly a cenu. Zakladatel schvaluje neměnný program, celkový limit a rezervu. Jeden krok programu týdně znovu ověří nabídku a platí skutečnou přestavbu; chybějící zaměstnanci a ruční rozpis krok pozastaví. Uložený návrh lze vybrat i při otevírání pobočky. |
| Předplatné | Káva → Kávové předplatné. Uvedený vlastní produkt, hotový e-shop a tým IT. 1–4 sáčky, interval 1 nebo 4 týdny, cena celé zásilky, marketing, limit zákazníků, rezerva, pozastavení a ukončení. FIFO balení má stopu skutečné vlastní kávy; dodavatelská káva se za vlastní nevydává. Poštovné se skutečně platí, sáčky přecházejí do zásilek na cestě, tržba a DPH vzniknou při doručení o týden později. Marketing zákazníky získává postupně; nedostatek zásob, kvalita a cena ovlivňují odchody. Historie odděluje tržbu, zásoby, poštu, poplatek a příspěvek. |
| Coffee truck a dočasná kavárna | Volná adresa → Vyzkoušet coffee truckem; také Růst firmy → Dočasné provozy. Test na 2–12 týdnů, skutečná cena přenosného vybavení a povolení, nábor konkrétních kandidátů a rozpočet zahrnující zásoby, tři týdny provozu a odstupné. Provoz používá stejné skutečné fronty, tým, menu, kávu a účetnictví jako kavárny; truck se na mapě vykresluje jako vozidlo. Lze prodloužit nebo ukončit test. Truck zůstává majetkem, zachová opotřebení i odpisy a může se znovu nasadit; popup vybavení odprodá za skutečnou sníženou hodnotu. Výsledky každého týdne a místo jsou historické. |
| Delegovaná expanze | Růst firmy → Expanze regionů. Skutečný ředitel a kancelář; limit schválených startů, minimální model zisku, maximální návratnost, rezerva a volitelný standard. Ředitel připravuje maximálně tři nabídky regionu a nic sám nekupuje. Nabídka zahrnuje konkrétní lidi, cenu, důvod a model místního výsledku. Schválení platí jednou a rezervuje adresu skutečnou přípravou; káva se později sjedná v povolené fázi. Změna pověření, hotovosti či obsazení zneplatní starou nabídku. Již schválená příprava je dohledatelná i v delší kampani. |

## Společné podmínky

Migrace je neutrální: původní firma, hotovost, zásoby a provozy se zachovají; žádná nová automatika není zapnutá sama. Zakladatel začíná s 500 000 Kč a bez vybraného či vlastního podniku. Prohlížení nabídek nic neplatí. Import ověřuje nové identity, vazby, peníze, součty zásilek, historické výsledky a fyzické rezervace. Týdenní změna hotovosti zahrnuje také automatické kroky růstu a odpovídá týdennímu přehledu.

Model má konečné kapacity: 20 standardů a předplatných, 20 vlastních trucků, 8 současných dočasných provozů, 20 současných programů zavádění. Uchovává posledních 26 týdenních přehledů růstu, 52 výsledků každého trucku, 30 ukončených popupů a 120 doručených skupin zásilek. Aktivní zásilky a schválené přípravy se neztrácejí prořezáním historie.

## Ověření

- `tests/growth.cjs`: 11 modelových scénářů všech pěti oblastí, čisté/stará nabídky, fyzické zdroje, skuteční zaměstnanci, účetnictví a DPH, doručení/pozastavení/výpadek, opotřebený truck a další nasazení, popup odstupné a odprodej, odmítnutí neplatného importu.
- `tests/growth-interface.cjs`: všechny nové cesty, fallback a kliknutí na zdroj hostů, zapnutí města, skutečné potvrzení trucku i zrušení platby, standard a chybějící předpoklady předplatného/regionu, jedinečná ID a import.
- `tests/growth-scene.mjs`: tři zdroje v každém z 18 měst, klikatelné objekty a kotvy popisků, skutečný truck na jeho adrese, žádný nový půdorys ve vodě.
- Syntaktická kontrola 73 skriptů, místní sestavení Three.js a úplná regrese hry skončily úspěšně (`npm test`, 775 řádků PASS včetně souhrnů). Samostatná offline kontrola všech 33 správ a šestitýdenní skutečný start bez dodatečných peněz také prošly.
- Skutečný prohlížeč: zapnutí proudů, kliknutí na mapě, vlastní standard a audit, přesná nabídka trucku a jeho skutečné založení, založení předplatného za 3 500 Kč, expedice T29 a doručení T30. Doručené dvě zásilky spotřebovaly 4 sáčky, poštovné 108 Kč; další čtyři zásilky jsou na cestě a nevytvářejí tržbu. Desktop 1440 × 900 a mobil 390 × 844, bez vodorovného přetečení a chyb/varování konzole. Pokročilé situace používají oddělenou předfinancovanou testovací firmu; uživatelova online firma nebyla nahrazena ani odehrána.

## Meze simulace

Město je schematický model sousedství, nikoli dopravní simulace skutečného města. Zdrojové budovy nejsou nemovitosti ke koupi. Investiční odhad předpokládá placenou místní kávu a dnešní dostupné pracovníky; návratnost nezahrnuje centrálu ani daň celé firmy a není zaručený budoucí výsledek. Dočasný provoz má jednodušší přenosný interiér a nižší návštěvnost; nevytváří libovolné nové pozemky. Předplatné agreguje domácnosti do skupin, zásilky jsou fyzické, adresy jednotlivých domácností se nesimulují. Příspěvek zásilky je před marketingem a fixními náklady firmy. Mobil byl ověřen emulovaným viewportem, nikoli hardwarovým dotykovým benchmarkem.
