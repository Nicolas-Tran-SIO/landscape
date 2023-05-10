import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine une Météorite
 */
export class Meteorite extends AbstractForm {
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0,
    y = 0,
    size = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    ordreConstruction = 1
  ) {
    super(x,y,size,size,fillColor,strokeColor,strokeWidth,pesenteur,ordreConstruction);
  }

  /**
   * Dessine la forme spécifique à cette classe (ici une "meteorite")
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save();

    // set the styles for this shape
    ctx.fillStyle = '#8B4513'; // marron
    ctx.lineWidth = this.strokeWidth;
    ctx.strokeStyle = this.strokeColor;

    // create the *path*
    ctx.beginPath();
    const nbFaces = 6; // une météorite a 6 faces
    const angle = (2 * Math.PI) / nbFaces; // angle entre deux faces
    const rayon = this.width / 2; // rayon du cercle englobant la météorite
    const decalage = Math.random() * angle; // angle aléatoire pour dessiner la météorite
    ctx.moveTo(
      this.x + rayon * Math.cos(decalage),
      this.y + rayon * Math.sin(decalage)
    ); // On se place sur le premier sommet
    for (let i = 1; i <= nbFaces; i++) {
      const currentAngle = decalage + i * angle;
      ctx.lineTo(
        this.x + rayon * Math.cos(currentAngle),
        this.y + rayon * Math.sin(currentAngle)
      );
    }
    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore();
  }

  /**
   * get array of forms
   * @return {[Meteorite...]}
   */
  static buildForms() {
    const forms = [];
    const maxMeteorites = 4;
    const minSize = 50;
    const maxSize = 200;
    for (let i = 0; i < maxMeteorites; i++) {
      const size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
      const x = Math.floor(Math.random() * (window.innerWidth - size));
      const y = Math.floor(Math.random() * (window.innerHeight - size));
      forms.push(new Meteorite(x, y, size, '#8B4513', '', 1, false));
    }
    return forms;
  }
}
