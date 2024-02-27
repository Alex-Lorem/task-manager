import { createStore } from 'vuex'
import task_actions from './modules/task_actions.js'

export default createStore({
    modules: { task_actions },
})
