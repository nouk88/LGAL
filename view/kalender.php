<?php
function showKalender()
{
    /*echo'
        <h2> Kalender </h2>
            <div>
                <script type="text/javascript" src="js/kalprogr.js"></script>
                <script type="text/javascript" src="js/kalitems.js"></script>
                <script type="text/javascript">var cal = new kalender("cal");cal.maakDatumKeuze();</script>
                <div id="MSIE"><ilayer name="NSALIGN"><layer name="NSLAYER">
                <script type="text/javascript">cal.MaakKalender();</script>
                </layer></ilayer></div>
            </div>
    ';*/
    echo'<div id="calendar"></div>';
    echo'<script type="text/javascript"> 
		$(document).ready(function() {
		//page is now ready, initialize the calendar...
			$("#calendar").fullCalendar({
				// put your options and callbacks here
			})
		});
	</script>';
}
