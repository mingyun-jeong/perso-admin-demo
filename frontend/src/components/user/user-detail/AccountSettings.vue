<script lang="ts" setup>

const account = {
  name: 'john',
  email: 'johnDoe@example.com',
  team: 'My Team',
  createDate: '2024-05-01',
  provider: 'google',
  isActive: true,
}

const accountDataLocal = ref(structuredClone(account))
const isAccountDeactivated = ref(false)
const resetForm = () => {
  accountDataLocal.value = structuredClone(account)
}

</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Account Details">
        <VCardText>
          <!-- 👉 Form -->
          <VForm class="mt-6">
            <VRow>
              <VCol md="6" cols="12">
                <VTextField
                  v-model="account.name"
                  label="이름"
                />
              </VCol>

              <VCol md="6" cols="12">
                <VTextField
                  v-model="account.email"
                  label="E-mail"
                  placeholder="johndoe@gmail.com"
                  type="email"
                />
              </VCol>

              <VCol md="6" cols="12">
                <VTextField
                  v-model="account.team"
                  label="팀"
                />
              </VCol>

              <VCol md="6" cols="12">
                <VTextField
                  v-model="account.createDate"
                  label="가입일"
                />
              </VCol>
            </VRow>

            <VRow>
              <VCol md="6" cols="12">
                <VTextField
                  v-model="account.provider"
                  label="가입 타입"
                />
              </VCol>
              <VCol md="6" cols="12">
                <VTextField
                  v-model="account.isActive"
                  label="활성 여부"
                />
              </VCol>
            </VRow>
          </VForm>
        </VCardText>

        <VCol
          cols="12"
          class="d-flex flex-wrap gap-4"
        >
          <VBtn>Save changes</VBtn>

          <VBtn
            color="secondary"
            variant="outlined"
            type="reset"
            @click.prevent="resetForm"
          >
            Reset
          </VBtn>
        </VCol>
      </VCard>
    </VCol>


    <VCol cols="12">
      <!-- 👉 Deactivate Account -->
      <VCard title="Deactivate Account">
        <VCardText>
          <div>
            <VCheckbox
              v-model="isAccountDeactivated"
              label="I confirm my account deactivation"
            />
          </div>

          <VBtn
            :disabled="!isAccountDeactivated"
            color="error"
            class="mt-3"
          >
            Deactivate Account
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
