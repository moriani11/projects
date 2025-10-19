# Stijlgids LuxeRijders

## Kleuren

### Achtergrond
- **Zwart**: `#000000` (hoofdachtergrond)
- **Donkergrijs**: `#1A1A1A` (secties, knoppen)
- **Goud**: `#FFD700` (accenten, koppen, knoppen)

## Lettertypen

### Hoofdtekst: Montserrat
- [Google Fonts link](https://fonts.google.com/specimen/Montserrat)
- Gebruik voor koppen en knoppen
- Gewichten: 400 (Regular), 600 (SemiBold)

### Lichaamstekst: Open Sans
- [Google Fonts link](https://fonts.google.com/specimen/Open+Sans)
- Gebruik voor paragrafen en lange teksten
- Gewichten: 400 (Regular), 600 (SemiBold)

## Basis CSS

```css
:root {
  /* Basis kleuren */
  --black: #000000;
  --dark-gray: #1A1A1A;
  --gold: #FFD700;
}

body {
  font-family: 'Open Sans', sans-serif;
  background-color: var(--black);
  color: var(--gold);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: var(--gold);
}
```