const config = require('config')
const tilebelt = require('@mapbox/tilebelt')

json = { directory: 'dst', extracts: [] }
for (const [z, x, y] of config.modules) {
  json.extracts.push({
    output: `${z}-${x}-${y}.osm.pbf`,
    output_format: 'pbf',
    bbox: tilebelt.tileToBBOX([x, y, z])
  })
}
console.log(JSON.stringify(json, null, 2))

