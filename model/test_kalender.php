<?php
function getKalenderInhoud()
{
    $datums=getDatums();
    foreach($datums as $datum)
    {
        $date= getDateExtract($datum["id"]);
        $maand= $date[1];        
        $dag= $date[2]; 
        $jaar= $date[0];

        echo 'jsGebeurtenis('.$maand.','.$dag.','.$jaar.','.$datum["dag_naam"].','.'<p class="white-space">'.$datum["tijd"].' '.$datum["naam"].'</p>'.','.$datum["text_kleur"].','.$datum["achtergrond_kleur"].');';
    }
}


