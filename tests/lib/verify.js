function verify(value){
	function tryAgain(times){
		var result = $("#message").text();
		if (result==value){
			$("#message").append("PASSED");
		}else if (times==0){
			$("#message").append("FAILED");
		} else {
			setTimeout(function(){
				tryAgain(times-1);
			}, 1000);
		}//endif
	}//function

	tryAgain(15);
}//function
