// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the area of a trapezoid.
 */
function calculateVolume () {
  // input
  let sideA = parseFloat(document.getElementById('side-a-tri-pyramid').value);
  let sideB = parseFloat(document.getElementById('side-b-tri-pyramid').value);
  let height = parseFloat(document.getElementById('height-tra').value);

  // process
  let area = (sideA + sideB) * height / 2;

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area.toFixed(2) + ' cm<sup>2</sup>.'
}
