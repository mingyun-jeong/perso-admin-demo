<script setup lang="ts">
const creditHistories = [
  {
    initialCredit: 10,
    currentCredit: 3,
    status: "used",
    expireDate: "2024-11-01",
  }
]
</script>

<template>
  <VTable>
    <thead>
    <tr>
      <th class="text-uppercase text-center">지급 크레딧</th>
      <th class="text-uppercase text-center">남은 크레딧</th>
      <th class="text-uppercase text-center">사용 여부</th>
      <th class="text-uppercase text-center">크레딧 만료일</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in creditHistories">
      <td class="text-center">
        {{ item.initialCredit }}
      </td>
      <td class="text-center">
        {{ item.currentCredit }}
      </td>
      <td class="text-center">
        {{ item.status }}
      </td>
      <td class="text-center">
        {{ item.expireDate }}
      </td>
    </tr>
    </tbody>
  </VTable>
</template>
