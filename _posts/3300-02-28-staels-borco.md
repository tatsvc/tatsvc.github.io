---
title: Staels Borco
layout: project
permalink: /project/staels-borco
cardimg: /work/cards/staels-borco.jpg
work:
  images:
    - title: sb_17.jpg
      col: column6
    - title: sb_18.jpg
      col: column6
    - title: sb_19.jpg
      col: column6
    - title: sb_20.jpg
      col: column6
    - title: sb_04.png
      col: column6
    - title: sb_05.png
      col: column6
    - title: sb_06.png
      col: column6
    - title: sb_07.png
      col: column6
    - title: sb_08.png
      col: column6
    - title: sb_09.png
      col: column6
    - title: sb_10.png
      col: column6
    - title: sb_11.png
      col: column6
    - title: sb_12.png
      col: column6
    - title: sb_13.png
      col: column6
    - title: sb_14.png
      col: column6
    - title: sb_15.png
      col: column6
---

<div class="limiter margin-top8 clearfix padding2 margin-bottom4">
	<div id='intro' class='margin2r column7'>
		<h1 class="brandon">{{page.title}}</h1>
		<p class=" padding2y">
		The identity and website for Staels Borco &dash; a clothing production company based in Belgium and Tunisia. Development by Pieter Beulque (and Thomas Degry).
		</p>
	</div>
	<div class="column3 clearfix facts">
		<ul class="facts">
			<li><i class='fa fa-fw fa-calendar'></i>July, 2013</li>
			<li><i class='fa fa-fw fa-circle'></i>UI/UX</li>
			<li><i class='fa fa-fw fa-paint-brush'></i>Illustration</li>
			<li><i class='fa fa-fw fa-circle-o'></i>Typography</li>
			<li><i class='fa fa-fw fa-camera'></i>Photography</li>
			<li><i class='fa fa-fw fa-trophy'></i><a href='http://www.staelsborco.com/'>View website</a></li>
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
  background: url(../../work/header/staels-borco.jpg) center center no-repeat;
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


.color1 {background-color: #f5f3f4; border: 1px solid #e4ebfa;}
.color2 {background-color: #ffc554; }
.color3 {background-color: #f8874d; }
.color4 {background-color: #69c3aa; }
.color5 {background-color: #644a65; }


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

