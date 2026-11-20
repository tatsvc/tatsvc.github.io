---
title: State of the Map US
layout: project
permalink: /project/sotm
cardimg: /work/cards/sotm.jpg
work:
  images:
    - title: sotm_03.jpg
      col: column6
    - title: sotm_04.jpg
      col: column6
    - title: sotm_01.jpg
      col: column6
    - title: sotm_02.jpg
      col: column6
    - title: sotm_05.jpg
      col: column6
    - title: sotm_06.jpg
      col: column6
    - title: sotm_07.jpg
      col: column6
    - title: sotm_08.jpg
      col: column6
    - title: sotm_09.jpg
      col: column4
    - title: sotm_10.jpg
      col: column4
    - title: sotm_11.jpg
      col: column4
    - title: sotm_12.jpg
      col: column6
    - title: sotm_13.jpg
      col: column6
    - title: sotm_14.jpg
      col: column6
    - title: sotm_15.jpg
      col: column6
---

<div class="limiter margin-top8 clearfix padding2 margin-bottom4">
	<div id='intro' class='margin2r column7'>
		<h1 class="brandon">{{page.title}}</h1>
		<p class=" padding2y">
		State of the Map US design: logo design, website, beer coasters, booklets, t-shirts, illustrations, posters,... From hanging out at the print shop to pick the right colors, to designing and building the website and handeling the print materials.
		</p>
	</div>
	<div class="column3 clearfix facts">
		<ul class="facts">
			<li><i class='fa fa-fw fa-calendar'></i>July, 2016</li>
			<li><i class='fa fa-fw fa-paint-brush'></i>Illustration</li>
			<li><i class='fa fa-fw fa-circle'></i>UI/UX</li>
			<li><i class='fa fa-fw fa-code'></i>Frontend Development</li>
			<li><i class='fa fa-fw fa-file-o'></i>Print</li>
			<li><i class='fa fa-fw fa-camera'></i>Photography</li>
			<li><i class='fa fa-fw fa-trophy'></i><a href='https://www.stateofthemap.us/'>View page</a></li>
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
  background: url(../../work/header/sotm.jpg) center top no-repeat;
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


.color1 {background-color: #ffffff; border: 1px solid #e4ebfa; }
.color2 {background-color: #d1def3; }
.color3 {background-color: #f0c2bc; }
.color4 {background-color: #edd07f; }
.color5 {background-color: #597186; }
.color6 {background-color: #29314a; }


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

