<script lang="ts" setup>
import { useRoute } from 'vue-router'
import AccountSettings from '@/components/user/user-detail/AccountSettings.vue'
import SubscriptionSettings from '@/components/user/user-detail/SubscroptionSettings.vue'

const route = useRoute()

const activeTab = ref(route.params.tab)

// tabs
const tabs = [
  { title: 'Account', icon: 'ri-group-line', tab: 'account' },
  { title: 'Subscription', icon: 'ri-notification-3-line', tab: 'subscription' },
]
</script>

<template>
  <div>
    <VTabs v-model="activeTab" show-arrows>
      <VTab v-for="item in tabs" :key="item.icon" :value="item.tab">
        <VIcon size="20" :icon="item.icon" />{{ item.title }}
      </VTab>
    </VTabs>

    <VWindow v-model="activeTab" class="mt-5 disable-tab-transition" :touch="false">
      <!-- Account -->
      <VWindowItem value="account">
        <AccountSettings />
      </VWindowItem>
      <VWindowItem value="subscription">
        <SubscriptionSettings />
      </VWindowItem>
    </VWindow>

  </div>
</template>
