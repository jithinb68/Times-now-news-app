<template>
    <div class="auth-wrapper">
      <div class="auth-inner">
        <b-card>
            <b-button class="logo-btn py-2 px-5" variant="success">
            <img src="images/icons/logo.png" class="logo" alt="logo"/>
            </b-button>
            <h4 class="auth-title mt-4">Log In</h4>
            <h5 class="auth-subtitle font-weight-normal mt-3 mb-4">Welcome to New York Times</h5>
            <form class="auth-form">
              <div class="form-element">
                <BaseInput 
                  placeholder="E-mail"
                  type="input"
                  v-model="email"
                >
                </BaseInput>
                <div v-show="isEmailEmpty" class="form-alert">Email is required</div>
                <div v-show="isNotValidEmail" class="form-alert">Email is not valid</div>
              </div>
              <div class="form-element">
                <BaseInput 
                  placeholder="Password" 
                  type="password"
                  v-model="password"
                  >
                </BaseInput>
                <div v-show="isPasswordEmpty" class="form-alert">Password is required</div>
              </div>
              <div v-show="isInvalidCred" class="form-alert text-center mb-3">Wrong username or password</div>
              <div class="mb-2">Don't have an account ? <a class="text-info" @click="$router.push('/signup')"> Signup</a></div> 
              <BaseButton class="login-btn" buttonText="Log In" :onButtonClick="login"/>
            </form>
        </b-card>
      </div>
    </div>
</template>

<script>
  import BaseInput from "@/components/Base/BaseInput";
  import BaseButton from "@/components/Base/BaseButton";
  export default {
    name: "login",
    data() {
      return {
        email: "",
        password: "",
        isEmailEmpty: false,
        isPasswordEmpty: false,
        isNotValidEmail: false,
        isInvalidCred: false,
        storedEmail: '',
        storedPassword: ''
      }
    },
    components: {
      BaseButton,
      BaseInput
    },
    mounted() {
      this.storedEmail = (localStorage.getItem('email'));
      this.storedPassword = (localStorage.getItem('password'));
    },
    methods: {
        login() {
            this.isEmailEmpty = false;
            this.isNotValidEmail = false;
            this.isPasswordEmpty = false;
            this.isInvalidCred =  false;

            // email empty check and valid email check
            if(!this.email) {
              this.isEmailEmpty = true;
            } else if(!this.validEmail(this.email)) {
              this.isNotValidEmail = true;
            }

            // password empty check
            if(!this.password) {
              this.isPasswordEmpty = true;
            }

            // if all condition passed
            if (!this.isEmailEmpty && !this.isNotValidEmail && !this.isPasswordEmpty) {
              if(this.storedEmail === this.email && this.storedPassword === this.password) this.$router.push('/home');
            }
        },
        validEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
  }
</script>