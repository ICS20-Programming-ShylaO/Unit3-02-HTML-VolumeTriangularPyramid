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
  let height = parseFloat(document.getElementById('height-tri-pyramid').value);

  // process
  let volume = (1/6 * sideA * sideB * height);

  // output
  document.getElementById('volume').innerHTML = "Volume is: " + volume.toFixed(2) + " cm<sup>3</sup>."
}
