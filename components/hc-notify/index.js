import HCNotify from './hc-notify.vue'
HCNotify.install = function (Vue) {
	Vue.component(HCNotify.name, HCNotify)
}
export default HCNotify