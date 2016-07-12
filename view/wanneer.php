<?php

function showWanneer()
{
    echo '  
        <h2> Wanneer </h2>
        <table id="table_wanneer">
            <tr><td><b>Wanneer</b></td> <td><b>Onderwerp</b></td></tr>';
    $datums_now=getDatumsByTypeDateNow('2',getDateAmsterdam());
    foreach ($datums_now as $datum_now) {
        $date=date_create($datum_now['datum']);
        echo '<tr><td>'.date_format($date,"d-m-Y").'</td><td>'.$datum_now['naam'].'</td></td>';   
    }
    echo'</table>';
}