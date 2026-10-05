# Ovládání firmy — Coffee Tycoon 06.0

Revize 5. října 2026 reaguje na nepřehledné menu, obtížnou správu lidí, ztracená rozpracovaná pole a přerušování hry týdenním dialogem.

## Jedna navigace ve světě i správě

Stálá lišta nabízí Mapu, Kavárny, Kávu, Jídlo, Lidi, Firmu a Více. Na počítači je vlevo, na mobilu dole; aktivní cíl je označen. Více otevře vyhledatelný přehled všech 33 stránek v osmi oblastech a uložení/import firmy. Hledání přijímá více slov bez diakritiky a přímé podstránky (dovolená, akademie, 250g produkty, pekárenská flotila, rozpočet). Enter otevře první odpovídající cíl. Cmd/Ctrl + K otevře samostatné hledání.

Stránka ukazuje pouze místní navigaci aktuální oblasti. Při správě vybrané kavárny ji nahradí kontext s týmem, nabídkou, dodávkami a provozem. Návrat do kavárny obnoví odpovídající svět.

## Návraty a formuláře

Zpět má vlastní historii osmi posledních obrazovek. Uchová kontext města, interiéru, návrhu, podstránky a posunu. Návrat na nezměněnou firmu obnoví rozepsaná pole a původní obsluhu formulářů. Po skutečné změně firmy se sestaví aktuální ovládání, aby nevracelo zastaralé nabídky. Pouhé označení reportu za přečtený formuláře nezneplatňuje. Import vymaže starou historii.

Zrušení placeného potvrzení, jeho křížek nebo Escape vrátí původní dialog včetně nastavení, posunu a fokusu. Platba stále probíhá pouze původním výslovným potvrzením; navigace nekupuje zásoby ani lidi.

## Kratší příprava a správa

Založení má dvě části: základní volbu a kontrolu rozpočtu. Nájemní režim, vedení a směny jsou v pokročilém nastavení. Rozpočet ukazuje čtyři hlavní čísla a případný nedostatek; podrobnosti lze rozbalit. Zpět zachová volby. Bezpečnostní kontrola první kavárny a skutečná ekonomika zůstávají stejné.

Panel přípravy nabízí nejprve skutečný další krok. Při sjednané kávě dovolí pokračovat týdnem; chybějící dodávky otevře přímo. Detaily rozpočtu a plánu se rozbalují podle potřeby. Seznam Podniky obsahuje i připravované kavárny.

Lidé mají podstránky Směny, Pracovníci a Pravidla a výsledky. Karta pracovníka ukazuje mzdu a dovednosti, přímo otevírá dostupnost a školení. Další správu lze rozbalit. Příprava dál používá skutečné rezervace lidí a nábor účtuje až v příslušné fázi. Pekárna, finance, sídlo a logistika zachovávají své podstránky a rozepsaná pole.

## Týden a reporty

Po týdnu se objeví malý souhrn výsledku, obsloužených a upozornění. Neotevírá automaticky velký dialog a nezastavuje práci; týdenní přehled se otevře ručně. Samotné vykreslení ani obnovení uložené hry neoznačuje přehled za přečtený. Výslovné přečtení/zavření souhrnu používá dosavadní evidenci.

Firemní report má jeden výběr kategorie místo dlouhé řady stejně výrazných tlačítek. Reporty a údržba zůstávají dostupné v horní liště, s opraveným zarovnáním na mobilu.

## Ověření

Ekonomický model a struktura uložené firmy se touto revizí nemění. Celá regrese prošla; kontrola syntaxe načítá 69 skriptů. `ux-journey.cjs` ověřuje dvoukrokové založení, zachování dialogu po zrušení platby, přesnou dodavatelskou platbu, šest nepřerušujících tahů, ruční přečtení, obnovení s nepřečteným reportem, návrat do návrhu interiéru, rozepsaná pole, zneplatnění po změně firmy, hledání a import. Dosavadní testy ověřují všech 33 prázdných i naplněných stránek a historické ekonomické kampaně.

Skutečný prohlížeč ověřil placené založení Karlína z původních 500 000 Kč, šest týdnů do otevření s 161 709 Kč, pracovníky a dialog dostupnosti, navazující správu a reporty. Rozměry 1280 × 800 a 387 × 768 byly vizuálně zkontrolovány; mobilní dokument neměl vodorovný přesah, pevná lišta zůstala dostupná. Konzole závěrečného načtení neměla chyby ani varování. Mobilní kontrola emuluje rozměry prohlížeče, nikoli fyzický dotykový displej.

Snímky: `kavarna-v6-0-ovladani-lide.png`, `kavarna-v6-0-ovladani-mobil.png`. Samostatné offline HTML obsahuje všech 69 skriptů, styly i lokální Three.js.
