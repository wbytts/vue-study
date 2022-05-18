import {App} from 'vue';

import ByContainer from './Container.vue';
import ByHeader from './Header.vue';

export default {
  install(app: App) {
    app.component(ByContainer.name, ByContainer)
    app.component(ByHeader.name, ByHeader)
  }
}