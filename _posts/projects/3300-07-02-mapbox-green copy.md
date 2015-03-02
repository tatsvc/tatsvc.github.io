---
title: Mapbox Green
layout: project
permalink: /project/mapbox-green
cardimg: /work/cards/mapbox-green.gif
work:
  images:
    - title: mapbox-green.png
      col: column12
---


<div class="limiter margin-top8 clearfix padding2 margin-bottom4">
	<div id='intro' class='margin2r column7'>
		<h1 class="brandon">{{page.title}}</h1>
		<p class=" padding2y">
		 A new page for the <a href='http://www.mapbox.com'>Mapbox website</a> about how Green we're trying to be at Mapbox. The goals was to make this page as much fun as possible by adding different svg illustrations that I animated using css animations. 
		</p>
	</div>
	<div class="column3 clearfix facts">
		<ul class="facts">
			<li><i class='fa fa-fw fa-calendar'></i>February, 2015</li>
			<li><i class='fa fa-fw fa-circle'></i>UI/UX</li>
			<li><i class='fa fa-fw fa-code'></i>Frontend Development</li>
			<li><i class='fa fa-fw fa-paint-brush'></i>Illustration</li>
			<li><i class='fa fa-fw fa-bolt'></i>Animation</li>
			<li><i class='fa fa-fw fa-trophy'></i><a href='http://www.mapbox.com/about/green'>View page</a></li>
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
  background: url(../../work/header/mapbox-green.jpg) center top no-repeat;
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
.color2 {background-color: #56b881; }
.color3 {background-color: #39abc7; }
.color4 {background-color: #3784ba; }
.color5 {background-color: #2a4048; }


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

