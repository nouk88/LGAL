<?php
################################################################################
# Auteur: Anouk Classens
# Project: LGAL php
# Doel: algemene page controller functies
# Versie: 1 
# Datum: 7-7-2016
################################################################################
function getPage()
{
    if (isPosted())
    {
       return getPostVar("page","home"); 
    }   
    else 
    {
        return getUrlVar("page","home");
    }    
}
//==============================================================================
function showPage()
{
    include_once '../LGALmvc/view/view.php';
    showHeader(getPage());
    showHead();
    showNav();
    showContent(getPage());
    showSideContainer();
    showFooter(); 
}
