<template>
    <b-card>
        <div class="d-flex justify-content-between">
            <h4>Profile Details</h4>
            <b-button @click="$router.push('/home')">Back to Home</b-button>
        </div>
        <ul class="profile-details">
            <DetailRow label="Name" keyName="name" :allowEdit="true"/>
            <DetailRow label="Email" keyName="email" :allowEdit="false"/>
            <DetailRow label="Password" keyName="password" :allowEdit="true"/>
            <b-button @click="deleteAccount()">Delete Account</b-button>
        </ul>
    </b-card>
</template>

<script>
import DetailRow from "@/components/DetailRow/DetailRow";

export default {
    components: {
        DetailRow
    },
    methods: {
        deleteAccount() {
            this.$store.dispatch('removeProfileDetails');
            localStorage.clear();
            this.$router.push('/login');
        }
    }
}
</script>