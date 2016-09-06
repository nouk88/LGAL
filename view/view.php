<?php
################################################################################
# Auteur: Anouk Classens
# Project: LGAL php
# Doel: algemene View functies
# Versie: 1 
# Datum: 7-7-2016
################################################################################
function showHeader($title)
{
 echo'<!DOCTYPE html>
    <html lang="en">
    <head>
            <meta charset="utf-8" content="lotgenotengroep autisme limburg autist asperger pdd-nos klassiek groep"/>
            <meta name="description" content="Lotgenotengroep Autisme Limburg is een groep voor autisten en mensen met autisme in de vorm van asperger, pdd-nos of klassiek autisme in de buurt van Limburg, Parkstad, Brunssum.">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
            <title>'.$title.'</title>
            <!--[if lt IE 9]>
            <script src="//html5shiv.googlecode.com/svn/trunk/html5.js></script>
            <![endif]-->
            <!-- javascript -->
            <script src="js/jquery-1.11.1.js" type="text/javascript"></script>
            <script src="js/script.js" type="text/javascript"></script>
            <script src="js/bootstrap.min.js" type="text/javascript"></script>
            <!-- Bootstrap -->
            <link href="css/reset.css" rel="stylesheet">
            <link href="css/bootstrap.css" rel="stylesheet">
            <link href="css/bootstrap-theme.min.css" rel="stylesheet">
            <link href="css/stylesheet.css" rel="stylesheet">
            <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
            <!-- WARNING: Respond.js doesn\'t work if you view the page via file:// -->
            <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
            <![endif]-->
    </head>';
    
}
//==============================================================================
function showHead()
{
    echo'
    <body>
        <div id="maincontainer"> <!-- hoofdbox -->
            <div class="row"
                <a href="index.html"><div id="header" class="col-xs-12 col-sm-12 col-md-12 col-lg-12"> <!-- header -->
                    <div id="head_tekst"><h1>Lotgenotengroep Autisme Limburg</h1></div>
                    <div id="logo"><img  src="images/puzzelstuk_mail_rood.png" alt="logo van de lotgenotengroep" /></div>
                </div> </a>
            </div>';
}
//==============================================================================
function showNav()
{
    echo'
        <div id=subcontainer class="row">
            <div id="nav" class="col-xs-4 col-sm-3 col-md-3 col-lg-3"> <!-- navigatie --> 
                <ul id="menu"> <!-- open ul menu --> 
                    <a href="?page=home"><li><img src="images/puzzelstukje_klein.png" alt="logo van de lotgenotengroep"/>Home</li></a>
                    <a href="#"><li id="lotgenoten"><img src="images/puzzelstukje_klein.png" alt="logo van de lotgenotengroep">Lotgenotengroep</li></a>
                        <ul>
                            <a href="?page=historie"><li class="subitem"><img src="images/puzzelstukje_klein.png" alt="logo van de lotgenotengroep"/>Historie</li></a>
                            <a href="?page=voorstellen"><li class="subitem"><img src="images/puzzelstukje_klein.png" alt="logo van de lotgenotengroep"/>Even voorstellen</li></a>
                            <a href="?page=stichting"><li class="subitem"><img src="images/puzzelstukje_klein.png" alt="logo van de lotgenotengroep"/>Stichting</li></a>	
                        </ul>
                    <a href="#"><li id="inloop"><img src="images/puzzelstukje_klein.png" alt="logo van de lotgenotengroep">Inloopavonden</li></a>
                        <ul>
                            <a href="?page=wat"><li class="subitem2"><img src="images/puzzelstukje_klein.png" alt="logo van de lotgenotengroep"/>Wat</li></a>
                            <a href="?page=wanneer"><li class="subitem2"><img src="images/puzzelstukje_klein.png" alt="logo van de lotgenotengroep"/>Wanneer</li></a>
                            <a href="?page=waar"><li class="subitem2"><img src="images/puzzelstukje_klein.png" alt="logo van de lotgenotengroep"/>Waar</li></a>
                        </ul>
                    <a href="?page=activiteiten"><li><img src="images/puzzelstukje_klein.png" alt="logo van de lotgenotengroep"/>Activiteiten</li></a>
                    <a href="?page=foto"><li><img src="images/puzzelstukje_klein.png" alt="logo van de lotgenotengroep"/>Foto\'s</li></a>
                    <a href="#"><li id="info"><img src="images/puzzelstukje_klein.png" alt="logo van de lotgenotengroep"/>Info</li></a>
                        <ul>
                            <a href="?page=autisme"><li class="subitem3"><img src="images/puzzelstukje_klein.png" alt="logo van de lotgenotengroep"/>Autisme</li></a>
                            <a href="?page=links"><li class="subitem3"><img src="images/puzzelstukje_klein.png" alt="logo van de lotgenotengroep"/>Links</li></a>
                            <a href="?page=boeken"><li class="subitem3"><img src="images/puzzelstukje_klein.png" alt="logo van de lotgenotengroep"/>Boeken</li></a>
                            <a href="?page=films"><li class="subitem3"><img src="images/puzzelstukje_klein.png" alt="logo van de lotgenotengroep"/>Films</li></a>
                        </ul>
                    <a href="?page=contact"><li><img src="images/puzzelstukje_klein.png" alt="logo van de lotgenotengroep"/>Contact</li></a>
                </ul> <!-- open ul menu -->
            </div>  <!-- sluit navigatie -->
            
            <div id="row_mobile" class="row hidden-lg hidden-md">
                <div id="nav_mobile" class="navbar navbar-inverse col-xs-12 col-sm-12"> <!-- navigatie mobile --> 
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="pull-left navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav">
                                <li><a href="?page=home">Home</a></li>
                                <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Lotgenotengroep<span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="?page=historie">Historie</a></li>
                                        <li><a href="?page=voorstellen">Even voorstellen</a></li>
                                        <li><a href="?page=stichting">Stichting</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Inloopavonden<span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="?page=wat">Wat</a></li>
                                        <li><a href="?page=wanneer">Wanneer</a></li>
                                        <li><a href="?page=waar">Waar</a></li>
                                    </ul>
                                </li>
                                <li><a href="?page=activiteiten">Activiteiten</a></li>
                                <li><a href="?page=foto">foto\'s</a></li>
                                <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Info<span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="?page=autisme">Autisme</a></li>
                                        <li><a href="?page=links">Links</a></li>
                                        <li><a href="?page=boeken">Boeken</a></li>
                                        <li><a href="?page=films">Films</a></li>
                                    </ul>
                                </li>
                                <li><a href="?page=contact">contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div><!-- sluit navigatie mobile --> 
            </div> <!-- sluit row mobile --> ';
    
}
//==============================================================================
function showContent($page)
{
    echo'<div id="content" class="col-xs-12 col-sm-6 col-md-6 col-lg-6">';
    switch($page)
    {
        case "historie":
            include_once 'historie.php';
            showHistorie();
            break;
        
        case "voorstellen":
            include_once 'voorstellen.php';
            showVoorstellen();
            break;
        
        case "stichting":
            include_once 'stichting.php';
            showStichting();
            break;
        
        case "wat":
            include_once 'wat.php';
            showWat();
            break;
        
        case "wanneer":
            include_once 'wanneer.php';
            showWanneer();
            break;
        
        case "waar":
            include_once 'waar.php';
            showWaar();
            break;
        
        case "activiteiten":
            include_once 'activiteiten.php';
            showActiviteiten();
            break;
        
        case "foto":
            include_once 'foto.php';
            showFoto();
            break;
        
        case "autisme":
            include_once 'autisme.php';
            showAutisme();
            break;
        
        case "links":
            include_once 'links.php';
            showLinks();
            break;
        
        case "boeken":
            include_once 'boeken.php';
            showBoeken();
            break;
        
        case "films":
            include_once 'films.php';
            showFilms();
            break;
        
        case "contact":
            include_once 'contact.php';
            showContact();
            break;
        
        case "kalender":
            include_once 'kalender.php';
            showKalender();
            break;
        
        case "home":
        default:
            include_once 'home.php';
            showHome();
    }
    echo'</div> <!-- sluit content -->';
}
//==============================================================================
function showSideContainer()
{
    echo '
            <div id="sidebar" class="hidden-xs col-sm-3 col-md-3 col-lg-3"> <!--sidebar --> 
                <div id="kalender"><!-- kallender --> <a href="?page=kalender"><div id=link_kalender>Klik hier voor onze kalender</div></a>
                    <a href="?page=kalender"><img src="images/kalender.jpg" alt=""/></a>
                </div><!-- einde kallender -->
                <div id="spreuk"><!-- spreuk --> </div> <!-- einde spreuk -->
                <div id="opmerking"> <!-- opmerking -->
                    <ul>';
                        $datums=getDatumsDateNowLimit(getDateAmsterdam(),5);
                        foreach ($datums as $datum) {
                            $date=date_create($datum['datum']);
                            echo '<li><strong>'.date_format($date,"d-m").'</strong> : '.$datum['naam'].'</li>';   
                        }                          
                    echo '
                    </ul>
                </div> <!-- einde opmerking -->
            </div> <!--einde sidebar -->
        </div><!--einde subcontainer-->';
}
//==============================================================================
function showFooter()
{
   echo'
            <div class="row">
                 <div id="footer"> <!-- footer --></div>
             </div>
             </div> <!--einde maincontainer-->
        </body>
        </html>'; 
}
//==============================================================================
function limitText($text,$limit)
{
    if(strlen($text)>$limit)
    {
        return substr($text, 0, $limit)."...";
    }
    else 
    {
        return $text;
    }
}
//==============================================================================
