<script setup lang="ts">
import UserSearchTable from "@/views/user/user-manage/UserSearchTable.vue";
import SearchForm from "@/views/user/user-manage/UserSearchForm.vue";
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Search">
        <SearchForm />
      </VCard>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12">
      <VCard title="List">
        <UserSearchTable />
      </VCard>
    </VCol>
  </VRow>
</template>
