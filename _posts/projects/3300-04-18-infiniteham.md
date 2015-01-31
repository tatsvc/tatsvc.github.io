---
title: Infinite Ham
layout: project
permalink: /project/infiniteham
cardimg: /work/cards/infiniteham.gif
work:
  images:
    - title: infiniteham.gif
      col: column12
---



<div class="limiter margin-top8 clearfix padding2 margin-bottom4">
	<div id='intro' class='margin2r column7'>
		<h1 class="brandon">{{page.title}}</h1>
		<p class=" padding2y"> 
		I got to draw a ham at work!
		</p>
	</div>
	<div class="column3 clearfix facts">
		<ul class="facts">
			<li><i class='fa fa-fw fa-calendar'></i>April, 2014</li>
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
  background: url(../../work/header/infiniteham.jpg) center center no-repeat;
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


.color1 {background-color: #eef9fd; border: 1px solid #e4ebfa;}
.color2 {background-color: #e0ecec; border: 1px solid #e4ebfa;}
.color3 {background-color: #fad7db; }
.color4 {background-color: #f68269; }
.color5 {background-color: #eb3123; }
.color6 {background-color: #f59a4e; }


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
