<script lang="ts" setup>

const selectedPlan = ref('Creator')

</script>

<template>
  <VCard title="Current Plan">
    <VCardText>
      <VForm @submit.prevent="() => {}">
        <VRow>
          <VCol cols="6" sm="2">
            <VSelect v-model="selectedPlan" mandatory :items="['Free', 'Creator']"/>
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="12">
            <VSwitch v-model="msTts">
              <template #label>MS-TTS</template>
            </VSwitch>
          </VCol>
        </VRow>

        <div class="d-flex flex-wrap gap-4 mt-4">
          <VBtn type="submit">Save Changes</VBtn>
          <VBtn color="secondary" variant="outlined" type="reset">Reset</VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
