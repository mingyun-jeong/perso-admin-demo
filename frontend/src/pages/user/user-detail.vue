<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import AccountSettings from '@/components/user/user-detail/AccountSettings.vue'
import SubscriptionSettings from '@/components/user/user-detail/SubscriptionSettings.vue'
import { User } from "@/interface/User";

const route = useRoute();

const activeTab = ref(route.params.tab);

// tabs
const tabs = [
  { title: 'Account', icon: 'ri-group-line', tab: 'account' },
  { title: 'Subscription', icon: 'ri-notification-3-line', tab: 'subscription' },
]

const user = ref<User | null>(null);
const fetchUserDetail = async (seq: number) => {
  try {
    const response = await fetch(`http://localhost:3000/users/${seq}`);
    user.value = await response.json();
  } catch (error) {
    console.error('Error fetching user details:', error);
  }
};

const fetchSubscription = async (seq: number) => {
  try {
    const response = await fetch(`http://localhost:3000/plans/${seq}`);
    user.value = await response.json();
    console.log(user.value);
  } catch (error) {
    console.error('Error fetching user details:', error);
  }
};

onMounted(() => {
  const userSeq = Number(route.params.seq);
  fetchUserDetail(userSeq);
});

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
        <AccountSettings :user=user />
      </VWindowItem>
      <VWindowItem value="subscription">
        <SubscriptionSettings />
      </VWindowItem>
    </VWindow>

  </div>
</template>
