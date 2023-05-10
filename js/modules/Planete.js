import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un cercle coloré aléatoire
 */
export class Planete extends AbstractForm {
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
   * Dessine la forme spécifique à cette classe (ici une "planète")
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
    ctx.arc(this.x + this.width / 2, this.y + this.height / 2, this.width / 2, 0, 2 * Math.PI)
    ctx.closePath()

    ctx.fill()
    ctx.stroke()

    // add spots if there is a fillColor
    if (this.fillColor) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
      const spotCount = Math.floor(Math.random() * 5) + 5
      for (let i = 0; i < spotCount; i++) {
        const spotSize = Math.floor(Math.random() * (this.width / 5))
        const spotX = Math.floor(Math.random() * this.width) + this.x
        const spotY = Math.floor(Math.random() * this.height) + this.y
        ctx.beginPath()
        ctx.arc(spotX, spotY, spotSize, 0, 2 * Math.PI)
        ctx.fill()
      }
    }

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Planete...]}
   */
  static buildForms() {
    const forms = []
    const maxPlanetes = 10
    const minSize = 50
    const maxSize = 200
    for (let i = 0; i < maxPlanetes; i++) {
      const size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize
      const x = Math.floor(Math.random() * (window.innerWidth - size))
      const y = Math.floor(Math.random() * (window.innerHeight - size))
      const fillColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
      const strokeColor = ''
      const strokeWidth = 1
      const pesenteur = false
      forms.push(new Planete(x, y, size, fillColor, strokeColor, strokeWidth, pesenteur))
    }
    return forms
  }
}
