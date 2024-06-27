<script setup lang="ts">
const subscription =
{
  name: "Creator",
  price: "19",
  credit: "3",
  isCancellationScheduled: false,
  startDate: "2024-01-01",
  endDate: "2024-02-01",
}

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
        <th class="text-uppercase text-center">플랜</th>
        <th class="text-uppercase text-center">가격</th>
        <th class="text-uppercase text-center">결제 리워드 크레딧</th>
        <th class="text-uppercase text-center">취소 예약 여부</th>
        <th class="text-uppercase text-center">구독 시작일</th>
        <th class="text-uppercase text-center">구독 종료일</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-center">
          {{ subscription.name }}
        </td>
        <td class="text-center">
          {{ subscription.price }}
        </td>
        <td class="text-center">
          {{ subscription.credit }}
        </td>
        <td class="text-center">
          {{ subscription.isCancellationScheduled }}
        </td>
        <td class="text-center">
          {{ subscription.startDate }}
        </td>
        <td class="text-center">
          {{ subscription.endDate }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
