import curry from './Images/curry.jpg';
import eagles from './Images/eagles.jpg';
import odellAndSaquon from './Images/odell-and-saquon.jpg';
import saquon from './Images/saquon.jpg';
import fatherDaughter from './Images/father-daughter.jpg';
import robinWilliams from './Images/robin.jpg';
import walterWhite from './Images/walter-white.jpg';
import tevlin from './Images/tevlin.jpg';
import titanic from './Images/titanic.jpg';
import titanicFrame from './Images/titanic-frame.jpg';
import abstractRoom from './Images/abstract-room.jpg';
import auntUncle from './Images/aunt-uncle.jpg';
import banditBeetles from './Images/bandit-beetles.jpg';
import basketball from './Images/basketball.jpg';
import basketball2 from './Images/basketball2.jpg';
import beetlesPlants from './Images/beetles-plants.jpg';
import blackDog from './Images/black-dog.jpg';
import blueMoon from './Images/blue-moon.jpg';
import brendanFamily from './Images/brendan-family.jpg';
import caCollage from './Images/ca-collage.jpg';
import carly from './Images/carly.jpg';
import connorBeetles from './Images/connor-beetles.jpg';
import converse from './Images/converse.jpg';
import couple from './Images/couple.jpg';
import dinah from './Images/dinah.jpg';
import dogsMini from './Images/dogs-mini.jpg';
import dogsPortrait from './Images/dogs-portrait.jpg';
import gift from './Images/gift.jpg';
import grinch from './Images/grinch.jpg';
import homeGift from './Images/home-gift.jpg';
import houseGift from './Images/house-gift.jpg';
import housewarming from './Images/housewarming.jpg';
import inkProject from './Images/ink-project.jpg';
import jeter from './Images/jeter.jpg';
import jonas from './Images/jonas.jpg';
import kanye from './Images/kanye.jpg';
import kyleGf from './Images/kyle-gf.jpg';
import lbiPainting from './Images/lbi-painting.jpg';
import lbiPainting2 from './Images/lbi-painting2.jpg';
import lbiPrint from './Images/lbi-print.jpg';
import lewisGinter from './Images/lewis-ginter.jpg';
import lionFruitLoops from './Images/lion-fruit-loops.jpg';
import maggieTommy from './Images/maggie-tommy.jpg';
import mandalorian from './Images/mandalorian.jpg';
import michaelKobe from './Images/michael-kobe.jpg';
import minis from './Images/minis.jpg';
import momCaptiva from './Images/mom-captiva.jpg';
import mom from './Images/mom.jpg';
import mountainEtching from './Images/mountain-etching.jpg';
import octopus from './Images/octopus.jpg';
import parentsPrint from './Images/parents-print.jpg';
import parentsPrints from './Images/parents-prints.jpg';
import penguins from './Images/penguins.jpg';
import pieMini from './Images/pie-mini.jpg';
import pipelineEtch from './Images/pipeline-etch.jpg';
import plantAnatomy from './Images/plant-anatomy.jpg';
import recipe from './Images/recipe.jpg';
import richmondPrint from './Images/richmond-print.jpg';
import robinFrame from './Images/robin-frame.jpg';
import sammy from './Images/sammy.jpg';
import shoeProject from './Images/shoe-project.jpg';
import stickySine from './Images/sticky-sine.jpg';
import sine from './Images/sine.jpg';
import sisterGift from './Images/sister-gift.jpg';
import sisters from './Images/sisters.jpg';
import tattoo from './Images/tattoo.jpg';
import tridelta from './Images/tridelta.jpg';
import udareShirley from './Images/udare-shirley.jpg';
import udareShirleyFrame from './Images/udare-shirley-frame.jpg';
import underwater from './Images/underwater.jpg';
import underwater2 from './Images/underwater2.jpg';
import voodoo from './Images/voodoo.jpg';
import weddingGift from './Images/wedding-gift.jpg';
import westhamptonLake from './Images/westhampton-lake.jpg';
import westhamptonLake2 from './Images/westhampton-lake2.jpg';
import dogsMiniStand from './Images/dogs-mini-stand.jpg';
import pieMiniStand from './Images/pie-mini-stand.jpg';
import carlySteve from './Images/carly-steve.jpg';
import carlyStevePic from './Images/carly-steve-pic.jpg';
import momGooey from './Images/mom-gooey.jpg';
import emma from './Images/emma.jpg';
import bracelet1 from './Images/bracelet1.jpg';
import duncanOil from './Images/duncan-oil.jpg';
import babyPortrait from './Images/baby-portrait.jpg';
import kanyeFrame from './Images/kanye-frame.jpg';
import steveFrame from './Images/steve-frame.jpg';
import duncanEtch from './Images/duncan-etch.jpg';
import donutPrints from './Images/donut-prints.jpg';
import trideltaPaddle from './Images/tridelta-paddle.jpg';
import hsMural from './Images/hs-mural.jpg';
import picassoPortrait from './Images/picasso-portrait.jpg';
import llama from './Images/llama.jpg';
import converses from './Images/converses.jpg';
import theOffice from './Images/the-office.jpg';
import ladyDog from './Images/lady-dog.jpg';
import smallConverse from './Images/small-converse.jpg';
import pot from './Images/pot.jpg';
import bee from './Images/bee.jpg';
import paigeEmmy from './Images/paige-emmy.jpg';
import grogo from './Images/grogo.jpg';
import romain from './Images/romain.jpg';
import travis from './Images/travis.jpg';
import poppiCarving from './Images/poppi-carving.jpg';
import racoons from './Images/racoons.jpg';
import guyDog from './Images/guy-dog.jpg';
import danSkye from './Images/dan-skye.jpg';
import carlySteveWedding from './Images/carly-steve-wedding.jpg';
import whiteDog from './Images/white-dog.jpg';
import derekTurtle from './Images/derek-turtle.jpg';
import trideltChill from './Images/tridelt-chill.jpg';
import abbeyPs from './Images/abbey-ps.jpg';
import plantsBees from './Images/plants-bees.jpg';
import julieMe from './Images/julie-me.jpg';
import shamim from './Images/shamim.jpg';
import lionGouche from './Images/lion-gouche.jpg';
import trideltPaddle2 from './Images/tridelt-paddle2.jpg';
import plantAnatomyFrame from './Images/plant-anatomy-frame.jpg';
import odell from './Images/odell.jpg';
import artFestival from './Images/art-festival.jpg';
import wallArt from './Images/wall-art.jpg';
import streetArtFish from './Images/street-art-fish.jpg';
import miniBeach from './Images/mini-beach.jpg';
import abstract from './Images/abstract.jpg';
import moon from './Images/moon.jpg';

interface IGalleryImage {
  src: string;
  width: string | number;
  height: string | number;
  alt?: string;
  id: string;
  desc?: string;
}
export const photos: IGalleryImage[] = [
  {
    src: curry,
    width: 'auto',
    height: 400,
    alt: 'Steph Curry drawing',
    id: 'drawing',
    desc: 'Graphite & conte, 11x14", Feb 2019',
  },
  {
    src: eagles,
    width: 'auto',
    height: 400,
    id: 'drawing',
    alt: 'Eagles colored pencil drawing',
    desc: 'Colored pencil, 9x12", Oct 2018',
  },
  {
    src: odellAndSaquon,
    width: 'auto',
    height: 500,
    id: 'drawing',
  },
  {
    src: saquon,
    width: 'auto',
    height: 400,
    id: 'drawing',
    alt: 'Giants blue pen drawing',
    desc: 'Blue pen, 9x12", Dec 2018',
  },
  {
    src: fatherDaughter,
    width: 400,
    height: 'auto',
    id: 'drawing',
  },
  {
    src: robinWilliams,
    width: 400,
    height: 'auto',
    id: 'drawing',
  },
  {
    src: walterWhite,
    width: 470,
    height: 'auto',
    id: 'drawing',
  },
  {
    src: tevlin,
    width: 400,
    height: 'auto',
    id: 'drawing',
  },
  {
    src: titanic,
    width: 500,
    height: 'auto',
    id: 'painting',
  },
  {
    src: titanicFrame,
    width: 500,
    height: 'auto',
    id: 'painting',
  },
  {
    src: abstractRoom,
    width: 400,
    height: 'auto',
    id: 'painting',
  },
  {
    src: auntUncle,
    width: 'auto',
    height: 400,
    id: 'drawing',
  },
  {
    src: banditBeetles,
    width: 'auto',
    height: 400,
    id: 'painting',
  },
  {
    src: basketball,
    width: 'auto',
    height: 400,
    id: 'misc',
  },
  {
    src: basketball2,
    width: 'auto',
    height: 400,
    id: 'misc',
  },
  {
    src: beetlesPlants,
    width: 'auto',
    height: 400,
    id: 'drawing-painting',
  },
  {
    src: blackDog,
    width: 'auto',
    height: 400,
    id: 'painting',
  },
  {
    src: blueMoon,
    width: 'auto',
    height: 400,
    id: 'painting',
  },
  {
    src: brendanFamily,
    width: 'auto',
    height: 400,
    id: 'drawing',
  },
  {
    src: caCollage,
    width: 'auto',
    height: 400,
    id: 'misc',
  },
  {
    src: carly,
    width: 'auto',
    height: 400,
    id: 'drawing',
  },
  {
    src: connorBeetles,
    width: 'auto',
    height: 400,
    id: 'painting',
  },
  {
    src: converse,
    width: 'auto',
    height: 400,
    id: 'drawing',
  },
  {
    src: couple,
    width: 'auto',
    height: 400,
    id: 'drawing',
  },
  {
    src: dinah,
    width: 'auto',
    height: 400,
    id: 'painting',
  },
  {
    src: dogsMini,
    width: 'auto',
    height: 300,
    id: 'painting',
  },
  {
    src: dogsMiniStand,
    width: 'auto',
    height: 300,
    id: 'painting',
  },
  {
    src: dogsPortrait,
    width: 'auto',
    height: 400,
    id: 'painting',
  },
  {
    src: gift,
    width: 'auto',
    height: 400,
    id: 'drawing',
  },
  {
    src: grinch,
    width: 'auto',
    height: 300,
    id: 'painting',
  },
  {
    src: homeGift,
    width: 'auto',
    height: 400,
    id: 'drawing',
  },
  {
    src: houseGift,
    width: 'auto',
    height: 400,
    id: 'drawing',
  },
  {
    src: housewarming,
    width: 'auto',
    height: 400,
    id: 'painting',
  },
  {
    src: inkProject,
    width: 'auto',
    height: 400,
    id: 'drawing',
  },
  {
    src: jeter,
    width: 'auto',
    height: 300,
    id: 'painting',
  },
  {
    src: jonas,
    width: 'auto',
    height: 400,
    id: 'drawing-watercolor',
  },
  {
    src: kanye,
    width: 'auto',
    height: 400,
    id: 'drawing',
  },
  {
    src: kyleGf,
    width: 'auto',
    height: 400,
    id: 'drawing',
  },
  {
    src: lbiPainting,
    width: 'auto',
    height: 500,
    id: 'painting',
  },
  {
    src: lbiPainting2,
    width: 'auto',
    height: 400,
    id: 'painting',
  },
  {
    src: lbiPrint,
    width: 'auto',
    height: 400,
    id: 'print',
  },
  {
    src: lewisGinter,
    width: 'auto',
    height: 400,
    id: 'misc',
  },
  {
    src: lionFruitLoops,
    width: 'auto',
    height: 400,
    id: 'misc',
  },
  {
    src: maggieTommy,
    width: 'auto',
    height: 400,
    id: 'drawing',
  },
  {
    src: mandalorian,
    width: 'auto',
    height: 500,
    id: 'painting',
  },
  {
    src: michaelKobe,
    width: 'auto',
    height: 400,
    id: 'drawing-watercolor',
  },
  {
    src: minis,
    width: 'auto',
    height: 300,
    id: 'painting',
  },
  {
    src: momCaptiva,
    width: 'auto',
    height: 400,
    id: 'painting',
  },
  {
    src: mom,
    width: 'auto',
    height: 400,
    id: 'drawing',
  },
  {
    src: mountainEtching,
    width: 'auto',
    height: 400,
    id: 'misc',
  },
  {
    src: octopus,
    width: 'auto',
    height: 400,
    id: 'drawing',
  },
  {
    src: parentsPrints,
    width: 'auto',
    height: 400,
    id: 'print',
  },
  {
    src: parentsPrint,
    width: 'auto',
    height: 400,
    id: 'print',
  },
  {
    src: penguins,
    width: 'auto',
    height: 300,
    id: 'misc',
  },
  {
    src: pieMini,
    width: 'auto',
    height: 300,
    id: 'painting',
  },
  {
    src: pieMiniStand,
    width: 'auto',
    height: 300,
    id: 'painting',
  },
  {
    src: pipelineEtch,
    width: 'auto',
    height: 400,
    id: 'misc',
  },
  {
    src: plantAnatomy,
    width: 'auto',
    height: 400,
    id: 'drawing',
  },
  {
    src: recipe,
    width: 'auto',
    height: 400,
    id: 'misc',
  },
  {
    src: richmondPrint,
    width: 'auto',
    height: 400,
    id: 'print',
  },
  {
    src: robinFrame,
    width: 'auto',
    height: 400,
    id: 'drawing',
  },
  {
    src: sammy,
    width: 'auto',
    height: 300,
    id: 'painting',
  },
  {
    src: shoeProject,
    width: 'auto',
    height: 400,
    id: 'drawing',
  },
  {
    src: sine,
    width: 'auto',
    height: 400,
    id: 'painting',
  },
  {
    src: sisterGift,
    width: 'auto',
    height: 400,
    id: 'drawing',
  },
  {
    src: sisters,
    width: 'auto',
    height: 400,
    id: 'painting',
  },
  {
    src: stickySine,
    width: 'auto',
    height: 400,
    id: 'drawing-painting',
  },
  {
    src: tattoo,
    width: 'auto',
    height: 400,
    id: 'misc',
  },
  {
    src: tridelta,
    width: 'auto',
    height: 400,
    id: 'misc',
  },
  {
    src: udareShirleyFrame,
    width: 'auto',
    height: 400,
    id: 'drawing-watercolor',
  },
  {
    src: udareShirley,
    width: 'auto',
    height: 400,
    id: 'drawing-watercolor',
  },
  {
    src: underwater,
    width: 'auto',
    height: 400,
    id: 'painting',
  },
  {
    src: underwater2,
    width: 'auto',
    height: 400,
    id: 'painting',
  },
  {
    src: voodoo,
    width: 'auto',
    height: 400,
    id: 'drawing',
  },
  {
    src: weddingGift,
    width: 'auto',
    height: 400,
    id: 'drawing',
  },
  {
    src: westhamptonLake,
    width: 'auto',
    height: 400,
    id: 'painting',
  },
  {
    src: westhamptonLake2,
    width: 'auto',
    height: 400,
    id: 'painting',
  },
  {
    src: carlySteve,
    width: 'auto',
    height: 400,
    id: 'drawing',
    alt: 'Carly and Steve with drawing',
    desc: '',
  },
  {
    src: carlyStevePic,
    width: 'auto',
    height: 400,
    id: 'drawing',
    alt: 'Carly and Steve drawing and picture',
  },
  {
    src: momGooey,
    width: 'auto',
    height: 400,
    id: 'misc',
    alt: 'Mom with gooey butter cake recipe drawing',
  },
  {
    src: emma,
    width: 'auto',
    height: 400,
    id: 'drawing',
    alt: 'Emma and Elyse wedding gift',
  },
  {
    src: bracelet1,
    width: 'auto',
    height: 400,
    id: 'misc',
    alt: 'Leather beaded bracelet',
  },
  {
    src: duncanOil,
    width: 'auto',
    height: 300,
    id: 'painting',
    alt: 'Oil painting of Duncan',
  },
  {
    src: babyPortrait,
    width: 'auto',
    height: 200,
    id: 'drawing',
    alt: 'Baby portrait drawing',
  },
  {
    src: moon,
    width: 'auto',
    height: 200,
    id: 'painting',
    alt: 'Mini moon painting',
  },
  {
    src: kanyeFrame,
    width: 'auto',
    height: 300,
    id: 'drawing',
    alt: 'Kanye frame',
  },
  {
    src: steveFrame,
    width: 'auto',
    height: 300,
    id: 'drawing',
    alt: 'Steve with drawing',
  },
  {
    src: duncanEtch,
    width: 'auto',
    height: 200,
    id: 'misc',
    alt: 'Duncan etching',
  },
  {
    src: donutPrints,
    width: 'auto',
    height: 200,
    id: 'prints',
    alt: 'Donut prints',
  },
  {
    src: trideltaPaddle,
    width: 100,
    height: 'auto',
    id: 'misc',
    alt: 'Tridelta paddle art',
  },
  {
    src: hsMural,
    width: 'auto',
    height: 200,
    id: 'painting',
    alt: 'Highschool mural',
  },
  {
    src: picassoPortrait,
    width: 'auto',
    height: 200,
    id: 'painting',
    alt: 'Picasso-styled portraits',
  },
  {
    src: llama,
    width: 'auto',
    height: 200,
    id: 'painting',
    alt: 'Mini llama painting',
  },
  {
    src: converses,
    width: 'auto',
    height: 300,
    id: 'drawing',
    alt: 'Converse drawings',
  },
  {
    src: smallConverse,
    width: 'auto',
    height: 400,
    id: 'drawing',
    alt: 'Converse pen drawing',
  },
  {
    src: theOffice,
    width: 'auto',
    height: 300,
    id: 'drawing',
    alt: 'The Office charicatures',
  },
  {
    src: ladyDog,
    width: 'auto',
    height: 300,
    id: 'drawing',
    alt: 'Lady and her dog drawing',
  },
  {
    src: pot,
    width: 'auto',
    height: 300,
    id: 'misc',
    alt: 'Pot painting',
  },
  {
    src: bee,
    width: 'auto',
    height: 400,
    id: 'painting',
    alt: 'Mini bumblebee painting',
  },
  {
    src: paigeEmmy,
    width: 'auto',
    height: 500,
    id: 'drawing',
    alt: 'Paige and Emmy drawing',
  },
  {
    src: grogo,
    width: 'auto',
    height: 200,
    id: 'painting',
    alt: 'Small grogo painting',
  },
  {
    src: romain,
    width: 'auto',
    height: 200,
    id: 'drawing-watercolor',
    alt: "Mini drawings of Romain's family",
  },
  {
    src: travis,
    width: 'auto',
    height: 500,
    id: 'painting',
    alt: 'Painting of Travis',
  },
  {
    src: poppiCarving,
    width: 'auto',
    height: 300,
    id: 'misc',
    alt: 'Painted gnome carving from Poppi',
  },
  {
    src: racoons,
    width: 'auto',
    height: 500,
    id: 'drawing',
    alt: 'Racoons drawing',
  },
  {
    src: guyDog,
    width: 'auto',
    height: 300,
    id: 'drawing',
    alt: 'Guy and dog drawing',
  },
  {
    src: danSkye,
    width: 200,
    height: 'auto',
    id: 'drawing',
    alt: 'Small drawing of Dan and Skye',
  },
  {
    src: carlySteveWedding,
    width: 'auto',
    height: 400,
    id: 'drawing',
    alt: 'Wedding drawing for Carly and Steve',
  },
  {
    src: whiteDog,
    width: 'auto',
    height: 300,
    id: 'painting',
    alt: 'White dog painting',
  },
  {
    src: derekTurtle,
    width: 'auto',
    height: 300,
    id: 'painting',
    alt: 'Derek and I with painting',
  },
  {
    src: trideltChill,
    width: 'auto',
    height: 200,
    id: 'misc',
    alt: 'Tridelt and chill banner',
  },
  {
    src: abbeyPs,
    width: 200,
    height: 'auto',
    id: 'painting',
    alt: 'Graduation painting for Abbey',
  },
  {
    src: plantsBees,
    width: '200',
    height: 'auto',
    id: 'drawing',
    alt: 'Blue pen drawing of honeybees and plants',
  },
  {
    src: julieMe,
    width: 300,
    height: 'auto',
    id: 'drawing',
    alt: 'Julie and I round drawing',
  },
  {
    src: shamim,
    width: '300',
    height: 'auto',
    id: 'misc',
    alt: 'CarMax Christmas sweater',
  },
  {
    src: lionGouche,
    width: '300',
    height: 'auto',
    id: 'misc',
    alt: 'Lion gouche painting from Fruit Loops',
  },
  {
    src: trideltPaddle2,
    width: '100',
    height: 'auto',
    id: 'misc',
    alt: 'Tridelta paddle',
  },
  {
    src: plantAnatomyFrame,
    width: '300',
    height: 'auto',
    id: 'drawing',
    alt: 'Frame plant drawing',
  },
  {
    src: odell,
    width: '400',
    height: 'auto',
    id: 'drawing',
    alt: 'Pen and watercolor drawing of Odell',
  },
  {
    src: artFestival,
    width: '200',
    height: 'auto',
    id: 'misc',
    alt: 'Street Art festival',
  },
  {
    src: wallArt,
    width: '300',
    height: 'auto',
    id: 'misc',
    alt: 'Wall art',
  },
  {
    src: streetArtFish,
    width: '300',
    height: 'auto',
    id: 'misc',
    alt: 'Me painting a wooden fish',
  },
  {
    src: miniBeach,
    width: '200',
    height: 'auto',
    id: 'painting',
    alt: 'Mini beach painting',
  },
  {
    src: abstract,
    width: '500',
    height: 'auto',
    id: 'painting',
    alt: 'Large abstract painting',
  },
];
