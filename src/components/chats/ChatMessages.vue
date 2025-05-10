<script setup>
import ChatBubble from './ChatBubble.vue';
defineProps({
    messages:{
        type:Array
    }

})
</script>

<template>

    <div class="flex-1 overflow-y-auto p-4">
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