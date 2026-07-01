const vermontCities = [
  "Montgomery Center", "Montpelier", "Moretown", "Morrisville", "New Haven",
  "Newfane", "Newport", "North Bennington", "North Clarendon", "North Concord",
  "North Ferrisburgh", "North Hero", "North Pomfret", "North Pownal", "North Springfield",
  "North Troy", "Northfield", "Norwich", "Orleans", "Orwell",
  "Passumpsic", "Peacham", "Perkinsville", "Pittsford", "Plainfield",
  "Post Mills", "Poultney", "Pownal", "Proctor", "Proctorsville",
  "Putney", "Quechee", "Randolph", "Randolph Center", "Richford",
  "Richmond", "Rochester", "Rupert", "Rutland", "Saint Albans",
  "Saint Albans Bay", "Saint Johnsbury", "Shaftsbury", "Sharon", "Shelburne",
  "Sheldon", "Shoreham", "South Barre", "South Burlington", "South Hero",
  "South Royalton", "South Ryegate", "South Strafford", "Springfield", "Stamford",
  "Starksboro", "Stowe", "Swanton", "Taftsville", "Thetford Center",
  "Townshend", "Tunbridge", "Underhill", "Underhill Center", "Vergennes",
  "Vernon", "Vershire", "Waitsfield", "Wallingford", "Warren",
  "Washington", "Waterbury", "Waterbury Center", "Waterville", "Wells",
  "West Burke", "West Dover", "West Dummerston", "West Newbury", "West Rutland",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < vermontCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(vermontCities[i]);
}

module.exports = { batches };
