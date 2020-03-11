/* global L, Wkt */

var map = L.map('map', {
  center: [49.414016, 14.658385],
  zoom: 16,
  maxZoom: 22
})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

export default {
  addFeatureLayer (results, settings) {
    const wkt = new Wkt.Wkt()
    const features = results.map(i => {
      const o = wkt.read(i.point).toObject()
      o.properties = Object.assign({ id: i.id }, i.properties)
      // poly.setStyle({ fillColor: 'blue', color: 'blue' })
      return o
    })
    L.featureGroup(features)
      .on('click', function (evt) {
        evt.layer.bindPopup(JSON.stringify(evt.layer.properties)).openPopup()
      })
      .addTo(map)
  }
}
