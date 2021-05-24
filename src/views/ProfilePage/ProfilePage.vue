<template>
    <b-card>
        <h4>Profile Details</h4>
        <ul class="profile-details">
            <li>
                <span class="label">Name</span>
                <span class="value">{{ profileDetails.name }}</span>
            </li>
            <li>
                <span class="label">Email</span>
                <span class="value">{{ profileDetails.email }}</span>
            </li>
            <li>
                <span class="label">Password</span>
                <span class="value">{{ profileDetails.password }}</span>
            </li>
        </ul>
    </b-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: {
        title: String
    },
    computed: {
        ...mapState(['profileDetails'])
    },
}
</script>