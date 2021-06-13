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
import zion from './Images/zion.jpg';
import obama from './Images/obama.jpg';
import chloe from './Images/chloe.jpg';
import chloeRed from './Images/chloe-red.jpg';

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
    width: 400,
    height: 'auto',
    alt: 'Steph Curry drawing',
    id: 'drawing',
    desc: 'Graphite & conte, 11x14", Feb 2019',
  },
  {
    src: eagles,
    width: 400,
    height: 'auto',
    id: 'drawing',
    alt: 'Eagles colored pencil drawing',
    desc: 'Colored pencil, 9x12", Oct 2018',
  },
  {
    src: obama,
    width: 'auto',
    height: 500,
    alt: 'Drawing of Obama',
    id: 'drawing',
    desc: 'Charcoal, 9x12", 2016',
  },
  {
    src: odellAndSaquon,
    width: 500,
    height: 'auto',
    id: 'drawing',
    alt: 'Pen drawings of Odell and Saquon',
    desc: 'Blue pen, 9x12" each, Dec 2018',
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
    width: 'auto',
    height: 400,
    id: 'drawing',
    alt: 'Drawing of a father and his daughter',
    desc: 'Charcoal & conte, 11x14", April 2019',
  },
  {
    src: robinWilliams,
    width: 400,
    height: 'auto',
    id: 'drawing',
    alt: 'Pen drawing of Robin Williams',
    desc: 'Blue pen, 9x12", 2014',
  },
  {
    src: walterWhite,
    width: 500,
    height: 'auto',
    id: 'drawing',
    alt: 'Drawing of Walter White',
    desc: 'Graphite, 9x12", June 2013',
  },
  {
    src: tevlin,
    width: 400,
    height: 'auto',
    id: 'drawing',
    alt: 'Drawing of Tevlin',
    desc: 'Charcoal, 9x12", 2014',
  },
  {
    src: titanic,
    width: 500,
    height: 'auto',
    id: 'painting',
    alt: 'Oil painting of the titanic',
    desc: 'Oil, 48x36", May 2021',
  },
  {
    src: titanicFrame,
    width: 500,
    height: 'auto',
    id: 'painting',
  },
  {
    src: auntUncle,
    width: 300,
    height: 'auto',
    id: 'drawing',
    alt: 'Drawing of my aunt and uncle',
    desc: 'Graphite, conte & colored pencil, 8x8", Sept 2018',
  },
  {
    src: banditBeetles,
    width: 500,
    height: 'auto',
    id: 'painting',
    alt: 'Acrylic painting of the bandit Beetles',
    desc: 'Acrylic, Aug 2018',
  },
  {
    src: basketball,
    width: 'auto',
    height: 400,
    id: 'misc',
    alt: 'Painted basketball',
    desc: 'Acrylic, 2013',
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
    alt: 'Acrylic painting of a black dog',
    desc: 'Acrylic, 11x14", 2017',
  },
  {
    src: blueMoon,
    width: 400,
    height: 'auto',
    id: 'painting',
    alt: 'Painting of a blue moon',
    desc: 'Acrylic, 2016',
  },
  {
    src: brendanFamily,
    width: 'auto',
    height: 400,
    id: 'drawing',
    alt: "Drawing of Brendan's family",
    desc: 'Graphite, 11x14", Jan 2021',
  },
  {
    src: caCollage,
    width: 300,
    height: 'auto',
    id: 'misc',
    alt: 'Collage of California',
    desc: 'Newspaper, magazine, maps & photographs on illustration board, 2014',
  },
  {
    src: carly,
    width: 'auto',
    height: 400,
    id: 'drawing',
    alt: 'Charcoal drawing of Carly',
    desc: 'Charcoal, 2016',
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
    alt: 'Drawing of up-close converse',
    desc: 'Graphite (created with only value and no line), 19x24", Jan 2017',
  },
  {
    src: couple,
    width: 500,
    height: 'auto',
    id: 'drawing',
    alt: 'Drawing of a couple',
    desc: 'Graphite, 19.5x25.5", March 2020',
  },
  {
    src: dinah,
    width: 400,
    height: 'auto',
    id: 'painting',
    alt: 'Oil painting of Dinah',
    desc: 'Oil, 18x24", 2012',
  },
  {
    src: dogsMini,
    width: 'auto',
    height: 300,
    id: 'painting',
    alt: 'Mini painting of Tipper and Snickers photoshopped in photo',
  },
  {
    src: dogsMiniStand,
    width: 'auto',
    height: 300,
    id: 'painting',
    alt: 'Mini painting of Tipper and Snickers',
    desc: 'Acrylic, 3x4", Feb 2021',
  },
  {
    src: dogsPortrait,
    width: 'auto',
    height: 400,
    id: 'painting',
    alt: 'Acrylic painting of dogs',
    desc: 'Acrylic, 11x14", Dec 2018',
  },
  {
    src: gift,
    width: 300,
    height: 'auto',
    id: 'drawing',
    alt: 'Ticket drawing as a gift',
    desc: 'Graphite, colored pencils & pen, 3.5x3.5" (portrait), Dec 2018',
  },
  {
    src: grinch,
    width: 'auto',
    height: 300,
    id: 'painting',
    alt: 'Mini painting of the Grinch',
    desc: 'Acrylic, 3x3", Dec 2016',
  },
  {
    src: homeGift,
    width: 500,
    height: 'auto',
    id: 'drawing',
    alt: 'Drawing of a house',
    desc: 'Colored pencil, 19.5x25.5", June 2019',
  },
  {
    src: houseGift,
    width: 400,
    height: 'auto',
    id: 'drawing',
    alt: 'Drawing of a house',
    desc: 'Colored pencil, 11x14", July 2018',
  },
  {
    src: housewarming,
    width: 'auto',
    height: 400,
    id: 'painting',
    alt: 'Oil painting of a house',
    desc: 'Oil, 9x12", Dec 2020',
  },
  {
    src: inkProject,
    width: 400,
    height: 'auto',
    id: 'drawing',
    alt: 'Ink drawing for class',
    desc: 'Pen, marker & graphite, 2014',
  },
  {
    src: jeter,
    width: 'auto',
    height: 300,
    id: 'painting',
    alt: 'Mini painting of Derek Jeter',
    desc: 'Acrylic, 3x3", 2014',
  },
  {
    src: jonas,
    width: 'auto',
    height: 400,
    id: 'drawing-watercolor',
    alt: 'Drawing of Jonas',
    desc: 'Watercolor & Graphite, 9x12", June 2020',
  },
  {
    src: kanye,
    width: 'auto',
    height: 400,
    id: 'drawing',
    alt: 'Drawing of Kanye West',
    desc: 'Charcoal, 9x12", 2016',
  },
  {
    src: kyleGf,
    width: 'auto',
    height: 400,
    id: 'drawing',
    alt: 'Drawings of Kyle and his girlfriend',
    desc: 'Charcoal, 5x7", June 2018',
  },
  {
    src: lbiPainting,
    width: 'auto',
    height: 500,
    id: 'painting',
    alt: 'Oil painting of Harvey Cedars sunrise',
    desc: 'Oil, Dec 2020',
  },
  {
    src: lbiPainting2,
    width: 'auto',
    height: 400,
    id: 'painting',
    alt: 'Oil painting of Harvey Cedars in house',
  },
  {
    src: lbiPrint,
    width: 'auto',
    height: 400,
    id: 'print',
  },
  {
    src: lewisGinter,
    width: 400,
    height: 'auto',
    id: 'misc',
    alt: 'Plant exhibit at Lewis Ginter',
    desc: 'Lewis Ginter Botanical Gardens Installation, dead plant material, April 2017',
  },
  {
    src: lionFruitLoops,
    width: 'auto',
    height: 400,
    id: 'misc',
    alt: 'Lion made out of a Fruit Loops box',
    desc: 'Front of a Fruit Loops box, 2014',
  },
  {
    src: maggieTommy,
    width: 400,
    height: 'auto',
    id: 'drawing',
    alt: 'Drawing of Tommy and Maggie',
    desc: 'Charcoal, 9x12", 2013',
  },
  {
    src: mandalorian,
    width: 'auto',
    height: 500,
    id: 'painting',
    alt: 'Acrylic painting of the Mandalorian',
    desc: 'Acrylic, 16x20", April 2020',
  },
  {
    src: michaelKobe,
    width: 'auto',
    height: 400,
    id: 'drawing-watercolor',
    alt: 'Drawing of Michael and Kobe',
    desc: 'Watercolor & Graphite, 9x12", May 2020',
  },
  {
    src: momCaptiva,
    width: 300,
    height: 'auto',
    id: 'painting',
    alt: 'Oil painting of mom on Captiva',
    desc: 'Oil, 18x24", 2013',
  },
  {
    src: mom,
    width: 'auto',
    height: 400,
    id: 'drawing',
    alt: 'Charcoal drawing of mom',
    desc: 'Charcoal, 2016',
  },
  {
    src: chloe,
    width: 'auto',
    height: 400,
    id: 'drawing',
    alt: 'Charcoal drawing of Chloe',
    desc: 'Charcoal, 2016',
  },
  {
    src: chloeRed,
    width: 'auto',
    height: 300,
    id: 'drawing',
    alt: 'Charcoal drawing of Chloe',
    desc: 'Charcoal, 2016',
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
    alt: 'Drawing of an octopus and ship',
    desc: 'Charcoal, 22x30", Aug 2018',
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
    alt: 'Print of parents',
    desc: 'Screenprint with drawing fluid, 11x14", 2016',
  },
  {
    src: penguins,
    width: 'auto',
    height: 300,
    id: 'misc',
    alt: 'Painting of Crosby on a wood block',
    desc: 'Acrylic on wood block, 5x6", 2015',
  },
  {
    src: pieMini,
    width: 'auto',
    height: 300,
    id: 'painting',
    alt: 'Mini painting of proper pie photoshopped in photo',
  },
  {
    src: pieMiniStand,
    width: 'auto',
    height: 300,
    id: 'painting',
    alt: 'Mini painting of proper pie',
    desc: 'Acrylic, 3x3", Feb 2021',
  },
  {
    src: pipelineEtch,
    width: 'auto',
    height: 400,
    id: 'print',
    alt: 'Print of me on the pipeline',
    desc: 'Copper plate print with ink, 5x7" on 9x11" paper, 2016',
  },
  {
    src: plantAnatomy,
    width: 500,
    height: 'auto',
    id: 'drawing',
    alt: 'Ink drawing of plants',
    desc: 'Ink, 36x40", March 2017',
  },
  {
    src: recipe,
    width: 'auto',
    height: 400,
    id: 'misc',
    alt: 'Drawing of a pasta recipe',
    desc: 'Pen & watercolor, 11x14", Dec 2018',
  },
  {
    src: richmondPrint,
    width: 400,
    height: 'auto',
    id: 'print',
    alt: 'Screenprint of Richmond',
    desc: 'Screenprint, 11x14", 2016',
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
    alt: 'Acrylic painting of Sammy',
    desc: 'Acrylic, 4x4", July 2020',
  },
  {
    src: shoeProject,
    width: 'auto',
    height: 400,
    id: 'drawing',
    alt: 'Three drawings for class project',
    desc: 'All three drawings were stolen at University of Richmond. Please contact me if you see them.',
  },
  {
    src: sine,
    width: 400,
    height: 'auto',
    id: 'painting',
    alt: 'Painting of Sine',
    desc: 'Acrylic, 18x24", June 2018',
  },
  {
    src: sisterGift,
    width: 400,
    height: 'auto',
    id: 'drawing',
    alt: 'Drawings of sisters',
    desc: 'Charcoal & conte, 5x7" each, Sept 2018',
  },
  {
    src: sisters,
    width: 300,
    height: 'auto',
    id: 'painting',
    alt: 'Oil painting of my sister and I',
    desc: 'Oil, 18x24", 2013',
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
    alt: 'Tatto design',
  },
  {
    src: tridelta,
    width: 400,
    height: 'auto',
    id: 'misc',
    alt: 'Tridelta banner',
    desc: 'Acrylic, 2015',
  },
  {
    src: udareShirleyFrame,
    width: 'auto',
    height: 400,
    id: 'drawing-watercolor',
    alt: 'Drawing of Udare and Shirley',
  },
  {
    src: udareShirley,
    width: 'auto',
    height: 400,
    id: 'drawing-watercolor',
    alt: 'Drawing of Udare and Shirley',
    desc: 'Watercolor & Graphite, 11x14", May 2020',
  },
  {
    src: underwater,
    width: 400,
    height: 'auto',
    id: 'painting',
    alt: 'Acrylic painting of a turtle',
    desc: 'Acrylic, 4x12" panels (5), Oct 2018',
  },
  {
    src: underwater2,
    width: 400,
    height: 'auto',
    id: 'painting',
    alt: 'Acrylic painting of a turtle',
  },
  {
    src: voodoo,
    width: 400,
    height: 'auto',
    id: 'drawing',
    alt: 'Drawing of Voodoo Ranger',
    desc: 'Colored pencil, 11x14", July 2018',
  },
  {
    src: westhamptonLake,
    width: 'auto',
    height: 400,
    id: 'painting',
    alt: 'Oil painting of Westhampton Lake',
    desc: 'Oil, 9x12", Oct 2020',
  },
  {
    src: westhamptonLake2,
    width: 'auto',
    height: 400,
    id: 'painting',
    alt: 'Oil painting of Westhampton Lake',
    desc: 'Oil, 9x12", Dec 2020',
  },
  {
    src: carlySteve,
    width: 'auto',
    height: 400,
    id: 'drawing',
    alt: 'Carly and Steve with drawing',
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
    width: 500,
    height: 'auto',
    id: 'drawing',
    alt: 'Emma and Elyse wedding gift',
    desc: 'Graphite, 19.5x25.5", May 2019',
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
    desc: 'Oil, 18x24", 2013',
  },
  {
    src: babyPortrait,
    width: 'auto',
    height: 200,
    id: 'drawing',
    alt: 'Baby portrait drawing',
    desc: 'Charcoal, 8x8", 2012',
  },
  {
    src: moon,
    width: 'auto',
    height: 200,
    id: 'painting',
    alt: 'Mini moon painting',
    desc: 'Acrylic, 3x3", 2016',
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
    id: 'print',
    alt: 'Duncan etching',
    desc: 'Solar plate print, 2013',
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
    desc: 'Collaborative studio art mural, acrylic on wood panels, June 2013',
  },
  {
    src: picassoPortrait,
    width: 'auto',
    height: 200,
    id: 'painting',
    alt: 'Picasso-styled portraits',
    desc: 'Acrylic, 8x10", May 2020',
  },
  {
    src: llama,
    width: 'auto',
    height: 200,
    id: 'painting',
    alt: 'Mini llama painting',
    desc: 'Acrylic, 3x3", Aug 2018',
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
    desc: 'Pen (created with only one line and no value), 19x24", Feb 2017',
  },
  {
    src: theOffice,
    width: 300,
    height: 'auto',
    id: 'drawing',
    alt: 'Drawing of The Office charicatures',
    desc: 'Watercolor & ink, 11x14", Oct 2018',
  },
  {
    src: ladyDog,
    width: 'auto',
    height: 300,
    id: 'drawing',
    alt: 'Charcoal drawing of a lady and her dog',
    desc: 'Charcoal, 5x7", Aug 2020',
  },
  {
    src: pot,
    width: 'auto',
    height: 300,
    id: 'misc',
    alt: 'Pot painting',
    desc: 'Acrylic, Aug 2020',
  },
  {
    src: bee,
    width: 'auto',
    height: 400,
    id: 'painting',
    alt: 'Mini bumblebee painting',
    desc: 'Acrylic, 4x4", Aug 2020',
  },
  {
    src: paigeEmmy,
    width: 'auto',
    height: 500,
    id: 'drawing',
    alt: 'Drawing of Paige and Emmy',
    desc: 'Graphite, 11x14", May 2020',
  },
  {
    src: grogo,
    width: 'auto',
    height: 200,
    id: 'painting',
    alt: 'Small grogo painting',
    desc: 'Acrylic, 5x5", April 2020',
  },
  {
    src: zion,
    width: 500,
    height: 'auto',
    id: 'painting',
    alt: 'Acrylic painting of Zion',
    desc: 'Acrylic, 24x36", May 2020',
  },
  {
    src: romain,
    width: 'auto',
    height: 200,
    id: 'drawing-watercolor',
    alt: "Mini drawings of Romain's family",
    desc: 'Watercolor & Graphite, 4x6" each, Dec 2020',
  },
  {
    src: travis,
    width: 'auto',
    height: 500,
    id: 'painting',
    alt: 'Painting of Travis',
    desc: 'Acrylic, 16x16", Nov 2020',
  },
  {
    src: poppiCarving,
    width: 'auto',
    height: 300,
    id: 'misc',
    alt: 'Painted gnome carving from Poppi',
    desc: "Painted grandfather's gnome wood carving",
  },
  {
    src: racoons,
    width: 'auto',
    height: 400,
    id: 'drawing',
    alt: 'Racoons drawing',
    desc: 'Colored pencil, 11x14", Feb 2019',
  },
  {
    src: guyDog,
    width: 'auto',
    height: 300,
    id: 'drawing',
    alt: 'Guy and dog drawing',
    desc: 'Charcoal, 9x12", Oct 2020',
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
    width: 500,
    height: 'auto',
    id: 'drawing',
    alt: 'Wedding drawing for Carly and Steve',
    desc: 'Graphite, 19.5x25.5", Dec 2020',
  },
  {
    src: whiteDog,
    width: 300,
    height: 'auto',
    id: 'painting',
    alt: 'Acrylic painting of a white dog',
    desc: 'Acrylic, 11x14", Dec 2018',
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
    desc: 'Acrylic, 9x12", Aug 2020',
  },
  {
    src: plantsBees,
    width: 300,
    height: 'auto',
    id: 'drawing',
    alt: 'Blue pen drawing of honeybees and plants',
    desc: 'Blue Pen, 11x14", Feb 2018',
  },
  {
    src: julieMe,
    width: 300,
    height: 'auto',
    id: 'drawing',
    alt: 'Julie and I round drawing',
    desc: 'Graphite & pen, 5x5", Feb 2019',
  },
  {
    src: shamim,
    width: '300',
    height: 'auto',
    id: 'misc',
    alt: 'CarMax Christmas sweater',
    desc: 'Christmas Sweater, Dec 2020',
  },
  {
    src: lionGouche,
    width: '300',
    height: 'auto',
    id: 'misc',
    alt: 'Lion gouche painting from Fruit Loops',
    desc: 'Gouche & Pen, 2014',
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
    width: 400,
    height: 'auto',
    id: 'drawing-watercolor',
    alt: 'Pen and watercolor drawing of Odell',
    desc: 'Blue pen & watercolor, 9x12", Oct 2018',
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
    width: 500,
    height: 'auto',
    id: 'painting',
    alt: 'Large abstract painting',
    desc: 'Acrylic, 48x60", July 2019',
  },
];
