/* De instructies geef je als volgt in:                                                  
na jsGebeurtenis volgt                                                                         
(getal voor de maand, getal voor de dag, getal voor het jaar,"volledige naam van de dag", "willekeurige tekst", "optionele tekstkleur", "optionele achtergrondkleur");           	 
Indien niet nodig, vul je 'null' (='leeg') in.                                  */

/* Voorrangsregel: wat eerst aangegeven staat heeft voorrang op wat volgt. Plaats je bijvoorbeeld de regel die onderaan staat (elke dinsdag) bovenaan, dan verschijnt die tekst effectief op elke dinsdag.*/

// enkele voorbeelden:

//jsGebeurtenis( 1,1,2006,null,"<a href='#'>Deze link verschijnt op 1 januari 2006</a>");

// 1 bepaalde dag in het jaar:
jsGebeurtenis( 1,1,null,null, "nieuwjaar","#000000","#00ff00");
jsGebeurtenis( 12,25,null,null, "kerstdag","#ffffff","#ff0000");

// inloop avonden
jsGebeurtenis( 4,28,2015,null,null,null, "#06F");
jsGebeurtenis( 5,12,2015,null,null,null, "#06F");
jsGebeurtenis( 6,9,2015,null,null,null, "#06F");
jsGebeurtenis( 6,23,2015,null,null,null, "#06F");
jsGebeurtenis( 7,7,2015,null,null,null, "#06F");


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