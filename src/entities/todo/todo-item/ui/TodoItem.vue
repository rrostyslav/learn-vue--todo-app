<script lang="ts" setup>
const props = defineProps<{
  title: string
}>()

const emit = defineEmits<{
  (e: 'delete', value: string): void
}>()

const handleDelete = () => {
  emit('delete', props.title)
}
</script>

<template>
  <div
    class="flex items-center justify-between p-4 rounded-lg border bg-card text-card-foreground hover:bg-muted/70 transition"
  >
    <span class="text-base">
      {{ title }}
    </span>

    <button
      class="text-destructive hover:text-destructive-foreground text-sm font-medium"
      @click.stop="handleDelete"
    >
      Delete
    </button>
  </div>
</template>
