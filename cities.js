const vermontCities = [
  "West Townshend", "Westford", "Westminster", "Westminster Station", "Weston",
  "White River Junction", "Whiting", "Wilder", "Williamstown", "Williston",
  "Wilmington", "Windsor", "Winooski", "Wolcott", "Woodstock",
  "Worcester",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < vermontCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(vermontCities[i]);
}

module.exports = { batches };
