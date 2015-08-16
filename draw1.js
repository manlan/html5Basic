
var canvas = document.getElementById("canvas1");

function drawSquare() {
//        var canvas = document.getElementById("canvas1");
        if(canvas.getContext("2d") )
        {
            var content = canvas.getContext("2d");
        <!--content.fillStyle = "rgb(13, 118, 208)";-->
        content.fillStyle = "rgb(0, 100, 0)";
        content.fillRect(30, 30, 140, 140);
        }else{
            alert("浏览器不支持");
        }
    }
function drawLine() {
//     var canvas = document.getElementById("canvas1");
     if(canvas.getContext("2d") ) {
        var content = canvas.getContext("2d");

        content.beginPath();
        content.moveTo(0, 0);
        content.lineTo(60, 60);

        content.fillStyle = "rgb(200, 0, 0)";
        content.lineWidth = "5";

        content.stroke();
     }

}

function drawText() {
     if(canvas.getContext("2d") ) {
        var content = canvas.getContext("2d");

        content.fillStyle = "rgb(200, 0, 0)";
        content.fillText("hello world", 400, 100);

        var img = new Image();
        img.src = "src/img/Desert.jpg";
//        img.onload = function() {
            content.drawImage(img, 100, 10 );
//        }

     }
}