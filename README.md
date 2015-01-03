Sample Design Assignment
========================

Content:
--------
zip file contains the following folders:
- src (all source files including scss code before compiling)
	|-- css
	|	|--ie.css
	|	|--screen.css
	|-- images
	|	|--accepted.png
	|	|--complete.png
	|	|--Computer.png
	|	|--find.png
	|	|--pending.png
	|	|--rejected.png
	|	|--running.png
	|-- js
	|	|--app.js
	|	|--controllers.js
	|	|--services.js
	|-- sass
	|	|-- lib
	|	|	|--_arrows.scss
	|	|	|--_backgroundcover.scss
	|	|--ie.scss
	|	|--screen.scss
	|-- server (represents server samples for test purpose only)
	|-- views
	|	|--main.html
	|--config.rb
	|--index.html
- final (only necessary files to run)
	|-- css
	|	|--ie.css
	|	|--screen.css
	|-- images
	|	|--accepted.png
	|	|--complete.png
	|	|--Computer.png
	|	|--find.png
	|	|--pending.png
	|	|--rejected.png
	|	|--running.png
	|-- js
	|	|--app.js
	|	|--controllers.js
	|	|--services.js
	|-- server (represents server samples for test purpose only)
	|--index.html

Installation:
-------------
To test the solution, just unzip "final" folder and access index.html using your browser. Make sure you are have internet access because the code need to load the following online files:
o http://code.angularjs.org/1.2.16/angular.js
o http://code.angularjs.org/1.2.16/angularoanimate.js
o http://bouil.github.io/angularogoogleochart/ngogoogleochart.js

Comments:
---------
o The whole solution is single page.
o This page is not responsive, its width is 960px but the code written to be flexible. To change the width just edit line 2 in "screen.scss" file and replace "960" with your prefered width the prefered width in pixels then compile the css.
o To compile the css "compass" is needed.
o The compiled code has been tested using the following browsers:
	- Google Chrome Version 39.0.2171.95 m (64-bit)
	- Mozilla Firefox Version 34.0.5
	- Internet Explorer Version 8.0.7600.16385
o The default folder is "final" on domain root. If you installed the solution in another folder please change line 1 in "screen.scss" with new path then compile. If you didn't write the right path, the icons will not appear in IE.

Deployment:
-----------
o GitHup: https://github.com/newpharaoh21/assignment
o Online demo: http://newpharaoh21-001-site1.hostbuddy.com

About:
------
This solution has been implemented by Tamer Inawy. For any question, kindly contact me at:
o email: newpharaoh21.21@gmail.com
o phone: +201111811159
o skype: newpharaoh21