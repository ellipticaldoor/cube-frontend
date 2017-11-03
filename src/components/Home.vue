<template lang='pug'>

#home
	opportunity(
		v-for='content of opportunities'
		v-bind='{ content }'
	)

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Opportunity from './opportunity/Opportunity.vue'

export default {
	name: 'home',

	components: { Opportunity },

	computed: {
		...mapGetters('opportunities', { findOpportunitiesInStore: 'find' }),

		opportunities() {
			return this.findOpportunitiesInStore().data
		},
	},

	methods: {
		...mapActions('opportunities', { findOpportunities: 'find' }),
	},

	created() {
		this.findOpportunities()
	},
}
</script>
