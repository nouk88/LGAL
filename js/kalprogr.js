
var TeMerkenData = new Array();
var maxAantalDagen;

function kalender (name) {
var HuidigeDatum = new Date();
this.r = "\r\n";this.q = "\"";
this.name = name;
this.BeginMaand = HuidigeDatum.getMonth();
this.BeginJaar = HuidigeDatum.getFullYear();
this.celverdeling = 1;
this.celbreedte  = 90;
this.celhoogte = 90;
this.randdikte = 1;
this.BeginMetMaandag = true;
this.TekstInLegeVakken = true;
this.NummerInLegeVakken = true;
this.ToonMaandKeuze = true;
this.ToonJaarKeuze = true;
this.TekstVoorVandaag = "vandaag";
this.DagNaamOokOnderaan= true;
this.dateBreak = true;
this.zoekGekozenDatum= true;
this.TabelKleur= "#06F"; 
this.LegeVakkenKleur= "#8dd5fa"; 
this.VandaagKleur= "#FFF"; 
this.VoorbijeDagenKleur= "#1286c2"; 
this.KomendeDagenKleur= "#4eaee0"; 
this.WeekendKleur= "#0beafe"; 
this.RandKleur= "#06F"; 
this.TitelAgKleur   = "#06F"; 
this.TitelTekstKleur= "#FFFFFF"; 
this.CellTekstKleur= "#000000"; 
var MijnFont = "Comic Sans MS,Arial, Helvetica, Sans Serif";
this.TitelTekstType= MijnFont;
this.TitelTekstGrootte= "2";
this.NummersTekstType= MijnFont;
this.NummersGrootte= "3";
this.CelTekstType= MijnFont;
this.CelTekstGrootte= "1";
maxAantalDagen=60;
this.MaandStartDatum = new Array(1,1,1,1,1,1,1,1,1,1,1,1);
this.DagNaam = new Array( "maandag", "dinsdag", "woensdag", "donderdag", "&nbsp&nbspvrijdag&nbsp&nbsp", "zaterdag", "zondag&nbsp" );
this.DagenInDeMaand = new Array( 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 );
this.MaandNaam   = new Array( "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus","september", "oktober", "november", "december" );
this.maakDatumKeuze = jsmaakDatumKeuze;
this.vulMaand = jsvulMaand;
this.vulJaar = jsvulJaar;
this.ctrlSchrikkeljaar = jsctrlSchrikkeljaar;
this.MaakKalender = jsMaakKalender;
this.kalenderHTML = jskalenderHTML;
this.ctrlKleur = jsctrlKleur;
this.getDay = jsGetDay;
this.isWeekdag = jsisWeekdag;
this.leesDatum = jsleesDatum;
this.getFormElement = jsGetFormElement;
this.chkForGebeurtenis = evChkForGebeurtenis;
this.chkForGebeurtenis2 = evChkForGebeurtenis2;
this.month = jsMonth;
this.year = jsYear;
}

function jsmaakDatumKeuze() {
var maakHTML;
var maakTag;
var maakVerbergen;
var maakOutput = "";
var HuidigeDatum = new Date();
var cy = HuidigeDatum.getFullYear();
var m = this.leesDatum("m");
var y = this.leesDatum("y");
if (this.ToonMaandKeuze == false && this.ToonJaarKeuze == false) return null;
maakHTML = "<form name='frmCal' id='frmCal' method='post' action=''>" + this.r;
maakOutput = maakOutput + maakHTML;
maakHTML = "<table id='kalender_wrapper'"+ " align=center"+ " width='" + ((this.celbreedte) * 7) + "'"+ " border='0'"+ " bordercolor='" + this.RandKleur + "'"+ " bordercolordark='" + this.RandKleur + "'"+ " bordercolorlight='" + this.RandKleur + "'"+ " cellspacing=0"+ " >" + this.r;maakOutput = maakOutput + maakHTML;
maakHTML = "<tr><td"+ " align=center"+ " bgcolor=" + this.TitelAgKleur+ " >" + this.r + this.r;
maakOutput = maakOutput + maakHTML;
maakTemp = " actueleYear.options[frmCal.actueleYear.selectedIndex].value";
if (this.ToonJaarKeuze==false) maakTemp = y.toString();
maakHTML = "<select name='actueleMonth' id='actueleMonth'"+ " onchange='jsUpdate(" + this.name + ", " + this.r+ " actueleMonth.options[frmCal.actueleMonth.selectedIndex].value"+ "," + this.r+ maakTemp+ ");'>" + this.r+ this.vulMaand(m)+ "</select>" + this.r + this.r;
if (this.ToonMaandKeuze==true) maakOutput = maakOutput + maakHTML;
maakTemp = " actueleMonth.options[frmCal.actueleMonth.selectedIndex].value";
if (this.ToonMaandKeuze==false) maakTemp = m.toString();
maakHTML = "<select name='actueleYear' id='actueleYear'"+ " onchange='jsUpdate(" + this.name + ", " + this.r+ maakTemp+ "," + this.r+ " actueleYear.options[frmCal.actueleYear.selectedIndex].value"+ ");'>" + this.r+ this.vulJaar(y, cy)+ "</select>" + this.r + this.r;
if (this.ToonJaarKeuze==true) maakOutput = maakOutput + "&nbsp;" + maakHTML;maakHTML = "</td></tr>" + this.r;maakOutput = maakOutput + maakHTML;
maakOutput = maakOutput + "</table></form>" + this.r + this.r;document.writeln(maakOutput);
return maakOutput;
};

function jsMaakKalender(m, y) {
var obj;
var maakHTML;
var Hertekenen = true;
var maakBrowserNaam = jsBrowserName();
var maakBrowserVersie = jsBrowserVer();
if (m==null && y==null) {Hertekenen = false;if (this.zoekGekozenDatum) {m = this.leesDatum("m");
y = this.leesDatum("y");} 
else {m = this.BeginMaand;
y = this.BeginJaar;};};
var actueleMonth = this.getFormElement("frmCal", "actueleMonth");
var actueleYear = this.getFormElement("frmCal", "actueleYear");
if (actueleMonth!=null) actueleMonth.selectedIndex = m;
if (actueleYear!=null) actueleYear.value = y;
jsSlaDatumOp(m, y);
maakHTML = this.kalenderHTML( m, y );
if ( maakBrowserNaam=="IE" ) {if (Hertekenen==true) {obj = jsGetObj("MSIE");obj.innerHTML = maakHTML;} 
else {document.writeln(maakHTML);};} 
else if ( maakBrowserNaam=="NS" ) {
if ( maakBrowserVersie<"5" ) {
if (Hertekenen==true) {
document.NSALIGN.document.NSLAYER.document.write(maakHTML);
document.NSALIGN.document.NSLAYER.document.close();} 
else {document.NSALIGN.document.NSLAYER.document.writeln(" ");document.NSALIGN.document.NSLAYER.document.writeln(maakHTML);document.NSALIGN.document.NSLAYER.document.writeln(" ");};} 
else {
if (Hertekenen==true) {
obj = jsGetObj("MSIE");jsSetInnerHTML(obj, maakHTML);} 
else {document.writeln(maakHTML);};};};};

function jsctrlKleur( nRow, nCol, dteCal, HuidigeDatum, m ) {
var currD = dteCal.getDate() ;
var currM = this.month(dteCal);
var currY = this.year(dteCal);
var HuidigeDatumZonderTijd = new Date(HuidigeDatum.getFullYear(), HuidigeDatum.getMonth(), HuidigeDatum.getDate());
if ( currD > nCol + (nRow * 7) + this.MaandStartDatum[m] || currM != m ) {return this.LegeVakkenKleur;};if (this.WeekendKleur!=null && this.isWeekdag(dteCal)==false) return this.WeekendKleur;
if (currY < this.year(HuidigeDatum) ) return this.VoorbijeDagenKleur;
if (currY > this.year(HuidigeDatum) ) return this.KomendeDagenKleur;
if (currM < this.month(HuidigeDatum) ) return this.VoorbijeDagenKleur;
if (currM > this.month(HuidigeDatum) ) return this.KomendeDagenKleur;
if (dteCal < HuidigeDatumZonderTijd) return this.VoorbijeDagenKleur;
if (dteCal > HuidigeDatumZonderTijd) return this.KomendeDagenKleur;return this.VandaagKleur;};

function jskalenderHTML( m, y ) {
var chkM;
var chkD;
var chkY;
var szBackcolor;
var szEvText;
var szEvForecolor;
var szEvBackcolor;
var szSaveColor;
var nEvSlot;
var nSlot;
var szSlotClass;
var maakOutput;
var szCell;
var szNum;
var szText;
var maakTag;
var nRow;
var nCol;
var nDeadDay;
var nWidth;
var bGoodDate=false;
var HuidigeDatum = new Date();
var dteCal = new Date(y, m, 1);
var dteMonth = new Date(y, m, 1);
var dteDead;HuidigeDatum = new Date( HuidigeDatum.getFullYear(), HuidigeDatum.getMonth(), HuidigeDatum.getDate());
var maakHTML = this.RandKleur + " " + this.randdikte + "px solid;";
var szBoxTR = "style='BORDER-TOP: " + maakHTML + " BORDER-RIGHT: " + maakHTML + " '";
var szBoxTRL = "style='BORDER-TOP: " + maakHTML + " BORDER-RIGHT: " + maakHTML + " BORDER-LEFT: " + maakHTML + " '";
var szBoxR = "style='BORDER-RIGHT: " + maakHTML + " '";
var szBoxRL = "style='BORDER-RIGHT: " + maakHTML + " BORDER-LEFT: " + maakHTML + " '";
var szBoxTBR = "style='BORDER-TOP: " + maakHTML + " BORDER-BOTTOM: " + maakHTML + " BORDER-RIGHT: " + maakHTML + " '";
var szBoxTBRL = "style='BORDER-TOP: " + maakHTML + " BORDER-BOTTOM: " + maakHTML + " BORDER-RIGHT: " + maakHTML + " BORDER-LEFT: " + maakHTML + " '";
var szBoxBR = "style='BORDER-BOTTOM: " + maakHTML + " BORDER-RIGHT: " + maakHTML + " '";
var szBoxBRL = "style='BORDER-BOTTOM: " + maakHTML + " BORDER-RIGHT: " + maakHTML + " BORDER-LEFT: " + maakHTML + " '";
maakOutput = "";

this.ctrlSchrikkeljaar(m, y);dteCal.setDate( dteCal.getDate() + this.MaandStartDatum[m] -1 );nDeadDay = 1 - this.getDay(dteCal);dteCal.setDate( dteCal.getDate() - this.getDay(dteCal) );
if ( dteCal.getDate() == 2 ) dteCal.setDate( dteCal.getDate() - 7 );
nWidth = this.celbreedte;

if (jsBrowserName=="NS") nWidth = nWidth - 15;
maakHTML = "<table id='kalender_wrapper' align=center"+ " bgColor=" + this.TabelKleur+ " border='0'"+ " bordercolor='" + this.RandKleur + "'"+ " bordercolordark='" + this.RandKleur + "'"+ " bordercolorlight='" + this.RandKleur + "'"+ " width='" + (this.celbreedte * 7) + "'"+ " cellspacing=0"+ " cellpadding=3"+ " >";
maakOutput = maakOutput + maakHTML + this.r + this.r;
maakOutput = maakOutput + "<tr>" + this.r;
for (nCol=0; nCol<7; nCol++) {maakHTML = "<td align=center"+ " width='100vw' bgcolor=" + this.TitelAgKleur+ " nowrap "+ " >"+ jsFontStr( this.TitelTekstType, this.TitelTekstGrootte, this.TitelTekstKleur )+ " <b><center>" + this.DagNaam[nCol]+ " </center></b></font></td>";
maakOutput = maakOutput + maakHTML + this.r;}maakOutput = maakOutput + "</tr>" + this.r + this.r;
for (nRow=0; nRow<6; nRow++) {for (nSlot=1; nSlot<=parseInt(this.celverdeling); nSlot++) {maakOutput = maakOutput + "<tr>";
for (nCol=0; nCol<7; nCol++) {szSlotClass = szBoxR;
if (nCol==0) szSlotClass = szBoxRL;
if (nSlot==1) {szSlotClass = szBoxTR;
if (nCol==0) szSlotClass = szBoxTRL;};
if (nSlot==this.celverdeling && nRow==5) {
if (this.celverdeling>1) {szSlotClass = szBoxBR;if (nCol==0) szSlotClass = szBoxBRL;} 
else {szSlotClass = szBoxTBR;
if (nCol==0) szSlotClass = szBoxTBRL;};};
ev = null;
szNum = dteCal.getDate();szBackcolor = this.ctrlKleur( nRow, nCol, dteCal, HuidigeDatum, m );ev = this.chkForGebeurtenis2(dteCal, nSlot);
if (szBackcolor == this.LegeVakkenKleur) {
if (this.TekstInLegeVakken==false) {
if (this.NummerInLegeVakken==false) szNum="&nbsp;";
ev = this.chkForGebeurtenis(m, nDeadDay, parseInt(y), nSlot);
if (m != this.month(dteCal) ) {
ev = this.chkForGebeurtenis(m, nDeadDay, parseInt(y), nSlot);};};};
szEvText = "&nbsp;";
szEvForecolor = this.CellTekstKleur;szEvBackcolor = szBackcolor;nEvSlot = -1;
if (ev!=null) {
if (dteCal.getDate()<=maxAantalDagen) {
if (ev.text!="" && ev.text!=null) szEvText= ev.text;
if (ev.forecolor!="" && ev.forecolor!=null) szEvForecolor = ev.forecolor;
if (ev.backcolor!="" && ev.backcolor!=null) szEvBackcolor = ev.backcolor;
if (ev.slot!="" && ev.slot!=null) nEvSlot = ev.slot;};};
if (dteCal.getDate()==HuidigeDatum.getDate() && dteCal.getMonth()==HuidigeDatum.getMonth() && dteCal.getMonth()==m) {
if (szEvText=="&nbsp;" && nSlot==1) {
if (this.TekstVoorVandaag!="" && this.TekstVoorVandaag!=null) {szEvText = this.TekstVoorVandaag;};};};
szCell = "";
if (nSlot==1) {
szCell = "&nbsp;"+ jsFontStr(this.NummersTekstType, this.NummersGrootte, szEvForecolor)+ "<strong>" + szNum + "</strong></font>" + this.r;
if (this.dateBreak) szCell = szCell + "<br/>";};
szCell = szCell + jsFontStr(this.CelTekstType, this.CelTekstGrootte, szEvForecolor)+ szEvText + "</font>" + this.r;
maakHTML = "<td " + szSlotClass+ " valign=top"+ " width=" + nWidth+ " height=" + this.celhoogte / parseInt(this.celverdeling)+ " bgcolor=" + szEvBackcolor+ " nowrap"+ " >" + this.r;
maakTemp =  maakHTML + szCell + "</td>" + this.r;maakOutput = maakOutput + maakTemp;dteCal.setDate( dteCal.getDate() + 1 );
nDeadDay++;};
maakOutput = maakOutput + "</tr>" + this.r + this.r;if (nSlot!=parseInt(this.celverdeling)) {dteCal.setDate( dteCal.getDate() - 7 );
nDeadDay=nDeadDay-7;};};};
if (this.DagNaamOokOnderaan) {maakOutput = maakOutput + "<tr>" + this.r;
for (nCol=0; nCol<7; nCol++) {
maakHTML = "<td align=center"+ " width=" + nWidth+ " bgcolor=" + this.TitelAgKleur+ " nowrap "+ " >"+ jsFontStr( this.TitelTekstType, this.TitelTekstGrootte, this.TitelTekstKleur )+ " <b><center>" + this.DagNaam[nCol]+ " </center></b></font></td>";
maakOutput = maakOutput + maakHTML + this.r;}
maakOutput = maakOutput + "</tr>" + this.r + this.r;};
maakHTML = "<tr><td align=center colspan=7>"+ "</td></tr>";
maakOutput = maakOutput + maakHTML + this.r + this.r;
maakOutput = maakOutput + "</table>";
return maakOutput;};

function jsUpdate(obj, m, y) {obj.MaakKalender(m, y);};

function jsctrlSchrikkeljaar(m, y) {
var x = 2;
if (( m == x )&& ( y % 4 == 0 )&& ( y % 100 == 0)) {if ( y % 400 == 0) this.DagenInDeMaand[x] = 29;} else {this.DagenInDeMaand[x] = 29;};};

function jsvulMaand( m ) {
var szSelected;
var maakHTML = "";
for ( i=0; i<=11; i++ ) {szSelected = "";
if ( i==m ) szSelected = "selected";maakHTML = maakHTML + "<option value='" + i + "' " + szSelected + " >" + this.MaandNaam[i] + "</option>" + this.r;};
return maakHTML;};

function jsvulJaar( y, cy ) {
var szSelected;
var maakHTML = "";
for ( i=cy-1; i<=cy+5; i++ ) {szSelected = "";
if ( i==y ) szSelected = "selected";maakHTML = maakHTML + "<option value='" + i + "' " + szSelected + " >" + i + "</option>" + this.r;};
return maakHTML;};

function jsFontStr ( szFace, szSize, szColor ) {
return maakHTML = "<font"+ " face='"  + szFace  + "'"+ " size='"  + szSize  + "'"+ " color='" + szColor + "'"+ " >";};

function Gebeurtenis (nMonth, nDay, nYear, szWeekday, szText, szForecolor, szBackcolor, nSlot) { this.month = nMonth;
this.day = nDay;
this.year = nYear;
this.weekday = szWeekday;
this.text = szText;
this.forecolor = szForecolor;
this.backcolor = szBackcolor;
this.slot = nSlot;
this.weekdayNo = evWeekdayNo;};

function evWeekdayNo() {
var nNum = -1;
var szWeekday;szWeekday = this.weekday;
if (szWeekday==null) return nNum;szWeekday = szWeekday.toLowerCase();
if (szWeekday=="zondag") nNum=0;
if (szWeekday=="maandag") nNum=1;
if (szWeekday=="dinsdag") nNum=2;
if (szWeekday=="woensdag") nNum=3;
if (szWeekday=="donderdag") nNum=4;
if (szWeekday=="vrijdag") nNum=5;
if (szWeekday=="zaterdag") nNum=6;return nNum;};

function evChkForGebeurtenis(m,d,y,slot) {
var ev=null;
var dte=null;
if ( jsIsDate(m,d,y) ) dte = new Date(y,m,d);
for (i=0; i<TeMerkenData.length; i++) {ev = TeMerkenData[i];
if ( ( y == ev.year || ev.year == null )&& (parseInt(m)+1 == ev.month || ev.month == null )&& ( d == ev.day )&& ( slot == ev.slot || slot == null ) ) return ev;
if (dte!=null) {if ( dte.getDay() == ev.weekdayNo()&& ( slot == ev.slot || slot == null ) ) return ev;};};
return null;};

function evChkForGebeurtenis2(dte, slot) {
var d = dte.getDate();
var m = this.month(dte);
var y = this.year(dte);
return this.chkForGebeurtenis(m,d,y,slot);};

function jsGebeurtenis(m,d,y,szWeekday,szText,szForecolor,szBackcolor,slot) {
var ev;
if ( (parseInt(d)<=32) ) {
if (slot==null) slot=1;
ev = new Gebeurtenis(m,d,y,szWeekday,szText,szForecolor,szBackcolor,slot);TeMerkenData[TeMerkenData.length] = ev;};};

function jsIsDate(m,d,y) {
var dte = new Date(y,m,d);
if ( (dte.getFullYear() == y)&& (dte.getMonth() == m)&& (dte.getDate() == d) ) return true;
return false;};

function jsGetDay (dte) {
var d = dte.getDay();
if (this.BeginMetMaandag) d--;
if (d==-1) d=6;return d;};

function jsisWeekdag (dte) {
var m;
var d;
m = dte.getMonth();
d = dte.getDay();
if (d == 0 || d == 6) return false;return true;};

function jsMonth (dte, obj) {
var nEnd;
var d = dte.getDate();
var m = dte.getMonth();
var y = dte.getFullYear();
nStart = this.MaandStartDatum[m];
if ( d<nStart ) {
if ( m==0 ) return 11;
return m-1;};
return m;};

function jsYear (dte, obj) {
var nStart;
var nEnd;
var d = dte.getDate();
var m = dte.getMonth();
var y = dte.getFullYear();
nStart = this.MaandStartDatum[m];
if ( d<nStart ) {
if ( m==0 ) return y-1;};
return y;};

function jsSlaDatumOp (m, y) {
var mm = parseInt(m) + 1;
var szYear =  y.toString();
var szMonth = mm.toString();
if (szMonth.length==1) szMonth = "0" + szMonth;
jsCookieSet("dhtmlcal", szYear + szMonth);};

function jsleesDatum (szOption) {
var m;
var y;
var szMonth;
var szYear;
var szValue = jsCookieGet("dhtmlcal");
if (szValue==false || this.zoekGekozenDatum==false) {
m = this.BeginMaand;
y = this.BeginJaar;} 
else {szMonth = szValue.substring(4, 6);
szYear = szValue.substring(0, 4);
m = parseInt(szMonth);
y = parseInt(szYear);
if (szMonth != m.toString()) {
szMonth = szMonth.substring(szMonth.lastIndexOf("0")+1,szMonth.lastIndexOf("0")+2);
m = parseInt(szMonth);};m--;};
if (szOption=="m") return m;
if (szOption=="y") return y;
return -1;};

function jsCookieSet (szName, szValue, hours, szPath, szDomain, szSecure) {
var numHours;
if ( (typeof(hours) == 'string') && Date.parse(hours) ) {
numHours = hours;} 
else if (typeof(hours) == 'number') {
numHours = (new Date((new Date()).getTime() + hours*3600000)).toGMTString();};
document.cookie = szName + "=" + escape(szValue)+ ((numHours == null) ? "" : "; expires=" + numHours)+ ((szPath == null) ? "" : "; path=" + szPath)+ ((szDomain == null) ? "" : "; domain=" + szDomain)+ ((szSecure == null) ? "" : "; secure");};

function jsCookieGet (szName) {
var szData;
var nBegin;
var nEnd;
var MyCookie = document.cookie;
if (MyCookie.length>0) {nBegin = MyCookie.indexOf(szName);
if (nBegin != -1) {nBegin += szName.length;nEnd = MyCookie.indexOf(";", nBegin);
if (nEnd==-1) nEnd = MyCookie.length;
szData = unescape(MyCookie.substring(nBegin+1, nEnd));
return szData;} 
else {return false;};} 
else {return false;};};

function jsSetOuterHTML (obj, maakHTML) {
var range = document.createRange();range.setStartBefore(obj);
var df = range.createContextualFragment(maakHTML);
obj.parentNode.replaceChild(df, this);};

function jsSetInnerHTML (obj, maakHTML) {
var range = document.createRange();range.selectNodeContents(obj);range.deleteContents();
var df = range.createContextualFragment(maakHTML);obj.appendChild(df);};
function jsBrowserName () {
var maakOutput="";
var szBrowser = navigator.appName;
if ( szBrowser=="Microsoft Internet Explorer" ) {maakOutput = "IE";} 
else if ( szBrowser=="Netscape" ) {maakOutput = "NS";};
return maakOutput;};

function jsBrowserVer () {return navigator.appVersion.charAt(0);};

function jsGetObj(name) {if (document.getElementById) {return document.getElementById(name);} 
else if (document.all) {return document.all[name];} 
else if (document.layers) {return document.layers[name];} 
else {return false;};};

function jsGetFormElement(formName, objectName) {
if (formName.name!=null) formName = formName.name;
if (document.getElementById) {
return document.getElementById(objectName);} else if (document.all) {return document.all[objectName];} 
else if (document.layers) {
return document.forms[formName].elements[objectName];} 
else {return false;};};

function jsPopUp (strHREF, bNewWindow) {
var winPopup;
var strValues="width=400,height=300,scrollbars=yes,dependent=yes";
if (bNewWindow) {  winPopup = window.open(strHREF, "_blank", strValues);} 
else {  winPopup = window.open("", "popup", strValues);
winPopup.location.href = strHREF;};};

function ShowProperties(obj) {
var i;
var strOutput;
var strTerm;
var strData;
var strSpace;
var lngCols;lngCols=4;
if (document.layers) lngCols=3;strSpace = "                                        ";
strOutput = obj.name + "\n\n";i=1;
for (var prop in obj) {strTerm = "\t";
if (i==lngCols) strTerm = "\n";i=i+1;
if (i>lngCols) i=1;strData = "." + prop + " = " + obj[prop];
if (strData.length<30) strData += strSpace.substring(0, 30-strData.length);
if (strData.length>30) strData = strData.substring(0, 30);strOutput += strData + strTerm;};
alert(strOutput);
return strOutput;};// JavaScript Document