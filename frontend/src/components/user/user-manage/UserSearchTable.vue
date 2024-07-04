<script setup lang="ts">
import { ref, onMounted, inject, defineProps } from 'vue';
import {User} from "@/interface/User";

// interface User {
//   seq: number;
//   email: string;
//   password: string;
//   name: string;
//   provider: string;
//   joinPath: string;
//   userStatus: string;
//   lastLoginDate: Date;
//   lastPasswordChangeDate: Date;
//   createDate: Date;
// }

const props = defineProps({
  email: {
    type: String,
    required: true,
  }
});

const users = ref<User[]>([]);

const fetchUsers = async (email: string) => {
  try {
    const response = await fetch('http://localhost:3000/users/search?keyword=' + email + '&condition=email');
    users.value = await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

if (watch) {
  watch(() => props.email, (newEmail) => {
    fetchUsers(newEmail);
  });
}


</script>

<template>
  <VTable>
    <thead>
      <tr>
        <th class="text-uppercase text-center">번호</th>
        <th class="text-uppercase text-center">이메일</th>
        <th class="text-uppercase text-center">가입일</th>
        <th class="text-uppercase text-center">가입 타입</th>
        <th class="text-uppercase text-center">활성 여부</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in users" :key="item.seq">
        <td class="text-center">
          {{ item.seq }}
        </td>
        <td class="text-center">
          <router-link :to="`/users/detail/${item.seq}`">{{ item.email }}</router-link>
        </td>
        <td class="text-center">
          {{ item.createDate }}
        </td>
        <td class="text-center">
          {{ item.loginProvider }}
        </td>
        <td class="text-center">
          {{ item.userStatus }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
