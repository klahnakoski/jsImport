
importScript("B.js");   //DEPENDS ON B and C, ANY ORDER IS FINE
importScript("C.js");

var A=function(){
	$("#message").append("<div>A.js has been loaded</div>");
	
	B();
	C();
};
