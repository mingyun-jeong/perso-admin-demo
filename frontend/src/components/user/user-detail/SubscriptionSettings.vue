<script lang="ts" setup>

const selectedPlan = ref('Creator')
let msTts = ref(false)
let waterMark = ref(false)
let fhd = ref(false)
let uhd = ref(false)

const plan = {
  name: 'Creator',
  msTts: true,
  waterMark: true,
  fhd: true,
  uhd: false,
}

</script>
<template>
  <VCard title="Subscription">
    <VCardText>
      <VForm @submit.prevent="() => {}">
        <VRow>
          <VCol cols="12">
            <VLabel>Current Plan</VLabel>
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="6" sm="2">
            <VSelect v-model="selectedPlan" mandatory :items="['Free', 'Creator']"/>
          </VCol>
        </VRow>

        <VRow>
          <VCol cols="12">
            <VLabel>Plan Options</VLabel>
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="1">
            <VSwitch v-model="msTts">
              <template #label>MS-TTS</template>
            </VSwitch>
          </VCol>
          <VCol cols="1">
            <VSwitch v-model="waterMark">
              <template #label>워터마크</template>
            </VSwitch>
          </VCol>
        </VRow>

        <VRow>
          <VCol cols="4">
            <VTextField
              label="프로젝트 생성 개수"
              :value="plan.name === 'Creator' ? 10 : 3"
            />
          </VCol>
          <VCol cols="4">
            <VTextField label="영상 내보내기 시간(분)"/>
          </VCol>
          <VCol cols="4">
            <VTextField label="저장 용량(MB)"/>
          </VCol>
          <VCol cols="4">
            <VTextField label="업로드 용량 제한(MB)"/>
          </VCol>
          <VCol cols="4">
            <VTextField label="초대 가능 계정(명)"/>
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="12">
            <VLabel>Video Quality</VLabel>
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="1">
            <VCheckbox v-model="fhd">
              <template #label>FHD</template>
            </VCheckbox>
          </VCol>
          <VCol cols="1">
            <VCheckbox v-model="uhd">
              <template #label>UHD</template>
            </VCheckbox>
          </VCol>
        </VRow>

        <VRow>
          <VCol cols="12">
            <VLabel>Available Model</VLabel>
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="1">
            <VCheckbox>
              <template #label>큐리</template>
            </VCheckbox>
          </VCol>
          <VCol cols="1">
            <VCheckbox>
              <template #label>나탈리</template>
            </VCheckbox>
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
