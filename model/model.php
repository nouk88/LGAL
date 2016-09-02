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
            datum>='".$datum.
            "' ORDER BY
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
            datum>='".$datum."
            ' ORDER BY
            datum ASC
            LIMIT "
            .$limit;
    return getArrays($query);
}

//==============================================================================
function getFotoCategorie()
{
    $query="SELECT
            id,
            naam,
            datum,
            lokatie
            FROM
            foto_categorie";
     return getArrays($query);		
}
//==============================================================================
function getFotosByCategorieId($Categorie_id)
{
    $query="SELECT
            id,
            naam,
            alt_tekst,
            link,
            type_foto
            FROM
            foto
            WHERE
            categorie_id=".$Categorie_id;
    return getArrays($query);
  }
//==============================================================================
function getFotoCategorieByKolomNaamAndNaam($kolom_naam, $naam)
{
    $query="SELECT
            id,
            naam,
            datum,
            lokatie
            FROM
            foto_categorie
            WHERE "
            .$kolom_naam."=".$naam;
    return getArray($query);
}
//==============================================================================
function getFotoCategorieByDatumLimit($limit)
{
    $query="SELECT
            id,
            naam,
            datum,
            lokatie
            FROM
            foto_categorie
            ORDER BY
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

