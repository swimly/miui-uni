import HCToast from './hc-toast.vue'
HCToast.install = function (Vue) {
	Vue.component(HCToast.name, HCToast)
}
export default HCToast