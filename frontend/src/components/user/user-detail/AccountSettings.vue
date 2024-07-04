<script lang="ts" setup>

import {defineProps, ref, watch} from 'vue';
import {User} from "@/interface/User";

const account = {
  name: 'john',
  email: 'johnDoe@example.com',
  team: 'My Team',
  createDate: '2024-05-01',
  provider: 'google',
  isActive: true,
}

// props 정의
const props = defineProps<{
  user: User | null;
}>();

// local state 선언
const userDataLocal = ref<User | null>(null);
const isAccountDeactivated = ref(false);
const resetForm = () => {
  userDataLocal.value = props.user ? props.user : null;
};

// user props 값이 변경되면 즉시 userDataLocal 업데이트
watch(() => props.user, (newVal) => {
  userDataLocal.value = newVal ? newVal : null;
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
          <VForm class="mt-6">
            <VRow>
              <VCol md="6" cols="12">
                <VTextField
                  placeholder="이름"
                  :value="userDataLocal?.name"
                />
              </VCol>

              <VCol md="6" cols="12">
                <VTextField
                  :value="userDataLocal?.email"
                  placeholder="johndoe@gmail.com"
                  type="email"
                />
              </VCol>

              <!--              <VCol md="6" cols="12">-->
              <!--                <VTextField-->
              <!--                  :value="account.team"-->
              <!--                  placeholder="팀"-->
              <!--                />-->
              <!--              </VCol>-->

              <VCol md="6" cols="12">
                <VTextField
                  :value="userDataLocal?.createDate"
                  placeholder="가입일"
                />
              </VCol>
            </VRow>

            <VRow>
              <VCol md="6" cols="12">
                <VTextField
                  :value="userDataLocal?.loginProvider"
                  placeholder="가입 타입"
                />
              </VCol>
              <VCol md="6" cols="12">
                <VTextField
                  :value="userDataLocal?.userStatus"
                  placeholder="활성 여부"
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
