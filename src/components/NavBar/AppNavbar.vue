<template>
    <div class="navbar py-3">
        <b-row class="w-100">
            <b-col cols="11">
                <div class="text-center">
                    <img src="images/icons/logo.png" class="logo" alt="logo"/>
                </div>
            </b-col>
            <b-col cols="1">
                <div class="d-flex align-items-center justify-content-end h-100 text-dark">
                    <b-dropdown right text="Right align">
                        <template #button-content>
                            <b-icon icon="person-circle"></b-icon>
                        </template>
                        <b-dropdown-item href="#" @click="$router.push('/readmore')">Saved items ( Read more items )</b-dropdown-item>
                        <b-dropdown-item href="#" @click="$router.push('/profile')">Profile page</b-dropdown-item>
                        <b-dropdown-item href="#" @click="logout()">Log Out</b-dropdown-item>
                    </b-dropdown>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>

export default {
    methods: {
        logout() {
            localStorage.removeItem("name");
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            setTimeout(() => this.$router.push('/login'), 1000)
            // this.$router.push('/login');
        }
    }
}
</script>
