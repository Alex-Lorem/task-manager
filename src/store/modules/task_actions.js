export default ({
    namespaced: true,
    state: {
        tasks: []
    },
    mutations: {
        SET_ALL_TASKS(state, {tasks}) {
            state.tasks = tasks
        },
        SET_TASK(state, {task}) {
            state.tasks.push(task)
            let tasks = JSON.parse(localStorage.getItem('tasks')) || []
            tasks.push(task)
            localStorage.setItem('tasks', JSON.stringify(tasks))
        },
        REMOVE_TASK(state, {id}){
            let tasks = JSON.parse(localStorage.getItem('tasks'))
            const index = tasks.findIndex((item)=>{
                return id === item.id
            })
            tasks.splice(index, 1)
            state.tasks.splice(index, 1)
            localStorage.setItem('tasks', JSON.stringify(tasks))

        },
        EDIT_TASK(state, {task}){
            const index = state.tasks.findIndex((item)=>{
                return task.id === item.id
            })
            const tasks = JSON.parse(localStorage.getItem('tasks'))
            tasks[index] = task
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
    },
    actions: {
        init_tasks(store){
            const data = JSON.parse(localStorage.getItem('tasks'))
            if(data){
                store.commit("SET_ALL_TASKS", {tasks: data})
            }
        },
        add_task(store){
            const counter = parseInt(localStorage.getItem('counter'))
            const task = {title: '', desc: '', id: 1}
            if(counter){
                task.id = counter + 1
                localStorage.setItem('counter', JSON.stringify(counter + 1))
            } else {
                localStorage.setItem('counter', '1')
            }

            store.commit('SET_TASK', {task})

        },
        remove_task(store, {id}){
            const counter = parseInt(localStorage.getItem('counter'))
            localStorage.setItem('counter', (counter - 1).toString())
            store.commit('REMOVE_TASK', {id})

        },
        edit_task(store, {task}){
            store.commit('EDIT_TASK', {task})
        }
    },
    getters: {

    }
})
