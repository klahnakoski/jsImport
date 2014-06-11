jsImport
========

Load Javascript dependencies dynamically

Motivation
----------

I wanted a set of static web pages without having to repeat all
dependent javascript files in every HTML file.  With jsImport, HTML files have
trivial references to javascript, and each JS file is only responsible for
importing it's own set of files.  Dependencies are topologically sorted and
loaded only once.

For more reading, there is a [blog covering the desirable aspects of a
Javascript module system](http://blog.startifact.com/posts/js-dependency-tools-redux.html)
(see Review section down the page).  Here is another [blog post advocating the benefits of globals in a package context](http://lisperator.net/blog/thoughts-on-commonjs-requirejs/).


Usage
-----

  1. The first ```<script>``` you need on your web page is to reference
  ```import.js```, everything else will be dynamically loaded

        <HEAD>
            <script type="application/javascript" src="js/import.js"/>
        </HEAD>

  2. The second script must call ```importScript``` with two parameters: A
  (list of) Javacript file(s) to load, and a function to run when they are loaded


        importScript('tests.lib/A.js', function(){
            A();
        });

  3. All other javascript files can have ```importScript()``` calls to indicate
  the dependencies for itself

Here is [a simple example](tests/Simple.html) to demonstrate usage.


BENEFITS
--------

**Simple html pages**

All but a few JS files are mentioned in your HTML page.  The dependencies have
 been moved where they make logical sense.

**Dependencies only specified once**

With the JS out of the HTML, each JS file is only responsible for importing the
JS it needs.

**Simple call structure**

Dependencies are referenced by relative, or absolute file names.  This includes
*.css files, which often come with plugins.

**Parallel and serial dependencies**

Most times dependency order does not matter because you are importing independent
objects:  For example, it does not matter if the ```dateLib.js``` library is
loaded first, or the ```mathLib.js``` library is first.

Some JS declares objects that are used by other JS files.  Usually, the web
server is responsible for inserting the ```<script>``` tags into the html header
in the proper order; ```importScript``` can do this instead.

**Import old-style JS (namespace pollution)**

Namespace pollution can be bad, but it is mostly good [http://lisperator.net/blog/thoughts-on-commonjs-requirejs/](http://lisperator.net/blog/thoughts-on-commonjs-requirejs/).
```importScript``` is designed to act like import commands in other
languages, where importing a library adds multiple objects and functions to the
immediate namespace.

There are many old-style JS out there that add multiple names to the window
object.  ```importScript``` can import those simply, without encapsulating and
exporting as per require.js

**Less Server-side work**

The server need not inject the JS scripts into the html template, and only needs
to serve the pages unchanged.  Web infrastructure can cache pages without ever
going back to server to begin with.



BASIC FEATURES
--------------

**Declare a Dependency**

All dependcies must be the first instructions in a JS file.  Sorry, but the preprocessor is naive.

    importScript("a.js");


**Declare Many Dependecies (any order)**

Multiple dependencies can be listed, but the import routine will rearrage them as required.

    importScript("a.js");
    importScript("b.js");
    importScript("c.js");

**Declare Many Dependencies (serial order)**

Use an array to force a specific import order.  This is useful
 when using non-minified version of JS libraries which are broken into many files, or when using plugins.

	importScript([
        "a.js",
        "b.js",
        "c.js"
    ]);

IMPORTANT
---------

```importScript``` is only ever called once.  This first call can have two parameters.

  1. JS dependency (list)
  2. Function to run when **all** scripts are loaded

During this first call, ```importScript``` is replaced with an impotent function
so calling it again does nothing.  This first call is responsible for scanning all JS
files and loading them into the ```<HEAD>```.  Despite all the ```importScript```
function calls in your code, they are actually treated like pre processing directives.


DRAWBACKS
---------

Here are some of complications to look out for

**ONLY WORKS IN FIREFOX**

This has only ever been tried on Firefox.

**STILL HAS BUGS**

Only the most naive logic is used to pre-process the Javascript and pull out ```importScript()``` calls.

**SLOW**

All scripts are loaded immediately, which can delay apparent page loading.  Caching reduces the load times
significantly, but I suggest some sort of default screen while the user waits.

**NO PACKAGE MANGER**

Slowness could be solved if the dependecy analysis and minification was done at
deployment time.  No such code has been written to do this yet

**NOT DYNAMIC**

The dependency analysis is done once for the whole page.  If there are JS
files that never get used, they are still loaded.   Maybe this library can be
extended to perform dynamic loads.




