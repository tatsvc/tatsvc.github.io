---
title: Mapbox Blog
layout: project
permalink: /project/mapbox-blog
cardimg: /work/cards/mapbox-blog.jpg
work:
  images:
    - title: blog-feed.jpg
      col: column12
    - title: category-list.jpg
      col: column12
    - title: single-page.jpg
      col: column12
---


<div class="limiter margin-top8 clearfix padding2 margin-bottom4">
	<div id='intro' class='margin2r column7'>
		<h1 class="brandon">{{page.title}}</h1>
		<p class=" padding2y">
			The Mapbox blog redesign I worked on with <a href="https://www.mapbox.com/about/team/#katy-decorah">Katy</a> and <a href="https://www.mapbox.com/about/team/#maya-gao">Maya</a>.
		</p>
	</div>
	<div class="column3 clearfix facts">
		<ul class="facts">
			<li><i class='fa fa-fw fa-calendar'></i>March, 2015</li>
			<li><i class='fa fa-fw fa-circle'></i>UI/UX</li>
			<li><i class='fa fa-fw fa-code'></i>Frontend Development</li>
			<li><i class='fa fa-fw fa-paint-brush'></i>Illustration</li>
			<li><i class='fa fa-fw fa-trophy'></i><a href='https://www.mapbox.com/blog/'>View page</a></li>
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
		<iframe src="https://player.vimeo.com/video/146494133?title=0&byline=0&portrait=0" width="1200" height="751" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
		</div>
		</div>

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
  background: url(../../work/header/mapbox-blog.jpg) center top no-repeat;
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
.color2 {background-color: #e6e6e6; }
.color3 {background-color: #52b679; }
.color4 {background-color: #f67e64; }
.color5 {background-color: #3f526d; }
.color6 {background-color: #3f526c; }


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

