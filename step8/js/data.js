$(function(){
    $.ajax({
      type:'GET',
      url: 'json/data.json',
      dataType : 'json'
      })
      .done(function(data){
      console.log(data); 
      alert(data);
    }).fail(function(data){
      console.log(data); 
      alert('error!!!');
    });
});
