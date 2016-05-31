<script type='text/javascript'>
	//<![CDATA[

	function removeHtmlTag(strx,chop){ 
		if(strx.indexOf("<")!=-1){
			var s = strx.split("<"); 
			for(var i=0;i<s.length;i++){ 
				if(s[i].indexOf(">")!=-1){ 
					s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length); 
				} 
			} 
			strx =  s.join(""); 
		}
		chop = (chop < strx.length-1) ? chop : strx.length-2; 
		while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++; 
		strx = strx.substring(0,chop-1); 
		return strx+'...'; 
	}
      
	function createSummaryAndThumb(pID){
		var div = document.getElementById(pID);
		var imgtag = "";
		var img = div.getElementsByTagName("img");
		var summ = summary_noimg;
		var img_span_width = img_thumb_width+15;
		if(img.length>=1) {	
          imgtag = '<span class="ibda3point_post_thumb" style=""><img src="'+img[0].src+'" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px" style="" /></span>';
			summ = summary_img;
		}
		
		var summary = imgtag + '<div class="ibda3point_blog_summary">' + removeHtmlTag(div.innerHTML,300) + '</div>';
		div.innerHTML = summary;
	}

      function showpic(pID){
		var div = document.getElementById(pID);
		var imgtag = "";
		var img = div.getElementsByTagName("img");
		var summ = summary_noimg;
		var img_span_width = img_thumb_width+15;
		if(img.length>=1) {	
          imgtag = '<span class="ibda3point_post_thumb" style="width:46%;"><img src="'+img[0].src+'" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px" style="border-radius: 6px 6px 0 0;" /></span>';
			summ = summary_img;
		}
		
		var showimg = imgtag;
		div.innerHTML = showimg;
}

	//]]>
</script>