# Coffee Tycoon — průběžné dokončení cíle

Cíl je celý seznam uživatele. Hotovo lze označit až po ověření všech bodů v aktuální hře; existující dílčí funkce samy o sobě nestačí. Každá etapa má vlastní modelové a ovládací ověření, dlouhé hraní podle potřeby, zdroje a aktualizovaný online/offline výstup. Stav posledního ověřeného vydání: 05.15 (finanční etapa).

| Bod | Požadovaný výsledek | Stav | Důkaz dokončení |
|---|---|---|---|
| 1 | Reálnější náklady, marže, financování a pozdní vlastnictví budov a plantáží | Ověřeno | 23 scénářů; 38skriptové ovládání všech 33 stránek; 156 týdnů přirozeného zakladatelského růstu, 280 týdnů výroby a banky; offline ověření. README: zdroje a výslovné předpoklady. |
| 2 | Vyskakovací shrnutí důležitých rozhodnutí, nabídek, smluv a přetahování po každém tahu | Čeká | — |
| 3 | Chytřejší soupeři reagující na trh a vlastní skutečné finance | Čeká | — |
| 4 | Vývoj a fyzický prodej vlastních produktů, včetně 250g balení v kavárnách a e-shopu | Čeká | — |
| 5 | Živé městské čtvrti ovlivňující provoz | Čeká | — |
| 6 | Rozšířené osobnosti a navazující příběhy lidí | Čeká | — |
| 7 | Společný servis všech zařízení s přehledem ceny a výsledku | Čeká | — |
| 8 | Osobní strategie manažerů a vysvětlené kroky s odhadem/skutečným výsledkem | Čeká | — |
| 9 | Hledání prostoru, rekonstrukce, nábor, zkušební provoz a důsledky zpoždění/vybavení | Čeká | — |
| 10 | Okolí adresy, kanceláře, školy, turisté, pěší provoz a výstavba | Čeká | — |
| 11 | Placený průzkum s různou přesností a použitelným odhadem konceptu/cen/poptávky | Čeká | — |
| 12 | Konkurenční souboje o adresy, lidi a odběratele s reakcemi hráče | Čeká | — |
| 13 | Akademie baristů, pekařů a vedoucích, příprava před otevřením | Čeká | — |
| 14 | Čtvrtletní plán, skutečné rozpočty oblastí a vysvětlené odchylky boardu | Čeká | — |
| 15 | Otevřitelný rozklad příčin změny výsledku firmy a pobočky | Čeká | — |
| 16 | Pekárenský plán podle historie, zásob, sezóny, rozpočtu, odpadu a priorit odběratelů | Čeká | — |
| 17 | Odpolední slevy, balíčky a darování neprodaného jídla | Čeká | — |
| 18 | Snídaňové/obědové kombinace s nabídkou podle lokality | Čeká | — |
| 19 | Potravinová značka, obaly, sezónní kolekce a sortiment jednotlivých kavárenských značek | Čeká | — |
| 20 | Pekárenský velkoobchod, smlouvy, ranní termíny, čerstvost a reklamace | Čeká | — |
| 21 | Vlastní dodávky/chladicí vozy, řidiči a rozvozové trasy versus externí doprava | Čeká | — |
| 22 | Ověřený redesign s přeskupením navigace, podstránkami, sjednocením správy a jednodušším ovládáním | Čeká | — |

Související závislosti: 3+12, 5+10+11, 6+8+13, 14+15, 16–21. Při spojení etapy zůstává každý bod samostatně ověřený. Dosavadní zákaz browserové automatizace se neobchází; modely a ovládání ověřujeme v jsdom. Reálná vizuální kontrola zůstává neověřená, dokud není dostupná autorizovaná cesta.
