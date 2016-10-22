(function($){'use strict';$('.responsive-image-1.ff-block, .responsive-image-2.ff-block').each(function(index){$(this).addClass('fresponsive-image-1--id--'+index);var this_block='.fresponsive-image-1--id--'+index+'.ff-block';var $this_block=$(this_block);function isRetina(){var root=(typeof exports=='undefined'?window:exports);var mediaQuery="(-webkit-min-device-pixel-ratio: 1.5),\
         (min--moz-device-pixel-ratio: 1.5),\
         (-o-min-device-pixel-ratio: 3/2),\
         (min-resolution: 1.5dppx)";if(root.devicePixelRatio>1){return true;}
if(root.matchMedia&&root.matchMedia(mediaQuery).matches){return true;}
return false;}
var DpiType;if(isRetina()){DpiType='2x';}else{DpiType='1x';}
switch($('.breakpoint').width()){case 1:$this_block.attr('src',$this_block.attr('data-src-xs-'+DpiType));break;case 2:$this_block.attr('src',$this_block.attr('data-src-sm-'+DpiType));break;case 3:$this_block.attr('src',$this_block.attr('data-src-md-'+DpiType));break;case 4:$this_block.attr('src',$this_block.attr('data-src-lg-'+DpiType));break;}
$this_block.removeAttr('data-src-xs-1x');$this_block.removeAttr('data-src-xs-2x');$this_block.removeAttr('data-src-sm-1x');$this_block.removeAttr('data-src-sm-2x');$this_block.removeAttr('data-src-md-1x');$this_block.removeAttr('data-src-md-2x');$this_block.removeAttr('data-src-lg-1x');$this_block.removeAttr('data-src-lg-2x');});})(jQuery);;(function($){'use strict';var toggleAnimationSpeed=600;var closeModalCoord=0;function toggleAnimationOfElements($element,animationSpeed){$element.animate({height:'toggle',opacity:'toggle',margin:'toggle',padding:'toggle'},animationSpeed,'swing',function(){$('.blog-post-1.ff-section .post-expand-toggle').removeClass('animation-active');});}
function toggleSection($section,animationSpeed){var $expander=$section.find('.post-expander');var $collapser=$section.find('.post-collapser');toggleAnimationOfElements($expander,animationSpeed);toggleAnimationOfElements($collapser,animationSpeed);}
function expandBlogPostSection($section,speed){if($section.hasClass('blog-post-1--expanded')){return false;}
$section.addClass('blog-post-1--expanded');toggleSection($section,speed);}
function collapseBlogPostSection($section,speed){if(!$section.hasClass('blog-post-1--expanded')){return false;}
$section.removeClass('blog-post-1--expanded');toggleSection($section,speed);}
var $sectionWhichOpenedComments=null;var $hideCommentsModal=$('.comments-modal-1.ff-block .hide-comments');$hideCommentsModal.click(function(e){e.preventDefault();if($('.breakpoint').width()<=2){$('html, body').css('height','').css('overflow','');$('.master-wrapper').css('opacity','');$('html, body').animate({scrollTop:closeModalCoord},'slow');}
if($('#commentform textarea#comment').val()){if(!confirm($('.closing-unfinished-comment').html())==true){return false;}}
$('.comments-modal-1').fadeOut('300');setTimeout(function(){$('html').removeClass('scroll-lock');$('.comments-modal-1 .comments__title').remove();},300+50);$('.master-wrapper').css('filter','').css('-webkit-filter','');});$('.blog-post-1.ff-section').each(function(index){var $this_section=$(this);var $postExpandToggle=$this_section.find('.post-expand-toggle');var $postExpander=$this_section.find('.post-expander');var $postCollapser=$this_section.find('.post-collapser');if(!$('body').is('.posts-opening-closing-disabled, .page, .single, .posts-opened, .search-no-results, .error404')){if($('body').is('.tag, .category, .blog, .search, .archive')){$postExpandToggle.click(function(e){if($postExpandToggle.hasClass('animation-active')){return false;}
$postExpandToggle.addClass('animation-active');e.preventDefault();if($this_section.hasClass('blog-post-1--expanded')){collapseBlogPostSection($this_section,toggleAnimationSpeed);setCookie('ff-'+$this_section.attr('id'),'');}else{expandBlogPostSection($this_section,toggleAnimationSpeed);setCookie('ff-'+$this_section.attr('id'),'ff-'+$this_section.attr('id'));}
var thisSectionOffset=$this_section.offset().top;var headerHeight=$('.header-1.ff-section').outerHeight();var hasFeaturedArea=$this_section.prev().is('.featured-area-1.ff-section, .featured-slider-1.ff-section, .featured-video-1.ff-section');var featuredAreaHeight=0;var scrollTo=0;var mobileHeaderHeight;if(hasFeaturedArea==true){if($('.breakpoint').width()==1){if($this_section.prev().outerHeight()<$(window).height()*0.4){featuredAreaHeight=$this_section.prev().outerHeight();}}else if($('.breakpoint').width()==2){if($this_section.prev().outerHeight()<$(window).height()*0.7){featuredAreaHeight=$this_section.prev().outerHeight();}}}
if($('.breakpoint').width()>=3){scrollTo=thisSectionOffset-headerHeight+1;}else if($('.breakpoint').width()==2){scrollTo=thisSectionOffset-featuredAreaHeight+1;}else{mobileHeaderHeight=$('.header-1.ff-section').outerHeight();scrollTo=thisSectionOffset-mobileHeaderHeight-featuredAreaHeight;}
if(0>scrollTo){scrollTo=1;}
$("html, body").animate({scrollTop:scrollTo},'slow');return false;});}}
if($('body').is('.posts-opening-closing-disabled')){if($('body').is('.page, .single, .posts-opened, .search-no-results, .error404')){$postExpander.slideDown(0);$postCollapser.slideUp(0);}else if($('body').is('.no-post-content-in-archives')){$postExpander.slideUp(0);$postCollapser.slideDown(0);}else{$postExpander.slideDown(0);$postCollapser.slideUp(0);}}else if($('body').is('.page, .single, .posts-opened, .search-no-results, .error404')){$postExpander.slideDown(0);$postCollapser.slideUp(0);}else{$postExpander.slideUp(0);$postCollapser.slideDown(0);}
var $showCommentsModal=$this_section.find('a.comments-popup-link');$showCommentsModal.click(function(e){if($('.breakpoint').width()<=2){closeModalCoord=$(window).scrollTop();$('html, body').css('height','100%').css('overflow','hidden');$('.master-wrapper').css('opacity','0');}
$sectionWhichOpenedComments=$this_section;var $post=$(this).parents('.post-block');var data={};data.postId=$(this).data('post-id');if($('.breakpoint').width()>=3){$('.master-wrapper').css('filter','blur(10px)').css('-webkit-filter','blur(10px)');}
frslib.ajax.frameworkRequest('get-comment-form',null,data,function(response){if($sectionWhichOpenedComments.prev().is('.featured-area-1, .featured-video-1, .featured-slider-1')){var featuredImagePathForCommentsModal=$sectionWhichOpenedComments.prev().find('.responsive-image-1:first').attr('src');$('.comments-modal-1').find('.comments-modal-1__header__bg-image').css('background-image','url("'+featuredImagePathForCommentsModal+'")');}
var commentsModalArticleName=$sectionWhichOpenedComments.find('.post-title a').text();$('.comments-modal-1 .insert-article-title').html(commentsModalArticleName);$('.comments-modal-1').find('.insert-comments').html(response);$('.comments-modal-1').fadeIn('300');$('html').addClass('scroll-lock');BackgroundCheck.refresh();$('.comments-modal-1 .comments__title').appendTo('.comments-modal-1 .insert-comments-title');});return false;});var $postShareOpenPopup=$this_section.find('.post-share__open-popup');var $postSharePopup=$this_section.find('.post-share__popup');var postSharePopupOutOfContext='.post-share__out-of-context';var postShareClosePopupOutOfContext='.post-share__out-of-context .post-share__close-popup';$postShareOpenPopup.on('click',function(e){e.preventDefault();$postSharePopup.appendTo('body').addClass('post-share__out-of-context');var $postSharePopupOutOfContext=$(postSharePopupOutOfContext);if($('.breakpoint').width()>=3){$('.master-wrapper').css('filter','blur(10px)').css('-webkit-filter','blur(10px)');}
$('html').addClass('scroll-lock');setTimeout(function(){$postSharePopupOutOfContext.fadeIn('300');},300);});$(document).on('click',postShareClosePopupOutOfContext,function(e){e.preventDefault();$postSharePopup.appendTo('body').addClass('post-share__out-of-context');var $postSharePopupOutOfContext=$(postSharePopupOutOfContext);$postSharePopupOutOfContext.fadeOut('300');$('.master-wrapper').css('filter','').css('-webkit-filter','');setTimeout(function(){$('html').removeClass('scroll-lock');},300);setTimeout(function(){$postSharePopupOutOfContext.remove();},600);});function setCookie(c_name,value){var expires=new Date();var time=expires.getTime();time+=60*24*3600*1000;expires.setTime(time);if(false===value){expires='Thu, 01 Jan 1970 00:00:01 GMT';document.cookie=c_name+'=; path=/; expires='+expires+';';}else{document.cookie=c_name+"="+escape(value)+'; path=/; expires='+expires+';';}}
function getCookie(c_name){var i,x,y,ARRcookies=document.cookie.split(";");for(i=0;i<ARRcookies.length;i++){x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);x=x.replace(/^\s+|\s+$/g,"");if(x==c_name){if('false'==y){return false;}
return unescape(y);}}
return false;}
if($('body').hasClass('post-cookie-opening')){if(!$('body').is('.page, .single, .posts-opened, .search-no-results, .error404')){if($('body').is('.tag, .category, .blog, .search, .archive')){if(getCookie('ff-'+$this_section.attr('id'))){expandBlogPostSection($this_section,0);}else{collapseBlogPostSection($this_section,0);}}}}});})(jQuery);;(function($){'use strict';$('.featured-video-1.ff-section').each(function(index){$(this).addClass('featured-video-1--id--'+index);var this_section='.featured-video-1--id--'+index+'.ff-section';var $this_section=$(this_section);var $bigPlayButton=$this_section.find('.big-play-button');var $videoFrame=$this_section.find('iframe');function scrollToNicePosition(){var thisSectionOffset=$this_section.offset().top+1;var mobileHeaderHeight;if($('.breakpoint').width()<=2){mobileHeaderHeight=$('.header-1.ff-section').outerHeight();$("html, body").animate({scrollTop:thisSectionOffset-mobileHeaderHeight},600);}else{$("html, body").animate({scrollTop:thisSectionOffset+1},600);}}
$bigPlayButton.on('click',function(e){e.preventDefault();var videoHeight=$this_section.find('iframe').outerHeight();var videoSrcAutoplay=$videoFrame.attr('src');if(-1==videoSrcAutoplay.indexOf("?")){videoSrcAutoplay=videoSrcAutoplay+'?autoplay=1&iv_load_policy=3&showinfo=0';}else{videoSrcAutoplay=videoSrcAutoplay+'&autoplay=1&iv_load_policy=3&showinfo=0';}
$videoFrame.attr('src',videoSrcAutoplay);scrollToNicePosition();setTimeout(function(){$this_section.find('.responsive-image-1.ff-block').css('-webkit-transform','scale(1.2)').css('transform','scale(1.2)').fadeOut(600);$this_section.find('.big-play-button').css('opacity','0').css('-webkit-transition','all 200ms ease-out').css('-moz-transition','all 200ms ease-out').css('transition','all 200ms ease-out');$videoFrame.hide();$this_section.animate({height:videoHeight},600);BackgroundCheck.refresh();},10);setTimeout(function(){$this_section.find('.big-play-button').remove();},410);setTimeout(function(){$videoFrame.fadeIn(600);$this_section.css('height','');$this_section.find('.featured-video__wrapper').css('position','static');BackgroundCheck.refresh();},600+100);});});})(jQuery);