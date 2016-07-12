<?php
//==============================================================================
include 'base_model.php';
//==============================================================================
function getDatums()
{
    $query="SELECT
            id,
            datum, 
            naam, 
            omschrijving,
            tijd, 
            type
            FROM 
            datums
            ORDER BY 
            datum ASC";
    return getArrays($query);
}
//==============================================================================
function getDatumsByType($type)
{
    $query="SELECT
            id,
            datum, 
            naam, 
            omschrijving,
            tijd
            FROM 
            datums
            WHERE
            type=".$type.
            " ORDER BY
            datum ASC";
    return getArrays($query);
}
//==============================================================================
function getDateAmsterdam()
{
    date_default_timezone_set('Europe/Amsterdam');
    $date=date('Y-m-d');   
    return $date;
}
//==============================================================================
function getDatumsByTypeDateNow($type, $datum)
{
    $query="SELECT
            id,
            datum, 
            naam, 
            omschrijving,
            tijd, 
            type
            FROM 
            datums
            WHERE
            type=".$type."
            AND    
            datum>=".$datum.
            " ORDER BY
            datum ASC";
    return getArrays($query);
}
//==============================================================================
function getDatumsDateNowLimit($datum,$limit)
{
    $query="SELECT
            id,
            datum, 
            naam, 
            omschrijving,
            tijd, 
            type
            FROM 
            datums
            WHERE    
            datum>=".$datum.
            " ORDER BY
            datum ASC
            LIMIT "
            .$limit;
    return getArrays($query);
}
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================

