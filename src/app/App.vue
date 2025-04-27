<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { TodoItem } from '@/features/todo-item'

const newTodo = ref('')
const todos = ref<string[]>([])

const addTodo = () => {
  const value = newTodo.value.trim()
  if (!value) return

  todos.value.push(value)
  newTodo.value = ''
}

const deleteTodo = (value: string) => {
  todos.value = todos.value.filter((item) => item !== value)
}
</script>

<template>
  <div
    class="flex flex-col items-center h-screen w-screen bg-background text-foreground p-6 overflow-hidden"
  >
    <div class="flex flex-col w-full max-w-2xl h-full gap-6">
      <h1 class="text-3xl font-bold text-primary text-center">Todo App</h1>

      <div
        class="flex-1 overflow-y-auto rounded-lg border border-border p-4 bg-card scrollbar-thin scrollbar-thumb-muted scrollbar-track-background"
      >
        <ul class="flex flex-col gap-3">
          <li v-for="(item, index) in todos" :key="index">
            <TodoItem :title="item" @delete="deleteTodo" />
          </li>
        </ul>
      </div>

      <div class="flex gap-4">
        <Input v-model="newTodo" placeholder="New todo..." class="flex-1" />
        <Button @click="addTodo">Add</Button>
      </div>
    </div>
  </div>
</template>
