////////////////////////////////////////////////////////////////////////////////
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
////////////////////////////////////////////////////////////////////////////////
// Author: Kyle Lahnakoski  (kyle@lahnakoski.com)
////////////////////////////////////////////////////////////////////////////////


if (window.C!==undefined){
	$("#message").append("<div>ERROR: C.js has been loaded twice</div>");
	throw "ERROR: C.js has been twice"
}else{
	window.C=function(){
		$("#message").append("<div>C.js has been loaded</div>");
	};
}//endif