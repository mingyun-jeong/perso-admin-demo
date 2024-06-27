<script setup lang="ts">
const plans = [
  {
    seq: 1,
    name: "Free",
    details: {
      isCustom: true,
      useMsTts: true,
      exportDuration: 10,
      storageLimit: 100,
      uploadLimit: 100,
      inviteLimit: 10,
    }
  },
  {
    seq: 2,
    name: "Creator",
    details: {
      isCustom: true,
      useMsTts: true,
      exportDuration: 20,
      storageLimit: 200,
      uploadLimit: 200,
      inviteLimit: 20,
    }
  },
  {
    seq: 3,
    name: "Team",
    details: {
      isCustom: true,
      useMsTts: false,
      exportDuration: 30,
      storageLimit: 300,
      uploadLimit: 300,
      inviteLimit: 30,
    }
  },
  {
    seq: 4,
    name: "Enterprise",
    details: {
      isCustom: true,
      useMsTts: true,
      exportDuration: 40,
      storageLimit: 400,
      uploadLimit: 400,
      inviteLimit: 40,
    }
  },
]
</script>

<template>
  <VTable>
    <thead>
      <tr>
        <th class="text-uppercase text-center">플랜명</th>
        <th class="text-uppercase text-center">커스텀</th>
        <th class="text-uppercase text-center">MS-TTS</th>
        <th class="text-uppercase text-center">영상 내보내기 시간(분)</th>
        <th class="text-uppercase text-center">저장 용량(MB)</th>
        <th class="text-uppercase text-center">업로드 용량(MB)</th>
        <th class="text-uppercase text-center">초대 가능 계정(명)</th>
      </tr>

    </thead>

    <tbody>
      <tr v-for="item in plans" :key="item.seq">
        <td class="text-center">
          {{ item.name }}
        </td>
        <td class="text-center">
          {{ item.details.isCustom }}
        </td>
        <td class="text-center">
          {{ item.details.useMsTts }}
        </td>
        <td class="text-center">
          {{ item.details.exportDuration }}
        </td>
        <td class="text-center">
          {{ item.details.storageLimit }}
        </td>
        <td class="text-center">
          {{ item.details.uploadLimit }}
        </td>
        <td class="text-center">
          {{ item.details.inviteLimit }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
