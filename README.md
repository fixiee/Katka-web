🧠 Prompt pro Claude Code

Cílem je vytvořit webovou prezentaci inspirovanou designem https://www.ksobe.eu, postavenou na Astro frameworku. Seed projekt už je připraven a dostupný ve složce tohoto repozitáře.

🔧 Technologie:
- Astro framework s využitím **existujícího seed projektu ve složce**
- Tailwind CSS
- Font: **Sanchez** (např. z Google Fonts)
- Barevná paleta (od nejvýraznější po doplňkovou):
  • #25928c — hlavní zelená  
  • #1a6c68 — tmavší zelená  
  • #fd8e86 — růžová  
  • #d8654a — korálová  
  • #f7f9f9 — světle šedá  
  • #f2c6ba — soft pink  

📁 Textový obsah je dostupný v souboru `texty.rtf` v root složce. Texty jsou v češtině a obsahují úvodní motto, osobní příběhy, popis spolupráce, reference i obsah pro stránku „O mně“.

🎥 Ve složce projektu je soubor `introVideo.mp4`. Na úvodní stránku prosím vlož video jako součást **hero sekce** (např. pozadí nebo výrazný vizuální prvek s jemným překrytím textem). Video se má přehrávat bez zvuku, automaticky, bez ovládacích prvků, ideálně ve smyčce (loop).

🧭 Navigace webu:
1. Úvod (motto, citáty, claim)
2. O mně
3. Nabídka (spolupráce)
4. Ceník
5. Reference
6. Blog
7. Kontakt

🎯 Claude by měl:
- Použít seed projekt jako výchozí základ
- Vygenerovat adresářovou strukturu a klíčové komponenty (`Navbar`, `Footer`, `Layout`, CTA sekce, karusel referencí…)
- Implementovat výchozí layout a návrh pro `index.astro` s vloženým videem
- Rozdělit texty ze souboru `texty.rtf` podle vhodnosti do jednotlivých stránek
- Použít font Sanchez pro texty a nadpisy
- Upravit Tailwind konfiguraci, pokud je to potřeba
- Udržovat záznam návrhů a změn v souboru `claude-log.md`

📌 Cílem je vytvořit jemný, přehledný, atmosférický web s důrazem na sdělení, prostor a citlivou vizualitu.
