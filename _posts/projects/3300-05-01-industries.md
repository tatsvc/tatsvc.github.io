---
title: Industries
layout: project
permalink: /project/industries
cardimg: /work/cards/industries.jpg
work:
  images:
    - title: industries.png
      col: column12
    - title: industries_00.png
      col: column12
    - title: industries_01.png
      col: column12
    - title: industries_02.png
      col: column12
    - title: industries_03.png
      col: column12
    - title: industries_04.png
      col: column12
    - title: industries_05.png
      col: column12
---


<div class="limiter margin-top8 clearfix padding2 margin-bottom4">
	<div id='intro' class='margin2r column7'>
		<h1 class="brandon">{{page.title}}</h1>
		<p class=" padding2y">
		 We launched an series of industry pages to demonstrate how companies in various industries can use Mapbox and highlight how they've been using our tools. These pages don't just list different companies using us, but show what API's they're using and how Mapbox.com is the solution for their application. The main goal of this project was to package the lego pieces for each industry and showing that Mapbox is more than just pretty maps but a powerful platform to develop complex applications on top of that drive key business decisions within these industries.
		</p>
	</div>
	<div class="column3 clearfix facts">
		<ul class="facts">
			<li><i class='fa fa-fw fa-calendar'></i>November, 2014</li>
			<li><i class='fa fa-fw fa-circle'></i>UI/UX</li>
			<li><i class='fa fa-fw fa-code'></i>Frontend Development</li>
			<li><i class='fa fa-fw fa-paint-brush'></i>Illustration</li>
			<li><i class='fa fa-fw fa-camera'></i>Photography</li>
			<li><i class='fa fa-fw fa-trophy'></i><a href='http://www.mapbox.com/industries/realestate'>View website</a></li>
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
.post-header {
  width: 100%;
  height:550px;
  background: url(../../work/header/industries.jpg) center top no-repeat;
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


.color1 {background-color: white; border: 1px solid #e4ebfa;}
.color2 {background-color: #e4e4e4; }
.color3 {background-color: #33b2d3; }
.color4 {background-color: #54cbba; }
.color5 {background-color: #074c75; }


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

