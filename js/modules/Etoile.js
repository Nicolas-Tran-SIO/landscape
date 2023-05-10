import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine une étoile jaune aléatoire
 */
export class Etoile extends AbstractForm {
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
    super(x, y, size, size, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }

  /**
   * Dessine la forme spécifique à cette classe (ici une "étoile")
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save()

    // set the styles for this shape
    ctx.fillStyle = this.fillColor
    ctx.lineWidth = this.strokeWidth
    ctx.strokeStyle = this.strokeColor

    // create the *path*
    ctx.beginPath()
    let x = this.x + this.width / 2;
    let y = this.y + this.height / 2;
    let radius = this.width / 2;
    let spikes = ~~(Math.random() * 5) + 5;
    let rot = Math.PI / 2 * 3;
    let step = Math.PI / spikes;

    ctx.moveTo(x, y - radius)
    for (let i = 0; i < spikes; i++) {
      x = this.x + this.width / 2 + Math.cos(rot) * radius;
      y = this.y + this.height / 2 + Math.sin(rot) * radius;
      ctx.lineTo(x, y);
      rot += step

      x = this.x + this.width / 2 + Math.cos(rot) * radius * 0.4;
      y = this.y + this.height / 2 + Math.sin(rot) * radius * 0.4;
      ctx.lineTo(x, y);
      rot += step
    }
    ctx.lineTo(this.x + this.width / 2, this.y + this.height / 2 - radius)
    ctx.closePath()

    ctx.fill()
    ctx.stroke()

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Etoile...]}
   */
  static buildForms() {
    const forms = []
    const maxStars = 30
    const minSize = 20
    const maxSize = 100
    for (let i = 0; i < maxStars; i++) {
      const size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize
      const x = Math.floor(Math.random() * (window.innerWidth - size))
      const y = Math.floor(Math.random() * (window.innerHeight - size))
      const fillColor = 'gold'
      const strokeColor = ''
      const strokeWidth = 1
      const pesenteur = false
      forms.push(new Etoile(x, y, size, fillColor, strokeColor, strokeWidth, pesenteur))
    }
    return forms
  }
}
