<script setup lang="ts">
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { TodoItem } from '@/entities/todo/todo-item'
import { useTodosStore } from '../model/useTodosStore'
import { storeToRefs } from 'pinia'

const todosStore = useTodosStore()
const { newTodo, todos } = storeToRefs(todosStore)
const { addTodo, deleteTodo } = todosStore

const onSubmit = () => {
  addTodo()
}
</script>

<template>
  <div
    class="flex-1 overflow-y-auto rounded-lg border border-border p-4 bg-card scrollbar-thin scrollbar-thumb-muted scrollbar-track-background"
  >
    <ul class="flex flex-col gap-3">
      <li v-for="(item, index) in todos" :key="index">
        <TodoItem :title="item" @delete="deleteTodo" />
      </li>
    </ul>
  </div>

  <form @submit.prevent="onSubmit" class="w-full flex gap-4">
    <Input v-model="newTodo" placeholder="New todo..." class="flex-1" />
    <Button type="submit">Add</Button>
  </form>
</template>
