Color.More
==========

Provides additional functions for Mootools Color.

How to use
----------

Use in the following manner:

	var darkerColor = myColor.multiply(color[, color2[, color3[, ...]);
	var lighterColor = myColor.screen(color[, color2[, color3[, ...]);
	var contrastColor = myColor.overlay(color[, color2[, color3[, ...]);

	var dullerColor = myColor.dim(color, percentage);
	var lightColor = myColor.light(color, percentage, reflex);
	var brighterColor = myColor.shine(color, percentage, reflex);

Both percentage and reflex values should be a value between 0 and 1.

	var normalColor = $NORMAL(x,y,size);

Coordinates x and y needs to range from 0 to size-1 if the area defined by size is to map the sphere perfectly.
It's wise to use an uneven size because then the center coordinate will return a flat color ie a vector pointing straight at the viewer.

	var flatColor = $NORMAL(6,6,15); // rgb(127, 127, 255) flat in the center of the sphere
	var tiltedUpperLeftColor = $NORMAL(4,4,15); // rgb(75, 75, 232) slightly tilted surface
	var tiltedLowerLeftColor = $NORMAL(3,13,15); // rgb(229, 58, 162) steep tilt on edge of the sphere



