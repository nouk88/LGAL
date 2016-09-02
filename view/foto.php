<?php

function showFoto()
{
    echo '<h2>Foto\'s</h2>';
	
        $categorieen=getFotoCategorieByDatumLimit(5);
        foreach($categorieen as $categorie)
        {
            echo' <h3>'.$categorie["naam"].'<h3>
                <div id="myCarousel' .$categorie["id"]. '" class="carousel slide" data-ride="carousel" data-interval="false">
                <!-- Indicators -->
                    <ol class="carousel-indicators">';
			$fotos=getFotosByCategorieId($categorie["id"]);
			foreach($fotos as $key => $foto)
			{
                            echo'<li data-target="#myCarousel' .$categorie["id"]. '" data-slide-to="'.$key.'" class="active"></li>';
			}
                echo '</ol>
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner" role="listbox">';
			
			foreach($fotos as $key => $foto)
			{
                            if ($key==0)
                            {
                                echo '<div class="item active '.$foto["type_foto"].'">
                                <img src="' .$foto["link"]. '" alt="' .$foto["link"]. '"  >
                                    </div>';
                            }
                            else
                            {
                            echo '<div class="item '.$foto["type_foto"].'">
                                <img src="' .$foto["link"]. '" alt="' .$foto["link"]. '" >
                                </div>';		
                            }	
			}
			echo'</div>
				<!-- Left and right controls -->
				<a class="left carousel-control" href="#myCarousel' .$categorie["id"]. '" role="button" data-slide="prev">
					<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="right carousel-control" href="#myCarousel' .$categorie["id"]. '" role="button" data-slide="next">
					<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
                            </div>';	
	 }
}