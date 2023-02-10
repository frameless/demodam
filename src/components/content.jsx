import { Heading2 } from "@utrecht/component-library-react";
import { Image } from "@utrecht/component-library-react";
import * as React from "react";

const Content = () => (
  <div>
    <div>
      <p>
        Demodam is een fictieve gemeentewebsite die laat zien welke herbruikbare open source producten en diensten er
        beschikbaar zijn voor gemeenten. Op Demodam.nl kun je straks zien welke Common Ground componenten (bouwstenen)
        achter die diensten al klaar zijn en hoe ze met elkaar samenwerken. Gemeenten kunnen vervolgens besluiten om
        zo`n dienst, bijvoorbeeld een applicatie voor online geboorteaangifte, ook in te zetten voor hun inwoners. Ook
        is het mogelijk om verder te bouwen bovenop wat al beschikbaar is door zowel leveranciers als gemeenten.
      </p>
      <p>
        Demodam wordt gemaakt en onderhouden door de Common Ground community, bestaande uit mensen en organisaties
        vanuit zowel de overheid als het bedrijfsleven. De Foundation for Public Code ziet erop toe dat alle partijen
        gelijkwaardig zijn. Iedereen is welkom om bij te dragen.
      </p>
      <Heading2>Demodam.nl is tijdelijk niet beschikbaar.</Heading2>
      <p>
        Wegens de log4j bug hebben we Demodam.nl tijdelijk offline gehaald. Gezien er ook een migratie op handen staat,
        zullen we dit hierin meenemen. Vanaf eind januari 2022 komt Demodam.nl weer in de lucht. Onze excuses voor het
        ongemak.
      </p>
    </div>
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/jTK-sbee2qM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
    <div>
      <div>
        <Image
          alt="Illustratie van een laptop die een encrypte verificatie stuurd naar een telefoon en een website die de verificatie code vraagt met een vinkje"
          src="images/integratie-signalen.svg"
        />
      </div>
      <div>
        <Heading2>Op Demodam.nl laten we zien wat er beschikbaar is</Heading2>
        <p>
          op
          <a href="#">Demodam.nl</a>
          kun je zien hoe digitale diensten werken voor burgers en ambtenaren. Het maakt tastbaar wat je met Common
          Ground kunt.
        </p>
      </div>
    </div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
export default Content;
