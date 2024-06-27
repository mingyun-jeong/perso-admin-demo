<script setup lang="ts">
const users = [
  {
    userSeq: 1,
    email: "test@estsoft.com",
    planName: "Creator",
    createDate: "2024-11-01",
    provider: "google",
    userStatus: "normal",
  }
]
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
