const vermontCities = [
  "Arlington", "Bakersfield", "Barnard", "Barnet", "Barre",
  "Barton", "Bellows Falls", "Belmont", "Bennington", "Bethel",
  "Bomoseen", "Bradford", "Brandon", "Brattleboro", "Bridgewater Corners",
  "Bristol", "Brookfield", "Brownsville", "Burlington", "Cabot",
  "Calais", "Cambridge", "Canaan", "Castleton", "Center Rutland",
  "Charlotte", "Chester", "Chittenden", "Colchester", "Corinth",
  "Craftsbury", "Cuttingsville", "Danby", "Danville", "Derby",
  "Dorset", "East Barre", "East Burke", "East Charleston", "East Dorset",
  "East Fairfield", "East Montpelier", "East Poultney", "East Wallingford", "Enosburg Falls",
  "Essex", "Essex Junction", "Fair Haven", "Fairfax", "Fairfield",
  "Ferrisburgh", "Forest Dale", "Grafton", "Grand Isle", "Greensboro",
  "Greensboro Bend", "Groton", "Hardwick", "Hartland", "Hinesburg",
  "Huntington", "Hyde Park", "Hydeville", "Irasburg", "Jamaica",
  "Jeffersonville", "Jericho", "Johnson", "Killington", "Lake Elmore",
  "Londonderry", "Ludlow", "Lyndon", "Lyndonville", "Manchester",
  "Manchester Center", "Marshfield", "Middlebury", "Milton", "Monkton",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < vermontCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(vermontCities[i]);
}

module.exports = { batches };
