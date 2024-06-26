<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');

const searchEmail = () => {
  // Implement your search logic here
};

</script>
<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="10">
        <VTextField
          v-model="email"
          label="Email"
          class="mb-3 ml-3"
          prepend-inner-icon="ri-mail-line"
          placeholder="이메일을 입력하세요."
        />
      </VCol>
      <VCol
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
