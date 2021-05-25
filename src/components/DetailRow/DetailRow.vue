<template>
    <li class="d-flex mb-2">
        <span class="label">{{label}}</span>
        <input class="ml-2" type="text" v-model="profileDetails[keyName]" v-if="isEditing"/>
        <span class="value" v-else>{{ profileDetails[keyName] }}</span>
        <div v-if="allowEdit">
            <b-icon class="ml-2" icon="pencil-fill" v-if="!isEditing" @click="isEditing = true"></b-icon>
            <b-icon class="ml-2" icon="check" v-else @click="isEditing = false;saveProfileChanges()"></b-icon>
        </div>
    </li>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            isEditing: false
        }
    },
    props: {
        label: String,
        keyName: String,
        allowEdit: Boolean
    },
    computed: {
        ...mapState(['profileDetails'])
    },
   methods: {
        saveProfileChanges() {
            let name = this.profileDetails.name;
            let email = this.profileDetails.email;
            let password = this.profileDetails.password;
            this.$store.dispatch('changeProfileDetails', { name, email, password });
        }
   }
}
</script>