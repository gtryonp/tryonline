(function($) {

	mydelay = (function(){
	  var timer = 0;
	  return function(callback, ms){
		clearTimeout (timer);
		timer = setTimeout(callback, ms);
	  };
	})();

	myload=function(myprog,obj,code) 	{
		var bg=obj.css('color');
		obj.css('color','#f00');
		$.ajax({ type: "POST",  url:myprog, data: "q="+obj.val(), dataType: "json", async: false,  success: function(json){
			source= new Array();
			for ( var i = 0; i < json.length; i++ ) {
				source.push(new Array(json[i].id,json[i].value));
			};
			obj.css('color',bg);
		} ,error: function(err){alert(err.status); } }); 
	}

	$.fn.tryonline = function(myvar,myprog) {  
		source='';
		var mycount=1;
		return this.each(function() {
			$(this).
			bind('keydown.tryonline', function(e){
				var code = (e.keyCode ? e.keyCode : e.which);
				if (code == 37 || code == 39) {
					mycount=1;
					e.preventDefault();
					if(code==37 && $(this)[0].selectionStart>0)						$(this)[0].selectionStart=$(this)[0].selectionStart-1;
					if(code==39 && $(this)[0].selectionStart<$(this).val().length)	$(this)[0].selectionStart=$(this)[0].selectionStart+1;
					return false;
				};
				if (code == 38 || code == 40) {
					e.preventDefault();
					if(code==38 && mycount>1)	mycount--;
					if(code==40 && mycount<source.length-1)	mycount++;
					var buffer = $(this).val().slice(0,$(this)[0].selectionStart) ;
					actual=0;
					for(k=0;k<source.length-1;k++)	{
						if (source[k][1].indexOf(buffer)==0)	{
							actual++;
							if(actual==mycount)	{
								$(this).val(source[k][1]);
								$("#"+myvar).val(source[k][0]);
								$(this)[0].selectionStart=buffer.length;
								$(this)[0].selectionEnd=500;
								break;
							};
						};
					};
				}
			})
			.bind('keyup.tryonline', function(e) {
				var obj=$(this);
				mydelay(function(){
					var code = (e.keyCode ? e.keyCode : e.which);
					if (code == 37 || code == 38 || code == 39 || code == 40) {
						e.preventDefault();
						return false;
					}
					if(code==8)	{
						e.preventDefault();
						obj.val(obj.val().slice(0,obj.val().length-1));
					};
					var buffer = obj.val();
					if (buffer.length>0)	{
						mycount=1;
						myload(myprog,obj);
						for(k=0;k<source.length;k++)	{
							// DEBUG PURSPOSE: console.log(source[k][0]+" "+source[k][1]+" "+buffer);
							if (source[k][1].indexOf(buffer)==0)	{
								obj.val(source[k][1]);
								$("#"+myvar).val(source[k][0]);
								obj[0].selectionStart=buffer.length;
								$(this)[0].selectionEnd=500;
								break;
							};
						}
					};
				}, 1000 );
			})
		});
	};
})(jQuery);

