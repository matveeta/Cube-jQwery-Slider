(function ($) {

    $.fn.cubeGallery = function (options) {

         options = $.extend({
            width: 250,
            height: 250,
            linksClass: "button",
            imgClass: "figure",
            caruselClass: "carusel",
            slayderClass: 'container',
            axisRotate : "rotateY" //change horizontal or vertical rotate(X or Y )
        },options);

        return this.each(function() {
        var element = $(this).find('img');

        var quantity = element.length;
        var angleRotation = 360 / quantity;
        console.log(angleRotation);
        var radian = angleRotation / 2 * Math.PI / 180;
        var translate = (options.width / 2) / Math.tan(radian);
        console.log(translate);

        $(document).ready(function () {

            element.each(function (index) {
                element.css({
                    position: 'absolute',
                    width: options.width + 'px',
                    height: options.height + 'px',
                    border: '1px solid #000'});
                console.log(element);
                var d = index * angleRotation;
                var transforms = options.axisRotate + '(' + d + 'deg) translateZ(' + translate + 'px)';
                console.log(options.axisRotate);
                $(this).css({'transform': transforms});
            });
        });

            $('.' + options.linksClass).click(function (event) {
            event.preventDefault();

                var i = $(this).index();
                console.log(i);
                $(this).each(function () {
                    var d = i * angleRotation;
                    var rotate = options.axisRotate + '(' + -d + 'deg)';
                    console.log(rotate);
                   $('.' + options.caruselClass).css({'transform': rotate});
                });
            });
        });
    };
})(jQuery);

$('body').cubeGallery({ });

