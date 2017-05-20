//Hide static content
setInterval(function(){

	//YouTube elements to hide
	var youtubeElements2Hide = [
		".html5-video-container", /*video*/
	];

	var youtubeElements2Delete = [
		".video-annotations", /*annotations*/
		".ytp-endscreen-content", /*wall of video thumbnails that appear after the video ends*/
		".thumb-link img", /*"up next" thumbnail*/
		".yt-thumb-clip img", /*video thumbnails in the right sidebar*/
		"#action-panel-details", /*video description*/
		"#watch-discussion", /*comments*/
		".branding-img-container", /*channel icon in the lower right side of the video*/
		"div[data-layer='5']" /*thumbnail preview while cursor is over time slider*/
	];

	//Pandora elements to hide
	var pandoraElements2Hide = [
		".ArtBg", /*album art wallpaper (page background)*/
		".nowPlayingTopInfo__artContainer__art", /*album art*/
		".StationListItem__img" /*station album thumbnails*/
	];

	//Vimeo elements to hide
	var vimeoElements2Hide = [
		".video-wrapper" /*video*/
	];

	//List of all elements to hide
	var elements2Hide = [];
	elements2Hide = elements2Hide.concat(youtubeElements2Hide);
	elements2Hide = elements2Hide.concat(pandoraElements2Hide);
	elements2Hide = elements2Hide.concat(vimeoElements2Hide);

	for(var i = 0; i < elements2Hide.length; i++) //For each element in the list
	{
		$(elements2Hide[i]).each(function(index){ //For each match found
			$(this).hide(); //Hide the element
		});
	}

	//List of all elements to delete
	var elements2Delete= [];
	elements2Delete = elements2Delete.concat(youtubeElements2Delete);

	for(var i = 0; i < elements2Delete.length; i++) //For each element in the list
	{
		$(elements2Delete[i]).each(function(index){ //For each match found
			$(this).remove(); //Hide the element
		});
	}
},333);