<script setup lang="ts">
import {ref, provide, inject, defineEmits} from 'vue';

const email = ref('');
const emit = defineEmits(['submit']);
const handleSubmit = () => {
  emit('submit', email.value);
};

</script>
<template>
<!--  <VForm @submit.prevent="() => {}">-->
  <VForm @submit.prevent="handleSubmit">
    <VRow>
      <VCol cols="4">
        <VTextField
          v-model="email"
          label="Email"
          class="mb-3 ml-3"
          prepend-inner-icon="ri-mail-line"
          placeholder="이메일을 입력하세요."
        />
      </VCol>
    </VRow>
  </VForm>
</template>
