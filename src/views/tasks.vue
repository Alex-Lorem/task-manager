<template>
  <div class="wrapper">
    <button class="tasks-create" @click="addNewTask">Добавить новую задачу</button>
    <div class="container" v-if="tasks?.length">
      <template v-for="task in tasks" :key="task">
        <x-task :data="task" />
      </template>
    </div>
    <div v-else>
      Записей пока нет
    </div>
  </div>
</template>

<script setup>
import xTask from '@/components/x-task.vue'
import {computed} from "vue";
import {useStore} from "vuex";

const store = useStore();
const tasks = computed(()=> {
  return store.state.task_actions.tasks
})

const addNewTask = () =>{
  store.dispatch('task_actions/add_task')
}

</script>

<style lang="scss">

.form-title {
  font-size: 20px;
  padding: 10px;
  outline: none;
}
.form-desc{
  @extend .form-title;
}
.container {
  display: flex;
  align-items: center;
  padding: 50px 50px 50px 50px;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
}

.tasks-create {
  font-size: 25px;
  box-shadow: 4px 4px 14px 0 rgba(212, 212, 212, 0.10);
  border: 2px solid #eee;
  padding: 15px;
  position: absolute;
  top: 50px;
}
</style>
