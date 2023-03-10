import { Heading2, PageContent, Paragraph } from "@utrecht/component-library-react";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Link } from "./link";
import "/styles/content.css";
import "/styles/alignment.css";

const Content = () => (
  <PageContent className="content-container alignment">
    <section className="content-section">
      <Heading2 class="sr-only">Introductie</Heading2>
      <Paragraph className="content-p utrecht-paragraph">
        Demodam is een fictieve gemeentewebsite die laat zien welke herbruikbare open source producten en diensten er
        beschikbaar zijn voor gemeenten. Op Demodam.nl kun je straks zien welke Common Ground componenten (bouwstenen)
        achter die diensten al klaar zijn en hoe ze met elkaar samenwerken. Gemeenten kunnen vervolgens besluiten om
        zo`n dienst, bijvoorbeeld een applicatie voor online geboorteaangifte, ook in te zetten voor hun inwoners. Ook
        is het mogelijk om verder te bouwen bovenop wat al beschikbaar is door zowel leveranciers als gemeenten.
      </Paragraph>
      <Paragraph className="content-p utrecht-paragraph">
        Demodam wordt gemaakt en onderhouden door de Common Ground community, bestaande uit mensen en organisaties
        vanuit zowel de overheid als het bedrijfsleven. De Foundation for Public Code ziet erop toe dat alle partijen
        gelijkwaardig zijn. Iedereen is welkom om bij te dragen.
      </Paragraph>
    </section>
    <section className="content-section">
      <Heading2>Demodam.nl is tijdelijk niet beschikbaar.</Heading2>
      <Paragraph className="content-p utrecht-paragraph">
        Wegens de log4j bug hebben we Demodam.nl tijdelijk offline gehaald. Gezien er ook een migratie op handen staat,
        zullen we dit hierin meenemen. Vanaf eind januari 2022 komt Demodam.nl weer in de lucht. Onze excuses voor het
        ongemak.
      </Paragraph>
    </section>
    <div className="content-vid">
      <figure className="content-figure">
        <iframe
          className="content-iframe"
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/jTK-sbee2qM"
          title="Demodam kickoff op YouTube"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <figcaption class="sr-only">Opname Kickoff 31 mei 2021</figcaption>
      </figure>
    </div>
    <div className="content-iblock">
      <section className="content-isection">
        <Heading2>Op Demodam.nl laten we zien wat er beschikbaar is</Heading2>
        <Paragraph className="content-p utrecht-paragraph">
          op <Link href="#">Demodam.nl</Link> kun je zien hoe digitale diensten werken voor burgers en ambtenaren. Het
          maakt tastbaar wat je met Common Ground kunt.
        </Paragraph>
      </section>
      <div className="content-image-container">
        <StaticImage
          className="utrecht-img--scale-down"
          alt="Illustratie van een laptop die een encrypte verificatie stuurd naar een telefoon en een website die de verificatie code vraagt met een vinkje"
          src="../../static/integratie-signalen.svg"
        />
      </div>
    </div>
    <div className="content-iblock">
      <section className="content-isection">
        <Heading2>Demodam is een omgeving voor samenwerken</Heading2>
        <Paragraph className="content-p utrecht-paragraph">
          Overheden en hun leveranciers kunnen elkaar makkelijker vinden. Het helpt ons om onze werkwijzen op elkaar af
          te stemmen en het maakt het makkelijker om componenten met elkaar te laten samenwerken. Hierbij wordt je even
          niet gehinderd door legacy systemen en ontwikkelagenda’s van gemeenten, zodat je makkelijker proof of concepts
          kunt maken. We werken hierbij overigens samen met NL Design System, zodat een burger een consistente
          gebruikerservaring krijgt, ook al bestaat een dienst uit componenten die door verschillende leveranciers
          gebouwd zijn.
        </Paragraph>
      </section>
      <div className="content-image-container">
        <Paragraph>
          <StaticImage
            className="utrecht-img--scale-down"
            alt="illustratie van een persoon die een checklijst afvinkt"
            src="../../static/women-checklist.svg"
          />
        </Paragraph>
      </div>
    </div>
    <div className="content-iblock">
      <section className="content-isection">
        <Heading2>Demodam helpt om Common Ground te verbeteren.</Heading2>
        <Paragraph className="content-p utrecht-paragraph">
          We stellen samen vast wat de minimale eisen aan componenten zijn op bijvoorbeeld het gebied van beveiliging,
          gebruiksvriendelijkheid en (code) standaarden. We leren daarbij van elkaar wat de best practises zijn. Het
          doel is uiteindelijk dat alle componenten op Demodam te zien zijn in een app store vergelijkbaar met die op je
          mobiele telefoon, waarbij je met een klik componenten en applicaties kunt installeren. Uiteraard moet je
          daarbij blind kunnen vertrouwen op de kwaliteit van de componenten. Daarmee verbetert Demodam de kwaliteit van
          het achterliggende Common Ground ecosysteem. Met name gebruiksvriendelijkheid en veiligheid hebben daarbij
          onze bijzondere aandacht.
        </Paragraph>
      </section>
      <div className="content-image-container">
        <Paragraph>
          <StaticImage
            className="utrecht-img--scale-down"
            alt="illustratie van een persoon die een document bekijkt"
            src="../../static/person-document.svg"
          />
        </Paragraph>
      </div>
    </div>
    <div className="content-iblock">
      <section className="content-isection">
        <Heading2>Met Demodam kun je innoveren</Heading2>
        <Paragraph className="content-p utrecht-paragraph">
          Juist doordat er straks al een stevige basis staat, kun je daar makkelijk op voortborduren. Ter illustratie:
          stel je wilt een dienst ontwikkelen over verschillende overheden heen, bijvoorbeeld een klantreis waarbij je
          als burger in een vloeiend proces zowel je geboorteaangifte kunt doen (bij je gemeente) als
          kinderdagopvangtoeslag kunt aanvragen (bij de Belastingdienst). Dat is nu technisch en organisatorisch nog
          heel lastig, maar met Demodam staan er straks al een zaaksysteem, een BRP systeem en NLX voor je klaar, zodat
          je gelijk een vliegende start kunt maken.
        </Paragraph>
      </section>
      <div className="content-image-container">
        <Paragraph>
          <StaticImage
            className="utrecht-img--scale-down"
            alt="illustratie van persoon met scherm acht de persoon met data"
            src="../../static/person-data.svg"
          />
        </Paragraph>
      </div>
    </div>
  </PageContent>
);
export default Content;
