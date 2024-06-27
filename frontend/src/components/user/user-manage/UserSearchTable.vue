<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface User {
  userSeq: number;
  email: string;
  planName: string;
  createDate: string;
  provider: string;
  userStatus: string;
}

const users = ref<User[]>([]);
const fetchUsers = async () => {
  try {
    const response = await fetch('http://localhost:3000/users');
    users.value = await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

onMounted(() => {
  fetchUsers();
});

</script>

<template>
  <VTable>
    <thead>
      <tr>
        <th class="text-uppercase text-center">번호</th>
        <th class="text-uppercase text-center">이메일</th>
        <th class="text-uppercase text-center">플랜</th>
        <th class="text-uppercase text-center">가입일</th>
        <th class="text-uppercase text-center">가입 타입</th>
        <th class="text-uppercase text-center">활성 여부</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in users" :key="item.userSeq">
        <td class="text-center">
          {{ item.userSeq }}
        </td>
        <td class="text-center">
          <router-link :to="`/users/detail`">{{ item.email }}</router-link>
        </td>
        <td class="text-center">
          {{ item.planName }}
        </td>
        <td class="text-center">
          {{ item.createDate }}
        </td>
        <td class="text-center">
          {{ item.provider }}
        </td>
        <td class="text-center">
          {{ item.userStatus }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
