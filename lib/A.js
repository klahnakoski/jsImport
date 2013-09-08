////////////////////////////////////////////////////////////////////////////////
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
////////////////////////////////////////////////////////////////////////////////
// Author: Kyle Lahnakoski  (kyle@lahnakoski.com)
////////////////////////////////////////////////////////////////////////////////


importScript("B.js");   //DEPENDS ON B and C, ANY ORDER IS FINE
importScript("C.js");

var A=function(){
	$("#message").append("<div>A.js has been loaded</div>");
	
	B();
	C();
};
