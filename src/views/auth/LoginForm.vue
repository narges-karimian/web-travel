<template>
  <Form @submit="onSubmit" :validation-schema="schema" class="form-container">
    <h3 class="">ورود</h3>
    <base-input v-for="formField in formFields" class="input-group--outline" :type="formField.type"
      :value="formField.value" :name="formField.name" :label="formField.label" :placeholder="formField.placeholder"
      :icon="formField.icon">
    </base-input>
    <base-button :isLoading="isLoggedIn" class="button--filled button_1" type="submit">ورود</base-button>
  </Form>
  <div class="register body_1">حساب کاربری ندارید؟ <router-link :to="{ name: 'register' }"
      class="register__link subtitle_1">ثبت نام</router-link></div>
</template>

<script setup>
import { ref } from 'vue';
import { Form } from "vee-validate";
import { useUserAuthStore } from '@/stores/Authentication';
import { toast } from 'vue3-toastify';
import { useRouter } from 'vue-router'

const schema = {
  username: 'required',
  password: 'required|password|min:8'
};

const formFields = ref([
  {
    type: "username",
    name: "username",
    value: "",
    label: "نام کاربری",
    icon: [
      {
        position: "icon--right",
        name: "user"
      }
    ],
    placeholder: "نام کاربری",
  },
  {
    type: "password",
    name: "password",
    value: "",
    label: "رمز عبور",
    icon: [
      {
        position: "icon--right",
        name: "lock"
      },
      {
        position: "icon--left",
        name: 'eye',
        show: false
      },
    ],
    placeholder: 'رمز عبور'
  },
]);

const router = useRouter();
const isLoggedIn = ref(false);

async function onSubmit(values) {
  const store = useUserAuthStore();

  isLoggedIn.value = true;
  try {
    await store.login(values);
    toast.success('شما با موفقیت وارد شدید!');
  } catch (error) {
    console.log(error);
  }

  isLoggedIn.value = false;
};

</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
  padding: 0 7.5rem;
}

.register {
  font-style: normal;
  text-align: center;
  margin: 1rem auto 3rem;
  color: ver(--color-text-base-2);
}

.register__link {
  font-weight: 600;
  text-decoration: none;
  color: ver(--color-text-selected);
}
</style>
