if(nc_width=="responsive"||nc_width=="auto")
    {nc_width="100%";}
else{nc_width+="px";}
    nc_height+="px";
document.writeln('<iframe src="https://www.ashesh.com.np/nepali-calendar/calendar.php?api='+nc_api_id+'" frameborder="100" scrolling="no" marginwidth="0" marginheight="0" style="border:none; overflow:hidden; width:'+nc_width+'; height:'+nc_height+';" allowtransparency="true" onload="this.style.height=(this.contentWindow.document.body.scrollHeight+5)+\'px\';"></iframe>');
document.writeln('<style type="text/css">#ncwidgetlink{color:#3E606F; font-size:9px;}#ncwidgetlink a:link, #ncwidgetlink a:visited{color:#3E606F; text-decoration:none;}</style>');