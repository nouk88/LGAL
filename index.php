<?php
define("IS_LOCAL", ($_SERVER["HTTP_HOST"]=="www.cursist04.nl"));
if(IS_LOCAL)
{
    define("SERVERPATH", '/var/sentora/hostdata/cursist04/public_html/cursist04_nl/lgal/');
    define("CONFIGPATH", SERVERPATH.'config/local_');
}
 else 
{
    define("SERVERPATH", '/home/lgal260515/domains/lgal.nl/public_html/');
    define("CONFIGPATH", SERVERPATH.'config/remote_');   
}
//==============================================================================
include CONFIGPATH.'remote_settings.php';
include MODELPATH.'model.php';
include CONTROLLERPATH.'controller.php';
include CONTROLLERPATH.'utils.php';
//==============================================================================
try 
{
    $my_connection = getConnection();
    run();
}
catch(Exception $e)
 {
     _error($e);
     _echo($e);
 }

function run()
{
   echo showPage(); 
} 
