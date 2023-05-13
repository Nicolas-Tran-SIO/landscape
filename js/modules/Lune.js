import { AbstractForm } from './AbstractForm.js';

/**

Dessine une lune en haut à droite
*/
export class Lune extends AbstractForm {
constructor(
x = 0,
y = 0,
size = 100,
fillColor = 'white',
strokeColor = '',
strokeWidth = 1,
pesenteur = false,
ordreConstruction = 1
) {
super(x, y, size, size, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
}
/**

Dessine la forme spécifique à cette classe (ici une "lune")
@param ctx contexte 2D du canvas
*/
draw(ctx) {
ctx.save()

// set the styles for this shape

ctx.fillStyle = this.fillColor;
ctx.lineWidth = this.strokeWidth;
ctx.strokeStyle = this.strokeColor;

// create the *path*
ctx.beginPath();
ctx.arc(this.x + this.width / 2, this.y + this.height / 2, this.width / 2, 0, 2 * Math.PI);
ctx.closePath();

ctx.fill();
ctx.stroke();

// restores the styles from earlier
// preventing the colors used here
// from polluting other drawings
ctx.restore();
}

/**

get array of forms
@return {[Lune...]}
*/
static buildForms() {
const forms = [];
const x = window.innerWidth - 150; // position the moon on the upper right corner with a 50px margin
const y = 50;
const fillColor = 'white';
const strokeColor = '';
const strokeWidth = 1;
const pesenteur = false;
forms.push(new Lune(x, y, 100, fillColor, strokeColor, strokeWidth, pesenteur));
return forms;
    }
}