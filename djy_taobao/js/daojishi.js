/**
 * Created by HP on 2020/12/5.
 */

        //ÉÌÆ·¹ö¶¯
    $(function(){

        $(".next a").click(function(){ nextscroll() });

        function nextscroll(){

            var vcon = $(".aui-content-box-list ");

            var offset = ($(".aui-content-box-list li").width())*-1;

            vcon.stop().animate({left:offset},"slow",function(){

                var firstItem = $(".aui-content-box-list ul li").first();

                vcon.find("ul").append(firstItem);

                $(this).css("left","0px");
                circle()
            });
        };
        function circle(){

            var currentItem = $(".aui-content-box-list ul li").first();

            var currentIndex = currentItem.attr("index");

            $(".circle li").removeClass("circle-cur");

            $(".circle li").eq(currentIndex).addClass("circle-cur");

        }
        $(".prev a").click(function(){

            var vcon = $(".aui-content-box-list ");

            var offset = ($(".aui-content-box-list li").width()*-1);

            var lastItem = $(".aui-content-box-list ul li").last();

            vcon.find("ul").prepend(lastItem);

            vcon.css("left",offset);

            vcon.animate({left:"0px"},"slow",function(){
                circle()
            })
        });
    });

