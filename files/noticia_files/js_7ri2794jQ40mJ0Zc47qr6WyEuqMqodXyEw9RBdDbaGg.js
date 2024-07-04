/* @license GNU-GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(function($){function loadCodis(){$(".services__section__wrap").each(function(index){var ids=[];var ids=$(this).data("ids");console.log(ids);var url='/dipta_api/v1/seu/services';var url='/dipta_api/v2/seu/procediments';var wrap=$(this).find('.services__section__ajax');var load=$(this).find('.services__load');var error=$(this).find('.services__error');wrap.load(url,{ids},function(responseTxt,statusTxt,xhr){console.log(statusTxt);if(statusTxt=="success"){load.hide();$(this).find('.btn--info').on('click',btnInfo);$(this).find('.btn--contact').on('click',btnContact);$(this).find('.btn--clock').on('click',btnClock);}if(statusTxt=="error"){load.hide();error.show();console.log("Error: "+xhr.status+": "+xhr.statusText);error.append('<p>'+xhr.statusText+'</p>');}});});}var btnInfo=function(e){var box=$(this).closest('.s__item').find('.s__info');var target=e.length?e:$(e.currentTarget);console.log(box);var i=target.find('i');if(box.hasClass('info--open')){box.removeClass('info--open');i.removeClass('icon--current');}else{box.addClass('info--open');i.addClass('icon--current');}};var btnContact=function(e){var box=$(this).closest('.s__item').find('.s__contact');var target=e.length?e:$(e.currentTarget);console.log(box);var i=target.find('i');if(box.hasClass('contact--open')){box.removeClass('contact--open');i.removeClass('icon--current');}else{box.addClass('contact--open');i.addClass('icon--current');}};var btnClock=function(e){var box=$(this).closest('.s__item').find('.s__terminis');var target=e.length?e:$(e.currentTarget);console.log(box);var i=target.find('i');if(box.hasClass('terminis--open')){box.removeClass('terminis--open');i.removeClass('icon--current');}else{box.addClass('terminis--open');i.addClass('icon--current');}};var newChocolat=function(wrap){var item_wrap=document.querySelectorAll(wrap);if(item_wrap.length>0)Chocolat(item_wrap,{imageSize:'contain',loop:true,fullScreen:false});};jQuery(document).ready(function(){newChocolat('.lightbox--link');});var cAccordion=function(e){var target=e.length?e:$(e.currentTarget);var i=$(this).find('.accordion__icon--btn');var content=$(this).closest('.accordion__wrap').find('.accordion__body');if(content.hasClass('accordion__close')){content.removeClass('accordion__close').addClass('accordion__open');$(this).find('[data-fa-i2svg]').attr('data-icon','plus');}else{content.removeClass('accordion__open').addClass('accordion__close');$(this).find('[data-fa-i2svg]').attr('data-icon','minus');}};Drupal.behaviors.diptaLandingPage={attach:function(context,settings){var section=$('.paragraph--featured');$(section).each(function(index,value){$(this).addClass('multiple featured_0'+index);$(section).eq(0).addClass('first');$(section).eq(-1).addClass('last');});}};Drupal.behaviors.accordionClick={attach:function(context,settings){$('.accordion__link',context).click(function(e){var target=e.length?e:$(e.currentTarget);var wrap=$(this).closest('.accordion__wrap');var j=wrap.find('.accordion__icon--btn');var accordion=wrap.find('.accordion__body');if(accordion.hasClass('accordion__open')){accordion.removeClass('accordion__open');wrap.removeClass('accordion__wrap--open');j.attr('data-icon','plus');}else{if($('.accordion__wrap--open').length>0){console.log(this);$('.accordion__wrap--open').each(function(i,value){$(value).removeClass('accordion__wrap--open');$(value).find('.accordion__body').removeClass('accordion__open');$(value).find('.accordion__icon--btn').attr('data-icon','plus');});}accordion.addClass('accordion__open');wrap.addClass('accordion__wrap--open');j.attr('data-icon','minus');}});}};Drupal.behaviors.imgWrapCaption={attach:function(context,settings){$("img.media-lightbox").each(function(index){var alt=$(this).attr("alt");var url=$(this).attr("src");$(this).wrap("<a></a>");var pare=$(this).parent();pare.addClass('img__wrap lightbox--link');pare.attr("title",alt);pare.attr("href",url);});}};Drupal.behaviors.sliderFeatured={attach:function(context,settings){if($('.featured__elements--slide').length>0)$('.featured__elements--slide').bxSlider({auto:true,speed:200,responsive:true,autoControls:false,stopAutoOnClick:true,keyboardEnabled:true,pager:true,adaptiveHeight:true,adaptiveHeightSpeed:250,touchEnabled:false,nextText:'<i class="fa fa-angle-right"> </i> Next',prevText:'<i class="fa fa-angle-left"> </i> Prev'});}};Drupal.behaviors.galleryChocolat={attach:function(context,settings){$('.btn--gallery',context).click(function(e){console.log('all images gallery');var target=e.length?e:$(e.currentTarget);var wrap=$(this).closest('.gallery__wrap');var elements=wrap.find('.gallery__element');elements.each(function(){if($(this).hasClass('element--close')){target.text("Veure'n menys");$(this).removeClass('element--close');$(this).addClass('element--open');}else{if($(this).hasClass('element--open')){target.text("Veure'n més");$(this).removeClass('element--open');$(this).addClass('element--close');}}});});}};})(jQuery);;
