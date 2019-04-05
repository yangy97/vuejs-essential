import MessageComponent from '../components/Message'

export default {
   // 插件的公开方法 install
  install: (Vue) => {
    // 使用 Vue.extend 基于我们传入的组件生成一个新的子类
    const Message = Vue.extend(MessageComponent)
    // new 一个新的实例
    const vm = new Message()
    // 挂载实例后返回实例目标
    const $el = vm.$mount().$el
// Vue.extend 用来创建一个新『子类』，其参数是一个包含组件选项的对象，对应我们这里的 Message 组件；
// 使用 new 关键字可以创建一个新的 Message 实例，因为没有指定 el 挂载目标，当前实例处于『未挂载』状态；
// 使用 vm.$mount() 手动地挂载一个未挂载的实例，并返回当前实例，此时我们能从实例获取 $el;
 Vue.nextTick(() => {
      // 在下一次 DOM 更新后，将实例目标添加到 #main-container 元素内部的最前面
      document.querySelector('#main-container').prepend($el)
    })

    // 监听 show 值的改变
    vm.$on('update:show', (value) => {
      // 更改当前的 show 值
      vm.show = value
    })

    const message = {
      show(msg = '', type = 'success') {
        vm.msg = msg
        vm.type = type
        vm.show = false

        Vue.nextTick(() => {
          vm.show = true
        })
      },
      hide() {
        Vue.nextTick(() => {
          vm.show = false
        })
      }
    }

    Vue.prototype.$message = message
  }
}