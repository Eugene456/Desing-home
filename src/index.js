'use strict';

import "@babel/polyfill";
import "element-closest";
import "nodelist-foreach-polyfill";
import "fetch-polyfill";
import "formdata-polyfill";
import "es6-promise";


import takedata from "./modules/takedata";
import telNumber from "./modules/numtel";
import menu from "./modules/menu";
import price from "./modules/price";
import maskPhone from "./modules/maskPhone";
import modalPrivacy from "./modules/modalPrivacy";
import formulaBlock from "./modules/formulaBlock";
import SliderCarousel from "./modules/sliderCarousel";
import comments from "./modules/comments";
import sliderCarouselTab from "./modules/carouselTab";
import portfolio from "./modules/portfolio";
import typesRepair from "./modules/typesRepair";
import accordion from "./modules/accordion";
import tabs from "./modules/tabs";
import documents from "./modules/documents";
import disengAdd from "./modules/desing";
import desingAdd from "./modules/desing";
import modPortfolio from "./modules/modPortfolio";
import problem from "./modules/problem";
import consult from "./modules/consult";
import sendData from "./modules/sendData";

takedata();
telNumber();
menu();
price();
modalPrivacy();
formulaBlock();
comments();
typesRepair();
accordion();
tabs();
documents();
desingAdd();
modPortfolio();
problem();
consult();
sendData();
