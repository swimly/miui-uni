import addUnit from 'utils/addUnit.js'
const $hc = {
	addUnit
}

const install = Vue => {
	// Vue.mixin(mixin)
	// if (Vue.prototype.openShare) {
	// 	Vue.mixin(mpShare);
	// }
	Vue.prototype.$hc = $hc
}

export default {
	install
}