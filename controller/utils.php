<?php
################################################################################
# Auteur: JAM, Anouk Classems
# Project: Wiki PHP
# Doel: handige functies, zwitsers zakmes
# Versie: 2 
# Datum: 7-7-2016
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
function uniqueFilename($ext = ".jpg") 
{ 
    // explode the IP of the remote client into four parts 
    $ipbits = explode(".", $_SERVER["REMOTE_ADDR"]); 
    // Get both seconds and microseconds parts of the time 
    list($usec, $sec) = explode(" ",microtime()); 
    // Fudge the time we just got to create two 16 bit words 
    $usec = (integer) ($usec * 65536); 
    $sec = ((integer) $sec) & 0xFFFF; 
    // Fun bit - convert the remote client's IP into a 32 bit 
    // hex number then tag on the time. 
    // Result of this operation looks like this xxxxxxxx-xxxx-xxxx 
    $uid = sprintf("%08x-%04x-%04x",($ipbits[0] << 24) 
           | ($ipbits[1] << 16) 
           | ($ipbits[2] << 8) 
           | $ipbits[3], $sec, $usec); 
    // Tag on the extension and return the filename 
    return $uid.$ext; 
} 
//==============================================================================	
function resizeImage($filename,$ext,$max_width,$new_filename) 
{ 
    try
    {
        $ext = strtolower($ext); 
        if ($new_filename == "") 
        {
            $new_filename = $filename;
        }
        list($width, $height) = getimagesize($filename); 
        if ($width <= $max_width) 
        {
            $max_width = $width;
        }
        $percent = $max_width/$width; 
        $new_width = 	$width * $percent; 
        $new_height =	$height * $percent; 
        $thumb = imagecreatetruecolor($new_width, $new_height); 
        if($ext=='.png') 
        {
            imagealphablending($thumb, true);
            $transparent = imagecolorallocatealpha( $thumb, 0, 0, 0, 127 );
            imagefill( $thumb, 0, 0, $transparent ); 
            imagesavealpha($thumb, true);
        }
        if ($ext == '.jpg' || $ext == '.jpeg') 
        {
            $source = imagecreatefromjpeg($filename);
        }
        if ($ext == '.gif') 
        {
            $source = imagecreatefromgif($filename);
        }
        if($ext=='.png') 
        {
            $source = imagecreatefrompng($filename); 
        }	
        imagecopyresampled($thumb, $source, 0, 0, 0, 0, $new_width, $new_height, $width, $height); 
        if ($ext == '.jpg' || $ext == '.jpeg') 
        {
            return imagejpeg($thumb, $new_filename);
        }
        if ($ext == '.gif') 
        {
            return imagegif($thumb, $new_filename);
        }
        if ($ext == '.png') 
        {
            return imagepng($thumb, $new_filename);
        }
    }
    catch (Exception $e)
    {
        return false;	
    }    
} 
//==============================================================================
function encodeSaveCode($code_input)
{
    //$find=array('(',')','{','}','[',']','<','>');
    //$replace=array(')','(','}','{',']','[','>','<');
    //$code=str_replace($find, $replace, $code_input);
    //return $code; 
    //global $my_connection;
    //$code_escaped_slashes = stripcslashes($code_input);
    $code64=base64_encode($code_input);
    return $code64;    
}
//==============================================================================
function decodeSaveCode($code_output)
{
    $code64= base64_decode($code_output);
  
    //$code = stripslashes(nl2br($code64));
    return $code64;
    //$find=array(')','(','}','{',']','[','>','<');
    //$replace=array('(',')','{','}','[',']','<','>');
    //$code=str_replace($find, $replace, $code_input);
    //return $code;
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
function showOpenRow($class_var="")//form-group
{
    echo '<div class="row '.$class_var.' ">';
}
//==============================================================================
function showCloseRow()
{
    echo '</div>';
}
//==============================================================================
function showImage($id_img, $pad, $alternatieve_text)
{
   echo' <img id="'.$id_img.'" src="'.$pad.'" width="" height="" alt="'.$alternatieve_text.'"/>';
}        
//==============================================================================        
function showHiddenField($name,$value)
{
    echo '<input type="hidden" name="'.$name.'" value="'.$value.'" > ';
}
//==============================================================================
function showCheckboxSet($name,$items,$label_name)
{
    echo '<div class="row form-group">';
    echo '<label class="checkbox" for="'.$name.'">'.ucfirst($label_name).'</label> ';
    foreach ($items as $item)
    {
        echo ' <div class="checkbox-inline">
                 <label><input type="checkbox" name="'.$name.'" value="'.$item["id"].'">'.$item["name"].'</label>
             </div> ';
    } 
    echo '</div>';
}
//==============================================================================
function showCheckboxSetWikiChecked($name,$items,$label_name,$id)
{
    echo '<div class="row form-group">';
    echo '<label class="checkbox" for="'.$name.'">'.ucfirst($label_name).'</label> ';
    $checked_tags= getTagIDsByWikiID($id);
    //print_r($checked_tags);
    foreach ($items as $item)  
    {
        if(in_array($item["id"], $checked_tags))
        {
            echo '  <div class="checkbox-inline">
                        <label><input type="checkbox" name="'.$name.'" value="'.$item["id"].'" checked>'.$item["name"].'</label>
                    </div>';    
        }                
        else
        {
            echo '  <div class="checkbox-inline">
                        <label><input type="checkbox" name="'.$name.'" value="'.$item["id"].'">'.$item["name"].'</label>
                    </div>';
        }
    } 
    echo '</div>';
}
//==============================================================================
function showDropDownFormField($label, $name, $options )
{
    echo '<label> '.$label.'</label>
      <select class="form-control" id="" name="'.$name.'">';
    foreach ($options as $key=>$value) 
    {
        echo '<option value="'.$key.'">'.$value.'</option>';
    }   
    echo '</select>';
}
//==============================================================================
function showTextareaField($name,$value="", $label, $id = "", $placeholder="" )
{
    echo '<div class="row form-group">
            <label class= "editor" for="'.$name.'">'.ucfirst($label).'</label>
            <textarea class= "form-control" rows="5" id="'.$id.'" placeholder="'.ucfirst($placeholder).'" name="'.$name.'">'.$value.'</textarea>
        </div>'; 
}
//==============================================================================
 function showButton($name, $type, $class)
 {
    echo '<button type="'.$type.'" class= "'.$class.'" >'.$name.'</button>';
 }
 //==============================================================================
 function showTextField($name, $name_input, $value="", $placeholder="")
 {
    echo '<div class="row form-group">
            <label class= "" for= "'.$name.'">'.ucfirst($name).'</label>
            <input class= "" type= "text" name="'.$name_input.'" placeholder="'.ucfirst($placeholder).'" id="'.$name.'" value="'.$value.'">
         </div>';
 }
 //==============================================================================
  function showUploadField($name, $name_input, $value="")
 {
       echo '<label class= "" for= "'.$name.'">'.ucfirst($name).'</label>
            <input class= "" type= "file" name="'.$name_input.'" value="'.$value.'" placeholder="'.ucfirst($name).'" id="'.$name.'">';
 }
 //==============================================================================
 function openForm($id_div, $id_form,$action,$method,$enctype)
 {
       echo '<div id="'.$id_div.'" class="container-fluid"> 
            <form id="'.$id_form.'" class="form-horizontal" role="form" action="'.$action.'" method="'.$method.'" enctype="'.$enctype.'">';
 }
 //==============================================================================
 function closeForm()
 {
        echo '</form></div>';		                  
 }
//==============================================================================
 function showEditor($name,$value, $label, $id, $placeholder="")
 {
    echo '<script>tinymce.init({ 
       selector:"#'.$id.'" ,
       automatic_uploads: false,
       height: 300,
    plugins: [
        "advlist autolink lists link charmap print preview anchor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime table contextmenu paste code"
    ],
    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link",
    });</script>';
    showTextareaField($name, $value, $label, $id, $placeholder);   
 }
 //==============================================================================
 function showEditBlog($name, $blog_id, $label)
 {
    $value = getBlogByID($blog_id);
    showEditor($name, $value["blog_text"], $label, "textarea");
 }
 //=============================================================================
 function showEditWiki($name, $wiki_id, $label, $kolom_name)
 {
    $value = getWikiByID($wiki_id);
    showEditor($name, $value[$kolom_name], $label, "textarea");
 }
//==============================================================================
  function showEditSpecialUser($name, $user_id, $label, $kolom_name)
 {
    $value = getSpecialUserByID($user_id);
    showEditor($name, $value[$kolom_name], $label, $name);
 }
//==============================================================================
 function showEmailField($name)
{
	echo'<div class="form-group"><label for="'.$name.'">'.ucfirst($name).':</label><input type="email" placeholder="'.ucfirst($name).'" name="'.$name.'"></div>';
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
