<template>
    <div class="auth-wrapper">
      <div class="auth-inner">
        <b-card>
            <b-button class="logo-btn py-2 px-5" variant="success">
            <img src="images/icons/logo.png" class="logo" alt="logo"/>
            </b-button>
            <h4 class="auth-title mt-4">Sign up</h4>
            <h5 class="auth-subtitle font-weight-normal mt-3 mb-4">Welcome to New York Times</h5>
            <form class="auth-form">
              <div class="form-element">
                <BaseInput 
                  placeholder="Name"
                  type="input"
                  v-model="name"
                >
                </BaseInput>
                <div v-if="isNameEmpty" class="form-alert">Name is required</div>
                <div v-if="isNotValidName" class="form-alert">Name is not valid. It should not contain special chars</div>
              </div>
              <div class="form-element">
                <BaseInput 
                  placeholder="E-mail"
                  type="input"
                  v-model="email"
                >
                </BaseInput>
                <div v-if="isEmailEmpty" class="form-alert">Email is required</div>
                <div v-if="isNotValidEmail" class="form-alert">Email is not valid</div>
              </div>
              <div class="form-element">
                <BaseInput 
                  placeholder="Password" 
                  type="password"
                  v-model="password"
                  >
                </BaseInput>
                <div v-if="isPasswordEmpty" class="form-alert">Password is required</div>
                <div v-if="isNotValidPassword" class="form-alert">Password must be below 20 chars and should not contain special charecters</div>
              </div>
              <div v-if="isInvalidCred" class="form-alert text-center mb-3">Wrong username or password</div>
              <div class="mb-2">Already have an account ? <a class="text-info" @click="$router.push('/login')"> Login</a></div> 
              <BaseButton class="login-btn" buttonText="Sign Up" :onButtonClick="login"/>
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
        name: "",
        isEmailEmpty: false,
        isNameEmpty: false,
        isNotValidName: false,
        isPasswordEmpty: false,
        isNotValidPassword: false,
        isNotValidEmail: false,
        isInvalidCred: false,
        emailLengthExceedLimit: false
      }
    },
    components: {
      BaseButton,
      BaseInput
    },
    methods: {
        login() {
            this.isEmailEmpty = false;
            this.isNameEmpty = false;
            this.isNotValidEmail = false;
            this.isNotValidName = false;
            this.isPasswordEmpty = false;
            this.isNotValidPassword = false
            this.isInvalidCred =  false;
            this.emailLengthExceedLimit =  false

            // email empty check and valid email check
            if(!this.email) {
              this.isEmailEmpty = true;
            } else if(!this.validEmail(this.email)) {
              this.isNotValidEmail = true;
            } else if(this.email.length > 20) {
              this.emailLengthExceedLimit = true;
            }

            // password empty check
            if(!this.password) {
              this.isPasswordEmpty = true;
            } else if(this.password.length > 20 || this.containsSpecialChars(this.password)) {
              this.isNotValidPassword =  true;
            }
            
            if(!this.name) {
              this.isNameEmpty = true;
            } else if(this.containsSpecialChars(this.name)) {
              this.isNotValidName =  true;
            }

            if (!this.isEmailEmpty && !this.isNotValidEmail && !this.isPasswordEmpty && !this.isNotValidPassword && !this.isNameEmpty && !this.isNotValidName) {
              localStorage.setItem("name", this.name);
              localStorage.setItem("email", this.email);
              localStorage.setItem("password", this.password);
              this.$store.dispatch('populateProfileValues');
              this.$router.push('/home');
            }
        },
        validEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        containsSpecialChars(text) {
            //eslint-disable-next-line
            var regex = /[^a-zA-Z0-9]/
            return regex.test(text);
        }
    }
  }
</script>