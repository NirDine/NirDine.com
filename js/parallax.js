var layers = document.getElementsByClassName("parallax");
var layer, speed, yPos;

    window.addEventListener("scroll", function(event){
        for (var i = 0; i < layers.length; i++) {
            layer = layers[i];
            speed = layer.getAttribute('data-speed');
            var yPos = -(this.pageYOffset * speed / 100);
            layer.setAttribute('style', 'transform: translateY(' + yPos + 'px)');
        }
    }, {passive: true});


