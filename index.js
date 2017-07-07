var elem = document.getElementById('draw-shapes');
var two = new Two({ fullscreen: true }).appendTo(elem);
var width = two.width;
var leg1 = two.makeRoundedRectangle(width / 2 - 140, 400, 70, 400, 35);
var leg2 = two.makeRoundedRectangle(width / 2 - 100, 400, 70, 400, 35);
var leg3 = two.makeRoundedRectangle(width / 2 - 60, 400, 70, 400, 35);
var leg4 = two.makeRoundedRectangle(width / 2 - 20, 400, 70, 400, 35);
var leg5 = two.makeRoundedRectangle(width / 2 + 20, 400, 70, 400, 35);
var leg6 = two.makeRoundedRectangle(width / 2 + 60, 400, 70, 400, 35);
var leg7 = two.makeRoundedRectangle(width / 2 + 100, 400, 70, 400, 35);
var leg8 = two.makeRoundedRectangle(width / 2 + 140, 400, 70, 400, 35);
var legs = two.makeGroup(leg1, leg8, leg2, leg3, leg4, leg5, leg6, leg7);
var head = two.makeCircle(width / 2, 200, 200);
var eye1 = two.makeCircle(width / 2 - 70, 150, 50);
var eye2 = two.makeCircle(width / 2 + 70, 150, 50);
var eyeball1 = two.makeCircle(width / 2 - 70, 150, 25);
var eyeball2 = two.makeCircle(width / 2 + 70, 150, 25);
var mouth = two.makeCircle(width / 2, 300, 50);

head.fill = 'pink';
head.stroke = 'white';
eye1.fill = "white";
eye1.stroke = 'white';
eye2.fill = "white";
eye2.stroke = 'white';
eyeball1.fill = 'black';
eyeball2.fill = 'black';
mouth.fill = "pink"
mouth.stroke = "orange";
mouth.linewidth = 50;
legs.fill = 'pink';
legs.stroke = 'white';
leg1.rotation = 1;
leg8.rotation = 2;
/*leg1.fill = 'pink';
leg1.stroke = 'white';
leg2.fill = 'pink';
leg2.stroke = 'white';
leg3.fill = 'pink';
leg3.stroke = 'white';
leg4.fill = 'pink';
leg4.stroke = 'white';
leg5.fill = 'pink';
leg5.stroke = 'white';
leg6.fill = 'pink';
leg6.stroke = 'white';
leg7.fill = 'pink';
leg7.stroke = 'white';
leg8.fill = 'pink';
leg8.stroke = 'white';*/

var eyeballs = two.makeGroup(eyeball1, eyeball2);
var moveleft = true;
var t = 0;
two.bind('update', function (frameCount) {
    if (moveleft === true) {
        eyeballs.translation.x -= 1;
        if (eyeballs.translation.x == -15) {
            moveleft = false;
        }
    }
    else {
        eyeballs.translation.x += 1;
        if (eyeballs.translation.x == 15) {
            moveleft = true;
        }
    }
}).play();  // Finally, start the animation loop