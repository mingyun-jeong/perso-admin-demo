<script setup lang="ts">
import { ref } from 'vue';
import UserSearchTable from "@/components/user/user-manage/UserSearchTable.vue";
import SearchForm from "@/components/user/user-manage/UserSearchForm.vue";

const searchEmail = ref('');

const handleFormSubmit = (email: string) => {
  searchEmail.value = email;
};
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Search">
        <SearchForm @submit="handleFormSubmit" />
      </VCard>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12">
      <VCard title="List">
        <UserSearchTable :email="searchEmail" />
      </VCard>
    </VCol>
  </VRow>
</template>
