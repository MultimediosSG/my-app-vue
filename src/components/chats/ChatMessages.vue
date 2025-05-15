<script setup>
import { ref, watch } from 'vue';
import ChatBubble from './ChatBubble.vue';
const props = defineProps({
    messages:{
        type:Array
    }

})

const chatRef = ref()

watch(()=> props.messages, () =>{
    console.log('message', props.messages.length);
    setTimeout(()=>{
        chatRef.value.scrollTo({
            top: chatRef.value.scrollHeight,
            behavior: 'smooth'
        })
    }, 500)
},{ deep: true })

// setTimeout(()=>{
//     console.log(chatRef.value);
// }, 100)



</script>

<template>

    <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
            <!-- Messages go here -->
          <ChatBubble 
          v-for="message in messages" 
          :key="message.id" 
          v-bind="message"
          />
          <!-- :its-mine="message.itsMine" 
          :message="message.message" 
          :image="message.image"  -->
        
      
           
        </div>
    </div>

</template>