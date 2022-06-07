export default {
    install(Vue) {
        Vue.directive('myfocus', {
            beforeMount(element, binding) {
                console.log(binding);
                element.value = binding.value;
            },
            mounted(element, binding) {
                element.focus();
            },
            updated(element, binding) {
                element.value = binding.value;
            },
        })
        Vue.mixin({
            data() {
                return {
                    today: 'today0'
                }
            },
            methods: {
                showThis() {
                    console.log('this', this)
                }
            },
        })
        // Vue.prototype.hello = () => {
        //     alert('myfun')
        // }
    }
}