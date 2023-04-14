// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the volume of a right triangular pyramid.
 */
function calculateVolume () {
  // get side a, b, and height from user
  let sideA = parseFloat(document.getElementById('side-a-tri-pyramid').value);
  let sideB = parseFloat(document.getElementById('side-b-tri-pyramid').value);
  let height = parseFloat(document.getElementById('height-tri-pyramid').value);

  // calculate volume
  let volume = (1/6 * sideA * sideB * height);

  // display volume to user
  document.getElementById('volume').innerHTML = "Volume is: " + volume.toFixed(2) + " cm<sup>3</sup>."
}
