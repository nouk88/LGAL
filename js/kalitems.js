/* De instructies geef je als volgt in:                                                  
na jsGebeurtenis volgt                                                                         
(getal voor de maand, getal voor de dag, getal voor het jaar,"volledige naam van de dag", "willekeurige tekst", "optionele tekstkleur", "optionele achtergrondkleur");           	 
Indien niet nodig, vul je 'null' (='leeg') in.                                  */

/* Voorrangsregel: wat eerst aangegeven staat heeft voorrang op wat volgt. Plaats je bijvoorbeeld de regel die onderaan staat (elke dinsdag) bovenaan, dan verschijnt die tekst effectief op elke dinsdag.*/

// enkele voorbeelden:

//jsGebeurtenis( 1,1,2006,null,"<a href='#'>Deze link verschijnt op 1 januari 2006</a>");

// 1 bepaalde dag in het jaar:
jsGebeurtenis( 1,1,null,null, "<p class='white-space'>nieuwjaar</p>","#000000","#00ff00");
jsGebeurtenis( 12,25,null,null, "<p class='white-space'>kerstdag</p>","#ffffff","#BB0000");

// inloop avonden
jsGebeurtenis( 4,28,2015,null,"<p class='white-space'>19:15-21:30 Voorjaarsstukje maken</p>",null, "#3c7cdc");
jsGebeurtenis( 5,12,2015,null,"<p class='white-space'>19:15-21:30 ASS en werk</p>",null, "#3c7cdc");
jsGebeurtenis( 5,26,2015,null,"<p class='white-space'>19:15-21:30 Spreker of film</p>",null, "#3c7cdc");
jsGebeurtenis( 6,9,2015,null,"<p class='white-space'>19:15-21:30 Veranderingenin de zorg</p>",null, "#3c7cdc");
jsGebeurtenis( 6,23,2015,null,"<p class='white-space'>19:15-21:30 Omgaan met <tijdsdruk en> faalangst</p>",null, "#3c7cdc");
jsGebeurtenis( 7,7,2015,null,"<p class='white-space'>19:15-21:30 Overprikkeling en overgevoeligheid</p>",null, "#3c7cdc");
jsGebeurtenis( 9,1,2015,null,"<p class='white-space'>19:15-21:30 Spellenavond</p>",null, "#3c7cdc");
jsGebeurtenis( 9,15,2015,null,"<p class='white-space'>19:15-21:30 Dagindeling en structuur</p>",null, "#3c7cdc");
jsGebeurtenis( 9,29,2015,null,"<p class='white-space'>19:15-21:30 ASS en relaties</p>",null, "#3c7cdc");
jsGebeurtenis( 10,13,2015,null,"<p class='white-space'>19:15-21:30 ASS en overheidsregels</p>",null, "#3c7cdc");
jsGebeurtenis( 10,27,2015,null,"<p class='white-space'>19:15-21:30 Diagnose en behandeling, Henk Brand</p>",null, "#3c7cdc");
jsGebeurtenis( 11,10,2015,null,"<p class='white-space'>19:15-21:30 Feestkrans maken onder leiding van Leo</p>",null, "#3c7cdc");
jsGebeurtenis( 11,24,2015,null,"<p class='white-space'>19:15-21:30 Evaluatie en planning 2016</p>",null, "#3c7cdc");
jsGebeurtenis( 12,8,2015,null,"<p class='white-space'>19:15-21:30 Knutselavond onder leiding van Katja</p>",null, "#3c7cdc");
jsGebeurtenis( 12,22,2015,null,"<p class='white-space'>19:15-21:30 ASS en feesten</p>",null, "#3c7cdc");
jsGebeurtenis( 1,5,2016,null,"<p class='white-space'>19:30-21:30 Nieuwjaarsborrel met kienen</p>",null, "#3c7cdc");
jsGebeurtenis( 1,19,2016,null,"<p class='white-space'>19:30-21:30 ASS en tics en fiepen (preoccupaties)</p>",null, "#3c7cdc");
jsGebeurtenis( 2,2,2016,null,"<p class='white-space'>19:30-21:30 ASS en fantasie</p>",null, "#3c7cdc");
jsGebeurtenis( 2,16,2016,null,"<p class='white-space'>19:30-21:30 Mindfullness</p>",null, "#3c7cdc");
jsGebeurtenis( 3,1,2016,null,"<p class='white-space'>19:30-21:30 Quiz</p>",null, "#3c7cdc");
jsGebeurtenis( 3,15,2016,null,"<p class='white-space'>19:30-21:30 ASS en voeding</p>",null, "#3c7cdc");
jsGebeurtenis( 3,29,2016,null,"<p class='white-space'>19:30-21:30 ASS en geloof/spiritualiteit</p>",null, "#3c7cdc");
jsGebeurtenis( 4,12,2016,null,"<p class='white-space'>19:30-21:30 spellenavond</p>",null, "#3c7cdc");
jsGebeurtenis( 4,26,2016,null,"<p class='white-space'>19:30-21:30 voorjaarsstukje maken</p>",null, "#3c7cdc");
jsGebeurtenis( 5,10,2016,null,"<p class='white-space'>19:30-21:30 ASS en gezondheid</p>",null, "#3c7cdc");
jsGebeurtenis( 5,24,2016,null,"<p class='white-space'>19:30-21:30 Spel over autisme</p>",null, "#3c7cdc");
jsGebeurtenis( 6,7,2016,null,"<p class='white-space'>19:30-21:30 ASS en vakantie</p>",null, "#3c7cdc");
jsGebeurtenis( 6,21,2016,null,"<p class='white-space'>19:30-21:30 wijkagent als gast (onder voorbehoud)</p>",null, "#3c7cdc");
jsGebeurtenis( 7,5,2016,null,"<p class='white-space'>19:30-21:30 onderwerp volgt nog...</p>",null, "#3c7cdc");
jsGebeurtenis( 7,19,2016,null,"<p class='white-space'>19:30-21:30 onderwerp volgt nog...</p>",null, "#3c7cdc");



// activiteiten
jsGebeurtenis( 5,30,2015,null,"<p class='white-space'>Concert, licht klassiek</p>",null, "#9efdf1");
jsGebeurtenis( 6,28,2015,null,"<p class='white-space'>Kajakken/Kanoën met picknick</p>",null, "#9efdf1");
jsGebeurtenis( 8,1,2015,null,"<p class='white-space'>BBQ</p>",null, "#9efdf1");
jsGebeurtenis( 9,6,2015,null,"<p class='white-space'>Boerengolf</p>",null, "#9efdf1");
jsGebeurtenis( 10,3,2015,null,"<p class='white-space'>Stadsbezoek</p>",null, "#9efdf1");
jsGebeurtenis( 11,13,2015,null,"<p class='white-space'>Film met thema ASS</p>",null, "#9efdf1");
jsGebeurtenis( 12,20,2015,null,"<p class='white-space'>Bowlen</p>",null, "#9efdf1");
jsGebeurtenis( 1,24,2016,null,"<p class='white-space'>Schaatsen</p>",null, "#9efdf1");
jsGebeurtenis( 2,9,2016,null,"<p class='white-space'>Lichtstoet Heerlen</p>",null, "#9efdf1");
jsGebeurtenis( 2,20,2016,null,"<p class='white-space'>Djembé workshop</p>",null, "#9efdf1");
jsGebeurtenis( 3,18,2016,null,"<p class='white-space'>film bij MEE</p>",null, "#9efdf1");
jsGebeurtenis( 3,19,2016,null,"<p class='white-space'>Wandeling met rondleiding op een zorgboerderij</p>",null, "#9efdf1");
jsGebeurtenis( 4,24,2016,null,"<p class='white-space'>Bezoek fort Eben-Emael</p>",null, "#9efdf1");
jsGebeurtenis( 5,21,2016,null,"<p class='white-space'>Geocaching in speurtochtvorm</p>",null, "#9efdf1");
jsGebeurtenis( 6,26,2016,null,"<p class='white-space'>Blotevoetenpad</p>",null, "#9efdf1");
jsGebeurtenis( 7,16,2016,null,"<p class='white-space'>Bezoek aan Erica de Roode, Cattle Dog Coach</p>",null, "#9efdf1");
jsGebeurtenis( 9,10,2016,null,"<p class='white-space'>BBQ</p>",null, "#9efdf1");
jsGebeurtenis( 10,14,2016,null,"<p class='white-space'>film bij MEE</p>",null, "#9efdf1");
jsGebeurtenis( 10,16,2016,null,"<p class='white-space'>Bluegrass Beeg</p>",null, "#9efdf1");


// vermelding die op dezelfde datum steeds terugkeert:
//jsGebeurtenis( null,1,null,null, "" ); //deze tekst verschijnt automatisch op elke eerste dag van de maand
//jsGebeurtenis( null,10,null,null, ""); //deze tekst verschijnt automatisch op elke tiende dag van de maand
//jsGebeurtenis( null,25,null,null, ""); //deze tekst verschijnt automatisch op elke 25ste dag van de maand

// afbeeldingen invoegen:
/* jsGebeurtenis( null,3,null,null, "<center><img src='../pics/auto.gif' border=0><br>autozoektocht<br>elke 3de van de maand</center>");
jsGebeurtenis( null,5,null,null, "<center><img src='../pics/jumpywissel.gif' border=0><br>fitness<br>elke 5de van de maand</center>");
jsGebeurtenis( null,13,null,null, "<center><img src='../pics/smiley.gif' border=0><br>theaterbezoek</center></a>");
jsGebeurtenis( null,18,null,null, "<center><img src='../pics/boek.gif' border=0><br>bibliotheek</center></a>");
jsGebeurtenis( null,22,null,null, "<center><img src='../pics/vis.gif' border=0><br><br>aquariumbezoek</center>");
jsGebeurtenis( null,27,null,null, "<center><img src='../pics/motor.gif' border=0><br>uitstap met de motor</center>");
jsGebeurtenis( null,28,null,null, "<center><img src='../pics/sleepy.gif' border=0><br><br>rustdag</center>");
jsGebeurtenis( null,29,null,null, "<center><img src='../pics/sleepy.gif' border=0><br><br>rustdag</center>");
jsGebeurtenis( null,30,null,null, "<center><img src='../pics/sleepy.gif' border=0><br><br>rustdag</center>"); */

// 1 cel wijzigen:
//jsGebeurtenis( null,7,null,null, "<p><center>een cel anders kleuren</center>", "#3300CC", "#66FF66");
//jsGebeurtenis( null,16,null,null, "<br><font size=2><b>eigen kleur overschrijft default kleur</b></font>", "#003399", "#00FFFF");

// HTML opmaak:
//jsGebeurtenis( null,19,null,null, "<center><font size=2 color='red'><b>Tekst met HTML opmaak</b></font> </center>");

// een bepaalde dag in de week: (let op: op de tweede plaats moet een 0 staan, niet 'null')
//jsGebeurtenis( null,0,null,"dinsdag","<b>Deze tekst verschijnt elke dinsdag indien niet iets anders voorrang heeft</b>","#333399","#99FF00");

/* 
TIP: ook JavaScript-instructies kunnen gebruikt worden. 
Een voorbeeld van dezelfde gebeurtenis voor de hele maand januari 2008:
for (a=1;a<32;a++){jsGebeurtenis(1,a,2008,null,"voor de hele maand januari 2008","#000000","#FFFF00")}
(omwille van de voorrangsregels, moet deze instructie bovenaan geplaatst worden)
*/// JavaScript Document