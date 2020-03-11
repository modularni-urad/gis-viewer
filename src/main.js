/* global Vue, VueToast */
import Store from './store.js'

const store = Store()
store.dispatch('loadlayer', 2)
store.dispatch('loadlayer', 3)
store.dispatch('loadlayer', 4)
store.dispatch('loadlayer', 5)

const query = { val: { lat: 49.414016, lng: 14.658385, z: 13 } }



// new Vue({
//   store,
//   // data: { map: map },
//   // template: '<DataTable v-bind:map="map"></DataTable>',
//   // components: { DataTable }
// }).$mount('#app')

// Vue.use(VueToast, {
//   // One of options
//   position: 'top-right'
// })
