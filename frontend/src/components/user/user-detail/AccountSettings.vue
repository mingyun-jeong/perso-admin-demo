<script lang="ts" setup>

import {defineProps, ref, watch} from 'vue';
import {User} from "@/interface/User";

// props 정의
const props = defineProps<{
  user: User | null;
}>();

// local state 선언
const userData = ref<User | null>(null);
const email = ref();
const userName = ref();
const createDate = ref();
const provider = ref();
const userStatus = ref();

const isAccountDeactivated = ref(false);
const resetForm = () => {
  userData.value = props.user ? props.user : null;
};

// user props 값이 변경되면 즉시 userDataLocal 업데이트
watch(() => props.user, (obj) => {
  userData.value = obj ? obj : null;
  userName.value = obj ? obj.name : null;
  email.value = obj ? obj.email : null;
  provider.value = obj ? obj.loginProvider : null;
  userStatus.value = obj ? obj.userStatus : null;
  createDate.value = obj ? obj.createDate : null;
}, {immediate: true});

// user 변수에 할당해서 사용 가능
// const user = computed(() => userDataLocal.value);


</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Account Details">
        <VCardText>
          <!-- 👉 Form -->
          <VForm>
            <VRow>
              <VCol cols="4">
                <VTextField
                  label="이름"
                  v-model="userName"
                />
              </VCol>

              <VCol cols="4">
                <VTextField
                  label="E-mail"
                  v-model="email"
                  type="email"
                  readonly="true"
                  :value="userData?.email"
                />
              </VCol>
              <VCol cols="4">
                <VSwitch v-model="userStatus">
                  <template #label>활성 여부</template>
                </VSwitch>
              </VCol>
            </VRow>

            <VRow>
              <VCol cols="4">
                <VTextField
                  label="가입 타입"
                  readonly="true"
                  v-model="provider"
                  :value="userData?.loginProvider"
                />
              </VCol>
              <VCol cols="4">
                <VTextField
                  label="가입일"
                  readonly="true"
                  v-model="createDate"
                  :value="userData?.createDate"
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
