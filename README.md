# Kavárna — edice 03

Česká tahová strategie o celé kávové firmě. Jeden tah znamená týden. Bez účtu, placených služeb, klíčů nebo externích závislostí při hraní.

## Herní systémy

- 18 měst, 111 adres, pět typů hostů, franšízy, tři soupeři a akvizice.
- Kanceláře, board a pět oddělení: HR, Finance, Obchod, Produkt a IT.
- Vlastní plantáže, růst a sklizně, receptury, obaly, branding kávy i kaváren.
- Pražírny se směnami, kapacitou, lidmi, údržbou, prioritami a výrobními reporty.
- Sedm položek menu, suroviny, gramáž, příprava, jídlo a devět investic do vybavení.
- Kariéry vedoucích, školení, mzdy, spokojenost, povýšení a konkurenční nabídky.
- Pět druhů provozních problémů se třemi řešeními a omezenými pravomocemi vedení.
- Městské zásoby, sklady, přepravní trasy, čerstvost šarží a dodavatelské smlouvy.
- Aukce adres, prioritní dodávky soupeřů a nabídky na odkup vlastní firmy.
- Plánovač šesti typů investic se třemi variantami poptávky a horizontem 4–26 týdnů.
- Čtyři kampaně a tři obtížnosti. Po splnění cíle lze pokračovat.
- Automatické místní ukládání, export/import a migrace verzí 1 a 2.

## Spuštění a kontrola

`npm ci`, `npm run check`, `npm test`. Pro místní hraní `npm run dev` a http://localhost:4173.

`node scripts/package-offline.cjs /absolutni/cesta` vytvoří samostatné HTML se všemi styly a skripty. Hosting používá soubory z `dist/` a existující konfiguraci `.openai/hosting.json`.

## Struktura

`engine.js` obsahuje základní ekonomiku. `tycoon.js` propojuje provoz, kariéry, logistiku, události, kampaně a plánování s týdenní simulací. `app.js` tvoří základ rozhraní, `tycoon-ui.js` jeho rozšíření. Skripty se načítají v tomto pořadí jako klasické skripty se sdíleným stavem.

Testy zahrnují 38 scénářů ekonomiky, ovládání 15 obrazovek, migrace a čtyři rozšířené kampaně dlouhé celkem 530 týdnů. Další 120týdenní test chrání původní ekonomiku. Kontrola rozhraní používá jsdom a nenahrazuje vizuální test v reálném prohlížeči.

Jde o herní ekonomický model v Kč. Zjednodušuje daně, odpisy, místní měny a chování hostů; prodejní mix vzniká rozdělením agregované poptávky. Soupeři rozhodují podle svých zdrojů a pravidel simulace. Plánovač používá kopii skutečné firmy, včetně jejího generátoru událostí. Předpokládá pokračování nastavených pravidel bez budoucích ručních zásahů.
