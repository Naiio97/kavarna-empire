# Coffee Tycoon · města a vlastní provozy

Aktualizace z 5. října 2026 vychází z pěti prostorových návrhů dodaných přes pen.dev. Hra má ortografickou kameru, klidné barvy, bílý kontextový panel, přepnutí Provoz / Zařídit a společné spodní menu. Jde o funkční rozšíření existující firmy.

| Požadavek | Implementace a ověření |
|---|---|
| Rozšířená mapa | 18 samostatných profilů, 111 skutečných názvů adres, vlastní vodní cesty, dominanty, místní architektonické rodiny a rozmístění čtvrtí. Geometrický test všech 18 měst; WebGL Praha, Amsterdam, Tokio, Sydney a Madrid. |
| Pekárna | Vstup do vlastní výrobny, výběr pece, výroby a expedice, skutečná kapacita, personál a servis. Expedice otevírá existující odběratele. DOM i skutečný prohlížeč. |
| Pekárna u kavárny | Vlastní volná pekárna ve stejném městě, přístavba za 68 000 Kč po potvrzení. Viditelná na městské budově i v interiéru; přímé přechody mezi prostory. Model kontroluje duplicity, cenu a import. WebGL snímek propojeného provozu. |
| Kanceláře | Board a HR, Finance, Obchod, Produkt, IT jsou volitelné objekty. Vybrané oddělení má skutečné počty lidí, mzdy, kapacitu a nábor. Prohlížeč ověřil HR 1 → 2, hotovost −8 000 Kč, týdenní mzdy 15 000 Kč. |
| Plantáže | Čtyři vizuální záhony společného modelu sklizně, zpracování a sklad. Kliknutí otevře skutečné odrůdy a postup zpracování. Závlaha za 90 000 Kč změnila hotovost i scénu v prohlížeči. |
| Další provozy | Interaktivní pražírna a sklad. Geometrie i raycast obou scén; pražírna navíc skutečné WebGL ověření. |
| Menu s obrázky | Vlastní SVG ilustrace kategorií a galerie vlastních podniků. Výběr konkrétního podniku otevře jeho kontext; všechny původní stránky jsou dostupné. Vizuální kontrola galerie. |
| Rozmanité kavárny | Šest stylů: severský, industriální, zahradní, klasický, přímořský a večerní. Volitelná terasa, vlastní půdorys a malý nábytek; uložený návrh zachovává vzhled. Dvanáct výchozích kombinací prošlo kontrolou průchodnosti. |
| Mobil | Ověřeno 387 × 768 bez vodorovného přetečení. Provozní údaje v rozbalení, hlavní akce dostupné v panelu, kamera automaticky zohledňuje šířku. |

## Ekonomika a meze

Prostory promítají stejný stav firmy. Animace nevytváří tržby, zásoby ani čas. Přístavba nezapíná sama odběr jídla; plán výroby a rozvoz se nastavují ve skutečné správě pekárny. Terasa je vizuální stavební volba za 45 000 Kč a nezvyšuje vnitřní kapacitu kavárny. Záhony sdílí jeden existující plantážní cyklus; nejde o čtyři samostatné farmy. Oddělení jsou firemní a používají společnou kapacitu kanceláří.

Mapy jsou stylizované podle místní geografie a architektury. Nejde o měřítkovou GIS mapu ani o přesnou kopii ulic. Dekorační bloky nejsou koupitelné podniky. Všechny nákupní adresy odpovídají skutečným herním adresám. Výchozí firma má nadále 500 000 Kč, žádnou kavárnu ani předvybranou adresu. Pokročilé provozy byly zkoušeny ve výslovně předem financované testovací firmě na odděleném místním původu; to není doklad, že nová firma může vše okamžitě koupit.

## Kontroly

Celá regrese `npm test` prošla se 739 PASS výstupy. Po závěrečných úpravách byly znovu spuštěny příslušné modelové, DOM a geometrické testy. `npm run check` ověřuje všech 69 skriptů. Samostatné HTML má lokálně vložený renderer, styly a SVG obrázky. Browserová kontrola nové verze nehlásila chyby ani varování. Výsledky geometrických a jsdom testů nenahrazují skutečné WebGL důkazy; sklad zatím nemá vlastní vizuální snímek. Fyzické vícedotykové zařízení a hardwarový FPS benchmark nebyly měřeny.

Důkazy: `kavarna-v6-0-kavarna-pekarna.png`, `kavarna-v6-0-plantaz.png`, `kavarna-v6-0-menu-podniky.png`, `kavarna-v6-0-provozy-mobil.png`.

## Geografické předlohy

- [Praha](https://prague.eu/en/objevujte/manes-bridge/)
- [Brno](https://www.gotobrno.cz/wp-content/uploads/2025/04/TICBRNO-MALY_OFICIAL-2025-EN-02-WEB.pdf)
- [Vídeň](https://www.wien.info/en/art-culture/ringstrasse)
- [Berlín](https://www.visitberlin.de/en/spreebogenpark)
- [Amsterdam](https://www.iamsterdam.com/en/see-and-do/attractions-and-sights/amsterdams-architectural-style)
- [Paříž](https://parisjetaime.com/article/l-eclectisme-du-second-empire-a231)
- [Londýn](https://www.visitlondon.com/things-to-do/sightseeing/london-attractions/bridge)
- [New York](https://www.business.nyctourism.com/press-media/press-releases/nyc-company-invites-visitors-to-see-manhattan-like-a-new-yorker)
- [Tokio](https://www.gotokyo.org/en/story/guide/tokyos-visual-splendor-a-guide-to-the-citys-best-views/index.html)
- [Soul](https://english.visitseoul.net/attractions--/hangang-river/ENP015060)
- [Sydney](https://www.sydney.com/destinations/sydney/sydney-city/the-rocks)
- [Kodaň](https://www.visitcopenhagen.com/copenhagen/planning/nyhavn-gdk474735)
- [Lisabon](https://www.visitlisboa.com/en/places/no-28-tram)
- [Madrid](https://www.esmadrid.com/informacion-turistica/la-gran-via)
- [Dubaj](https://www.visitdubai.com/articles/architecture-in-dubai)
- [Singapur](https://www.visitsingapore.com/neighbourhood/featured-neighbourhood/orchard-road/heritage-walk-itinerary/emerald-hill/)
- [Melbourne](https://www.visitmelbourne.com/regions/melbourne/destinations/yarra-precinct.aspx)
- [Toronto](https://www.destinationtoronto.com/things-to-do/attractions/must-see-attractions/cn-tower/)
