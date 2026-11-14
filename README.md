# iShowi · Metge Mir 24

Plugin de WordPress amb el showroom iShowi de la promoció **Metge Mir 24** (Carrer del Metge Mir 24, Sabadell), per a **pisonuevosabadell.com**.

- Branca `dev`: versió demo 0.1.0 (14/11/2026). **No connectada a Hostinger.**
- URL quan s'instal·li: `https://pisonuevosabadell.com/metge-mir/`
- Dades: `metgemir24/assets/data/promocion.json` (esquema `ishowi-promocion/0.1`). És el contracte amb el futur iShowi Hub: preus, estat de cada habitatge, annexos (places, motos, traster), acabats i paràmetres del sol.
- Font dels preus: Google Sheet «Metge Mir 24 · Llista de preus».

## Desplegar (quan es decideixi)
1. Fusionar `dev` → `main`.
2. Hostinger › Git: connectar aquest repositori amb `wp-content/plugins/` (carpeta `metgemir24`).
3. WordPress › Plugins: activar «iShowi · Metge Mir 24». Si `/metge-mir/` dona 404: Ajustos › Enllaços permanents › Desa.
4. Per obrir-la a Google: opció `mm24_public` = 1 i treure `<meta name="robots" content="noindex">` de `index.html`.

## Pendent abans de publicar
- Validació d'acabats i suplements pel promotor (ara són provisionals).
- Revisió jurídica dels textos legals (RGPD, RD 515/1989).
- Orientació real de l'edifici per al mòdul Sol i rutes reals per a Entorn.
- Model 3D (GLB) i vídeo: pendents d'afegir.
