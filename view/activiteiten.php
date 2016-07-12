<?php

function showActiviteiten()
{   
    echo '  
        <h2> Activiteiten </h2>
        <table id="table_activiteiten">
            <tr><td><b>Wanneer</b></td> <td><b>Onderwerp</b></td></tr>';
    $datums_now=getDatumsByTypeDateNow('1',getDateAmsterdam());
    foreach ($datums_now as $datum_now) {
        $date=date_create($datum_now['datum']);
        echo '<tr><td>'.date_format($date,"d-m-Y").'</td><td>'.$datum_now['naam'].'</td></td>';   
    }
    echo '  
        </table>
        <br>
        <p><b>Activiteiten die reeds ondernomen zijn:</b></p>
        <ul>
            <li>Dierentuinbezoek</li>
            <li>Bioscoopbezoek</li>
            <li>Boottocht</li>
            <li>Bowlen</li>
            <li>Karten</li>
        </ul>
    ';
   
}
