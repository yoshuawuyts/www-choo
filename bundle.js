(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/yw/src/yw/www-choo/client.js":[function(require,module,exports){
const sf = 0
const choo = require('choo')

const wrapRoot = require('./elements/wrap-root')

;((require('insert-css')("* {\n  box-sizing: border-box;\n}\n/* webkit specific styles */\n\ninput[type=\"color\"]::-webkit-color-swatch {\n  border: none;\n}\n\ninput[type=\"color\"]::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n/*\nhtml5doctor.com Reset Stylesheet\nv1.6.1\nLast Updated: 2010-09-17\nAuthor: Richard Clark - http://richclarkdesign.com\nTwitter: @rich_clark\n*/\n\nhtml, body, div, span, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\nabbr, address, cite, code,\ndel, dfn, em, img, ins, kbd, q, samp,\nsmall, strong, sub, sup, var,\nb, i,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section, summary,\ntime, mark, audio, video {\n    margin:0;\n    padding:0;\n    border:0;\n    outline:0;\n    font-size:100%;\n    vertical-align:baseline;\n    background:transparent;\n    font-weight:inherit;\n}\n\nbody {\n    line-height:1;\n}\n\narticle,aside,details,figcaption,figure,\nfooter,header,hgroup,menu,nav,section {\n    display:block;\n}\n\nnav ul {\n    list-style:none;\n}\n\nblockquote, q {\n    quotes:none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n    content:'';\n    content:none;\n}\n\na {\n    margin:0;\n    padding:0;\n    font-size:100%;\n    vertical-align:baseline;\n    background:transparent;\n}\n\n/* change colours to suit your needs */\nins {\n    background-color:#ff9;\n    color:#000;\n    text-decoration:none;\n}\n\n/* change colours to suit your needs */\nmark {\n    background-color:#ff9;\n    color:#000;\n    font-style:italic;\n    font-weight:bold;\n}\n\ndel {\n    text-decoration: line-through;\n}\n\nabbr[title], dfn[title] {\n    border-bottom:1px dotted;\n    cursor:help;\n}\n\ntable {\n    border-collapse:collapse;\n    border-spacing:0;\n}\n\n/* change border colour to suit your needs */\nhr {\n    display:block;\n    height:1px;\n    border:0;\n    border-top:1px solid #cccccc;\n    margin:1em 0;\n    padding:0;\n}\n\ninput, select {\n    vertical-align:middle;\n}\n\ninput:focus {\n  outline: none;\n}\nul, ol {\n  list-style-type: none;\n}\n") || true) && "_18f56cf1")
;((require('insert-css')("/*! Basscss | http://basscss.com | MIT License */\n\n/* Basscss Type Scale */\n\n.h1 { font-size: 32px; font-size: 2rem }\n.h2 { font-size: 24px; font-size: 1.5rem }\n.h3 { font-size: 20px; font-size: 1.25rem }\n.h4 { font-size: 16px; font-size: 1rem }\n.h5 { font-size: 14px; font-size: .875rem }\n.h6 { font-size: 12px; font-size: .75rem }\n/* Basscss Typography */\n\n.font-family-inherit { font-family: inherit }\n.font-size-inherit { font-size: inherit }\n.text-decoration-none { text-decoration: none }\n\n.bold    { font-weight: bold; font-weight: bold }\n.regular { font-weight: normal }\n.italic  { font-style: italic }\n.caps    { text-transform: uppercase; letter-spacing: .2em; }\n\n.left-align   { text-align: left }\n.center       { text-align: center }\n.right-align  { text-align: right }\n.justify      { text-align: justify }\n\n.nowrap { white-space: nowrap }\n.break-word { word-wrap: break-word }\n\n.line-height-1 { line-height: 1 }\n.line-height-2 { line-height: 1.125 }\n.line-height-3 { line-height: 1.25 }\n.line-height-4 { line-height: 1.5 }\n\n.list-style-none { list-style: none }\n.underline { text-decoration: underline }\n\n.truncate {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.list-reset {\n  list-style: none;\n  padding-left: 0;\n}\n/* Basscss Layout */\n\n.inline       { display: inline }\n.block        { display: block }\n.inline-block { display: inline-block }\n.table        { display: table }\n.table-cell   { display: table-cell }\n\n.overflow-hidden { overflow: hidden }\n.overflow-scroll { overflow: scroll }\n.overflow-auto   { overflow: auto }\n\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table\n}\n.clearfix:after { clear: both }\n\n.left  { float: left }\n.right { float: right }\n\n.fit { max-width: 100% }\n\n.max-width-1 { max-width: 384px; max-width: 24rem }\n.max-width-2 { max-width: 512px; max-width: 32rem }\n.max-width-3 { max-width: 768px; max-width: 48rem }\n.max-width-4 { max-width: 1024px; max-width: 64rem }\n\n.border-box { box-sizing: border-box }\n/* Basscss Align */\n\n.align-baseline { vertical-align: baseline }\n.align-top      { vertical-align: top }\n.align-middle   { vertical-align: middle }\n.align-bottom   { vertical-align: bottom }\n/* Basscss Margin */\n\n.m0  { margin:        0 }\n.mt0 { margin-top:    0 }\n.mr0 { margin-right:  0 }\n.mb0 { margin-bottom: 0 }\n.ml0 { margin-left:   0 }\n.mx0 { margin-left:   0; margin-right:  0 }\n.my0 { margin-top:    0; margin-bottom: 0 }\n\n.m1  { margin: 8px; margin: .5rem }\n.mt1 { margin-top: 8px; margin-top: .5rem }\n.mr1 { margin-right: 8px; margin-right: .5rem }\n.mb1 { margin-bottom: 8px; margin-bottom: .5rem }\n.ml1 { margin-left: 8px; margin-left: .5rem }\n.mx1 { margin-left: 8px; margin-left: .5rem; margin-right: 8px; margin-right: .5rem }\n.my1 { margin-top: 8px; margin-top: .5rem; margin-bottom: 8px; margin-bottom: .5rem }\n\n.m2  { margin: 16px; margin: 1rem }\n.mt2 { margin-top: 16px; margin-top: 1rem }\n.mr2 { margin-right: 16px; margin-right: 1rem }\n.mb2 { margin-bottom: 16px; margin-bottom: 1rem }\n.ml2 { margin-left: 16px; margin-left: 1rem }\n.mx2 { margin-left: 16px; margin-left: 1rem; margin-right: 16px; margin-right: 1rem }\n.my2 { margin-top: 16px; margin-top: 1rem; margin-bottom: 16px; margin-bottom: 1rem }\n\n.m3  { margin: 32px; margin: 2rem }\n.mt3 { margin-top: 32px; margin-top: 2rem }\n.mr3 { margin-right: 32px; margin-right: 2rem }\n.mb3 { margin-bottom: 32px; margin-bottom: 2rem }\n.ml3 { margin-left: 32px; margin-left: 2rem }\n.mx3 { margin-left: 32px; margin-left: 2rem; margin-right: 32px; margin-right: 2rem }\n.my3 { margin-top: 32px; margin-top: 2rem; margin-bottom: 32px; margin-bottom: 2rem }\n\n.m4  { margin: 64px; margin: 4rem }\n.mt4 { margin-top: 64px; margin-top: 4rem }\n.mr4 { margin-right: 64px; margin-right: 4rem }\n.mb4 { margin-bottom: 64px; margin-bottom: 4rem }\n.ml4 { margin-left: 64px; margin-left: 4rem }\n.mx4 { margin-left: 64px; margin-left: 4rem; margin-right: 64px; margin-right: 4rem }\n.my4 { margin-top: 64px; margin-top: 4rem; margin-bottom: 64px; margin-bottom: 4rem }\n\n.mxn1 { margin-left: -8px; margin-left: -.5rem; margin-right: -8px; margin-right: -.5rem; }\n.mxn2 { margin-left: -16px; margin-left: -1rem; margin-right: -16px; margin-right: -1rem; }\n.mxn3 { margin-left: -32px; margin-left: -2rem; margin-right: -32px; margin-right: -2rem; }\n.mxn4 { margin-left: -64px; margin-left: -4rem; margin-right: -64px; margin-right: -4rem; }\n\n.ml-auto { margin-left: auto }\n.mr-auto { margin-right: auto }\n.mx-auto { margin-left: auto; margin-right: auto; }\n/* Basscss Padding */\n\n.p0  { padding: 0 }\n.pt0 { padding-top: 0 }\n.pr0 { padding-right: 0 }\n.pb0 { padding-bottom: 0 }\n.pl0 { padding-left: 0 }\n.px0 { padding-left: 0; padding-right:  0 }\n.py0 { padding-top: 0;  padding-bottom: 0 }\n\n.p1  { padding: 8px; padding: .5rem }\n.pt1 { padding-top: 8px; padding-top: .5rem }\n.pr1 { padding-right: 8px; padding-right: .5rem }\n.pb1 { padding-bottom: 8px; padding-bottom: .5rem }\n.pl1 { padding-left: 8px; padding-left: .5rem }\n.py1 { padding-top: 8px; padding-top: .5rem; padding-bottom: 8px; padding-bottom: .5rem }\n.px1 { padding-left: 8px; padding-left: .5rem; padding-right: 8px; padding-right: .5rem }\n\n.p2  { padding: 16px; padding: 1rem }\n.pt2 { padding-top: 16px; padding-top: 1rem }\n.pr2 { padding-right: 16px; padding-right: 1rem }\n.pb2 { padding-bottom: 16px; padding-bottom: 1rem }\n.pl2 { padding-left: 16px; padding-left: 1rem }\n.py2 { padding-top: 16px; padding-top: 1rem; padding-bottom: 16px; padding-bottom: 1rem }\n.px2 { padding-left: 16px; padding-left: 1rem; padding-right: 16px; padding-right: 1rem }\n\n.p3  { padding: 32px; padding: 2rem }\n.pt3 { padding-top: 32px; padding-top: 2rem }\n.pr3 { padding-right: 32px; padding-right: 2rem }\n.pb3 { padding-bottom: 32px; padding-bottom: 2rem }\n.pl3 { padding-left: 32px; padding-left: 2rem }\n.py3 { padding-top: 32px; padding-top: 2rem; padding-bottom: 32px; padding-bottom: 2rem }\n.px3 { padding-left: 32px; padding-left: 2rem; padding-right: 32px; padding-right: 2rem }\n\n.p4  { padding: 64px; padding: 4rem }\n.pt4 { padding-top: 64px; padding-top: 4rem }\n.pr4 { padding-right: 64px; padding-right: 4rem }\n.pb4 { padding-bottom: 64px; padding-bottom: 4rem }\n.pl4 { padding-left: 64px; padding-left: 4rem }\n.py4 { padding-top: 64px; padding-top: 4rem; padding-bottom: 64px; padding-bottom: 4rem }\n.px4 { padding-left: 64px; padding-left: 4rem; padding-right: 64px; padding-right: 4rem }\n/* Basscss Grid */\n\n.col {\n  float: left;\n  box-sizing: border-box;\n}\n\n.col-right {\n  float: right;\n  box-sizing: border-box;\n}\n\n.col-1 {\n  width: 8.33333%;\n}\n\n.col-2 {\n  width: 16.66667%;\n}\n\n.col-3 {\n  width: 25%;\n}\n\n.col-4 {\n  width: 33.33333%;\n}\n\n.col-5 {\n  width: 41.66667%;\n}\n\n.col-6 {\n  width: 50%;\n}\n\n.col-7 {\n  width: 58.33333%;\n}\n\n.col-8 {\n  width: 66.66667%;\n}\n\n.col-9 {\n  width: 75%;\n}\n\n.col-10 {\n  width: 83.33333%;\n}\n\n.col-11 {\n  width: 91.66667%;\n}\n\n.col-12 {\n  width: 100%;\n}\n@media (min-width: 40em) {\n\n  .sm-col {\n    float: left;\n    box-sizing: border-box;\n  }\n\n  .sm-col-right {\n    float: right;\n    box-sizing: border-box;\n  }\n\n  .sm-col-1 {\n    width: 8.33333%;\n  }\n\n  .sm-col-2 {\n    width: 16.66667%;\n  }\n\n  .sm-col-3 {\n    width: 25%;\n  }\n\n  .sm-col-4 {\n    width: 33.33333%;\n  }\n\n  .sm-col-5 {\n    width: 41.66667%;\n  }\n\n  .sm-col-6 {\n    width: 50%;\n  }\n\n  .sm-col-7 {\n    width: 58.33333%;\n  }\n\n  .sm-col-8 {\n    width: 66.66667%;\n  }\n\n  .sm-col-9 {\n    width: 75%;\n  }\n\n  .sm-col-10 {\n    width: 83.33333%;\n  }\n\n  .sm-col-11 {\n    width: 91.66667%;\n  }\n\n  .sm-col-12 {\n    width: 100%;\n  }\n\n}\n@media (min-width: 52em) {\n\n  .md-col {\n    float: left;\n    box-sizing: border-box;\n  }\n\n  .md-col-right {\n    float: right;\n    box-sizing: border-box;\n  }\n\n  .md-col-1 {\n    width: 8.33333%;\n  }\n\n  .md-col-2 {\n    width: 16.66667%;\n  }\n\n  .md-col-3 {\n    width: 25%;\n  }\n\n  .md-col-4 {\n    width: 33.33333%;\n  }\n\n  .md-col-5 {\n    width: 41.66667%;\n  }\n\n  .md-col-6 {\n    width: 50%;\n  }\n\n  .md-col-7 {\n    width: 58.33333%;\n  }\n\n  .md-col-8 {\n    width: 66.66667%;\n  }\n\n  .md-col-9 {\n    width: 75%;\n  }\n\n  .md-col-10 {\n    width: 83.33333%;\n  }\n\n  .md-col-11 {\n    width: 91.66667%;\n  }\n\n  .md-col-12 {\n    width: 100%;\n  }\n\n}\n@media (min-width: 64em) {\n\n  .lg-col {\n    float: left;\n    box-sizing: border-box;\n  }\n\n  .lg-col-right {\n    float: right;\n    box-sizing: border-box;\n  }\n\n  .lg-col-1 {\n    width: 8.33333%;\n  }\n\n  .lg-col-2 {\n    width: 16.66667%;\n  }\n\n  .lg-col-3 {\n    width: 25%;\n  }\n\n  .lg-col-4 {\n    width: 33.33333%;\n  }\n\n  .lg-col-5 {\n    width: 41.66667%;\n  }\n\n  .lg-col-6 {\n    width: 50%;\n  }\n\n  .lg-col-7 {\n    width: 58.33333%;\n  }\n\n  .lg-col-8 {\n    width: 66.66667%;\n  }\n\n  .lg-col-9 {\n    width: 75%;\n  }\n\n  .lg-col-10 {\n    width: 83.33333%;\n  }\n\n  .lg-col-11 {\n    width: 91.66667%;\n  }\n\n  .lg-col-12 {\n    width: 100%;\n  }\n\n}\n.flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex }\n\n@media (min-width: 40em) {\n  .sm-flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex }\n}\n\n@media (min-width: 52em) {\n  .md-flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex }\n}\n\n@media (min-width: 64em) {\n  .lg-flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex }\n}\n\n.flex-column  { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column }\n.flex-wrap    { -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap }\n\n.items-start    { -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start }\n.items-end      { -webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; align-items: flex-end }\n.items-center   { -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center }\n.items-baseline { -webkit-box-align: baseline; -webkit-align-items: baseline; -ms-flex-align: baseline; align-items: baseline }\n.items-stretch  { -webkit-box-align: stretch; -webkit-align-items: stretch; -ms-flex-align: stretch; align-items: stretch }\n\n.self-start    { -webkit-align-self: flex-start; -ms-flex-item-align: start; align-self: flex-start }\n.self-end      { -webkit-align-self: flex-end; -ms-flex-item-align: end; align-self: flex-end }\n.self-center   { -webkit-align-self: center; -ms-flex-item-align: center; align-self: center }\n.self-baseline { -webkit-align-self: baseline; -ms-flex-item-align: baseline; align-self: baseline }\n.self-stretch  { -webkit-align-self: stretch; -ms-flex-item-align: stretch; align-self: stretch }\n\n.justify-start   { -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start }\n.justify-end     { -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end }\n.justify-center  { -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center }\n.justify-between { -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between }\n.justify-around  { -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around }\n\n.content-start   { -webkit-align-content: flex-start; -ms-flex-line-pack: start; align-content: flex-start }\n.content-end     { -webkit-align-content: flex-end; -ms-flex-line-pack: end; align-content: flex-end }\n.content-center  { -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center }\n.content-between { -webkit-align-content: space-between; -ms-flex-line-pack: justify; align-content: space-between }\n.content-around  { -webkit-align-content: space-around; -ms-flex-line-pack: distribute; align-content: space-around }\n.content-stretch { -webkit-align-content: stretch; -ms-flex-line-pack: stretch; align-content: stretch }\n\n/* 1. Fix for Chrome 44 bug. https://code.google.com/p/chromium/issues/detail?id=506893 */\n.flex-auto {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  min-width: 0; /* 1 */\n  min-height: 0; /* 1 */\n}\n.flex-none { -webkit-box-flex: 0; -webkit-flex: none; -ms-flex: none; flex: none }\n\n.order-0 { -webkit-box-ordinal-group: 1; -webkit-order: 0; -ms-flex-order: 0; order: 0 }\n.order-1 { -webkit-box-ordinal-group: 2; -webkit-order: 1; -ms-flex-order: 1; order: 1 }\n.order-2 { -webkit-box-ordinal-group: 3; -webkit-order: 2; -ms-flex-order: 2; order: 2 }\n.order-3 { -webkit-box-ordinal-group: 4; -webkit-order: 3; -ms-flex-order: 3; order: 3 }\n.order-last { -webkit-box-ordinal-group: 100000; -webkit-order: 99999; -ms-flex-order: 99999; order: 99999 }\n/* Basscss Position */\n\n.relative { position: relative }\n.absolute { position: absolute }\n.fixed    { position: fixed }\n\n.top-0    { top: 0 }\n.right-0  { right: 0 }\n.bottom-0 { bottom: 0 }\n.left-0   { left: 0 }\n\n.z1 { z-index: 1 }\n.z2 { z-index: 2 }\n.z3 { z-index: 3 }\n.z4 { z-index: 4 }\n/* Basscss Border */\n\n.border {\n  border-style: solid;\n  border-width: 1px;\n}\n\n.border-top {\n  border-top-style: solid;\n  border-top-width: 1px;\n}\n\n.border-right {\n  border-right-style: solid;\n  border-right-width: 1px;\n}\n\n.border-bottom {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n}\n\n.border-left {\n  border-left-style: solid;\n  border-left-width: 1px;\n}\n\n.border-none { border: 0 }\n\n.rounded { border-radius: 3px }\n.circle  { border-radius: 50% }\n\n.rounded-top    { border-radius: 3px 3px 0 0 }\n.rounded-right  { border-radius: 0 3px 3px 0 }\n.rounded-bottom { border-radius: 0 0 3px 3px }\n.rounded-left   { border-radius: 3px 0 0 3px }\n\n.not-rounded { border-radius: 0 }\n/* Basscss Hide */\n\n.hide {\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n}\n\n@media (max-width: 40em) {\n  .xs-hide { display: none !important }\n}\n\n@media (min-width: 40em) and (max-width: 52em) {\n  .sm-hide { display: none !important }\n}\n\n@media (min-width: 52em) and (max-width: 64em) {\n  .md-hide { display: none !important }\n}\n\n@media (min-width: 64em) {\n  .lg-hide { display: none !important }\n}\n\n.display-none { display: none !important }\n\n") || true) && "_fb2c7d7c")
;((require('insert-css')("/*\n\n   TYPE SCALE\n\n*/\n\n/* For Hero Titles */\n.f-6,\n.f-headline {\n  font-size: 96px;\n  font-size: 6rem;\n}\n.f-5,\n.f-subheadline {\n  font-size: 80px;\n  font-size: 5rem;\n}\n\n/* Type Scale */\n.f1 { font-size: 48px; font-size: 3rem; }\n.f2 { font-size: 36px; font-size: 2.25rem; }\n.f3 { font-size: 24px; font-size: 1.5rem; }\n.f4 { font-size: 20px; font-size: 1.25rem; }\n.f5 { font-size: 16px; font-size: 1rem; }\n.f6 { font-size: 14px; font-size: .875rem; }\n\n@media screen and (min-width: 48em){\n  .f-6-ns,\n  .f-headline-ns { font-size: 6rem; }\n  .f-5-ns,\n  .f-subheadline-ns { font-size: 5rem; }\n  .f1-ns { font-size: 3rem; }\n  .f2-ns { font-size: 2.25rem; }\n  .f3-ns { font-size: 1.5rem; }\n  .f4-ns { font-size: 1.25rem; }\n  .f5-ns { font-size: 1rem; }\n  .f6-ns { font-size: .875rem; }\n}\n\n@media screen and (min-width: 48em) and (max-width: 64em) {\n  .f-6-m,\n  .f-headline-m { font-size: 6rem; }\n  .f-5-m,\n  .f-subheadline-m { font-size: 5rem; }\n  .f1-m { font-size: 3rem; }\n  .f2-m { font-size: 2.25rem; }\n  .f3-m { font-size: 1.5rem; }\n  .f4-m { font-size: 1.25rem; }\n  .f5-m { font-size: 1rem; }\n  .f6-m { font-size: .875rem; }\n}\n\n@media screen and (min-width: 64em) {\n  .f-6-l,\n  .f-headline-l {\n    font-size: 6rem;\n  }\n  .f-5-l,\n  .f-subheadline-l {\n    font-size: 5rem;\n  }\n  .f1-l { font-size: 3rem; }\n  .f2-l { font-size: 2.25rem; }\n  .f3-l { font-size: 1.5rem; }\n  .f4-l { font-size: 1.25rem; }\n  .f5-l { font-size: 1rem; }\n  .f6-l { font-size: .875rem; }\n}\n") || true) && "_738c7834")
;((require('insert-css')("/*\n\n   FONT FAMILY GROUPS\n\n*/\n\n\n.sans-serif {\n  font-family: -apple-system, BlinkMacSystemFont,\n               'avenir next', avenir,\n               helvetica, 'helvetica neue',\n               ubuntu,\n               roboto, noto,\n               'segoe ui', arial,\n               sans-serif;\n}\n\n.serif {\n  font-family: georgia,\n               times,\n               serif;\n}\n\n.system-sans-serif {\n  font-family: sans-serif;\n}\n\n.system-serif {\n  font-family: serif;\n}\n\n\n/* Monospaced Typefaces (for code) */\n\n/* From http://cssfontstack.com */\ncode, .code {\n  font-family: Consolas,\n               monaco,\n               monospace;\n}\n\n\n/* Sans-Serif Typefaces */\n\n.helvetica {\n  font-family: 'helvetica neue', helvetica,\n               sans-serif;\n}\n\n\n/* Serif Typefaces */\n\n.georgia {\n  font-family: georgia,\n               serif;\n}\n\n.times {\n  font-family: times,\n               serif;\n}\n\n.bodoni {\n  font-family: \"Bodoni MT\",\n                serif;\n}\n\n.calisto {\n  font-family: \"Calisto MT\",\n                serif;\n}\n\n.garamond {\n  font-family: garamond,\n               serif;\n}\n\n") || true) && "_9851921d")
;((require('insert-css')("/*\n\n   LINE HEIGHT / LEADING\n\n*/\n\n  .lh-solid { line-height: 1; }\n  .lh-title { line-height: 1.3; }\n  .lh-copy  { line-height: 1.6; }\n\n@media screen and (min-width: 48em) {\n  .lh-solid-ns { line-height: 1; }\n  .lh-title-ns { line-height: 1.3; }\n  .lh-copy-ns  { line-height: 1.6; }\n}\n\n@media screen and (min-width: 48em) and (max-width: 64em) {\n  .lh-solid-m { line-height: 1; }\n  .lh-title-m { line-height: 1.3; }\n  .lh-copy-m  { line-height: 1.6; }\n}\n\n@media screen and (min-width: 64em) {\n  .lh-solid-l { line-height: 1; }\n  .lh-title-l { line-height: 1.3; }\n  .lh-copy-l  { line-height: 1.6; }\n}\n\n") || true) && "_5698575d")

const app = choo()

app.router((route) => [
  route('/', wrapRoot([
    require('./views/headline'),
    require('./views/stats'),
    require('./views/about'),
    require('./views/train'),
    require('./views/architecture'),
    require('./views/related'),
    require('./views/footer')
  ]))
])

const tree = app.start('#app-root')
document.body.appendChild(tree)

},{"./elements/wrap-root":"/Users/yw/src/yw/www-choo/elements/wrap-root.js","./views/about":"/Users/yw/src/yw/www-choo/views/about.js","./views/architecture":"/Users/yw/src/yw/www-choo/views/architecture.js","./views/footer":"/Users/yw/src/yw/www-choo/views/footer.js","./views/headline":"/Users/yw/src/yw/www-choo/views/headline.js","./views/related":"/Users/yw/src/yw/www-choo/views/related.js","./views/stats":"/Users/yw/src/yw/www-choo/views/stats.js","./views/train":"/Users/yw/src/yw/www-choo/views/train.js","choo":"/Users/yw/src/yw/www-choo/node_modules/choo/index.js","insert-css":"/Users/yw/src/yw/www-choo/node_modules/insert-css/index.js"}],"/Users/yw/src/yw/www-choo/elements/octo.js":[function(require,module,exports){
const sf = 0
const view = require('bel')

const id = ((require('insert-css')("._18a8abe7:hover .octo-arm {\n    -webkit-animation: octocat-wave 560ms ease-in-out;\n            animation: octocat-wave 560ms ease-in-out;\n  }\n\n  @-webkit-keyframes octocat-wave {\n    ._18a8abe7 0%, ._18a8abe7 100% {\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n    }\n    ._18a8abe7 20%, ._18a8abe7 60% {\n      -webkit-transform: rotate(-25deg);\n              transform: rotate(-25deg);\n    }\n    ._18a8abe7 40%, ._18a8abe7 80% {\n      -webkit-transform: rotate(10deg);\n              transform: rotate(10deg);\n    }\n  }\n\n  @keyframes octocat-wave {\n    ._18a8abe7 0%, ._18a8abe7 100% {\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n    }\n    ._18a8abe7 20%, ._18a8abe7 60% {\n      -webkit-transform: rotate(-25deg);\n              transform: rotate(-25deg);\n    }\n    ._18a8abe7 40%, ._18a8abe7 80% {\n      -webkit-transform: rotate(10deg);\n              transform: rotate(10deg);\n    }\n  }\n\n  @media (max-width: 500px) {\n   ._18a8abe7 .github-corner:hover .octo-arm {\n      -webkit-animation: none;\n              animation: none;\n    }\n    ._18a8abe7 .github-corner .octo-arm {\n      -webkit-animation: octocat-wave 560ms ease-in-out;\n              animation: octocat-wave 560ms ease-in-out;\n    }\n  }") || true) && "_18a8abe7")

module.exports = octoElement

const url = 'https://github.com/yoshuawuyts/choo'
const colorForeground = 'rgb(255, 195, 228)'
function octoElement () {
  return view`
    <a href=${url} class=${id}>
      <svg width="80" height="80" viewBox="0 0 250 250" style="fill:#fff; color:rgb(255, 195, 228); position: absolute; top: 0; border: 0; right: 0; z-index: 999">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z">
        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill=${colorForeground} style="transform-origin: 130px 106px;" class="octo-arm">
        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill=${colorForeground} class="octo-body">
      </svg>
    </a>
  `
}

},{"bel":"/Users/yw/src/yw/www-choo/node_modules/bel/index.js","insert-css":"/Users/yw/src/yw/www-choo/node_modules/insert-css/index.js"}],"/Users/yw/src/yw/www-choo/elements/wrap-root.js":[function(require,module,exports){
const assert = require('assert')
const sf = 0
const view = require('bel')

const octo = require('./octo')

const id = ((require('insert-css')("._fd194258 > section {\n    padding-top: 64px;\n    padding-top: 4rem;\n    padding-bottom: 64px;\n    padding-bottom: 4rem;\n  }") || true) && "_fd194258")

module.exports = wrapRoot

function wrapRoot (views) {
  assert.ok(Array.isArray(views), 'wrap-root: views must be an array')
  return (params, state, send) => view`
    <div id="#app-root" class=${id}>
      ${octo()}
      ${views.map((view) => view(params, state, send))}
    </div>
  `
}

},{"./octo":"/Users/yw/src/yw/www-choo/elements/octo.js","assert":"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/assert/assert.js","bel":"/Users/yw/src/yw/www-choo/node_modules/bel/index.js","insert-css":"/Users/yw/src/yw/www-choo/node_modules/insert-css/index.js"}],"/Users/yw/src/yw/www-choo/node_modules/bel/index.js":[function(require,module,exports){
var document = require('global/document')
var hyperx = require('hyperx')

var SVGNS = 'http://www.w3.org/2000/svg'
var BOOL_PROPS = {
  autofocus: 1,
  checked: 1,
  defaultchecked: 1,
  disabled: 1,
  formnovalidate: 1,
  indeterminate: 1,
  readonly: 1,
  required: 1,
  willvalidate: 1
}
var SVG_TAGS = [
  'svg',
  'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor',
  'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile',
  'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix',
  'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting',
  'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB',
  'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode',
  'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting',
  'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face',
  'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri',
  'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line',
  'linearGradient', 'marker', 'mask', 'metadata', 'missing-glyph', 'mpath',
  'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect',
  'set', 'stop', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref',
  'tspan', 'use', 'view', 'vkern'
]

function belCreateElement (tag, props, children) {
  var el

  // If an svg tag, it needs a namespace
  if (SVG_TAGS.indexOf(tag) !== -1) {
    props.namespace = SVGNS
  }

  // If we are using a namespace
  var ns = false
  if (props.namespace) {
    ns = props.namespace
    delete props.namespace
  }

  // Create the element
  if (ns) {
    el = document.createElementNS(ns, tag)
  } else {
    el = document.createElement(tag)
  }

  // Create the properties
  for (var p in props) {
    if (props.hasOwnProperty(p)) {
      var key = p.toLowerCase()
      var val = props[p]
      // Normalize className
      if (key === 'classname') {
        key = 'class'
        p = 'class'
      }
      // If a property is boolean, set itself to the key
      if (BOOL_PROPS[key]) {
        if (val === 'true') val = key
        else if (val === 'false') continue
      }
      // If a property prefers being set directly vs setAttribute
      if (key.slice(0, 2) === 'on') {
        el[p] = val
      } else {
        if (ns) {
          el.setAttributeNS(null, p, val)
        } else {
          el.setAttribute(p, val)
        }
      }
    }
  }

  function appendChild (childs) {
    if (!Array.isArray(childs)) return
    for (var i = 0; i < childs.length; i++) {
      var node = childs[i]
      if (Array.isArray(node)) {
        appendChild(node)
        continue
      }

      if (typeof node === 'number' ||
        typeof node === 'boolean' ||
        node instanceof Date ||
        node instanceof RegExp) {
        node = node.toString()
      }

      if (typeof node === 'string') {
        if (el.lastChild && el.lastChild.nodeName === '#text') {
          el.lastChild.nodeValue += node
          continue
        }
        node = document.createTextNode(node)
      }

      if (node && node.nodeType) {
        el.appendChild(node)
      }
    }
  }
  appendChild(children)

  return el
}

module.exports = hyperx(belCreateElement)
module.exports.createElement = belCreateElement

},{"global/document":"/Users/yw/src/yw/www-choo/node_modules/bel/node_modules/global/document.js","hyperx":"/Users/yw/src/yw/www-choo/node_modules/bel/node_modules/hyperx/index.js"}],"/Users/yw/src/yw/www-choo/node_modules/bel/node_modules/global/document.js":[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = require('min-document');

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"min-document":"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/browser-resolve/empty.js"}],"/Users/yw/src/yw/www-choo/node_modules/bel/node_modules/hyperx/index.js":[function(require,module,exports){
var attrToProp = require('hyperscript-attribute-to-property')

var VAR = 0, TEXT = 1, OPEN = 2, CLOSE = 3, ATTR = 4
var ATTR_KEY = 5, ATTR_KEY_W = 6
var ATTR_VALUE_W = 7, ATTR_VALUE = 8
var ATTR_VALUE_SQ = 9, ATTR_VALUE_DQ = 10
var ATTR_EQ = 11, ATTR_BREAK = 12

module.exports = function (h, opts) {
  h = attrToProp(h)
  if (!opts) opts = {}
  var concat = opts.concat || function (a, b) {
    return String(a) + String(b)
  }

  return function (strings) {
    var state = TEXT, reg = ''
    var arglen = arguments.length
    var parts = []

    for (var i = 0; i < strings.length; i++) {
      if (i < arglen - 1) {
        var arg = arguments[i+1]
        var p = parse(strings[i])
        var xstate = state
        if (xstate === ATTR_VALUE_DQ) xstate = ATTR_VALUE
        if (xstate === ATTR_VALUE_SQ) xstate = ATTR_VALUE
        if (xstate === ATTR_VALUE_W) xstate = ATTR_VALUE
        if (xstate === ATTR) xstate = ATTR_KEY
        p.push([ VAR, xstate, arg ])
        parts.push.apply(parts, p)
      } else parts.push.apply(parts, parse(strings[i]))
    }

    var tree = [null,{},[]]
    var stack = [[tree,-1]]
    for (var i = 0; i < parts.length; i++) {
      var cur = stack[stack.length-1][0]
      var p = parts[i], s = p[0]
      if (s === OPEN && /^\//.test(p[1])) {
        var ix = stack[stack.length-1][1]
        if (stack.length > 1) {
          stack.pop()
          stack[stack.length-1][0][2][ix] = h(
            cur[0], cur[1], cur[2].length ? cur[2] : undefined
          )
        }
      } else if (s === OPEN) {
        var c = [p[1],{},[]]
        cur[2].push(c)
        stack.push([c,cur[2].length-1])
      } else if (s === ATTR_KEY || (s === VAR && p[1] === ATTR_KEY)) {
        var key = ''
        var copyKey
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_KEY) {
            key = concat(key, parts[i][1])
          } else if (parts[i][0] === VAR && parts[i][1] === ATTR_KEY) {
            if (typeof parts[i][2] === 'object' && !key) {
              for (copyKey in parts[i][2]) {
                if (parts[i][2].hasOwnProperty(copyKey) && !cur[1][copyKey]) {
                  cur[1][copyKey] = parts[i][2][copyKey]
                }
              }
            } else {
              key = concat(key, parts[i][2])
            }
          } else break
        }
        if (parts[i][0] === ATTR_EQ) i++
        var j = i
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_VALUE || parts[i][0] === ATTR_KEY) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][1])
            else cur[1][key] = concat(cur[1][key], parts[i][1])
          } else if (parts[i][0] === VAR
          && (parts[i][1] === ATTR_VALUE || parts[i][1] === ATTR_KEY)) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][2])
            else cur[1][key] = concat(cur[1][key], parts[i][2])
          } else {
            if (key.length && !cur[1][key] && i === j
            && (parts[i][0] === CLOSE || parts[i][0] === ATTR_BREAK)) {
              // https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes
              // empty string is falsy, not well behaved value in browser
              cur[1][key] = key.toLowerCase()
            }
            break
          }
        }
      } else if (s === ATTR_KEY) {
        cur[1][p[1]] = true
      } else if (s === VAR && p[1] === ATTR_KEY) {
        cur[1][p[2]] = true
      } else if (s === CLOSE) {
        if (selfClosing(cur[0]) && stack.length) {
          var ix = stack[stack.length-1][1]
          stack.pop()
          stack[stack.length-1][0][2][ix] = h(
            cur[0], cur[1], cur[2].length ? cur[2] : undefined
          )
        }
      } else if (s === VAR && p[1] === TEXT) {
        if (p[2] === undefined || p[2] === null) p[2] = ''
        else if (!p[2]) p[2] = concat('', p[2])
        if (Array.isArray(p[2][0])) {
          cur[2].push.apply(cur[2], p[2])
        } else {
          cur[2].push(p[2])
        }
      } else if (s === TEXT) {
        cur[2].push(p[1])
      } else if (s === ATTR_EQ || s === ATTR_BREAK) {
        // no-op
      } else {
        throw new Error('unhandled: ' + s)
      }
    }

    if (tree[2].length > 1 && /^\s*$/.test(tree[2][0])) {
      tree[2].shift()
    }

    if (tree[2].length > 2
    || (tree[2].length === 2 && /\S/.test(tree[2][1]))) {
      throw new Error(
        'multiple root elements must be wrapped in an enclosing tag'
      )
    }
    if (Array.isArray(tree[2][0]) && typeof tree[2][0][0] === 'string'
    && Array.isArray(tree[2][0][2])) {
      tree[2][0] = h(tree[2][0][0], tree[2][0][1], tree[2][0][2])
    }
    return tree[2][0]

    function parse (str) {
      var res = []
      if (state === ATTR_VALUE_W) state = ATTR
      for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i)
        if (state === TEXT && c === '<') {
          if (reg.length) res.push([TEXT, reg])
          reg = ''
          state = OPEN
        } else if (c === '>' && !quot(state)) {
          if (state === OPEN) {
            res.push([OPEN,reg])
          } else if (state === ATTR_KEY) {
            res.push([ATTR_KEY,reg])
          } else if (state === ATTR_VALUE && reg.length) {
            res.push([ATTR_VALUE,reg])
          }
          res.push([CLOSE])
          reg = ''
          state = TEXT
        } else if (state === TEXT) {
          reg += c
        } else if (state === OPEN && /\s/.test(c)) {
          res.push([OPEN, reg])
          reg = ''
          state = ATTR
        } else if (state === OPEN) {
          reg += c
        } else if (state === ATTR && /[\w-]/.test(c)) {
          state = ATTR_KEY
          reg = c
        } else if (state === ATTR && /\s/.test(c)) {
          if (reg.length) res.push([ATTR_KEY,reg])
          res.push([ATTR_BREAK])
        } else if (state === ATTR_KEY && /\s/.test(c)) {
          res.push([ATTR_KEY,reg])
          reg = ''
          state = ATTR_KEY_W
        } else if (state === ATTR_KEY && c === '=') {
          res.push([ATTR_KEY,reg],[ATTR_EQ])
          reg = ''
          state = ATTR_VALUE_W
        } else if (state === ATTR_KEY) {
          reg += c
        } else if ((state === ATTR_KEY_W || state === ATTR) && c === '=') {
          res.push([ATTR_EQ])
          state = ATTR_VALUE_W
        } else if ((state === ATTR_KEY_W || state === ATTR) && !/\s/.test(c)) {
          res.push([ATTR_BREAK])
          if (/[\w-]/.test(c)) {
            reg += c
            state = ATTR_KEY
          } else state = ATTR
        } else if (state === ATTR_VALUE_W && c === '"') {
          state = ATTR_VALUE_DQ
        } else if (state === ATTR_VALUE_W && c === "'") {
          state = ATTR_VALUE_SQ
        } else if (state === ATTR_VALUE_DQ && c === '"') {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE_SQ && c === "'") {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE_W && !/\s/.test(c)) {
          state = ATTR_VALUE
          i--
        } else if (state === ATTR_VALUE && /\s/.test(c)) {
          res.push([ATTR_BREAK],[ATTR_VALUE,reg])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE || state === ATTR_VALUE_SQ
        || state === ATTR_VALUE_DQ) {
          reg += c
        }
      }
      if (state === TEXT && reg.length) {
        res.push([TEXT,reg])
        reg = ''
      } else if (state === ATTR_VALUE && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_VALUE_DQ && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_VALUE_SQ && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_KEY) {
        res.push([ATTR_KEY,reg])
        reg = ''
      }
      return res
    }
  }

  function strfn (x) {
    if (typeof x === 'function') return x
    else if (typeof x === 'string') return x
    else if (x && typeof x === 'object') return x
    else return concat('', x)
  }
}

function quot (state) {
  return state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ
}

var hasOwn = Object.prototype.hasOwnProperty
function has (obj, key) { return hasOwn.call(obj, key) }

var closeRE = RegExp('^(' + [
  'area', 'base', 'basefont', 'bgsound', 'br', 'col', 'command', 'embed',
  'frame', 'hr', 'img', 'input', 'isindex', 'keygen', 'link', 'meta', 'param',
  'source', 'track', 'wbr',
  // SVG TAGS
  'animate', 'animateTransform', 'circle', 'cursor', 'desc', 'ellipse',
  'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite',
  'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap',
  'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR',
  'feGaussianBlur', 'feImage', 'feMergeNode', 'feMorphology',
  'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile',
  'feTurbulence', 'font-face-format', 'font-face-name', 'font-face-uri',
  'glyph', 'glyphRef', 'hkern', 'image', 'line', 'missing-glyph', 'mpath',
  'path', 'polygon', 'polyline', 'rect', 'set', 'stop', 'tref', 'use', 'view',
  'vkern'
].join('|') + ')(?:[\.#][a-zA-Z0-9\u007F-\uFFFF_:-]+)*$')
function selfClosing (tag) { return closeRE.test(tag) }

},{"hyperscript-attribute-to-property":"/Users/yw/src/yw/www-choo/node_modules/bel/node_modules/hyperx/node_modules/hyperscript-attribute-to-property/index.js"}],"/Users/yw/src/yw/www-choo/node_modules/bel/node_modules/hyperx/node_modules/hyperscript-attribute-to-property/index.js":[function(require,module,exports){
module.exports = attributeToProperty

var transform = {
  'class': 'className',
  'for': 'htmlFor',
  'http-equiv': 'httpEquiv'
}

function attributeToProperty (h) {
  return function (tagName, attrs, children) {
    for (var attr in attrs) {
      if (attr in transform) {
        attrs[transform[attr]] = attrs[attr]
        delete attrs[attr]
      }
    }
    return h(tagName, attrs, children)
  }
}

},{}],"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/assert/assert.js":[function(require,module,exports){
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// when used in node, this will actually load the util module we depend on
// versus loading the builtin util module as happens otherwise
// this is a bug in node module loading as far as I am concerned
var util = require('util/');

var pSlice = Array.prototype.slice;
var hasOwn = Object.prototype.hasOwnProperty;

// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  }
  else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = stackStartFunction.name;
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function replacer(key, value) {
  if (util.isUndefined(value)) {
    return '' + value;
  }
  if (util.isNumber(value) && !isFinite(value)) {
    return value.toString();
  }
  if (util.isFunction(value) || util.isRegExp(value)) {
    return value.toString();
  }
  return value;
}

function truncate(s, n) {
  if (util.isString(s)) {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

function getMessage(self) {
  return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' +
         self.operator + ' ' +
         truncate(JSON.stringify(self.expected, replacer), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

function _deepEqual(actual, expected) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
    if (actual.length != expected.length) return false;

    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }

    return true;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!util.isObject(actual) && !util.isObject(expected)) {
    return actual == expected;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b) {
  if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b)) {
    return a === b;
  }
  var aIsArgs = isArguments(a),
      bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b);
  }
  var ka = objectKeys(a),
      kb = objectKeys(b),
      key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key])) return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  } else if (actual instanceof expected) {
    return true;
  } else if (expected.call({}, actual) === true) {
    return true;
  }

  return false;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (util.isString(expected)) {
    message = expected;
    expected = null;
  }

  try {
    block();
  } catch (e) {
    actual = e;
  }

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  if (!shouldThrow && expectedException(actual, expected)) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws.apply(this, [true].concat(pSlice.call(arguments)));
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/message) {
  _throws.apply(this, [false].concat(pSlice.call(arguments)));
};

assert.ifError = function(err) { if (err) {throw err;}};

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

},{"util/":"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/util/util.js"}],"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/browser-resolve/empty.js":[function(require,module,exports){

},{}],"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/inherits/inherits_browser.js":[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/util/support/isBufferBrowser.js":[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/util/util.js":[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/util/support/isBufferBrowser.js","_process":"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/process/browser.js","inherits":"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/inherits/inherits_browser.js"}],"/Users/yw/src/yw/www-choo/node_modules/choo/index.js":[function(require,module,exports){
const history = require('sheet-router/history')
const sheetRouter = require('sheet-router')
const document = require('global/document')
const href = require('sheet-router/href')
const sendAction = require('send-action')
const mutate = require('xtend/mutable')
const assert = require('assert')
const xtend = require('xtend')
const yo = require('yo-yo')

choo.view = yo
module.exports = choo

// framework for creating sturdy web applications
// null -> fn
function choo () {
  const _models = []
  var _router = null

  start.toString = toString
  start.router = router
  start.model = model
  start.start = start

  return start

  // render the application to a string
  // (str, obj) -> str
  function toString (route, serverState) {
    const initialState = {}
    const nsState = {}

    _models.forEach(function (model) {
      const ns = model.namespace
      if (ns) {
        if (!nsState[ns]) nsState[ns] = {}
        apply(ns, model.state, nsState)
        nsState[ns] = xtend(nsState[ns], serverState[ns])
      } else {
        apply(model.namespace, model.state, initialState)
      }
    })

    const state = xtend(initialState, xtend(serverState, nsState))
    const tree = _router(route, state, function () {
      throw new Error('send() cannot be called on the server')
    })

    return tree.toString()
  }

  // start the application
  // (str?, obj?) -> DOMNode
  function start (rootId, opts) {
    if (!opts) {
      opts = rootId
      rootId = null
    }
    opts = opts || {}
    const name = opts.name || 'choo'
    const initialState = {}
    const reducers = {}
    const effects = {}

    _models.push(appInit(opts))
    _models.forEach(function (model) {
      if (model.state) apply(model.namespace, model.state, initialState)
      if (model.reducers) apply(model.namespace, model.reducers, reducers)
      if (model.effects) apply(model.namespace, model.effects, effects)
    })

    // send() is used to trigger actions inside
    // views, effects and subscriptions
    const send = sendAction({
      onaction: handleAction,
      onchange: onchange,
      state: initialState
    })

    // subscriptions are loaded after sendAction() is called
    // because they both need access to send() and can't
    // react to actions (read-only)
    _models.forEach(function (model) {
      if (model.subscriptions) {
        assert.ok(Array.isArray(model.subscriptions, 'subs must be an array'))
        model.subscriptions.forEach(function (sub) {
          sub(send)
        })
      }
    })

    // If an id is provided, the application will rehydrate
    // on the node. If no id is provided it will return
    // a tree that's ready to be appended to the DOM.
    //
    // The rootId is determined to find the application root
    // on update. Since the DOM nodes change between updates,
    // we must call document.querySelector() to find the root.
    // Use different names when loading multiple choo applications
    // on the same page
    if (rootId) {
      document.addEventListener('DOMContentLoaded', function (event) {
        rootId = rootId.replace(/^#/, '')

        const oldTree = document.querySelector('#' + rootId)
        assert.ok(oldTree, 'could not find node #' + rootId)

        const newTree = _router(send.state().app.location, send.state(), send)

        yo.update(oldTree, newTree)
      })
    } else {
      rootId = name + '-root'
      const tree = _router(send.state().app.location, send.state(), send)
      tree.setAttribute('id', rootId)
      return tree
    }

    // handle an action by either reducers, effects
    // or both - return the new state when done
    // (obj, obj, fn) -> obj
    function handleAction (action, state, send) {
      var reducersCalled = false
      var effectsCalled = false
      const newState = xtend(state)

      // validate if a namespace exists. Namespaces
      // are delimited by the first ':'. Perhaps
      // we'll allow recursive namespaces in the
      // future - who knows
      if (/:/.test(action.type)) {
        const arr = action.type.split(':')
        var ns = arr.shift()
        action.type = arr.join(':')
      }

      const _reducers = ns ? reducers[ns] : reducers
      if (_reducers && _reducers[action.type]) {
        if (ns) {
          const reducedState = _reducers[action.type](action, state[ns])
          if (!newState[ns]) newState[ns] = {}
          mutate(newState[ns], xtend(state[ns], reducedState))
        } else {
          mutate(newState, reducers[action.type](action, state))
        }
        reducersCalled = true
      }

      const _effects = ns ? effects[ns] : effects
      if (_effects && _effects[action.type]) {
        if (ns) _effects[action.type](action, state[ns], send)
        else _effects[action.type](action, state, send)
        effectsCalled = true
      }

      if (!reducersCalled && !effectsCalled) {
        throw new Error('Could not find action ' + action.type)
      }

      // allows (newState === oldState) checks
      return (reducersCalled) ? newState : state
    }

    // update the DOM after every state mutation
    // (obj, obj) -> null
    function onchange (action, newState, oldState) {
      if (newState === oldState) return
      const oldTree = document.querySelector('#' + rootId)
      assert.ok(oldTree, "Could not find DOM node '#" + rootId + "' to update")
      const newTree = _router(newState.app.location, newState, send, oldState)
      newTree.setAttribute('id', rootId)
      yo.update(oldTree, newTree)
    }
  }

  // register all routes on the router
  // [obj|fn] -> null
  function router (cb) {
    _router = sheetRouter(cb)
    return _router
  }

  // create a new model
  // (str?, obj) -> null
  function model (model) {
    _models.push(model)
  }
}

// initial application state model
// obj -> obj
function appInit (opts) {
  const model = {
    namespace: 'app',
    state: { location: document.location.href },
    subscriptions: [],
    reducers: {
      // handle href links
      location: function setLocation (action, state) {
        return {
          location: action.location.replace(/#.*/, '')
        }
      }
    }
  }

  // enable catching <href a=""></href> links
  // enable HTML5 history API
  if (opts.href !== false) pushLocationSub(href)
  if (opts.history !== false) pushLocationSub(history)

  return model

  // create a new subscription that modifies
  // 'app:location' and push it to be loaded
  // fn -> null
  function pushLocationSub (cb) {
    model.subscriptions.push(function (send) {
      cb(function (href) {
        send('app:location', { location: href })
      })
    })
  }
}

// compose an object conditionally
// optionally contains a namespace
// which is used to nest properties.
// (str, obj, obj) -> null
function apply (ns, source, target) {
  Object.keys(source).forEach(function (key) {
    if (ns) {
      if (!target[ns]) target[ns] = {}
      target[ns][key] = source[key]
    } else target[key] = source[key]
  })
}

},{"assert":"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/assert/assert.js","global/document":"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/global/document.js","send-action":"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/send-action/index.js","sheet-router":"/Users/yw/src/yw/www-choo/node_modules/sheet-router/index.js","sheet-router/history":"/Users/yw/src/yw/www-choo/node_modules/sheet-router/history.js","sheet-router/href":"/Users/yw/src/yw/www-choo/node_modules/sheet-router/href.js","xtend":"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/xtend/immutable.js","xtend/mutable":"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/xtend/mutable.js","yo-yo":"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/yo-yo/index.js"}],"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/global/document.js":[function(require,module,exports){
arguments[4]["/Users/yw/src/yw/www-choo/node_modules/bel/node_modules/global/document.js"][0].apply(exports,arguments)
},{"min-document":"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/browser-resolve/empty.js"}],"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/send-action/index.js":[function(require,module,exports){
var extend = require('xtend')

module.exports = function sendAction (options) {
  if (!options) throw new Error('options required')
  if (!options.onaction) throw new Error('options.onaction required')
  if (!options.onchange) throw new Error('options.onchange required')
  var state = options.state || {}

  function send (action, params) {
    if (typeof action === 'object') params = action
    else if (typeof action === 'string') params = extend({ type: action }, params)

    var newState = options.onaction(params, state, send)
    update(params, newState)
  }

  function update (params, newState) {
    var oldState = state
    state = extend(state, newState)
    options.onchange(params, newState, oldState)
  }

  send.event = function sendAction_event (action, params, flag) {
    if (typeof flag === undefined) flag = true
    return function sendAction_send_thunk (e) {
      if (flag && e && e.preventDefault) e.preventDefault()
      send(action, params, flag)
    }
  }

  send.state = function sendAction_state () {
    return state
  }

  return send
}

},{"xtend":"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/xtend/immutable.js"}],"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/xtend/immutable.js":[function(require,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/xtend/mutable.js":[function(require,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/yo-yo/index.js":[function(require,module,exports){
var bel = require('bel') // turns template tag into DOM elements
var morphdom = require('morphdom') // efficiently diffs + morphs two DOM elements
var defaultEvents = require('./update-events.js') // default events to be copied when dom elements update

module.exports = bel

// TODO move this + defaultEvents to a new module once we receive more feedback
module.exports.update = function (fromNode, toNode, opts) {
  if (!opts) opts = {}
  if (opts.events !== false) {
    if (!opts.onBeforeMorphEl) opts.onBeforeMorphEl = copier
  }

  return morphdom(fromNode, toNode, opts)

  // morphdom only copies attributes. we decided we also wanted to copy events
  // that can be set via attributes
  function copier (f, t) {
    // copy events:
    var events = opts.events || defaultEvents
    for (var i = 0; i < events.length; i++) {
      var ev = events[i]
      if (t[ev]) { // if new element has a whitelisted attribute
        f[ev] = t[ev] // update existing element
      } else if (f[ev]) { // if existing element has it and new one doesnt
        f[ev] = undefined // remove it from existing element
      }
    }
    // copy values for form elements
    if (f.nodeName === 'INPUT' || f.nodeName === 'TEXTAREA' || f.nodeName === 'SELECT') {
      if (t.getAttribute('value') === null) t.value = f.value
    }
  }
}

},{"./update-events.js":"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/yo-yo/update-events.js","bel":"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/yo-yo/node_modules/bel/index.js","morphdom":"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/yo-yo/node_modules/morphdom/lib/index.js"}],"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/yo-yo/node_modules/bel/index.js":[function(require,module,exports){
arguments[4]["/Users/yw/src/yw/www-choo/node_modules/bel/index.js"][0].apply(exports,arguments)
},{"global/document":"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/global/document.js","hyperx":"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/yo-yo/node_modules/bel/node_modules/hyperx/index.js"}],"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/yo-yo/node_modules/bel/node_modules/hyperx/index.js":[function(require,module,exports){
arguments[4]["/Users/yw/src/yw/www-choo/node_modules/bel/node_modules/hyperx/index.js"][0].apply(exports,arguments)
},{"hyperscript-attribute-to-property":"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/yo-yo/node_modules/bel/node_modules/hyperx/node_modules/hyperscript-attribute-to-property/index.js"}],"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/yo-yo/node_modules/bel/node_modules/hyperx/node_modules/hyperscript-attribute-to-property/index.js":[function(require,module,exports){
arguments[4]["/Users/yw/src/yw/www-choo/node_modules/bel/node_modules/hyperx/node_modules/hyperscript-attribute-to-property/index.js"][0].apply(exports,arguments)
},{}],"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/yo-yo/node_modules/morphdom/lib/index.js":[function(require,module,exports){
// Create a range object for efficently rendering strings to elements.
var range;

var testEl = (typeof document !== 'undefined') ?
    document.body || document.createElement('div') :
    {};

var XHTML = 'http://www.w3.org/1999/xhtml';
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;

// Fixes <https://github.com/patrick-steele-idem/morphdom/issues/32>
// (IE7+ support) <=IE7 does not support el.hasAttribute(name)
var hasAttributeNS;

if (testEl.hasAttributeNS) {
    hasAttributeNS = function(el, namespaceURI, name) {
        return el.hasAttributeNS(namespaceURI, name);
    };
} else if (testEl.hasAttribute) {
    hasAttributeNS = function(el, namespaceURI, name) {
        return el.hasAttribute(name);
    };
} else {
    hasAttributeNS = function(el, namespaceURI, name) {
        return !!el.getAttributeNode(name);
    };
}

function empty(o) {
    for (var k in o) {
        if (o.hasOwnProperty(k)) {
            return false;
        }
    }
    return true;
}

function toElement(str) {
    if (!range && document.createRange) {
        range = document.createRange();
        range.selectNode(document.body);
    }

    var fragment;
    if (range && range.createContextualFragment) {
        fragment = range.createContextualFragment(str);
    } else {
        fragment = document.createElement('body');
        fragment.innerHTML = str;
    }
    return fragment.childNodes[0];
}

var specialElHandlers = {
    /**
     * Needed for IE. Apparently IE doesn't think that "selected" is an
     * attribute when reading over the attributes using selectEl.attributes
     */
    OPTION: function(fromEl, toEl) {
        fromEl.selected = toEl.selected;
        if (fromEl.selected) {
            fromEl.setAttribute('selected', '');
        } else {
            fromEl.removeAttribute('selected', '');
        }
    },
    /**
     * The "value" attribute is special for the <input> element since it sets
     * the initial value. Changing the "value" attribute without changing the
     * "value" property will have no effect since it is only used to the set the
     * initial value.  Similar for the "checked" attribute, and "disabled".
     */
    INPUT: function(fromEl, toEl) {
        fromEl.checked = toEl.checked;
        if (fromEl.checked) {
            fromEl.setAttribute('checked', '');
        } else {
            fromEl.removeAttribute('checked');
        }

        if (fromEl.value !== toEl.value) {
            fromEl.value = toEl.value;
        }

        if (!hasAttributeNS(toEl, null, 'value')) {
            fromEl.removeAttribute('value');
        }

        fromEl.disabled = toEl.disabled;
        if (fromEl.disabled) {
            fromEl.setAttribute('disabled', '');
        } else {
            fromEl.removeAttribute('disabled');
        }
    },

    TEXTAREA: function(fromEl, toEl) {
        var newValue = toEl.value;
        if (fromEl.value !== newValue) {
            fromEl.value = newValue;
        }

        if (fromEl.firstChild) {
            fromEl.firstChild.nodeValue = newValue;
        }
    }
};

function noop() {}

/**
 * Returns true if two node's names and namespace URIs are the same.
 *
 * @param {Element} a
 * @param {Element} b
 * @return {boolean}
 */
var compareNodeNames = function(a, b) {
    return a.nodeName === b.nodeName &&
           a.namespaceURI === b.namespaceURI;
};

/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */
function createElementNS(name, namespaceURI) {
    return !namespaceURI || namespaceURI === XHTML ?
        document.createElement(name) :
        document.createElementNS(namespaceURI, name);
}

/**
 * Loop over all of the attributes on the target node and make sure the original
 * DOM node has the same attributes. If an attribute found on the original node
 * is not on the new node then remove it from the original node.
 *
 * @param  {Element} fromNode
 * @param  {Element} toNode
 */
function morphAttrs(fromNode, toNode) {
    var attrs = toNode.attributes;
    var i;
    var attr;
    var attrName;
    var attrNamespaceURI;
    var attrValue;
    var fromValue;

    for (i = attrs.length - 1; i >= 0; i--) {
        attr = attrs[i];
        attrName = attr.name;
        attrValue = attr.value;
        attrNamespaceURI = attr.namespaceURI;

        if (attrNamespaceURI) {
            attrName = attr.localName || attrName;
            fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);
        } else {
            fromValue = fromNode.getAttribute(attrName);
        }

        if (fromValue !== attrValue) {
            if (attrNamespaceURI) {
                fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
            } else {
                fromNode.setAttribute(attrName, attrValue);
            }
        }
    }

    // Remove any extra attributes found on the original DOM element that
    // weren't found on the target element.
    attrs = fromNode.attributes;

    for (i = attrs.length - 1; i >= 0; i--) {
        attr = attrs[i];
        if (attr.specified !== false) {
            attrName = attr.name;
            attrNamespaceURI = attr.namespaceURI;

            if (!hasAttributeNS(toNode, attrNamespaceURI, attrNamespaceURI ? attrName = attr.localName || attrName : attrName)) {
                fromNode.removeAttributeNode(attr);
            }
        }
    }
}

/**
 * Copies the children of one DOM element to another DOM element
 */
function moveChildren(fromEl, toEl) {
    var curChild = fromEl.firstChild;
    while (curChild) {
        var nextChild = curChild.nextSibling;
        toEl.appendChild(curChild);
        curChild = nextChild;
    }
    return toEl;
}

function defaultGetNodeKey(node) {
    return node.id;
}

function morphdom(fromNode, toNode, options) {
    if (!options) {
        options = {};
    }

    if (typeof toNode === 'string') {
        if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML') {
            var toNodeHtml = toNode;
            toNode = document.createElement('html');
            toNode.innerHTML = toNodeHtml;
        } else {
            toNode = toElement(toNode);
        }
    }

    // XXX optimization: if the nodes are equal, don't morph them
    /*
    if (fromNode.isEqualNode(toNode)) {
      return fromNode;
    }
    */

    var savedEls = {}; // Used to save off DOM elements with IDs
    var unmatchedEls = {};
    var getNodeKey = options.getNodeKey || defaultGetNodeKey;
    var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
    var onNodeAdded = options.onNodeAdded || noop;
    var onBeforeElUpdated = options.onBeforeElUpdated || options.onBeforeMorphEl || noop;
    var onElUpdated = options.onElUpdated || noop;
    var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
    var onNodeDiscarded = options.onNodeDiscarded || noop;
    var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || options.onBeforeMorphElChildren || noop;
    var childrenOnly = options.childrenOnly === true;
    var movedEls = [];

    function removeNodeHelper(node, nestedInSavedEl) {
        var id = getNodeKey(node);
        // If the node has an ID then save it off since we will want
        // to reuse it in case the target DOM tree has a DOM element
        // with the same ID
        if (id) {
            savedEls[id] = node;
        } else if (!nestedInSavedEl) {
            // If we are not nested in a saved element then we know that this node has been
            // completely discarded and will not exist in the final DOM.
            onNodeDiscarded(node);
        }

        if (node.nodeType === ELEMENT_NODE) {
            var curChild = node.firstChild;
            while (curChild) {
                removeNodeHelper(curChild, nestedInSavedEl || id);
                curChild = curChild.nextSibling;
            }
        }
    }

    function walkDiscardedChildNodes(node) {
        if (node.nodeType === ELEMENT_NODE) {
            var curChild = node.firstChild;
            while (curChild) {


                if (!getNodeKey(curChild)) {
                    // We only want to handle nodes that don't have an ID to avoid double
                    // walking the same saved element.

                    onNodeDiscarded(curChild);

                    // Walk recursively
                    walkDiscardedChildNodes(curChild);
                }

                curChild = curChild.nextSibling;
            }
        }
    }

    function removeNode(node, parentNode, alreadyVisited) {
        if (onBeforeNodeDiscarded(node) === false) {
            return;
        }

        parentNode.removeChild(node);
        if (alreadyVisited) {
            if (!getNodeKey(node)) {
                onNodeDiscarded(node);
                walkDiscardedChildNodes(node);
            }
        } else {
            removeNodeHelper(node);
        }
    }

    function morphEl(fromEl, toEl, alreadyVisited, childrenOnly) {
        var toElKey = getNodeKey(toEl);
        if (toElKey) {
            // If an element with an ID is being morphed then it is will be in the final
            // DOM so clear it out of the saved elements collection
            delete savedEls[toElKey];
        }

        if (!childrenOnly) {
            if (onBeforeElUpdated(fromEl, toEl) === false) {
                return;
            }

            morphAttrs(fromEl, toEl);
            onElUpdated(fromEl);

            if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
                return;
            }
        }

        if (fromEl.nodeName !== 'TEXTAREA') {
            var curToNodeChild = toEl.firstChild;
            var curFromNodeChild = fromEl.firstChild;
            var curToNodeId;

            var fromNextSibling;
            var toNextSibling;
            var savedEl;
            var unmatchedEl;

            outer: while (curToNodeChild) {
                toNextSibling = curToNodeChild.nextSibling;
                curToNodeId = getNodeKey(curToNodeChild);

                while (curFromNodeChild) {
                    var curFromNodeId = getNodeKey(curFromNodeChild);
                    fromNextSibling = curFromNodeChild.nextSibling;

                    if (!alreadyVisited) {
                        if (curFromNodeId && (unmatchedEl = unmatchedEls[curFromNodeId])) {
                            unmatchedEl.parentNode.replaceChild(curFromNodeChild, unmatchedEl);
                            morphEl(curFromNodeChild, unmatchedEl, alreadyVisited);
                            curFromNodeChild = fromNextSibling;
                            continue;
                        }
                    }

                    var curFromNodeType = curFromNodeChild.nodeType;

                    if (curFromNodeType === curToNodeChild.nodeType) {
                        var isCompatible = false;

                        // Both nodes being compared are Element nodes
                        if (curFromNodeType === ELEMENT_NODE) {
                            if (compareNodeNames(curFromNodeChild, curToNodeChild)) {
                                // We have compatible DOM elements
                                if (curFromNodeId || curToNodeId) {
                                    // If either DOM element has an ID then we
                                    // handle those differently since we want to
                                    // match up by ID
                                    if (curToNodeId === curFromNodeId) {
                                        isCompatible = true;
                                    }
                                } else {
                                    isCompatible = true;
                                }
                            }

                            if (isCompatible) {
                                // We found compatible DOM elements so transform
                                // the current "from" node to match the current
                                // target DOM node.
                                morphEl(curFromNodeChild, curToNodeChild, alreadyVisited);
                            }
                        // Both nodes being compared are Text nodes
                    } else if (curFromNodeType === TEXT_NODE) {
                            isCompatible = true;
                            // Simply update nodeValue on the original node to
                            // change the text value
                            curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                        }

                        if (isCompatible) {
                            curToNodeChild = toNextSibling;
                            curFromNodeChild = fromNextSibling;
                            continue outer;
                        }
                    }

                    // No compatible match so remove the old node from the DOM
                    // and continue trying to find a match in the original DOM
                    removeNode(curFromNodeChild, fromEl, alreadyVisited);
                    curFromNodeChild = fromNextSibling;
                }

                if (curToNodeId) {
                    if ((savedEl = savedEls[curToNodeId])) {
                        morphEl(savedEl, curToNodeChild, true);
                        // We want to append the saved element instead
                        curToNodeChild = savedEl;
                    } else {
                        // The current DOM element in the target tree has an ID
                        // but we did not find a match in any of the
                        // corresponding siblings. We just put the target
                        // element in the old DOM tree but if we later find an
                        // element in the old DOM tree that has a matching ID
                        // then we will replace the target element with the
                        // corresponding old element and morph the old element
                        unmatchedEls[curToNodeId] = curToNodeChild;
                    }
                }

                // If we got this far then we did not find a candidate match for
                // our "to node" and we exhausted all of the children "from"
                // nodes. Therefore, we will just append the current "to node"
                // to the end
                if (onBeforeNodeAdded(curToNodeChild) !== false) {
                    fromEl.appendChild(curToNodeChild);
                    onNodeAdded(curToNodeChild);
                }

                if (curToNodeChild.nodeType === ELEMENT_NODE &&
                    (curToNodeId || curToNodeChild.firstChild)) {
                    // The element that was just added to the original DOM may
                    // have some nested elements with a key/ID that needs to be
                    // matched up with other elements. We'll add the element to
                    // a list so that we can later process the nested elements
                    // if there are any unmatched keyed elements that were
                    // discarded
                    movedEls.push(curToNodeChild);
                }

                curToNodeChild = toNextSibling;
                curFromNodeChild = fromNextSibling;
            }

            // We have processed all of the "to nodes". If curFromNodeChild is
            // non-null then we still have some from nodes left over that need
            // to be removed
            while (curFromNodeChild) {
                fromNextSibling = curFromNodeChild.nextSibling;
                removeNode(curFromNodeChild, fromEl, alreadyVisited);
                curFromNodeChild = fromNextSibling;
            }
        }

        var specialElHandler = specialElHandlers[fromEl.nodeName];
        if (specialElHandler) {
            specialElHandler(fromEl, toEl);
        }
    } // END: morphEl(...)

    var morphedNode = fromNode;
    var morphedNodeType = morphedNode.nodeType;
    var toNodeType = toNode.nodeType;

    if (!childrenOnly) {
        // Handle the case where we are given two DOM nodes that are not
        // compatible (e.g. <div> --> <span> or <div> --> TEXT)
        if (morphedNodeType === ELEMENT_NODE) {
            if (toNodeType === ELEMENT_NODE) {
                if (!compareNodeNames(fromNode, toNode)) {
                    onNodeDiscarded(fromNode);
                    morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
                }
            } else {
                // Going from an element node to a text node
                morphedNode = toNode;
            }
        } else if (morphedNodeType === TEXT_NODE) { // Text node
            if (toNodeType === TEXT_NODE) {
                morphedNode.nodeValue = toNode.nodeValue;
                return morphedNode;
            } else {
                // Text node to something else
                morphedNode = toNode;
            }
        }
    }

    if (morphedNode === toNode) {
        // The "to node" was not compatible with the "from node" so we had to
        // toss out the "from node" and use the "to node"
        onNodeDiscarded(fromNode);
    } else {
        morphEl(morphedNode, toNode, false, childrenOnly);

        /**
         * What we will do here is walk the tree for the DOM element that was
         * moved from the target DOM tree to the original DOM tree and we will
         * look for keyed elements that could be matched to keyed elements that
         * were earlier discarded.  If we find a match then we will move the
         * saved element into the final DOM tree.
         */
        var handleMovedEl = function(el) {
            var curChild = el.firstChild;
            while (curChild) {
                var nextSibling = curChild.nextSibling;

                var key = getNodeKey(curChild);
                if (key) {
                    var savedEl = savedEls[key];
                    if (savedEl && compareNodeNames(curChild, savedEl)) {
                        curChild.parentNode.replaceChild(savedEl, curChild);
                        // true: already visited the saved el tree
                        morphEl(savedEl, curChild, true);
                        curChild = nextSibling;
                        if (empty(savedEls)) {
                            return false;
                        }
                        continue;
                    }
                }

                if (curChild.nodeType === ELEMENT_NODE) {
                    handleMovedEl(curChild);
                }

                curChild = nextSibling;
            }
        };

        // The loop below is used to possibly match up any discarded
        // elements in the original DOM tree with elemenets from the
        // target tree that were moved over without visiting their
        // children
        if (!empty(savedEls)) {
            handleMovedElsLoop:
            while (movedEls.length) {
                var movedElsTemp = movedEls;
                movedEls = [];
                for (var i=0; i<movedElsTemp.length; i++) {
                    if (handleMovedEl(movedElsTemp[i]) === false) {
                        // There are no more unmatched elements so completely end
                        // the loop
                        break handleMovedElsLoop;
                    }
                }
            }
        }

        // Fire the "onNodeDiscarded" event for any saved elements
        // that never found a new home in the morphed DOM
        for (var savedElId in savedEls) {
            if (savedEls.hasOwnProperty(savedElId)) {
                var savedEl = savedEls[savedElId];
                onNodeDiscarded(savedEl);
                walkDiscardedChildNodes(savedEl);
            }
        }
    }

    if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
        // If we had to swap out the from node with a new node because the old
        // node was not compatible with the target node then we need to
        // replace the old DOM node in the original DOM tree. This is only
        // possible if the original DOM node was part of a DOM tree which
        // we know is the case if it has a parent node.
        fromNode.parentNode.replaceChild(morphedNode, fromNode);
    }

    return morphedNode;
}

module.exports = morphdom;

},{}],"/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/yo-yo/update-events.js":[function(require,module,exports){
module.exports = [
  // attribute events (can be set with attributes)
  'onclick',
  'ondblclick',
  'onmousedown',
  'onmouseup',
  'onmouseover',
  'onmousemove',
  'onmouseout',
  'ondragstart',
  'ondrag',
  'ondragenter',
  'ondragleave',
  'ondragover',
  'ondrop',
  'ondragend',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onunload',
  'onabort',
  'onerror',
  'onresize',
  'onscroll',
  'onselect',
  'onchange',
  'onsubmit',
  'onreset',
  'onfocus',
  'onblur',
  'oninput',
  // other common events
  'oncontextmenu',
  'onfocusin',
  'onfocusout'
]

},{}],"/Users/yw/src/yw/www-choo/node_modules/insert-css/index.js":[function(require,module,exports){
var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;
    
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');

    if ('textContent' in elem) {
      elem.textContent = css;
    } else {
      elem.styleSheet.cssText = css;
    }
    
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};

},{}],"/Users/yw/src/yw/www-choo/node_modules/sheet-router/history.js":[function(require,module,exports){
const document = require('global/document')
const window = require('global/window')
const assert = require('assert')

module.exports = history

// listen to html5 pushstate events
// and update router accordingly
// fn(str) -> null
function history (cb) {
  assert.equal(typeof cb, 'function', 'cb must be a function')
  window.onpopstate = function () {
    cb(document.location.href)
  }
}

},{"assert":"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/assert/assert.js","global/document":"/Users/yw/src/yw/www-choo/node_modules/sheet-router/node_modules/global/document.js","global/window":"/Users/yw/src/yw/www-choo/node_modules/sheet-router/node_modules/global/window.js"}],"/Users/yw/src/yw/www-choo/node_modules/sheet-router/href.js":[function(require,module,exports){
const window = require('global/window')
const assert = require('assert')

module.exports = href

// handle a click if is anchor tag with an href
// and url lives on the same domain. Replaces
// trailing '#' so empty links work as expected.
// fn(str) -> null
function href (cb) {
  assert.equal(typeof cb, 'function', 'cb must be a function')

  window.onclick = function (e) {
    const node = (function traverse (node) {
      if (!node) return
      if (node.localName !== 'a') return traverse(node.parentNode)
      if (node.href === undefined) return traverse(node.parentNode)
      if (window.location.host !== node.host) return traverse(node.parentNode)
      return node
    })(e.target)

    if (!node) return

    e.preventDefault()
    const href = node.href.replace(/#$/, '')
    cb(href)
    window.history.pushState({}, null, href)
  }
}

},{"assert":"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/assert/assert.js","global/window":"/Users/yw/src/yw/www-choo/node_modules/sheet-router/node_modules/global/window.js"}],"/Users/yw/src/yw/www-choo/node_modules/sheet-router/index.js":[function(require,module,exports){
const pathname = require('pathname-match')
const wayfarer = require('wayfarer')
const assert = require('assert')

module.exports = sheetRouter

// Fast, modular client router
// fn(str, any[..], fn?) -> fn(str, any[..])
function sheetRouter (dft, createTree, createRoute) {
  createRoute = createRoute ? createRoute(r) : r
  if (!createTree) {
    createTree = dft
    dft = ''
  }

  assert.equal(typeof dft, 'string', 'dft must be a string')
  assert.equal(typeof createTree, 'function', 'createTree must be a function')

  const router = wayfarer(dft)
  const tree = createTree(createRoute)

  // register tree in router
  ;(function walk (tree, route) {
    if (Array.isArray(tree[0])) {
      // walk over all routes at the root of the tree
      tree.forEach(function (node) {
        walk(node, route)
      })
    } else if (tree[1]) {
      // handle inline functions as args
      const innerRoute = tree[0]
        ? route.concat(tree[0]).join('/')
        : route.length ? route.join('/') : tree[0]
      router.on(innerRoute, tree[1])
      walk(tree[2], route.concat(tree[0]))
    } else if (Array.isArray(tree[2])) {
      // traverse and append route
      walk(tree[2], route.concat(tree[0]))
    } else {
      // register path in router
      const nwRoute = tree[0]
        ? route.concat(tree[0]).join('/')
        : route.length ? route.join('/') : tree[0]
      router.on(nwRoute, tree[2])
    }
  })(tree, [])

  // match a route on the router
  return function match (route) {
    assert.equal(typeof route, 'string', 'route must be a string')
    const args = [].slice.call(arguments)
    args[0] = pathname(args[0])
    return router.apply(null, args)
  }
}

// register regular route
function r (route, inline, child) {
  if (!child) {
    child = inline
    inline = null
  }
  assert.equal(typeof route, 'string', 'route must be a string')
  assert.ok(child, 'child exists')
  route = route.replace(/^\//, '')
  return [ route, inline, child ]
}

},{"assert":"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/assert/assert.js","pathname-match":"/Users/yw/src/yw/www-choo/node_modules/sheet-router/node_modules/pathname-match/index.js","wayfarer":"/Users/yw/src/yw/www-choo/node_modules/sheet-router/node_modules/wayfarer/index.js"}],"/Users/yw/src/yw/www-choo/node_modules/sheet-router/node_modules/global/document.js":[function(require,module,exports){
arguments[4]["/Users/yw/src/yw/www-choo/node_modules/bel/node_modules/global/document.js"][0].apply(exports,arguments)
},{"min-document":"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/browser-resolve/empty.js"}],"/Users/yw/src/yw/www-choo/node_modules/sheet-router/node_modules/global/window.js":[function(require,module,exports){
(function (global){
if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = global;
} else if (typeof self !== "undefined"){
    module.exports = self;
} else {
    module.exports = {};
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/yw/src/yw/www-choo/node_modules/sheet-router/node_modules/pathname-match/index.js":[function(require,module,exports){
const assert = require('assert')

module.exports = match

// get url path section from a url
// strip querystrings / hashes
// strip protocol
// strip hostname and port (both ip and route)
// str -> str
function match (route) {
  assert.equal(typeof route, 'string')

  return route.trim()
    .replace(/[\?|#].*$/, '')
    .replace(/^(?:https?\:)\/\//, '')
    .replace(/^(?:[\w+(?:-\w+)+.])+(?:[\:0-9]{4,5})?/, '')
    .replace(/\/$/, '')
}

},{"assert":"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/assert/assert.js"}],"/Users/yw/src/yw/www-choo/node_modules/sheet-router/node_modules/sliced/index.js":[function(require,module,exports){

/**
 * An Array.prototype.slice.call(arguments) alternative
 *
 * @param {Object} args something with a length
 * @param {Number} slice
 * @param {Number} sliceEnd
 * @api public
 */

module.exports = function (args, slice, sliceEnd) {
  var ret = [];
  var len = args.length;

  if (0 === len) return ret;

  var start = slice < 0
    ? Math.max(0, slice + len)
    : slice || 0;

  if (sliceEnd !== undefined) {
    len = sliceEnd < 0
      ? sliceEnd + len
      : sliceEnd
  }

  while (len-- > start) {
    ret[len - start] = args[len];
  }

  return ret;
}


},{}],"/Users/yw/src/yw/www-choo/node_modules/sheet-router/node_modules/wayfarer/index.js":[function(require,module,exports){
const assert = require('assert')
const sliced = require('sliced')
const trie = require('./trie')

module.exports = Wayfarer

// create a router
// str -> obj
function Wayfarer (dft) {
  if (!(this instanceof Wayfarer)) return new Wayfarer(dft)

  const _default = (dft || '').replace(/^\//, '')
  const _trie = trie()

  emit._trie = _trie
  emit.emit = emit
  emit.on = on
  emit._wayfarer = true

  return emit

  // define a route
  // (str, fn) -> obj
  function on (route, cb) {
    assert.equal(typeof route, 'string')
    assert.equal(typeof cb, 'function')

    route = route || '/'

    if (cb && cb._wayfarer && cb._trie) {
      _trie.mount(route, cb._trie.trie)
    } else {
      const node = _trie.create(route)
      node.cb = cb
    }

    return emit
  }

  // match and call a route
  // (str, obj?) -> null
  function emit (route) {
    assert.notEqual(route, undefined, "'route' must be defined")
    const args = sliced(arguments)

    const node = _trie.match(route)
    if (node && node.cb) {
      args[0] = node.params
      return node.cb.apply(null, args)
    }

    const dft = _trie.match(_default)
    if (dft && dft.cb) {
      args[0] = dft.params
      return dft.cb.apply(null, args)
    }

    throw new Error("route '" + route + "' did not match")
  }
}

},{"./trie":"/Users/yw/src/yw/www-choo/node_modules/sheet-router/node_modules/wayfarer/trie.js","assert":"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/assert/assert.js","sliced":"/Users/yw/src/yw/www-choo/node_modules/sheet-router/node_modules/sliced/index.js"}],"/Users/yw/src/yw/www-choo/node_modules/sheet-router/node_modules/wayfarer/node_modules/xtend/immutable.js":[function(require,module,exports){
arguments[4]["/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/xtend/immutable.js"][0].apply(exports,arguments)
},{}],"/Users/yw/src/yw/www-choo/node_modules/sheet-router/node_modules/wayfarer/node_modules/xtend/mutable.js":[function(require,module,exports){
arguments[4]["/Users/yw/src/yw/www-choo/node_modules/choo/node_modules/xtend/mutable.js"][0].apply(exports,arguments)
},{}],"/Users/yw/src/yw/www-choo/node_modules/sheet-router/node_modules/wayfarer/trie.js":[function(require,module,exports){
const mutate = require('xtend/mutable')
const assert = require('assert')
const xtend = require('xtend')

module.exports = Trie

// create a new trie
// null -> obj
function Trie () {
  if (!(this instanceof Trie)) return new Trie()
  this.trie = { nodes: {} }
}

// create a node on the trie at route
// and return a node
// str -> null
Trie.prototype.create = function (route) {
  assert.equal(typeof route, 'string', 'route should be a string')
  // strip leading '/' and split routes
  const routes = route.replace(/^\//, '').split('/')
  return (function createNode (index, trie, routes) {
    const route = routes[index]

    if (route === undefined) return trie

    var node = null
    if (/^:/.test(route)) {
      // if node is a name match, set name and append to ':' node
      if (!trie.nodes['$$']) {
        node = { nodes: {} }
        trie.nodes['$$'] = node
      } else {
        node = trie.nodes['$$']
      }
      trie.name = route.replace(/^:/, '')
    } else if (!trie.nodes[route]) {
      node = { nodes: {} }
      trie.nodes[route] = node
    } else {
      node = trie.nodes[route]
    }

    // we must recurse deeper
    return createNode(index + 1, node, routes)
  })(0, this.trie, routes)
}

// match a route on the trie
// and return the node
// str -> obj
Trie.prototype.match = function (route) {
  assert.equal(typeof route, 'string', 'route should be a string')

  const routes = route.replace(/^\//, '').split('/')
  const params = {}

  var node = (function search (index, trie) {
    // either there's no match, or we're done searching
    if (trie === undefined) return undefined
    const route = routes[index]
    if (route === undefined) return trie

    if (trie.nodes[route]) {
      // match regular routes first
      return search(index + 1, trie.nodes[route])
    } else if (trie.name) {
      // match named routes
      params[trie.name] = route
      return search(index + 1, trie.nodes['$$'])
    } else {
      // no matches found
      return search(index + 1)
    }
  })(0, this.trie)

  if (!node) return undefined
  node = xtend(node)
  node.params = params
  return node
}

// mount a trie onto a node at route
// (str, obj) -> null
Trie.prototype.mount = function (route, trie) {
  assert.equal(typeof route, 'string', 'route should be a string')
  assert.equal(typeof trie, 'object', 'trie should be a object')

  const split = route.replace(/^\//, '').split('/')
  var node = null
  var key = null

  if (split.length === 1) {
    key = split[0]
    node = this.create(key)
  } else {
    const headArr = split.splice(0, split.length - 1)
    const head = headArr.join('/')
    key = split[0]
    node = this.create(head)
  }

  mutate(node.nodes, trie.nodes)
  if (trie.name) node.name = trie.name

  // delegate properties from '/' to the new node
  // '/' cannot be reached once mounted
  if (node.nodes['']) {
    Object.keys(node.nodes['']).forEach(function (key) {
      if (key === 'nodes') return
      node[key] = node.nodes[''][key]
    })
    mutate(node.nodes, node.nodes[''].nodes)
    delete node.nodes[''].nodes
  }
}

},{"assert":"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/assert/assert.js","xtend":"/Users/yw/src/yw/www-choo/node_modules/sheet-router/node_modules/wayfarer/node_modules/xtend/immutable.js","xtend/mutable":"/Users/yw/src/yw/www-choo/node_modules/sheet-router/node_modules/wayfarer/node_modules/xtend/mutable.js"}],"/Users/yw/src/yw/www-choo/views/about.js":[function(require,module,exports){
const view = require('bel')

const content = `
  Choo is a cute little framework that does more with less. It's fun, fast, and
  packs a functional lil' architecture. It can be rendered anywhere and doesn't
  discriminate between soloists and large teams.
`

module.exports = footer

const bgColor = '#f5f5f5'

function footer () {
  return view`
    <section
      class="flex justify-center mx-auto center"
      style="background-color: ${bgColor}">
      <p class="f3 f4-ns code lh-copy left-align px2 max-width-2">
        ${content}
      </p>
    </section>
  `
}

},{"bel":"/Users/yw/src/yw/www-choo/node_modules/bel/index.js"}],"/Users/yw/src/yw/www-choo/views/architecture.js":[function(require,module,exports){
const view = require('bel')

const content = `
 ┌───────────────────────────┐     ┌────────┐
 │    ┌─────────────────┐    │     │  User  │
 ├────│  Subscriptions  │    │     └────────┘
 │    ├─────────────────┤    │          │
 └────│     Effects     │◀───┤          ▼
      ├─────────────────┤  Actions ┌────────┐
      │    Reducers     │◀───┴─────│  DOM   │
    Models──────────────┘          └────────┘
               │                        ▲
             State                   DOM│tree
               ▼                        │
          ┌────────┐               ┌────────┐
          │ Router │─────State ───▶│ Views  │
          └────────┘               └────────┘
`

module.exports = footer

const bgColor = '#f5f5f5'

function footer () {
  return view`
    <section
      class="flex justify-center mx-auto"
      style="background-color: ${bgColor}">
      <div class="left-align px2" style="width: 32rem;">
        <pre class="f6 code lh-copy">
          ${content}
        </pre>
      </div>
    </section>
  `
}

},{"bel":"/Users/yw/src/yw/www-choo/node_modules/bel/index.js"}],"/Users/yw/src/yw/www-choo/views/footer.js":[function(require,module,exports){
const view = require('bel')

module.exports = footer

const yoshUrl = 'https://twitter.com/yoshuawuyts'
const contribUrl = 'https://github.com/yoshuawuyts/choo/graphs/contributors'
const bgColor = '#f5f5f5'

function footer () {
  return view`
    <section class="center" style="background-color: ${bgColor}">
      <div class="code f5 lh-copy">
        The little framework that could.
      </div>
      <div class="code f5 lh-copy">
        <span>Built with ❤︎ by </span>
        <a href=${yoshUrl}>Yoshua Wuyts</a>
        <span>and </span>
        <a href=${contribUrl}>contributors</a>
      </div>
    </section>
  `
}

},{"bel":"/Users/yw/src/yw/www-choo/node_modules/bel/index.js"}],"/Users/yw/src/yw/www-choo/views/headline.js":[function(require,module,exports){
const view = require('bel')

module.exports = headlineView

function headlineView () {
  const headline = [
    view`<span>CH</span>`,
    view`<span style="letter-spacing: -0.1em;"> </span>`,
    view`<span>O</span>`,
    view`<span style="letter-spacing: 0.07em;"> </span>`,
    view`<span>O</span>`
  ]

  const subheadline = 'Sturdy frontend framework'.toUpperCase()

  return view`
    <section style="background-color: rgb(255, 195, 228)">
      <div
        class="flex justify-center items-center flex-column center mx-auto"
        style="max-width: 500px; height: calc(95vh - 8rem);"
        >
        <h1 class="f-headline bold sans-serif mb4">${headline}</h1>
        <h2 class="f1 bold code">${subheadline}</h2>
      </div>
    </section>
  `
}

},{"bel":"/Users/yw/src/yw/www-choo/node_modules/bel/index.js"}],"/Users/yw/src/yw/www-choo/views/related.js":[function(require,module,exports){
const view = require('bel')

const content = `
`

module.exports = relatedView

const bgColor = '#fff'

function relatedView () {
  return view`
    <section
      class="flex justify-center mx-auto"
      style="background-color: ${bgColor}">
      <div class="left-align px2" style="width: 32rem;">
        <pre class="f6 code lh-copy">
          ${content}
        </pre>
      </div>
    </section>
  `
}

},{"bel":"/Users/yw/src/yw/www-choo/node_modules/bel/index.js"}],"/Users/yw/src/yw/www-choo/views/stats.js":[function(require,module,exports){
const view = require('bel')

module.exports = statsView

const descriptions = [
  { name: 'Lines', value: 237 },
  { name: 'Methods', value: 6 },
  { name: 'Dependencies', value: 6 }
]

const version = 'v2.1.6'
const size = '7.14kb'

function statsView () {
  return view`
    <section class="flex flex-column mx-auto px2 max-width-2">
      <div class="mb3">
        <span class="f2 f4-ns bold mr3 sans-serif">choo</span>
        <span class="f2 f4-ns bold mr3 sans-serif">${version}</span>
        <span class="f2 f4-ns bold mr3 sans-serif">${size}</span>
      </div>
      <div>
        ${createDescriptions(descriptions)}
      </div>
    </section>
  `
}

function createDescriptions (descriptions) {
  return descriptions.map((description) => {
    return view`
      <dl class="inline-block pr3">
        <dt class="f3 f6-ns code">${description.name}</dt>
        <dd class="f1 f2-ns bold lh-title sans-serif">${description.value}</dd>
      </dl>
    `
  })
}

},{"bel":"/Users/yw/src/yw/www-choo/node_modules/bel/index.js"}],"/Users/yw/src/yw/www-choo/views/train.js":[function(require,module,exports){
const assert = require('assert')
const view = require('bel')

module.exports = trainView

const bgColor = '#fff'

function trainView () {
  return view`
    <section
      class="flex justify-center mx-auto"
      style="background-color: ${bgColor}">
      <div class="left-align px2 f3 center">
        ${createTrain(18)}
      </div>
    </section>
  `
}

function createTrain (n) {
  assert.equal(typeof n, 'number')
  var train = '🚂'
  const carriage = '🚋'
  for (var i = 0; i < n; i++) {
    train += carriage
  }
  return train
}

},{"assert":"/Users/yw/src/yw/www-choo/node_modules/browserify/node_modules/assert/assert.js","bel":"/Users/yw/src/yw/www-choo/node_modules/bel/index.js"}]},{},["/Users/yw/src/yw/www-choo/client.js"]);
