'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const Books = require('./modules/Books');

async function seed() {
  await Books.create({
    title: 'Scarpetta',
    description: 'In the days that follow, Scarpetta; her forensic psychologist husband, Benton Wesley; and her niece, Lucy, who has recently formed her own forensic computer investigation firm in New York, will undertake a harrowing chase through cyberspace and the all-too-real streets of the city—an odyssey that will take them at once to places they never knew, and much, much too close to home.',
    status: true,
    img: './images/Scarpetta.jpg'
  });
  console.log('Scarpetta');

  await Books.create({
    title: 'Post Mortem',
    description: 'Under cover of night in Richmond, Virginia, a human monster strikes, leaving a gruesome trail of stranglings that has paralyzed the city. Medical examiner Kay Scarpetta suspects the worst: a deliberate campaign by a brilliant serial killer whose signature offers precious few clues. With an unerring eye, she calls on the latest advances in forensic research to unmask the madman. But this investigation will test Kay like no other, because it\’s being sabotaged from within—and someone wants her dead.',
    status: false,
    img: './images/Postmortem.jpg'
  });
  console.log('Post Mortem');

  await Books.create({
    title: 'Point of Origin',
    description: 'A farmhouse destroyed by fire. A body amongst the ruins. Dr Kay Scarpetta, Chief Medical Examiner and consulting pathologist for the federal law enforcement agency ATF, is called out to a farmhouse in Virginia which has been destroyed by fire. In the ruins of the house she finds a body which tells a story of a violent and grisly murder. The fire has come at the same time as another, even more incendiary horror: Carrie Grethen, a killer who nearly destroyed the lives of Scarpetta and those closest to her, has escaped from a forensic psychiatric hospital. Her whereabouts is unknown, but her ultimate destination is not, for Carrie has begun to communicate with Scarpetta, conveying her deadly - if cryptic - plans for revenge. Chillingly mesmeric in tone, labyrinthine in structure, POINT OF ORIGIN is Patricia Cornwell at her most dazzling.',
    status: true,
    img: './images/Point-of-Origin.jpg'
  });
  console.log('Point of Origin');
  mongoose.disconnect();
}

seed();
