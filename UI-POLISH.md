# Revize ovládání · 6. října 2026

Všech 33 hlavních stránek bylo prošlé v izolované Standard firmě s první otevřenou Letnou. Ovládací tlačítka a rozbalovací hlavičky mají nejméně 44 px na výšku; formuláře na mobilu používají čitelná 16px pole. Zkratky nad správou kavárny mají odstup od kontextu podniku. Záložky na počítači se zalamují; oblasti s více než třemi stránkami mají na mobilu označený výběr všech podstránek. Specifické záložky kavárny zůstávají přímými tlačítky.

Reporty a údržba: plovoucí nabídka se na mobilu kotví od levého okraje svého tlačítka. Přechod na jinou stránku nebo otevření dialogu ji zavře. Týdenní přehled začíná nahoře. Obsah dlouhého dialogu se posouvá samostatně; zavírací tlačítko zůstává dostupné a Escape vrací fokus. Zrušení platebního náhledu obnoví původní uzly formuláře, hodnoty, fokus i pozici posunu. Založení zachovává dvoukrokový rozpočet a spodní akce. Mapová karta vlastní sítě má kratší nadpis a popis, aby zůstaly viditelné její zkratky.

## Ověření

- 34 existujících sad rozhraní a zakladatelských průchodů prošlo. Rozšířený ux-journey navíc ověřil výběr podstránky, návrat fokusu, čistě čtecí navigaci, zavření reportového menu a návrat posunu formuláře po zrušení platby.
- Nativní prohlížeč: 33 stránek při 390 × 844 a 1280 × 720 bez přetečení běžných formulářů, karet a tlačítek. Všechna měřená viditelná tlačítka hlavních stránek mají výšku alespoň 44 px. Široké datové tabulky se dál posouvají uvnitř své oblasti.
- Mobilní reportové menu: levý okraj 14 px, pravý 244 px při šířce 390 px; tři akce vysoké 44 px. Dlouhé menu při posunu obsahu 1191 px stále nabízí zavření na y=16 px. Escape zavřel dialog a vrátil fokus na Více. Mobilní přepnutí na dodavatele označilo správnou stránku a fokus jejího nadpisu.
- Syntaxe 85 skriptů; samostatný offline soubor a skutečný šestitýdenní zakladatelský průchod se kontrolují při balení. Změna rozhraní nemění ekonomické vzorce ani uloženou firmu.

Snímky: kavarna-v6-0-ovladani-pocitac.png, kavarna-v6-0-ovladani-mobil.png, kavarna-v6-0-report-ovladani.png, kavarna-v6-0-reporty-mobil.png a kavarna-v6-0-dialog-mobil.png. Testování bylo v lokálních oddělených firmách; produkční firma nebyla přepsána ani odehrána. Není proveden fyzický dotykový ani hardwarový FPS benchmark.
