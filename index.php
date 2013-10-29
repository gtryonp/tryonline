<!doctype html>
<head>
  <meta charset="utf-8">
  <title>jQuery.tryonline plugin</title>
  <script src="http://code.jquery.com/jquery.js"></script>
  <script src="jquery.tryonline.js"></script>

  <script>
	// USE: $('#inputtext').tryonline('input_to_receive_code','ajax_target');
    $(function(){
      $('#searchstring').tryonline('myid','test.php');
    });
  </script>

  

</head>

<body onload="document.getElementById('searchstring').focus()">
<center>
	<h1>TRYONLINE ajax input.</h1>
	<h2>An autocomplete control with only one line interface (No dropdown|select|combobox control). Ideal for compact designs</h2>
	<h3>Author: Grenville Tryon (<a href='mailto:gtryonp@hotmail.com'>gtryonp@hotmail.com</a>)</h3>
</center>

	<div style='background:#ff0;display:inline'>Please type (lowercase): a</div>
	&nbsp;<br/>

	<input type="text" id="searchstring" style="width:500px;" />
	Corresponding code:<input type="text" id="myid"  disabled/>
	
	
	&nbsp;<br/>
	&nbsp;<br/>
	<i>After a second the text will show two parts: the filter (current typed letters) and the complement to the first matching element marked. Current search engine respects the letter case.<br/>
	The second textbox will receive the corresponding code.</i><br/>
	&nbsp;<br/>
	Type any search. After a delay of one second without typewritting, the input text will show itself in a red color,load the autocomplete, and show it in their natural color.
	&nbsp;<br/>
	&nbsp;<br/>

	SPECIAL KEYBOARDS:<br/>
	<div style='background:#ff0;display:inline'>[right]</div>		->	extend the filter to the next letter<br/>
	<div style='background:#ff0;display:inline'>[left]</div>		->	contract the filter to the prior letter<br/>
	<div style='background:#ff0;display:inline'>[up]</div>			->	select prior matching element<br/>
	<div style='background:#ff0;display:inline'>[down]</div>		->	select next matching element<br/>
	<div style='background:#ff0;display:inline'>[backspace]</div>	->	erase last letter from filter and reload the autocomplete<br/>
	

	&nbsp;<br/>
	&nbsp;<br/>
	<b>SYNTAX:</b>
	&nbsp;<br/>

	<textarea style="width:90%;height:200px;">
<script src="http://code.jquery.com/jquery.js"></script>
<script src="jquery.tryonline.js"></script>

<script>
$(function(){
	$('#searchstring').tryonline('myid','test.php');
});
</script>


	</textarea>

	&nbsp;<br/>
	&nbsp;<br/>
	(test.php contains the code for use it with arrays or with a MySQL database. Currently an array of countries).
  
</body>
</html>
