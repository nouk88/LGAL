<?php
################################################################################
# Auteur: JAM, Anouk Classens
# Project: lgal
# Doel: handige functies, zwitsers zakmes
# Versie:1 
# Datum: 12-9-2016
################################################################################
define('TO_LOG',0x01);
define('TO_SCR',0x02);
//==============================================================================
function getSessionVar($name, $default)
{
    if(isset($_SESSION[$name]))
    {
        return $_SESSION[$name];
    }
    return $default;
}
//==============================================================================
function getPostVar($name,$default=false)
{
    if(isset($_POST[$name]))
    {
        return $_POST[$name];
    }
    else 
    {
        return $default;
    } 
}
//==============================================================================
function getUrlVar($name,$default=false)
{
    if(isset($_GET[$name]))
    {
        return $_GET[$name];
    }
    else 
    {
        return $default;
    } 
}
//==============================================================================
function isPosted()
{
    return $_SERVER["REQUEST_METHOD"]=="POST";
}
//==============================================================================
function writeToLogFile($logmsg)
{
    $dateTime = new DateTime("now");
    $dow = $dateTime->format('l');
    $w	 = $dateTime->format('W');
    $fn  = LOGPATH."log_".$dow.".txt";
    $file = (is_file($fn)&&$w == date('W',filemtime($fn)))? fopen($fn,"a") : $file = fopen($fn,"w");
    fprintf(
            $file,
            "%s | %.50s | %s \n",  
            $dateTime->format("d-m-Y G:i:s"), 
            getSessionVar('full_name', $_SERVER["REMOTE_ADDR"]), 
            $logmsg);
    fclose($file);
}  
//==============================================================================
    function _error(Exception $e)
    {
        if ((DEBUG_LVL & TO_LOG) == TO_LOG)
        {			
            writeToLogFile(">>>>>> Error [".$e->getCode()."] on line ".$e->getLine()." in file ".$e->getFile());
            writeToLogFile(">>>>>> ".$e->getMessage());
        }	
        if ((DEBUG_LVL & TO_SCR) == TO_SCR)
        {			
            echo "<h3>Error [".$e->getCode()."]</h3>";
            echo "<p>File = ".$e->getFile()."]</p>";
            echo "<p>Line = ".$e->getLine()."]</p>";
            echo "<p>Msg = ".$e->getMessage()."]</p>";
        }		
    }        
//==============================================================================
    function _dump($name, $value)
    {
        if ((DEBUG_LVL & TO_LOG) == TO_LOG)
        {			
            writeToLogFile($name." => [".json_encode($value)."]"); 
        }	
        if ((DEBUG_LVL & TO_SCR) == TO_SCR)
        {			
            echo "<h3>".$name."</h3><pre>";
            var_dump($value);
            echo "</pre>";
        }		
    }	
//==============================================================================
    function _echo($msg)
    {
        if ((DEBUG_LVL & TO_LOG) == TO_LOG)
        {			
            writeToLogFile($msg); 
        }	
        if ((DEBUG_LVL & TO_SCR) == TO_SCR)
        {			
            echo "<pre>.".$msg."</pre>";
        }		
    }	
//==============================================================================
