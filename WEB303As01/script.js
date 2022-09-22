/*
	WEB 303 Assignment 1 - jQuery
	{Nisarg Patel}
*/

	//adding ready function
	$(document).ready(function(){
	//change event ("whenver there will be any change in year salry filed it will call this function")
	$("#yearly-salary").change(function(){
		//function call
		calulate();
	  });

	//change event ("whenver there will be any change in year percent filed it will call this function")
	  $("#percent").change(function(){
		//fucnction call
		calulate();
	  });

	  //function calulate is the logic to calualte the percentage 
	  function calulate(){
		var salary = $("#yearly-salary").val();
		var percent = $("#percent").val();
		const result = (salary/100) * percent;
		$("#amount").text('$' + result.toFixed(2));		
	  }

  });
