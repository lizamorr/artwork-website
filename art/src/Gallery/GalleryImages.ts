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
import abstractRoom from './Images/abstract-room.jpg';
import sticky from './Images/sticky.jpg';
import donutPrint from './Images/donut-print.jpg';

interface IGalleryImage {
  src: string;
  maxWidth: number;
  alt: string;
  id: string;
  desc?: string;
}

export const imageGroups: IGalleryImage[][] = [
  [
    {
      src: titanic,
      maxWidth: 600,
      id: 'painting',
      alt: 'Oil painting of the Titanic',
      desc: 'Oil, 48x36", May 2021',
    },
    {
      src: titanicFrame,
      maxWidth: 500,
      id: 'painting',
      alt: 'Oil painting of the Titanic framed',
    },
  ],
  [
    {
      src: lbiPainting,
      maxWidth: 600,
      id: 'painting',
      alt: 'Oil painting of Harvey Cedars sunrise',
      desc: 'Oil, Dec 2020',
    },
    {
      src: lbiPainting2,
      maxWidth: 500,
      id: 'painting',
      alt: 'Oil painting of Harvey Cedars in house',
    },
  ],
  [
    {
      src: abstractRoom,
      maxWidth: 600,
      id: 'painting',
      alt: 'Large abstract painting',
      desc: 'Acrylic, 48x60", July 2019',
    },
    {
      src: abstract,
      maxWidth: 500,
      id: 'painting',
      alt: 'Large abstract painting',
      desc: 'Acrylic, 48x60", July 2019',
    },
  ],
  [
    {
      src: mandalorian,
      maxWidth: 400,
      id: 'painting',
      alt: 'Acrylic painting of the Mandalorian',
      desc: 'Acrylic, 16x20", April 2020',
    },
  ],
  [
    {
      src: banditBeetles,
      maxWidth: 600,
      id: 'painting',
      alt: 'Acrylic painting of the bandit Beetles',
      desc: 'Acrylic, Aug 2018',
    },
    {
      src: connorBeetles,
      maxWidth: 300,
      id: 'painting',
      alt: 'Connor with his Beetles painting',
    },
  ],
  [
    {
      src: zion,
      maxWidth: 600,
      id: 'painting',
      alt: 'Acrylic painting of Zion',
      desc: 'Acrylic, 24x36", May 2020',
    },
  ],
  [
    {
      src: dinah,
      maxWidth: 400,
      id: 'painting',
      alt: 'Oil painting of Dinah',
      desc: 'Oil, 18x24", 2012',
    },
  ],
  [
    {
      src: travis,
      maxWidth: 400,
      id: 'painting',
      alt: 'Painting of Travis',
      desc: 'Acrylic, 16x16", Nov 2020',
    },
  ],
  [
    {
      src: housewarming,
      maxWidth: 400,
      id: 'painting',
      alt: 'Oil painting of a house',
      desc: 'Oil, 9x12", Dec 2020',
    },
  ],
  [
    {
      src: dogsPortrait,
      maxWidth: 400,
      id: 'painting',
      alt: 'Acrylic painting of dogs',
      desc: 'Acrylic, 11x14", Dec 2018',
    },
  ],
  [
    {
      src: sine,
      maxWidth: 400,
      id: 'painting',
      alt: 'Painting of Sine',
      desc: 'Acrylic, 18x24", June 2018',
    },
  ],
  [
    {
      src: westhamptonLake,
      maxWidth: 400,
      id: 'painting',
      alt: 'Oil painting of Westhampton Lake',
      desc: 'Oil, 9x12", Oct 2020',
    },
  ],
  [
    {
      src: westhamptonLake2,
      maxWidth: 400,
      id: 'painting',
      alt: 'Oil painting of Westhampton Lake',
      desc: 'Oil, 9x12", Dec 2020',
    },
  ],
  [
    {
      src: blueMoon,
      maxWidth: 400,
      id: 'painting',
      alt: 'Painting of a blue moon',
      desc: 'Acrylic, 2016',
    },
  ],
  [
    {
      src: grinch,
      maxWidth: 300,
      id: 'painting',
      alt: 'Mini painting of the Grinch',
      desc: 'Acrylic, 3x3", Dec 2016',
    },
  ],
  [
    {
      src: dogsMini,
      maxWidth: 300,
      id: 'painting',
      alt: 'Mini painting of Tipper and Snickers photoshopped in photo',
      desc: 'Acrylic, 3x4", Feb 2021',
    },
    {
      src: dogsMiniStand,
      maxWidth: 300,
      id: 'painting',
      alt: 'Mini painting of Tipper and Snickers',
      desc: 'Acrylic, 3x4", Feb 2021',
    },
  ],
  [
    {
      src: pieMini,
      maxWidth: 300,
      id: 'painting',
      alt: 'Mini painting of proper pie photoshopped in photo',
      desc: 'Acrylic, 3x3", Feb 2021',
    },
    {
      src: pieMiniStand,
      maxWidth: 300,
      id: 'painting',
      alt: 'Mini painting of proper pie',
      desc: 'Acrylic, 3x3", Feb 2021',
    },
  ],
  [
    {
      src: underwater,
      maxWidth: 400,
      id: 'painting',
      alt: 'Acrylic painting of a turtle',
      desc: 'Acrylic, 4x12" panels (5), Oct 2018',
    },
    {
      src: underwater2,
      maxWidth: 400,
      id: 'painting',
      alt: 'Acrylic painting of a turtle',
    },
  ],
  [
    {
      src: blackDog,
      maxWidth: 300,
      id: 'painting',
      alt: 'Acrylic painting of a black dog',
      desc: 'Acrylic, 11x14", 2017',
    },
  ],
  [
    {
      src: llama,
      maxWidth: 300,
      id: 'painting',
      alt: 'Mini llama painting',
      desc: 'Acrylic, 3x3", Aug 2018',
    },
  ],
  [
    {
      src: sammy,
      maxWidth: 300,
      id: 'painting',
      alt: 'Acrylic painting of Sammy',
      desc: 'Acrylic, 4x4", July 2020',
    },
  ],
  [
    {
      src: moon,
      maxWidth: 300,
      id: 'painting',
      alt: 'Mini moon painting',
      desc: 'Acrylic, 3x3", 2016',
    },
  ],
  [
    {
      src: bee,
      maxWidth: 300,
      id: 'painting',
      alt: 'Mini bumblebee painting',
      desc: 'Acrylic, 4x4", Aug 2020',
    },
  ],
  [
    {
      src: grogo,
      maxWidth: 300,
      id: 'painting',
      alt: 'Small grogo painting',
      desc: 'Acrylic, 5x5", April 2020',
    },
  ],
  [
    {
      src: whiteDog,
      maxWidth: 300,
      id: 'painting',
      alt: 'Acrylic painting of a white dog',
      desc: 'Acrylic, 11x14", Dec 2018',
    },
  ],
  [
    {
      src: picassoPortrait,
      maxWidth: 300,
      id: 'painting',
      alt: 'Picasso-styled portraits',
      desc: 'Acrylic, 8x10", May 2020',
    },
  ],
  [
    {
      src: abbeyPs,
      maxWidth: 300,
      id: 'painting',
      alt: 'Graduation painting for Abbey',
      desc: 'Acrylic, 9x12", Aug 2020',
    },
  ],
  [
    {
      src: jeter,
      maxWidth: 300,
      id: 'painting',
      alt: 'Mini painting of Derek Jeter',
      desc: 'Acrylic, 3x3", 2014',
    },
  ],
  [
    {
      src: miniBeach,
      maxWidth: 300,
      id: 'painting',
      alt: 'Mini beach painting',
      desc: 'Acrylic, 3x3", 2014',
    },
  ],
  [
    {
      src: sisters,
      maxWidth: 300,
      id: 'painting',
      alt: 'Oil painting of my sister and I',
      desc: 'Oil, 18x24", 2013',
    },
  ],
  [
    {
      src: momCaptiva,
      maxWidth: 300,
      id: 'painting',
      alt: 'Oil painting of mom on Captiva',
      desc: 'Oil, 18x24", 2012',
    },
  ],
  [
    {
      src: duncanOil,
      maxWidth: 300,
      id: 'painting',
      alt: 'Oil painting of Duncan',
      desc: 'Oil, 18x24", 2012',
    },
  ],

  [
    {
      src: carlySteveWedding,
      maxWidth: 600,
      id: 'drawing',
      alt: 'Wedding drawing for Carly and Steve',
      desc: 'Graphite, 19.5x25.5", Dec 2020',
    },
    {
      src: steveFrame,
      maxWidth: 400,
      id: 'drawing',
      alt: 'Steve with drawing',
      desc: 'Graphite, 19.5x25.5", Dec 2020',
    },
  ],
  [
    {
      src: couple,
      maxWidth: 600,
      id: 'drawing',
      alt: 'Drawing of a couple',
      desc: 'Graphite, 19.5x25.5", March 2020',
    },
  ],
  [
    {
      src: plantAnatomy,
      maxWidth: 600,
      id: 'drawing',
      alt: 'Ink drawing of plants',
      desc: 'Ink, 36x40", March 2017',
    },
    {
      src: plantAnatomyFrame,
      maxWidth: 500,
      id: 'drawing',
      alt: 'Frame plant drawing',
      desc: 'Ink, 36x40", March 2017',
    },
  ],
  [
    {
      src: emma,
      maxWidth: 500,
      id: 'drawing',
      alt: 'Emma and Elyse wedding gift',
      desc: 'Graphite, 19.5x25.5", May 2019',
    },
  ],
  [
    {
      src: curry,
      maxWidth: 500,
      alt: 'Steph Curry drawing',
      id: 'drawing',
      desc: 'Graphite & conte, 11x14", Feb 2019',
    },
  ],
  [
    {
      src: paigeEmmy,
      maxWidth: 400,
      id: 'drawing',
      alt: 'Drawing of Paige and Emmy',
      desc: 'Graphite, 11x14", May 2020',
    },
  ],
  [
    {
      src: obama,
      maxWidth: 400,
      alt: 'Drawing of Obama',
      id: 'drawing',
      desc: 'Charcoal, 9x12", 2016',
    },
  ],
  [
    {
      src: odellAndSaquon,
      maxWidth: 700,
      id: 'drawing',
      alt: 'Pen drawings of Odell and Saquon',
      desc: 'Blue pen, 9x12" each, Dec 2018',
    },
  ],
  [
    {
      src: saquon,
      maxWidth: 500,
      id: 'drawing',
      alt: 'Giants blue pen drawing',
      desc: 'Blue pen, 9x12", Dec 2018',
    },
  ],
  [
    {
      src: odell,
      maxWidth: 500,
      id: 'drawing-watercolor',
      alt: 'Pen and watercolor drawing of Odell',
      desc: 'Blue pen & watercolor, 9x12", Oct 2018',
    },
  ],
  [
    {
      src: robinWilliams,
      maxWidth: 400,
      id: 'drawing',
      alt: 'Pen drawing of Robin Williams',
      desc: 'Blue pen, 9x12", 2014',
    },
    {
      src: robinFrame,
      maxWidth: 400,
      id: 'drawing',
      alt: 'Drawing of Robin Williams framed',
      desc: 'Blue pen, 9x12", 2014',
    },
  ],
  [
    {
      src: walterWhite,
      maxWidth: 500,
      id: 'drawing',
      alt: 'Drawing of Walter White',
      desc: 'Graphite, 9x12", June 2013',
    },
  ],
  [
    {
      src: brendanFamily,
      maxWidth: 400,
      id: 'drawing',
      alt: "Drawing of Brendan's family",
      desc: 'Graphite, 11x14", Jan 2021',
    },
  ],
  [
    {
      src: homeGift,
      maxWidth: 500,
      id: 'drawing',
      alt: 'Drawing of a house',
      desc: 'Colored pencil, 19.5x25.5", June 2019',
    },
  ],
  [
    {
      src: houseGift,
      maxWidth: 400,
      id: 'drawing',
      alt: 'Drawing of a house',
      desc: 'Colored pencil, 11x14", July 2018',
    },
  ],
  [
    {
      src: udareShirley,
      maxWidth: 400,
      id: 'drawing-watercolor',
      alt: 'Drawing of Udare and Shirley',
      desc: 'Watercolor & Graphite, 11x14", May 2020',
    },
    {
      src: udareShirleyFrame,
      maxWidth: 400,
      id: 'drawing-watercolor',
      alt: 'Drawing of Udare and Shirley',
    },
  ],
  [
    {
      src: eagles,
      maxWidth: 400,
      id: 'drawing',
      alt: 'Eagles colored pencil drawing',
      desc: 'Colored pencil, 9x12", Oct 2018',
    },
  ],
  [
    {
      src: fatherDaughter,
      maxWidth: 400,
      id: 'drawing',
      alt: 'Drawing of a father and his daughter',
      desc: 'Charcoal & conte, 11x14", April 2019',
    },
  ],
  [
    {
      src: jonas,
      maxWidth: 400,
      id: 'drawing-watercolor',
      alt: 'Drawing of Jonas',
      desc: 'Watercolor & Graphite, 9x12", June 2020',
    },
  ],
  [
    {
      src: auntUncle,
      maxWidth: 300,
      id: 'drawing',
      alt: 'Drawing of my aunt and uncle',
      desc: 'Graphite, conte & colored pencil, 8x8", Sept 2018',
    },
  ],
  [
    {
      src: caCollage,
      maxWidth: 500,
      id: 'misc',
      alt: 'Collage of California',
      desc: 'Newspaper, magazine, maps & photographs on illustration board, 2014',
    },
  ],
  [
    {
      src: gift,
      maxWidth: 300,
      id: 'drawing',
      alt: 'Ticket drawing as a gift',
      desc: 'Graphite, colored pencils & pen, 3.5x3.5" (portrait), Dec 2018',
    },
  ],
  [
    {
      src: octopus,
      maxWidth: 400,
      id: 'drawing',
      alt: 'Drawing of an octopus and ship',
      desc: 'Charcoal, 22x30", Aug 2018',
    },
  ],
  [
    {
      src: racoons,
      maxWidth: 300,
      id: 'drawing',
      alt: 'Racoons drawing',
      desc: 'Colored pencil, 11x14", Feb 2019',
    },
  ],
  [
    {
      src: kanye,
      maxWidth: 400,
      id: 'drawing',
      alt: 'Drawing of Kanye West',
      desc: 'Charcoal, 9x12", 2016',
    },
    {
      src: kanyeFrame,
      maxWidth: 400,
      id: 'drawing',
      alt: 'Kanye frame',
      desc: 'Charcoal, 9x12", 2016',
    },
  ],
  [
    {
      src: sticky,
      maxWidth: 500,
      id: 'drawing',
      alt: 'Colored pencil drawing of Sticky Rice',
      desc: 'Colored pencil, 9x12", Dec 2017',
    },
  ],
  [
    {
      src: michaelKobe,
      maxWidth: 400,
      id: 'drawing-watercolor',
      alt: 'Drawing of Michael and Kobe',
      desc: 'Watercolor & Graphite, 9x12", May 2020',
    },
  ],
  [
    {
      src: lbiPrint,
      maxWidth: 400,
      id: 'print',
      alt: 'Screenprint of LBI',
    },
  ],
  [
    {
      src: lewisGinter,
      maxWidth: 500,
      id: 'misc',
      alt: 'Plant exhibit at Lewis Ginter',
      desc: 'Lewis Ginter Botanical Gardens Installation, dead plant material, April 2017',
    },
  ],
  [
    {
      src: lionFruitLoops,
      maxWidth: 400,
      id: 'misc',
      alt: 'Lion made out of a Fruit Loops box',
      desc: 'Front of a Fruit Loops box, 2014',
    },
    {
      src: lionGouche,
      maxWidth: 400,
      id: 'misc',
      alt: 'Lion gouche painting from the Fruit Loops box',
      desc: 'Gouche & Pen, 2014',
    },
  ],
  [
    {
      src: sisterGift,
      maxWidth: 500,
      id: 'drawing',
      alt: 'Drawings of sisters',
      desc: 'Charcoal & conte, 5x7" each, Sept 2018',
    },
  ],
  [
    {
      src: maggieTommy,
      maxWidth: 400,
      id: 'drawing',
      alt: 'Drawing of Tommy and Maggie',
      desc: 'Charcoal, 9x12", 2013',
    },
  ],
  [
    {
      src: tevlin,
      maxWidth: 400,
      id: 'drawing',
      alt: 'Drawing of Tevlin',
      desc: 'Charcoal, 9x12", 2014',
    },
  ],
  [
    {
      src: mountainEtching,
      maxWidth: 400,
      id: 'misc',
      desc: 'Copper plate print, 4x6", 2016',
      alt: 'Etching of a mountain framed',
    },
  ],
  [
    {
      src: parentsPrint,
      maxWidth: 400,
      id: 'print',
      alt: 'Print of parents',
      desc: 'Screenprint with drawing fluid, 11x14", 2016',
    },
    {
      src: parentsPrints,
      maxWidth: 400,
      id: 'print',
      alt: 'Screenprints of my parents',
      desc: 'Screenprints, 11x14" each, 2016',
    },
  ],
  [
    {
      src: penguins,
      maxWidth: 300,
      id: 'misc',
      alt: 'Painting of Crosby on a wood block',
      desc: 'Acrylic on wood block, 5x6", 2015',
    },
  ],
  [
    {
      src: pipelineEtch,
      maxWidth: 400,
      id: 'print',
      alt: 'Print of me on the pipeline',
      desc: 'Copper plate print with ink, 5x7" on 9x11" paper, 2016',
    },
  ],
  [
    {
      src: recipe,
      maxWidth: 400,
      id: 'misc',
      alt: 'Drawing of a pasta recipe',
      desc: 'Pen & watercolor, 11x14", Dec 2018',
    },
  ],
  [
    {
      src: momGooey,
      maxWidth: 400,
      id: 'misc',
      alt: 'Mom with gooey butter cake recipe drawing',
      desc: 'Pen & watercolor, 11x14", Dec 2018',
    },
  ],
  [
    {
      src: richmondPrint,
      maxWidth: 400,
      id: 'print',
      alt: 'Screenprint of Richmond',
      desc: 'Screenprint, 11x14", 2016',
    },
  ],
  [
    {
      src: tattoo,
      maxWidth: 400,
      id: 'misc',
      alt: 'Tatto design',
      desc: 'Tatto design, 2018',
    },
  ],
  [
    {
      src: tridelta,
      maxWidth: 400,
      id: 'misc',
      alt: 'Tridelta banner',
      desc: 'Acrylic, 2015',
    },
  ],
  [
    {
      src: voodoo,
      maxWidth: 400,
      id: 'drawing',
      alt: 'Drawing of Voodoo Ranger',
      desc: 'Colored pencil, 11x14", July 2018',
    },
  ],
  [
    {
      src: bracelet1,
      maxWidth: 400,
      id: 'misc',
      alt: 'Leather beaded bracelet',
      desc: 'Leather beaded wrap bracelet, 2013',
    },
  ],
  [
    {
      src: duncanEtch,
      maxWidth: 400,
      id: 'print',
      alt: 'Duncan etching',
      desc: 'Solar plate print, 2013',
    },
  ],
  [
    {
      src: donutPrint,
      maxWidth: 300,
      id: 'prints',
      alt: 'Donut print',
      desc: 'Screenprint, 11x14", 2016',
    },
    {
      src: donutPrints,
      maxWidth: 400,
      id: 'prints',
      alt: 'Donut prints',
      desc: 'Screenprints, 11x14" each, 2016',
    },
  ],
  [
    {
      src: shoeProject,
      maxWidth: 400,
      id: 'drawing',
      alt: 'Three drawings for class project',
      desc: 'All three drawings were stolen at University of Richmond. Please contact me if you see them.',
    },
    {
      src: converses,
      maxWidth: 400,
      id: 'drawing',
      alt: 'Converse drawings',
      desc: 'Graphite (left) & pen (right), 2017',
    },
  ],
  [
    {
      src: converse,
      maxWidth: 400,
      id: 'drawing',
      alt: 'Drawing of up-close converse',
      desc: 'Graphite (created with only value and no line), 19x24", Jan 2017',
    },
  ],
  [
    {
      src: smallConverse,
      maxWidth: 400,
      id: 'drawing',
      alt: 'Converse pen drawing',
      desc: 'Pen (created with only one line and no value), 19x24", Feb 2017',
    },
  ],
  [
    {
      src: theOffice,
      maxWidth: 400,
      id: 'drawing',
      alt: 'Drawing of The Office charicatures',
      desc: 'Watercolor & ink, 11x14", Oct 2018',
    },
  ],
  [
    {
      src: plantsBees,
      maxWidth: 300,
      id: 'drawing',
      alt: 'Blue pen drawing of honeybees and plants',
      desc: 'Blue Pen, 11x14", Feb 2018',
    },
  ],
  [
    {
      src: kyleGf,
      maxWidth: 400,
      id: 'drawing',
      alt: 'Drawings of Kyle and his girlfriend',
      desc: 'Charcoal, 5x7", June 2018',
    },
  ],
  [
    {
      src: pot,
      maxWidth: 300,
      id: 'misc',
      alt: 'Pot painting',
      desc: 'Acrylic, Aug 2020',
    },
  ],
  [
    {
      src: romain,
      maxWidth: 500,
      id: 'drawing-watercolor',
      alt: "Mini drawings of Romain's family",
      desc: 'Watercolor & Graphite, 4x6" each, Dec 2020',
    },
  ],
  [
    {
      src: poppiCarving,
      maxWidth: 300,
      id: 'misc',
      alt: 'Painted gnome carving from Poppi',
      desc: "Painted grandfather's gnome wood carving",
    },
  ],
  [
    {
      src: guyDog,
      maxWidth: 500,
      id: 'drawing',
      alt: 'Guy and dog drawing',
      desc: 'Charcoal, 9x12", Oct 2020',
    },
  ],
  [
    {
      src: julieMe,
      maxWidth: 300,
      id: 'drawing',
      alt: 'Julie and I round drawing',
      desc: 'Graphite & pen, 5x5", Feb 2019',
    },
  ],
  [
    {
      src: danSkye,
      maxWidth: 300,
      id: 'drawing',
      alt: 'Small drawing of Dan and Skye',
      desc: 'Graphite, 5x7", 2018',
    },
  ],
  [
    {
      src: shamim,
      maxWidth: 300,
      id: 'misc',
      alt: 'CarMax Christmas sweater',
      desc: 'Christmas Sweater, Dec 2020',
    },
  ],
  [
    {
      src: artFestival,
      maxWidth: 500,
      id: 'misc',
      alt: 'Street Art festival',
      desc: 'RVA Street Art Festival, 2017',
    },
    {
      src: streetArtFish,
      maxWidth: 400,
      id: 'misc',
      alt: 'Me painting a wooden fish',
      desc: 'RVA Street Art Festival, 2018',
    },
  ],
  [
    {
      src: wallArt,
      maxWidth: 500,
      id: 'misc',
      alt: 'Wall art',
      desc: 'Framed wall art',
    },
  ],
  [
    {
      src: ladyDog,
      maxWidth: 300,
      id: 'drawing',
      alt: 'Charcoal drawing of a lady and her dog',
      desc: 'Charcoal, 5x7", Aug 2020',
    },
  ],
  [
    {
      src: carly,
      maxWidth: 300,
      id: 'drawing',
      alt: 'Charcoal drawing of Carly',
      desc: 'Charcoal, 2016',
    },
    {
      src: mom,
      maxWidth: 300,
      id: 'drawing',
      alt: 'Charcoal drawing of mom',
      desc: 'Charcoal, 2016',
    },
    {
      src: chloe,
      maxWidth: 300,
      id: 'drawing',
      alt: 'Charcoal drawing of Chloe',
      desc: 'Charcoal, 2016',
    },
  ],
  [
    {
      src: chloeRed,
      maxWidth: 300,
      id: 'drawing',
      alt: 'Charcoal drawing of Chloe',
      desc: 'Charcoal, 2016',
    },
  ],
  [
    {
      src: babyPortrait,
      maxWidth: 300,
      id: 'drawing',
      alt: 'Baby portrait drawing',
      desc: 'Charcoal, 8x8", 2012',
    },
  ],
  [
    {
      src: inkProject,
      maxWidth: 400,
      id: 'drawing',
      alt: 'Ink drawing for class',
      desc: 'Pen, marker & graphite, 2014',
    },
  ],
  [
    {
      src: basketball,
      maxWidth: 300,
      id: 'misc',
      alt: 'Painted basketball',
      desc: 'Acrylic, 2013',
    },
    {
      src: basketball2,
      maxWidth: 300,
      id: 'misc',
      alt: 'Painted basketball',
      desc: 'Acrylic, 2013',
    },
  ],
  [
    {
      src: trideltChill,
      maxWidth: 300,
      id: 'misc',
      alt: 'Tridelt and chill banner',
    },
  ],
  [
    {
      src: trideltaPaddle,
      maxWidth: 200,
      id: 'misc',
      alt: 'Tridelta paddle art',
      desc: 'Acrylic, 2015',
    },
    {
      src: trideltPaddle2,
      maxWidth: 200,
      id: 'misc',
      alt: 'Tridelta paddle',
      desc: 'Acrylic, 2015',
    },
  ],
  [
    {
      src: hsMural,
      maxWidth: 400,
      id: 'misc',
      alt: 'Highschool mural',
      desc: 'Collaborative studio art mural, acrylic on wood panels, June 2013',
    },
  ],
];
