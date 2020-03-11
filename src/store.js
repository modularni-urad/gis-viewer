/* global Vue, Vuex, axios, API */
import map from './map.js'

const _info = {
  settins: {
    attrs: {
      jmeno: { type: 'text' },
      typ: { type: 'enum', options: [140, 240, 1100] }
    },
    draw: {
      atrr: 'typ',
      mapping: {
        140: { color: 'brown' },
        240: { color: 'green' },
        1100: { color: 'red' }
      }
    }
  }
}

export default function (router) {
  return new Vuex.Store({
    state: {
      layers: [],
      layerinfos: {}
    },
    mutations: {
      addlayer (state, layerinfo) {
        state.layers.push(layerinfo.id)
        state.layerinfos[layerinfo.id] = layerinfo
      }
    },
    actions: {
      toast: function (ctx, opts) {
        Vue.$toast.open(opts)
      },
      loadlayer: async function (ctx, layerid) {
        this.commit('addlayer', Object.assign({ id: layerid }, _info))
        const res = await axios.get(`${API}/objs/?layerid=${layerid}`)
        map.addFeatureLayer(res.data, this.state.layerinfos[layerid])
      }
    }
  })
}
