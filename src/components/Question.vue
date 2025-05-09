<script setup>
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)
const imgUrl = ref('');

// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
    debugger
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      const data = (await res.json())
      answer.value = data.answer
      imgUrl.value = data.image
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    } finally {
      loading.value = false
    }
  }
})
</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" :disabled="loading" />
  </p>
  <p>{{ answer }}</p>
  <img :src="imgUrl" v-if="imgUrl" alt="">
</template>