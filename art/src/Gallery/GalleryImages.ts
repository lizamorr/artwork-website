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
    alt: '',
    id: 'drawing',
    desc: 'Graphite & Conte, 11x14", Feb 2019',
  },
  {
    src: eagles,
    width: 'auto',
    height: 400,
    id: 'drawing',
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
];
