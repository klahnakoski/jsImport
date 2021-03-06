var edges = [
	{"import":"lib/jstree/jquery.jstree.js", "file":"modevlib/gui/TeamFilter.js"},
	{"import":"modevlib/debug/aException.js", "file":"modevlib/debug/aLog.js"},
	{"import":"modevlib/util/aTemplate.js", "file":"modevlib/gui/RadioFilter.js"},
	{"import":"modevlib/util/aTemplate.js", "file":"modevlib/aLibrary.js"},
	{"import":"modevlib/util/aTimer.js", "file":"modevlib/aLibrary.js"},
	{"import":"modevlib/util/aDuration.js", "file":"modevlib/util/aTimer.js"},
	{"import":"modevlib/util/aDuration.js", "file":"modevlib/aLibrary.js"},
	{"import":"modevlib/util/aHTML.js", "file":"modevlib/util/CNV.js"},
	{"import":"modevlib/util/aHTML.js", "file":"modevlib/aLibrary.js"},
	{"import":"modevlib/util/aString.js", "file":"modevlib/util/aTemplate.js"},
	{"import":"modevlib/util/aString.js", "file":"lib/jquery.js"},
	{"import":"modevlib/util/aString.js", "file":"modevlib/aFormat.js"},
	{"import":"modevlib/util/aString.js", "file":"modevlib/aLibrary.js"},
	{"import":"modevlib/collections/aRelation.js", "file":"modevlib/aLibrary.js"},
	{"import":"modevlib/collections/aSet.js", "file":"modevlib/aLibrary.js"},
	{"import":"modevlib/collections/aQueue.js", "file":"modevlib/aLibrary.js"},
	{"import":"modevlib/aFormat.js", "file":"modevlib/gui/GUI.js"},
	{"import":"modevlib/qb/aCompiler.js", "file":"modevlib/gui/GUI.js"},
	{"import":"modevlib/gui/RadioFilter.js", "file":"modevlib/gui/GUI.js"},
	{"import":"modevlib/gui/TeamFilter.js", "file":"modevlib/gui/GUI.js"},
	{"import":"modevlib/gui/PartitionFilter.js", "file":"modevlib/gui/GUI.js"},
	{"import":"modevlib/gui/ProgramFilter.js", "file":"modevlib/gui/GUI.js"},
	{"import":"modevlib/gui/ProductFilter.js", "file":"modevlib/gui/GUI.js"},
	{"import":"modevlib/gui/ComponentFilter.js", "file":"modevlib/gui/GUI.js"},
	{"import":"modevlib/gui/Filter.js", "file":"modevlib/gui/GUI.js"},
	{"import":"modevlib/math/aMath.js", "file":"modevlib/aLibrary.js"},
	{"import":"modevlib/math/aMath.js", "file":"modevlib/charts/aChart.js"},
	{"import":"modevlib/threads/thread.js", "file":"modevlib/rest/Rest.js"},
	{"import":"modevlib/threads/thread.js", "file":"modevlib/aLibrary.js"},
	{"import":"modevlib/threads/thread.js", "file":"modevlib/gui/GUI.js"},
	{"import":"modevlib/threads/thread.js", "file":"modevlib/qb/Qb.js"},
	{"import":"modevlib/qb/Qb.analytic.js", "file":"modevlib/qb/Qb.js"},
	{"import":"modevlib/qb/Qb.domain.js", "file":"modevlib/qb/Qb.js"},
	{"import":"modevlib/qb/Qb.cube.js", "file":"modevlib/qb/Qb.js"},
	{"import":"modevlib/qb/Qb.column.js", "file":"modevlib/qb/Qb.js"},
	{"import":"modevlib/qb/Qb.aggregate.js", "file":"modevlib/qb/Qb.js"},
	{"import":"modevlib/collections/aMatrix.js", "file":"modevlib/qb/Qb.js"},
	{"import":"modevlib/rest/Rest.js", "file":"modevlib/rest/ElasticSearch.js"},
	{"import":"modevlib/rest/Rest.js", "file":"modevlib/qb/ESQuery.js"},
	{"import":"modevlib/qb/MVEL.js", "file":"modevlib/qb/Qb.js"},
	{"import":"modevlib/qb/MVEL.js", "file":"modevlib/qb/ESQuery.js"},
	{"import":"modevlib/debug/aLog.js", "file":"modevlib/util/aTimer.js"},
	{"import":"modevlib/debug/aLog.js", "file":"modevlib/gui/ProgramFilter.js"},
	{"import":"modevlib/debug/aLog.js", "file":"modevlib/gui/RadioFilter.js"},
	{"import":"modevlib/debug/aLog.js", "file":"modevlib/rest/Rest.js"},
	{"import":"modevlib/debug/aLog.js", "file":"modevlib/threads/thread.js"},
	{"import":"modevlib/debug/aLog.js", "file":"modevlib/aLibrary.js"},
	{"import":"modevlib/debug/aLog.js", "file":"modevlib/qb/Qb.js"},
	{"import":"modevlib/debug/aLog.js", "file":"modevlib/qb/ESQuery.js"},
	{"import":"modevlib/util/aParse.js", "file":"modevlib/qb/ESQuery.js"},
	{"import":"modevlib/util/aUtil.js", "file":"modevlib/collections/aSet.js"},
	{"import":"modevlib/util/aUtil.js", "file":"modevlib/util/aTemplate.js"},
	{"import":"modevlib/util/aUtil.js", "file":"modevlib/util/CNV.js"},
	{"import":"modevlib/util/aUtil.js", "file":"modevlib/collections/aArray.js"},
	{"import":"modevlib/util/aUtil.js", "file":"modevlib/util/aDate.js"},
	{"import":"modevlib/util/aUtil.js", "file":"modevlib/aLibrary.js"},
	{"import":"modevlib/util/aUtil.js", "file":"modevlib/qb/Qb.js"},
	{"import":"modevlib/util/aUtil.js", "file":"modevlib/qb/ESQuery.js"},
	{"import":"modevlib/util/aDate.js", "file":"modevlib/util/aDuration.js"},
	{"import":"modevlib/util/aDate.js", "file":"modevlib/util/aTimer.js"},
	{"import":"modevlib/util/aDate.js", "file":"modevlib/qb/Qb.domain.js"},
	{"import":"modevlib/util/aDate.js", "file":"modevlib/aLibrary.js"},
	{"import":"modevlib/util/aDate.js", "file":"modevlib/qb/Qb.js"},
	{"import":"modevlib/util/aDate.js", "file":"modevlib/qb/ESQuery.js"},
	{"import":"modevlib/collections/aArray.js", "file":"modevlib/collections/aQueue.js"},
	{"import":"modevlib/collections/aArray.js", "file":"modevlib/collections/aSet.js"},
	{"import":"modevlib/collections/aArray.js", "file":"modevlib/util/aTemplate.js"},
	{"import":"modevlib/collections/aArray.js", "file":"modevlib/util/aDate.js"},
	{"import":"modevlib/collections/aArray.js", "file":"modevlib/aLibrary.js"},
	{"import":"modevlib/collections/aArray.js", "file":"modevlib/qb/ESQuery.js"},
	{"import":"modevlib/util/CNV.js", "file":"modevlib/debug/aException.js"},
	{"import":"modevlib/util/CNV.js", "file":"modevlib/util/aDuration.js"},
	{"import":"modevlib/util/CNV.js", "file":"modevlib/gui/ProgramFilter.js"},
	{"import":"modevlib/util/CNV.js", "file":"modevlib/gui/RadioFilter.js"},
	{"import":"modevlib/util/CNV.js", "file":"modevlib/aLibrary.js"},
	{"import":"modevlib/util/CNV.js", "file":"modevlib/charts/aColor.js"},
	{"import":"modevlib/util/CNV.js", "file":"modevlib/qb/Qb.js"},
	{"import":"modevlib/util/CNV.js", "file":"modevlib/qb/ESQuery.js"},
	{"import":"modevlib/ScrumBugs.js", "file":"modevlib/main.js"},
	{"import":"modevlib/qb/Qb.js", "file":"modevlib/qb/ESQuery.js"},
	{"import":"modevlib/qb/Qb.js", "file":"modevlib/main.js"},
	{"import":"modevlib/math/Stats.js", "file":"modevlib/main.js"},
	{"import":"modevlib/Hierarchy.js", "file":"modevlib/main.js"},
	{"import":"css/menu.css", "file":"modevlib/main.js"},
	{"import":"modevlib/charts/aColor.js", "file":"modevlib/qb/ESQuery.js"},
	{"import":"modevlib/charts/aColor.js", "file":"css/menu.css"},
	{"import":"modevlib/charts/aChart.js", "file":"modevlib/main.js"},
	{"import":"modevlib/gui/GUI.js", "file":"modevlib/charts/aChart.js"},
	{"import":"modevlib/gui/GUI.js", "file":"modevlib/main.js"},
	{"import":"modevlib/Bugzilla.js", "file":"modevlib/main.js"},
	{"import":"modevlib/rest/ElasticSearch.js", "file":"modevlib/qb/ESQuery.js"},
	{"import":"modevlib/rest/ElasticSearch.js", "file":"modevlib/main.js"},
	{"import":"modevlib/rest/BugzillaClient.js", "file":"modevlib/Bugzilla.js"},
	{"import":"modevlib/rest/BugzillaClient.js", "file":"modevlib/main.js"},
	{"import":"modevlib/MozillaPrograms.js", "file":"modevlib/gui/ProgramFilter.js"},
	{"import":"modevlib/MozillaPrograms.js", "file":"modevlib/main.js"},
	{"import":"modevlib/Settings.js", "file":"modevlib/main.js"},
	{"import":"modevlib/aLibrary.js", "file":"modevlib/qb/MVEL.js"},
	{"import":"modevlib/aLibrary.js", "file":"modevlib/Bugzilla.js"},
	{"import":"modevlib/aLibrary.js", "file":"modevlib/Hierarchy.js"},
	{"import":"modevlib/aLibrary.js", "file":"modevlib/math/Stats.js"},
	{"import":"modevlib/aLibrary.js", "file":"modevlib/ScrumBugs.js"},
	{"import":"modevlib/aLibrary.js", "file":"modevlib/Dimension.js"},
	{"import":"modevlib/aLibrary.js", "file":"modevlib/main.js"},
	{"import":"modevlib/qb/ESQuery.js", "file":"modevlib/Dimension.js"},
	{"import":"modevlib/qb/ESQuery.js", "file":"modevlib/main.js"},
	{"import":"modevlib/qb/ESQuery.js", "file":"modevlib/Dimension-Bugzilla.js"},
	{"import":"modevlib/qb/ESQuery.js", "file":"modevlib/Dimension-B2G.js"},
	{"import":"modevlib/qb/ESQuery.js", "file":"modevlib/Dimension-Features.js"},
	{"import":"modevlib/Dimension.js", "file":"modevlib/Dimension-Bugzilla.js"},
	{"import":"modevlib/Dimension.js", "file":"modevlib/Dimension-B2G.js"},
	{"import":"modevlib/Dimension.js", "file":"modevlib/Dimension-Features.js"},
	{"import":"js/burndown.js", "file":"burndown-ucid.html"},
	{"import":"modevlib/Dimension-Features.js", "file":"js/burndown.js"},
	{"import":"modevlib/Dimension-Features.js", "file":"burndown-ucid.html"},
	{"import":"modevlib/Dimension-B2G.js", "file":"modevlib/Dimension-Features.js"},
	{"import":"modevlib/Dimension-B2G.js", "file":"burndown-ucid.html"},
	{"import":"modevlib/Dimension-Bugzilla.js", "file":"modevlib/gui/ProductFilter.js"},
	{"import":"modevlib/Dimension-Bugzilla.js", "file":"modevlib/Hierarchy.js"},
	{"import":"modevlib/Dimension-Bugzilla.js", "file":"modevlib/Dimension-B2G.js"},
	{"import":"modevlib/Dimension-Bugzilla.js", "file":"burndown-ucid.html"},
	{"import":"modevlib/main.js", "file":"modevlib/Dimension-Bugzilla.js"},
	{"import":"modevlib/main.js", "file":"burndown-ucid.html"}
];


$().ready(function(){
	var sort = importScript.sort;
	var result = sort(edges);

	if (result.indexOf("modevlib/charts/aChart.js") < result.indexOf("modevlib/charts/aColor.js")){
		$("#message").append("<div>Got a problem</div>");
		alert("Error")
	}else{
		$("#message").append("<div>Passed</div>");
	}//endif
});
