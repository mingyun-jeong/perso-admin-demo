<script lang="ts" setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
</script>

<template>
  <!-- 👉 회원 -->
  <VerticalNavSectionTitle
    :item="{
      heading: '회원',
    }"
  />
  <VerticalNavLink
    :item="{
      title: '회원 관리',
      icon: 'ri-user-star-line',
      to: '/users',
    }"
  />


  <!-- 👉 구독 -->
  <VerticalNavSectionTitle
    :item="{
      heading: '구독',
    }"
  />

  <VerticalNavLink
    :item="{
      title: '플랜 관리',
      icon: 'ri-send-plane-line',
      to: '/plans',
    }"
  />

  <VerticalNavLink
    :item="{
      title: '구독 조회',
      icon: 'ri-layout-4-line',
      to: '/subscription',
    }"
  />

</template>
