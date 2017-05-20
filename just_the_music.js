/*Hide elements*/
setInterval(function(){
	var elementArr = [];

	var youtubeVideos = document.getElementsByClassName("html5-video-container");
	for(var i = 0; i < youtubeVideos.length; i++)
	{
	   elementArr.push(youtubeVideos.item(i));
	}

	var pandoraBackgroundWallpaper = document.getElementsByClassName("ArtBg");
	for(var i = 0; i < pandoraBackgroundWallpaper.length; i++)
	{
		elementArr.push(pandoraBackgroundWallpaper.item(i));
	}

	var pandoraAlbumCovers = document.getElementsByClassName("nowPlayingTopInfo__artContainer__art");
	for(var i = 0; i < pandoraAlbumCovers.length; i++)
	{
		elementArr.push(pandoraAlbumCovers.item(i));
	}

	var vimeoVideos = document.getElementsByClassName("video-wrapper");
	for(var i = 0; i < vimeoVideos.length; i++)
	{
		elementArr.push(vimeoVideos.item(i));
	}
	
	for(element in elementArr){
		var el = elementArr[element];
		if (typeof el !== 'undefined'){ //If element exists
			el.style.visibility = "hidden";
		}
	}

	//Hide annotations on YouTube
	$(".video-annotations").hide();

	//Hide endscreen content on YouTube
	$(".ytp-endscreen-content").hide();

	//Hide "up next" thumbnails on YouTube
	$(".thumb-link img").hide();
	$(".yt-thumb-clip img").hide();

	//Hide comments on YouTibe
	$("#comment-section-renderer").hide();

	//Hide description panel on YouTube
	$("#watch-description").hide();

	//Hide channel icon in the lower right side of the YouTube video
	$(".branding-img-container").hide();
},1000);

setInterval(function(){
	//Hide video scrolling preview
	$(".ytp-preview").hide();
},100);

function isHidden(el) {
    return (el.style.visibility === 'hidden')
}