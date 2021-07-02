// Author: Aaron Hobson

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;
let textP2;
let buttonDiv;
let upButton;
let downButton;
let leftButton;
let rightButton;

// Global ML variables
let featureExtractor;
let imgFeatures;
let knnClassifier;
let video;
let isModelReady;
let ups;
let downs;
let lefts;
let rights;

function setup() {
  // build canvas and text ui 
  canvasDiv = createDiv();
  canvas = createCanvas(640, 480);
  canvas.parent(canvasDiv);
  textDiv = createDiv();
  textP = createP("Model loading, please wait...");
  textP.parent(textDiv);
  textP2 = createP("[Training data here.]");
  textP2.parent(textDiv);
  // build buttons 
  buildButtons();
  // initialize ups, downs, lefts, rights 
  ups = 0;
  downs = 0;
  lefts = 0;
  rights = 0;
  // load video 
  video = createCapture(VIDEO, videoReady);
}

function draw() {

}

function buildButtons() {

}

function videoReady() {

}

function featureExtractorLoaded() {

}

function gotResults(error, results) {

}
