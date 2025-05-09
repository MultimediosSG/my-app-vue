<script setup>
import { useCounter } from '@/composables/useCounter'

const { count, countCuadrado } = useCounter(100)

defineEmits(['send'])

const props = defineProps({
    value: {
        type: Number,
        // required: true,
       // default: 10
    }
})


</script>
<template>
  <h1>count: {{ count }}</h1>
  <h2>count cuadrado: {{ countCuadrado }}</h2>
  <button @click="count++">++</button>
  <button @click="count--">--</button>
  <button @click="$emit('send','hola desde el counter')">Enviar Info Al Padre</button>
</template>