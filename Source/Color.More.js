/*
---

script: Color.More.js

name: Color.More

description: An extension of the Color class with methods for color manipulation.

license: MIT-style

authors: Tor Viktorsson

requires:   
  - Core/Array
  - Core/String
  - Core/Number
  - Core/Hash
  - Core/Function
  - MooTools.More

provides:
- Color.multiply
- Color.screen
- Color.dim
- Color.light
- Color.shine

...
*/
Color.implement({
    /**
     * Creates a color by multiplying two or more colors.
     * Returns as new color.
     * @param A single or many colors, in hex or rgb representation, to multiply with this Color
     * @return Color
     */
    multiply: function () {
        var colors = Array.slice(arguments);
        var rgb = this.slice();
        colors.each(function (color) {
            color = new Color(color);
            for (var i = 0; i < 3; i++) {
                var top = rgb[i];
                var bottom = color[i];
                rgb[i] = Math.round(top * bottom / 255);
            }
        });
        return new Color(rgb, 'rgb');
    },

    /**
     * Creates a color by screening two or more colors.
     * Returns as new color.
     * @param A single or many colors, in hex or rgb representation, to screen with this Color
     * @return Color
     */
    screen: function () {
        var colors = Array.slice(arguments);
        var rgb = this.slice();
        colors.each(function (color) {
            color = new Color(color);
            for (var i = 0; i < 3; i++) {
                var top = rgb[i];
                var bottom = color[i];
                rgb[i] = Math.round(255 - (((255 - top) * (255 - bottom)) / 255));
            }
        });
        return new Color(rgb, 'rgb');
    },

    /**
     * Creates a color by diming one color by another.
     * Returns as new color.
     * @param A color, in hex or rgb representation, to dim this Color with
     * @param the amount of the color to dim by.
     * @return Color
     */
    dim: function (color, percentage) {
        var rgb = this.slice();
        for (var i = 0; i < 3; i++) {
            rgb[i] = Math.max(Math.round(rgb[i] - color[i] * (1 - percentage)), 0);
        }
        return new Color(rgb, 'rgb');
    },

    /**
     * Creates a color by lighting one color by another.
     * Returns as new color.
     * @param A color, in hex or rgb representation, to light this Color with
     * @param the amount of the color to light by.
     * @param the reflex value.
     * @return Color
     */
    light: function (color, percentage, reflex) {
        var rgb = this.slice();
        for (var i = 0; i < 3; i++) {
            if (reflex > 0) {
                rgb[i] = Math.min(Math.round(rgb[i] + color[i] * percentage - color[i] / (2 * reflex)), 255);
            }
        }
        return new Color(rgb, 'rgb');
    },

    /**
     * Creates a color by letting one color add shine to a color.
     * Returns as new color.
     * @param A color, in hex or rgb representation, to shine on this Color
     * @param the amount of the color to shine by.
     * @param the reflex value.
     * @return Color
     */
    shine: function (color, percentage, reflex) {
        var rgb = this.slice();
        if (percentage > 0.60) {
            for (var i = 0; i < 3; i++) {
                if (reflex > 0) {
                    rgb[i] = Math.min(Math.round(rgb[i] + color[i] * percentage * (reflex / 10)), 255);
                }
            }
        }
        return new Color(rgb, 'rgb');
    }
});