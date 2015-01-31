---
title: Mapbox Book
layout: project
permalink: /project/mapboxbook
cardimg: /work/cards/mapboxbook.jpg
headerimg: /work/header/mapboxbook.jpg
work:
  images:
    - title: mapbox_book_01.jpg
      col: column12
    - title: mapbox_book_02.jpg
      col: column12
    - title: mapbox_book_03.jpg
      col: column12
    - title: mapbox_book_04.jpg
      col: column6
    - title: mapbox_book_05.jpg
      col: column6
    - title: mapbox_book_06.jpg
      col: column12
    - title: mapbox_book_07.jpg
      col: column12
    - title: mapbox_book_08.jpg
      col: column6
    - title: mapbox_book_09.jpg
      col: column6
    - title: mapbox_book_10.jpg
      col: column6
    - title: mapbox_book_11.jpg
      col: column6
    - title: mapbox_book_12.jpg
      col: column12
    - title: mapbox_book_13.jpg
      col: column12
    - title: mapbox_book_14.jpg
      col: column6
    - title: mapbox_book_15.jpg
      col: column6
    - title: mapbox_book_16.jpg
      col: column12
    - title: mapbox_book_17.jpg
      col: column12
    - title: mapbox_book_18.jpg
      col: column12
    - title: mapbox_book_19.jpg
      col: column12
    - title: mapbox_book_20.jpg
      col: column12
    - title: mapbox_book_21.jpg
      col: column6
    - title: mapbox_book_22.jpg
      col: column6
---



<div class="limiter margin-top8 clearfix padding2 margin-bottom4">
	<div id='intro' class='margin2r column7'>
		<h1 class="brandon">{{page.title}}</h1>
		<p class=" padding2y">
		As a final assignment for my spring semester at The Washington Center I had to make a 'portfolio' with all my reports, essays, assignments, internship reports, reflections, work samples,... so I decided to make a book instead of just collecting all these files.
		</p>
	</div>
	<div class="column3 clearfix facts">
		<ul class="facts">
			<li><i class='fa fa-fw fa-calendar'></i>May, 2014</li>
			<li><i class='fa fa-fw fa-paint-brush'></i>Illustration</li>
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
  background: url(../../work/header/mapboxbook.jpg) center center no-repeat;
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
.color2 {background-color: #d3d4cf; }
.color3 {background-color: #d95261; }
.color4 {background-color: #3d354d; }
.color5 {background-color: #39abc7; }
.color6 {background-color: #bca27b; }


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

