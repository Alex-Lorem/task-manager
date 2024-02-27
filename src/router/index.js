import {createRouter, createWebHistory} from "vue-router";
import main from "@/views/main.vue";
import tasks from "@/views/tasks.vue";


export const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: main,
            name: 'main'
        },
        {
            path: '/tasks',
            component: tasks,
            name: "tasks"
        },
        {
          path: '/:pathMatch(.*)*',
          component: main
        }
    ]
})
