import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodosStore = defineStore('todos', () => {
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

  return { newTodo, todos, addTodo, deleteTodo }
})
