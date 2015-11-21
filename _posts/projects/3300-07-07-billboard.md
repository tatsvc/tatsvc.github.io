---
title: Billboards
layout: project
permalink: /project/mapbox-billboards
cardimg: /work/cards/billboard.jpg
work:
  images:
    - title: billboard_01.jpg
      col: column6
    - title: billboard_02.jpg
      col: column6
    - title: billboard_03.jpg
      col: column6
    - title: billboard_04.jpg
      col: column6
    - title: billboard_05.jpg
      col: column12
---


<div class="limiter margin-top8 clearfix padding2 margin-bottom4">
	<div id='intro' class='margin2r column7'>
		<h1 class="brandon">{{page.title}}</h1>
		<p class=" padding2y">
		 A series of billboard ads for Mapbox.
		</p>
	</div>
	<div class="column3 clearfix facts">
		<ul class="facts">
			<li><i class='fa fa-fw fa-calendar'></i>July, 2015</li>
			<li><i class='fa fa-fw fa-circle-o'></i>Typography</li>
			<li><i class='fa fa-fw fa-file-o'></i>Print</li>
			<li><i class='fa fa-fw fa-camera'></i>Photography</li>
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
  background: url(../../work/header/mapbox-billboards.jpg) right top no-repeat;
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


.color1 {background-color: #39adcc; }
.color2 {background-color: #347eb9; }
.color3 {background-color: #3f526d; }
.color4 {background-color: #1d334b; }
.color5 {background-color: #e95591; }


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

