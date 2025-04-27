<script setup lang="ts">
import { TodoList } from '@/features/todo-list'
</script>

<template>
  <div
    class="flex flex-col items-center h-screen w-screen bg-background text-foreground p-6 overflow-hidden"
  >
    <div class="flex flex-col w-full max-w-2xl h-full gap-6">
      <h1 class="text-3xl font-bold text-primary text-center">Todo App</h1>

      <TodoList />
    </div>
  </div>
</template>
