// var incWidth = 0, divWidth = 0, OlWidth = 0,marginWidth = 50;
//         (function($) {
//             $.fn.showScrollIcons = function(){
//                 OlWidth = $('.checkOL').width();
//                 divWidth = this.width();
//                 if(divWidth >= OlWidth){
//                     $('.arrow').hide();
//                     if(incWidth){
// //                        $('.arrow.leftArrow').show();
//                         $('.arrow.leftArrow').hide();
//                         $('.showTab').removeClass('showTab');
//                         $('.checkOL .checkLI:first-child').addClass('showTab');
//                         $('.checkOL').animate({'marginLeft':"+=" + incWidth});
//                         incWidth = 0;
//                     }
//                 }
//                 else{
//                     $('.arrow').show();
//                     if(!incWidth){
//                         $('.arrow.leftArrow').hide();
//                     }
//                     if(divWidth + incWidth >= ( OlWidth - 12 )){
//                         $('.arrow.rightArrow').hide();
//                     }
//                 }
//             };
//         })(jQuery);
//         $(document).ready(function(){
//             $('.rightArrow').click(function(){
//                 var outerWidth = 0;
//                 var currentTab = $('.showTab');
//                 if(currentTab.next().length){
//                     currentTab.next().addClass('showTab');
//                     currentTab.removeClass('showTab');
//                     outerWidth = currentTab.outerWidth();
//                 }
//                 incWidth += outerWidth;
//                 $('.checkOL').animate({'marginLeft':"-=" + outerWidth});
//                 checkArrowHide();
//             });
//             $('.leftArrow').click(function(){
//                 var outerWidth = 0;
//                 var currentTab = $('.showTab');
//                 if(currentTab.prev().length){
//                     currentTab.prev().addClass('showTab');
//                     currentTab.removeClass('showTab');
//                     outerWidth = $('.showTab').outerWidth();
//                 }
//                 incWidth -= outerWidth;
//                 $('.checkOL').animate({'marginLeft':"+=" + outerWidth});
//                 checkArrowHide();
//             });
//             $('.tabBtn').showScrollIcons();
//             $( window ).resize(function(){
//                 $('.tabBtn').showScrollIcons();
//             });
//             function checkArrowHide(){
//                 if(!incWidth){
//                     $('.arrow.leftArrow').hide();
//                 }
//                 else{
//                     $('.arrow.leftArrow').show();
//                 }
//                 if(divWidth + incWidth >= ( OlWidth - 12)){
//                     $('.arrow.rightArrow').hide();
//                 }
//                 else{
//                     $('.arrow.rightArrow').show();
//                 }
//             }
//         });