---
layout: project
permalink: /project/industries
cardimg: /work/cards/industries.jpg
---


<div class="limiter margin-top8 clearfix padding2 margin-bottom4">
	<div id='intro' class='margin2r column7'>
		<h1 class="brandon">{{page.title}}</h1>
		<p class=" padding2y">
		Puppy kitty ipsum dolor sit good dog barky shake scratch whiskers. Finch stick Mittens play catch licks turtle ID tag pet supplies twine wag tail kitty nest tail wagging tuxedo gimme five walk. Mouse cockatiel Mittens finch grooming parrot mouse harness parrot. Ball right paw speak lazy dog vaccine licks toys maine coon cat bark wagging chirp play food. Running bark lazy dog kisses heel chirp leash heel leash.
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

