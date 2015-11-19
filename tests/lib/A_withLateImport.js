////////////////////////////////////////////////////////////////////////////////
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
////////////////////////////////////////////////////////////////////////////////
// Author: Kyle Lahnakoski  (kyle@lahnakoski.com)
////////////////////////////////////////////////////////////////////////////////

importScript('http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js');

var A = function(){
	$("#message").append("<div>A.js has been loaded</div>");

	importScript(["B.js", "C.js"], function(){
		B();
		C();
	});
};
