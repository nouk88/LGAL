<?php
################################################################################
# Auteur: JAM
# Project: Wiki PHP
# Doel: basis Model
# Versie: 1 
# Datum: 26-1-2016
################################################################################
function getConnection()
{    
    $db_connect =  new mysqli(HOST, USER, PASSWD, DBNAME) or die("Fout!!!!!");
    return $db_connect;
}
//==============================================================================
function executeQuery($query)
{
	global $my_connection;
        $data = mysqli_query($my_connection,$query);
        if ($data === false)
        {
            echo "<h3>".$query."</h3>";
            echo mysqli_error($my_connection);
            return false;
        }
        return $data;
}
//==============================================================================
function getArray($query)
{
	$data = executeQuery($query);
	$row = mysqli_fetch_assoc($data);
	if($row)
	{
		return $row;
	}	
	else
	{
		return false;
	}
}
//==============================================================================
function getArrays($query)
{
	$result = array();
	$data = executeQuery($query);
	while($row = mysqli_fetch_assoc($data)) 
	{
		$result[] = $row;
	} 
	if($result)
	{
		return $result;
	}	
	else
	{
		return false;
	}      
}
//==============================================================================
function executeDelete($query)
{
    global $my_connection;
    return mysqli_query($my_connection, $query);   
}
//==============================================================================
function executeUpdate($query)
{
    global $my_connection;
    return mysqli_query($my_connection, $query);   
}
//==============================================================================
function executeInsert($query)
{
    global $my_connection;
    if(mysqli_query($my_connection, $query))
    {
       return mysqli_insert_id($my_connection) ;
    }
    else
    {
       return 0;
    }
}
//==============================================================================
function lastError()
{
     global $my_connection;
     return mysqli_error($my_connection);
}