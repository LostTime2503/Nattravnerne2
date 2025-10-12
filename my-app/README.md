Prosjektoversikt
Dette er en enkel React-app skrevet i JavaScript med vanlig CSS. App.js styrer rutene og viser sider. Hver side importerer seksjoner som igjen bruker små, gjenbrukbare komponenter.

Rask start
Klon repoet til en mappe kalt my-app.

Åpne terminal i prosjektroten.

Installer avhengigheter:

bash
npm install
Start utviklingsserveren:

bash
npm start
Åpne http://localhost:3000 i nettleseren.

Bygg for produksjon:

bash
npm run build
Mappestruktur
public/ — statiske filer.

src/ — kildekode.

App.js — ruter og hovedlogikk for navigasjon.

index.js — entrypoint som mountes i DOM.

assets/ — bilder, ikoner, logo, plassholdere, vektorer, videoer.

components/ — små, gjenbrukbare UI-komponenter.

sections/ — side-deler som komponerer en side.

pages/ — top-nivå sider som rutes til.

styles/ — CSS delt i komponenter, sider og seksjoner.

Hvordan det fungerer
Routing: App.js bestemmer hvilken side som vises på hver URL.

Pages Seksjoner Komponenter:

Page er hele siden for en rute (f.eks. Hjem).

Section er en blokk på siden (f.eks. Hero, Footer).

Component er små byggesteiner brukt i seksjoner (f.eks. Button, Card).

Sider importerer seksjoner, seksjoner importerer komponenter.

CSS er organisert under src/styles for å holde stiler modulære.

Legge til ny side
Lag filen src/pages/NewPage.js og eksporter en React-komponent.

Lag nødvendige seksjoner under src/sections/ og komponenter under src/components/.

Legg til CSS i src/styles/pages/ eller src/styles/sections/.

Registrer ruta i src/App.js.