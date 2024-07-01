<script setup lang="ts">
import {ref, provide, inject} from 'vue';

const email = ref('');

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
