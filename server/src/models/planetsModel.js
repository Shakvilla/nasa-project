const fs = require('fs');
const path = require('path');
const parse = require('csv-parse');


const habittablePlanets = [];

function isHabbitablePlannet(planet){

    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;

} 


function loadPlanetsData(){
  return new  Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'keppler.csv'))
    .pipe(parse({
        comment: '#',
        columns: true
    }))
    .on('data', (data) => {

      if(isHabbitablePlannet(data)){
          habittablePlanets.push(data);
      }
    }).on('error', (err) => {

      console.log(err);
      reject(err)
    })
    .on('end', () => {
        console.log(`${habittablePlanets.length} is the amount of habbitable planets found!!`);
      resolve();
    });
  })

}



function getAllPlanets(){

  return habittablePlanets;
}

module.exports = {
    loadPlanetsData,
    getAllPlanets
  }