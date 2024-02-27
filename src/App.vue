<template>
   <router-view />
</template>

<script setup>
import {useStore} from "vuex";

const store = useStore();

store.dispatch('task_actions/init_tasks')
</script>

<style lang="scss" src="./globals.scss"/>

