
function ImageInfo(thumbs, pic, title)
{
	this.thumbs = thumbs;
	this.pic = pic;
	this.title = title;
}

var allImages = new Array();
allImages[0] = new ImageInfo("photos/thumb_image1.jpg", "photos/image1.jpg", "1");
allImages[1] = new ImageInfo("photos/thumb_image2.jpg", "photos/image2.jpg", "2");
allImages[2] = new ImageInfo("photos/thumb_image3.jpg", "photos/image3.jpg", "3");
allImages[3] = new ImageInfo("photos/1_s.jpg", "photos/1.jpg", "1");
allImages[4] = new ImageInfo("photos/2_s.jpg", "photos/2.jpg", "2");
allImages[5] = new ImageInfo("photos/3_s.jpg", "photos/3.jpg", "3");
allImages[6] = new ImageInfo("photos/thumb_image3.jpg", "photos/image3.jpg", "3");
allImages[7] = new ImageInfo("photos/1_s.jpg", "photos/1.jpg", "1");
allImages[8] = new ImageInfo("photos/2_s.jpg", "photos/2.jpg", "2");
allImages[9] = new ImageInfo("photos/3_s.jpg", "photos/3.jpg", "3");

$(function () {
    'use strict';
	
	//load all images
	var gallery = $('#gallery');
    $.each(allImages, function(index, imageInfo){
		var img = $('<img width="72" height="72" alt="none" />').attr('src', imageInfo.thumbs);
        $('<a />').append(img)
		.attr('href', imageInfo.pic)
		.attr('title', imageInfo.title)
		.appendTo(gallery);
    });
	
	$('#gallery a').lightBox();	

});

