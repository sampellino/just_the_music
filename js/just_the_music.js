//Keep checking the tab on an interval
setInterval(function(){
	var windowURL = window.location.toString();

	//If the URL contains a keyword for a site, kick-off that site's custom function
	if (windowURL.toLowerCase().indexOf("youtube") !== -1){
		YouTube();
	}else if (windowURL.toLowerCase().indexOf("pandora") !== -1){
		Pandora();
	}else if (windowURL.toLowerCase().indexOf("vimeo") !== -1){
		Vimeo();
	}else if (windowURL.toLowerCase().indexOf("soundcloud") !== -1){
		SoundCloud();
	}
},333);

function YouTube() {
	//YouTube elements to hide
	var youtubeElements2Hide = [
		".html5-video-container", /*video*/
		".thumb-link img", /*"up next" thumbnail*/
		".yt-thumb-clip img" /*video thumbnails in the right sidebar*/
	];

	//YouTube elements to delete
	var youtubeElements2Delete = [
		".video-annotations", /*annotations*/
		".ytp-endscreen-content", /*wall of video thumbnails that appear after the video ends*/
		"#action-panel-details", /*video description*/
		"#comments", /*comments*/
		".branding-img-container", /*channel icon in the lower right side of the video*/
		"div[data-layer='5']", /*thumbnail preview while cursor is over time slider*/
		".resume-playback-progress-bar", /*red playback progress bar that appears under related video thumbnails*/
		"#watch-action-panels", /*share/embed/email panel that appears when a video ends*/
		"#watch-sidebar-live-chat", /*live chat for YouTube live videos*/
		".ytd-thumbnail", /*up-next and related video thumbnails*/
		".ytd-video-owner-renderer", /*video owner thumbnail*/
		"ytd-playlist-video-thumbnail-renderer" /*playlist thumbnails (apparently different than regular thumbnails)*/
	];
	
	var youtubeElements2Show = [
		".loop-button:not(.button-show-icon) .yt-uix-button-icon-wrapper" /*Add to/share/more buttons*/	
	];

	HideElements(youtubeElements2Hide); //Hide specified DOM elements
	DeleteElements(youtubeElements2Delete); //Delete specified DOM elements
	ShowElements(youtubeElements2Show); //Show specified DOM elements
}

function Pandora(){
	//Pandora elements to hide
	var pandoraElements2Hide = [
		".ArtistDetailSubnugget__image", /*artist image*/
		".AppBg__img", /*album art wallpaper (page background)*/
		".nowPlayingTopInfo__hitArea" /*album covers*/
	];

	//Pandora elements to delete
	var pandoraElements2Delete = [
		".StationListItem__img", /*station album thumbnails*/
		".Nugget", /*similar artists "nugget"*/
		".StationListItem__currentStationOverlay__equalizer", /*currently playing station's equalizer animation gif*/
		".DisplayAdController" /*ad space*/
	];

	HideElements(pandoraElements2Hide); //Hide specified DOM elements
	DeleteElements(pandoraElements2Delete); //Delete specified DOM elements

	//Prevent long song titles from marquee-ing
	$(".Marquee__wrapper__content--animating").addClass("Marquee__wrapper__content").removeClass("Marquee__wrapper__content--animating");
}

function SoundCloud(){
	//SoundCloud elements to hide
	var soundCloudElements2Hide = [
		"#content", /*main content*/
		".sc-artwork" /*album artwork*/
	];

	HideElements(soundCloudElements2Hide); //Hide specified DOM elements
}

function Vimeo(){
	//Vimeo elements to hide
	var vimeoElements2Hide = [
		".video-wrapper" /*video*/
	];

	HideElements(vimeoElements2Hide); //Hide specified DOM elements
}

//Hides a list of elements from DOM 
function HideElements(elementsArr){
	for(var i = 0; i < elementsArr.length; i++) //For each element in the list
	{
		$(elementsArr[i]).each(function(index){ //For each match found
			$(this).fadeOut(400).slideUp(250); //Fade out the element
		});
	}
}

//Deletes a list of elements from DOM 
function DeleteElements(elementsArr){
	for(var i = 0; i < elementsArr.length; i++) //For each element in the list
	{
		$(elementsArr[i]).each(function(index){ //For each match found
			$(this).remove(); //Hide the element
		});
	}
}

//Makes sure a list of DOM elements are being displayed
function ShowElements(elementsArr){
	for(var i = 0; i < elementsArr.length; i++) //For each element in the list
	{
		$(elementsArr[i]).each(function(index){ //For each match found
			$(this).show(); //Show the element
		});
	}
}
