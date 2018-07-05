import Vue from 'vue'
import { makeHot, reload } from './util/hot-reload'
import { createRouter } from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
const navbarComponent = () => import('./components/navbar').then(({ NavbarComponent }) => NavbarComponent)
const homeComponent = () => import('./components/home').then(({ HomeComponent }) => HomeComponent)
// const navbarComponent = () => import(/* webpackChunkName: 'navbar' */'./components/navbar').then(({ NavbarComponent }) => NavbarComponent)
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import './sass/main.scss'


if (process.env.ENV === 'development' && module.hot) {
  const navbarModuleId = './components/navbar'

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(navbarModuleId, navbarComponent,
    module.hot.accept('./components/navbar', () => reload(navbarModuleId, (require('./components/navbar') as any).NavbarComponent)))
}

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app-main',
  router: createRouter(),
  components: {
    'navbar': homeComponent
  }
})
