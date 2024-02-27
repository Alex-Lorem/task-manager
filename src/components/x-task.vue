<template>
  <transition name="fade-slow">
    <div class="x-task" v-if="show">
      <div class="x-task-id">#{{id}}</div>
      <div class="x-task-icon x-task-edit" @click="$refs.input_1.focus()">
        <img src="@/assets/svg/edit.svg" alt="">
      </div>
      <div class="x-task-icon x-task-close" @click="removeTask">
        <img src="@/assets/svg/close.svg" alt="">
      </div>
      <input class="x-task-title" ref="input_1" placeholder="Заголовок" v-model="title">
      <input class="x-task-desc" placeholder="Описание" v-model="desc">
    </div>
  </transition>

</template>

<script setup>
import {onMounted, ref, watch} from "vue";
import {useStore} from "vuex";

const store = useStore();


const {data} = defineProps(['data'])
let id = ref(data.id)
let title = ref(data.title)
let desc = ref(data.desc)
let show = ref(false)

watch(title, (value)=>{
  store.dispatch('task_actions/edit_task', { task: {title:value, desc: desc.value, id: id.value}})
})

watch(desc, (value)=>{
  store.dispatch('task_actions/edit_task', {task:{title: title.value, desc:value, id:id.value}})
})

const removeTask = () => {
  store.dispatch('task_actions/remove_task', {id: id.value})
}

onMounted(()=>{
  setTimeout(()=>{
    show.value = true
  }, 300)
})

</script>
<style lang="scss">

.x-task {
  box-shadow: 4px 4px 14px 0 rgba(212, 212, 212, 0.10);
  border: 2px solid #eee;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction:column;
}
.x-task-id {
  position: absolute;
  font-size: 18px;
  top: -25px;
  left: 0;
}
.x-task-title {
  font-size: 28px;
}
.x-task-desc {
  font-size: 18px;
  margin-top: 20px;
}
.x-task-icon {
  box-shadow: 4px 4px 14px 0 rgba(212, 212, 212, 0.10);
  border: 2px solid #eee;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  padding: 3px;
}
.x-task-close {
  position: absolute;
  top: -30px;
  right: -2px;
}
.x-task-edit {
  position: absolute;
  top: -30px;
  right: 30px;
  img {
    width: 15px;
  }
}

</style>

