<script lang="ts" setup>
import { useRoute } from 'vue-router'
import AccountSettingsAccount from '@/components/user/user-manage/UserDetails.vue'

const route = useRoute()

const activeTab = ref(route.params.tab)

// tabs
const tabs = [
  { title: 'Account', icon: 'ri-group-line', tab: 'account' }
]
</script>

<template>
  <div>
    <VTabs
      v-model="activeTab"
      show-arrows
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
      >
        <VIcon
          size="20"
          start
          :icon="item.icon"
        />
        {{ item.title }}
      </VTab>
    </VTabs>

    <VWindow
      v-model="activeTab"
      class="mt-5 disable-tab-transition"
      :touch="false"
    >
      <!-- Account -->
      <VWindowItem value="account">
        <AccountSettingsAccount />
      </VWindowItem>
    </VWindow>
  </div>
</template>
