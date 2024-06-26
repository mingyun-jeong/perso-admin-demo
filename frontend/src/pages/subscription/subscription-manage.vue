<script setup lang="ts">
import SubscriberTable from "@/views/subscription/subscription-manage/SubscriberTable.vue";
import CreditHistories from "@/views/subscription/subscription-manage/CreditHistoriesTable.vue";

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
      <VCard title="Subscription">
        <SubscriberTable />
      </VCard>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12">
      <VCard title="Credit Histories">
        <CreditHistories />
      </VCard>
    </VCol>
  </VRow>
</template>
