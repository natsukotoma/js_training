$(function(){
    $.ajax({
      type:'GET',
      url: 'json/data.json',
      dataType : 'json',
      success: function(data){
        alert("success");
	   },
      error: function (){
        alert("error");
      }
    });
  });

