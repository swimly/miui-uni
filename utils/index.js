export default {
	getRect (selector, This) {
		return new Promise((resolve) => {
			let view = uni.createSelectorQuery().in(This).select(selector);
			view.boundingClientRect((res) => {
				resolve(res);
			}).exec();
		})
	},
	getFields (selector, This) {
		return new Promise((resolve) => {
			let view = uni.createSelectorQuery().in(This).select(selector);
			view.fields({
				size: true,
				scrollOffset: true,
				rect: true
			}, (res) => {
				resolve(res);
			}).exec();
		})
	}
}