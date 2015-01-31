---
title: Rolstende
layout: project
permalink: /project/rolstende
cardimg: /work/cards/rolstende.jpg 
work:
  images:
    - title: rolstende_01.jpg
      col: column6
    - title: rolstende_02.jpg
      col: column6
    - title: rolstende_03.jpg
      col: column6
    - title: rolstende_04.jpg
      col: column6
    - title: rolstende_05.jpg
      col: column6
    - title: rolstende_06.jpg
      col: column6
---

<div class="limiter margin-top8 clearfix padding2 margin-bottom4">
	<div id='intro' class='margin2r column7'>
		<h1 class="brandon">{{page.title}}</h1>
		<p class=" padding2y">
		Rolstende is a web app we (Thomas Degry, <a href='http://www.pieterbeulque.be'>Pieter Beulque</a> and me) created in only 5 days for the integration course 'Major Atelier' at <a href='http://www.devine.be'>Devine </a>(Development and Design, Howest University, Kortrijk, Belgium). The assignment was to make a mobile web application for ‘Ostend’ (a city on the seaside in Belgium). We were asked to make the city more welcoming towards people with disabilities, so we created this nice looking application to help them find optimized spots and events in Ostend. It's all in html/css/jquery except for the php rest service we created to fetch all our database information.
		</p>
	</div>
	<div class="column3 clearfix facts">
		<ul class="facts">
			<li><i class='fa fa-fw fa-calendar'></i>August, 2014</li>
			<li><i class='fa fa-fw fa-circle'></i>UI/UX</li>
			<li><i class='fa fa-fw fa-code'></i>Frontend Development</li>
			<li><i class='fa fa-fw fa-paint-brush'></i>Illustration</li>
			<li><i class='fa fa-fw fa-bolt'></i>Animation</li>
		</ul>
		<ul class="colors column12 padding2y">
				<li class="color1"></li>
				<li class="color2"></li>
				<li class="color3"></li>
				<li class="color4"></li>
				<li class="color5"></li>
				<li class="color6"></li>
			</ul>
		
		</div>
</div>

<div class="work limiter clearfix">

		<div class="padding2">
		<div class="videoWrapper">
		  <iframe src="//player.vimeo.com/video/64255286" width="1200" height="675" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
		</div>
		</div>
	
	    {% for item in page.work.images %}
		    <div class="{{item.col}}">
				<img src="{{site.url}}/work/img/{{page.title | downcase | replace:' ','-'}}/{{item.title}}" class="padding2" />
			</div>
         {% endfor %}

</div>



<style>

.videoWrapper {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	height: 0;
}
.videoWrapper iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.player .video-wrapper {
	position: absolute;
	width: 100%;
	height: 100%;
	background: #000;
	padding-bottom: 56.52% !important;
}



.post-header {
  width: 100%;
  height:550px;
  background: url(../../work/header/rolstende.jpg) center top no-repeat;
  background-color: #ec572c;
  background-size: cover;
}

div ul.colors {
	width: 100%;
	height: 20px;
	border-radius:50%; 
}

div ul.colors li {
	width: 20px;
	height: 20px;
	margin-right: 10px;
	float: left;
	border-radius: 50%;
}


.color1 {background-color: #eeebe6; border: 1px solid #e4ebfa;}
.color2 {background-color: #7ecdc4; }
.color3 {background-color: #77afaa; }
.color4 {background-color: #ee942b; }
.color5 {background-color: #da6752; }
.color6 {background-color: #322115; }


@media only screen and (max-width:640px) {
	.post-header {
		height: 300px;
	}
	.nav-roundslide {
		top: 170px;
	}
	.nav-roundslide a { margin: 0 10px;}
}
</style>

