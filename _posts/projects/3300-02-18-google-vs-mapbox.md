---
title: Google vs Mapbox
layout: project
permalink: /project/google-vs-mapbox
cardimg: /work/cards/google-vs-mapbox.gif
work:
  images:
    - title: google-vs-mapbox.gif
      col: column12
---



<div class="limiter margin-top8 clearfix padding2 margin-bottom4">
	<div id='intro' class='margin2r column7'>
		<h1 class="brandon">{{page.title}}</h1>
		<p class=" padding2y"> 
		An animated GIF for a blog post about Mapbox'  latest guide: a Rosetta Stone for users coming from the Google Maps API to Mapbox.js. 
		</p>
	</div>
	<div class="column3 clearfix facts">
		<ul class="facts">
			<li><i class='fa fa-fw fa-calendar'></i>May, 2014</li>
			<li><i class='fa fa-fw fa-paint-brush'></i>Illustration</li>
			<li><i class='fa fa-fw fa-bolt'></i>Animation</li>
			<li><i class='fa fa-fw fa-trophy'></i><a href='https://www.mapbox.com/blog/google-to-mapbox/'>View blog post</a></li>
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
  background: url(../../work/header/google-vs-mapbox.jpg) center center no-repeat;
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


.color1 {background-color: #ffffff; border: 1px solid #e4ebfa;}
.color2 {background-color: #41bce6; }
.color3 {background-color: #e66b65; }
.color4 {background-color: #777cb6; }
.color5 {background-color: #3c4e5a; }
.color6 {background-color: #1d2f37; }


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
