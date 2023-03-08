import {
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from "@utrecht/component-library-react";
import React from "react";
import { Link } from "./link";
import "/styles/alignment.css";
import "/styles/governance.css";

const GovernanceContent = () => {
  return (
    <div className="alignment">
      <section>
        <Heading1>CONCEPT: Governance voor Demodam</Heading1>
        <Paragraph>
          Dit document is een conceptversie en hier kunnen geen rechten aan ontleend worden. De eerste versie van de
          governance wordt vastgesteld na de eerste keer dat het kernteam bijeen komt.
        </Paragraph>
      </section>
      <section>
        <Heading2>Doelen van Demodam</Heading2>
        <UnorderedList>
          <UnorderedListItem>
            <strong>Laten zien.</strong> Demodam toont werkende digitale diensten die gemeenten (en mogelijk andere
            overheidsorganisaties) kunnen hergebruiken.
          </UnorderedListItem>
          <UnorderedListItem>
            <strong>Samenwerken.</strong> Op Demodam leren we hoe we samenwerken in het{" "}
            <Link href="https://commonground.nl">Common Ground </Link> ecosysteem. Dit gebeurt zowel op systeemniveau
            (hoe werken componenten op elkaar in?) als op menselijk niveau (hoe werken we samen?).
          </UnorderedListItem>
          <UnorderedListItem>
            <strong>Verbeteren</strong> Samen bepalen we wanneer een onderdeel productierijp is.
          </UnorderedListItem>
          <UnorderedListItem>
            <strong>Innoveren.</strong> Door een stabiele en rijke softwareomgeving aan te bieden, wordt het makkelijker
            om nieuwe digitale diensten te ontwikkelen.
          </UnorderedListItem>
        </UnorderedList>
      </section>
      <section>
        <Heading2>Demodam-principes</Heading2>
        <UnorderedList>
          <UnorderedListItem>
            Onze community is gastvrij en respectvol zoals vermeld in onze{" "}
            <Link href="https://demodam.org/CODE_OF_CONDUCT.md">code of conduct. </Link> Als community willen we het
            nieuwe leden van de community gemakkelijk maken om deel te nemen, ongeacht achtergrond en kennisniveau.
          </UnorderedListItem>
          <UnorderedListItem>
            Wij zijn Transparant en toegankelijk. Wijzigingen in de Demodam-organisatie, Demodam-coderepositories en
            Demodam-gerelateerde activiteiten worden openbaar gedaan.
          </UnorderedListItem>
          <UnorderedListItem>
            Ideeën en bijdragen worden geaccepteerd op basis van hun verdienste en in overeenstemming met de
            projectdoelstellingen en ontwerpprincipes.
          </UnorderedListItem>
          <UnorderedListItem>Demodam is open source.</UnorderedListItem>
        </UnorderedList>
        <Paragraph>
          Door middel van codebase stewardship ondersteunt de Foundation for Public Code het kerteam en de community.
        </Paragraph>
      </section>
      <section>
        <Heading2>Sluit je aan bij Demodam!</Heading2>
        <Paragraph>
          Al overtuigd? Mooi! Ontdek{" "}
          <Link href="https://demodam.org/contributing">hoe je kunt deelnemen en bijdragen</Link>
        </Paragraph>
      </section>
      <section>
        <Heading2>Demodam kernteam</Heading2>
        <Paragraph>
          Het kernteam van Demodam <strong> houdt toezicht op de algehele richting </strong> van Demodam. Elk actief lid
          van de community kan een verzoek indienen om lid van het kernteam te worden door het kernteam hiernaar te
          vragen. Het kernteam stemt hierover (gewone meerderheid). De kernteam streeft ernaar een team te zijn waarin
          meerdere perspectieven (kennis, type organisaties) vertegenwoordigd zijn. Indien kernteam niet informeel tot
          overeenstemming kunnen komen, wordt de betreffende vraag doorgestuurd naar de kernteamvergadering.
        </Paragraph>
        <Heading3>Gezamenlijke verantwoordelijkheden</Heading3>
        <UnorderedList>
          <UnorderedListItem>
            <Paragraph>
              Onderhouden van de <strong>missie, visie, waarden, strategie, roadmap, branding en scope</strong> van het
              project
            </Paragraph>
            <UnorderedList className="li-style">
              <UnorderedListItem>
                Verzamelen van geplande functies en presenteren in een uniforme weergave
              </UnorderedListItem>
              <UnorderedListItem>Beheer van het merk Demodam</UnorderedListItem>
            </UnorderedList>
          </UnorderedListItem>
          <UnorderedListItem>
            <Paragraph>
              <strong>Gemeenschaps- en bestuursaangelegenheden</strong>
            </Paragraph>
            <UnorderedList className="li-style">
              <UnorderedListItem>Beheersrechten op Demodam-activa zoals databronnen</UnorderedListItem>
              <UnorderedListItem>Beslissingen op codebase-niveau nemen</UnorderedListItem>
              <UnorderedListItem>Verfijn de governance indien nodig</UnorderedListItem>
              <UnorderedListItem>
                Beheer de toegang tot Demodam-middelen zoals hosting en projectkalenders
              </UnorderedListItem>
              <UnorderedListItem>Omgaan met overtredingen van de gedragscode</UnorderedListItem>
              <UnorderedListItem>
                Toezicht houden op wijzigingen in licenties en intellectueel eigendom
              </UnorderedListItem>
            </UnorderedList>
          </UnorderedListItem>
          <UnorderedListItem>
            <Paragraph>
              <strong>Conflictoplossing</strong>
            </Paragraph>
            <UnorderedList className="li-style">
              <UnorderedListItem>
                Dienen als <strong>escalatieniveau</strong> voor de actiegroepen
              </UnorderedListItem>
              <UnorderedListItem>
                Los geëscaleerde projectbeslissingen op wanneer een verantwoordelijk subteam is geblokkeerd
              </UnorderedListItem>
              <UnorderedListItem>Problemen in ontwikkeling of conflicten tussen bijdragers oplossen</UnorderedListItem>
            </UnorderedList>
          </UnorderedListItem>
          <UnorderedListItem>
            <Paragraph>
              <strong>Technische zaken</strong>
            </Paragraph>
            <UnorderedList className="li-style">
              <UnorderedListItem>
                Bepaal en beslis <strong>technische beperkingen en normen</strong> voor de Demodam-omgeving
              </UnorderedListItem>
              <UnorderedListItem>
                Geef <strong>technische richting</strong> voor de codebase
              </UnorderedListItem>
              <UnorderedListItem>
                Onderhoud een technische <strong>roadmap</strong>, een <strong>architectuur</strong> en{" "}
                <strong>coderingsprincipes</strong>
              </UnorderedListItem>
              <UnorderedListItem>
                Beheer en plan <strong>releases</strong>
              </UnorderedListItem>
              <UnorderedListItem>
                Toezicht houden op de oplossing en openbaarmaking van <strong>beveiligingsproblemen</strong>
              </UnorderedListItem>
            </UnorderedList>
          </UnorderedListItem>
        </UnorderedList>
      </section>
      <section>
        <Heading3>Leden van het kernteam</Heading3>
        <Paragraph>De huidige leden van het kernteam zijn:</Paragraph>
        <UnorderedList>
          <UnorderedListItem>
            <Link href="https://www.linkedin.com/in/edoplantinga/">Edo Plantinga</Link> (kernteamleider)
          </UnorderedListItem>
          <UnorderedListItem>
            <Link href="https://www.linkedin.com/in/rubenlinde">Ruben van der Linde</Link> (ook{" "}
            <Link href="../contributing">Technish actieteam</Link> leiden)
          </UnorderedListItem>
          <UnorderedListItem>
            <Link href="https://www.linkedin.com/in/albaroza">Alba Roza</Link> (ook{" "}
            <Link href="../contributing">Communicatie-actieteam</Link> leiden)
          </UnorderedListItem>
          <UnorderedListItem>
            <Link href="https://www.linkedin.com/in/joeribekker/">Joeri Bekker</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link href="https://www.linkedin.com/in/lazobozarov/">Lazo Bozarof</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            Vacature: <Link href="../contributing">User Centricity</Link> teamleider
          </UnorderedListItem>
        </UnorderedList>
      </section>
      <section>
        <Heading3>Manier van werken</Heading3>
        <Paragraph>
          Het kernteam komt regelmatig bijeen. Hun agenda omvat een herziening van de technische roadmap en kwesties die
          in een impasse verkeren. Het is niet de bedoeling van de agenda om alle patches te herzien of goed te keuren.
          Dit gebeurt voornamelijk via het proces dat wordt beschreven in CONTRIBUTING.md. Vergaderingen en hun agenda
          worden aangekondigd op de{" "}
          <Link
            className="alignment-link"
            href="https://lists.publiccode.net/mailman/postorius/lists/demodam-discuss.lists.publiccode.net/"
          >
            mailinglijst
          </Link>{" "}
          en op <Link href="https://samenorganiseren.slack.com/archives/C01S2QM81V4">Slack.</Link> De actiepunten en
          agenda&apos;s van het kernteam zijn te vinden op het{" "}
          <Link
            className="alignment-link"
            href="https://lists.publiccode.net/mailman/postorius/lists/demodam-discuss.lists.publiccode.net/"
          >
            kernteam project board
          </Link>
          . Geen enkele persoon of organisatie zal een gewone meerderheid van het kernteam in dienst nemen.
        </Paragraph>
      </section>
      <section>
        <Heading2>Actieteams</Heading2>
        <Paragraph>
          De Demodam-codebase vormt actieteams om specifieke taken op te lossen. Deze kunnen dagelijkse beslissingen
          nemen om de zaken vooruit te helpen, maar kunnen beslissingen van het kernteam niet negeren.
        </Paragraph>
      </section>
      <br />
    </div>
  );
};

export default GovernanceContent;
