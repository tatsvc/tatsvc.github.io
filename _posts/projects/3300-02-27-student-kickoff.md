---
title: Student Kickoff
layout: project
permalink: /project/student-kickoff
cardimg: /work/cards/student-kickoff.jpg
work:
  images:
    - title: skomotion_03.png
      col: column6
    - title: skomotion_02.png
      col: column6
    - title: skomotion_01.png
      col: column6
    - title: skomotion_04.png
      col: column6
    - title: skomotion_05.png
      col: column6
    - title: skomotion_06.png
      col: column6
---

<div class="limiter margin-top8 clearfix padding2 margin-bottom4">
	<div id='intro' class='margin2r column7'>
		<h1 class="brandon">{{page.title}}</h1>
		<p class=" padding2y">
	The promotional movie for 'Student Kickoff', an event that celebrates the start of a new college year. This was aired on Jim TV and 2B (Flemish television channels) for two weeks.
		</p>
	</div>
	<div class="column3 clearfix facts">
		<ul class="facts">
			<li><i class='fa fa-fw fa-calendar'></i>September, 2013</li>
			<li><i class='fa fa-fw fa-paint-brush'></i>Illustration</li>
			<li><i class='fa fa-fw fa-bolt'></i>Animation</li>
		</ul>
		<ul class="colors column12 padding2y">
				<li class="color1"></li>
				<li class="color2"></li>
				<li class="color3"></li>
				<li class="color4"></li>
				<li class="color5"></li>
			</ul>
		
		</div>
</div>

<div class="work limiter clearfix">

		<div class="padding2">
		<div class="videoWrapper">
		   <iframe src="//player.vimeo.com/video/73457725" width="1200" height="675" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
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
  background: url(../../work/header/student-kickoff.jpg) center center no-repeat;
  background-color: #1f2847;
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


.color1 {background-color: #faf6de; border: 1px solid #e4ebfa;}
.color2 {background-color: #fcc235; }
.color3 {background-color: #057fd6; }
.color4 {background-color: #ee3315; }
.color5 {background-color: #10182c; }


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

