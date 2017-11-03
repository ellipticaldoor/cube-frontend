<template lang='pug'>

#home
	#sort
		span sort by
		select(v-model='sort.selected')
			option(
				v-for='value of sort.options'
				:value='value'
			) {{ value }}

	#opportunities
		opportunity(
			v-for='content of opportunities'
			v-bind='{ content }'
			key='content._id'
			:track-by='content.id'
		)

</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Opportunity from './opportunity/Opportunity.vue'

export default {
	name: 'home',

	components: { Opportunity },

	data() {
		return {
			sort: { selected: 'first', options: ['first', 'last'] },
			sort_by: -1,
		}
	},

	computed: {
		...mapGetters('opportunities', { findOpportunitiesInStore: 'find' }),

		opportunities() {
			return this.findOpportunitiesInStore().data
		},
	},

	methods: {
		...mapActions('opportunities', { findOpportunities: 'find' }),
		...mapMutations('opportunities', { clearOpportunities: 'clearAll' }),

		fetch() {
			this.findOpportunities({
				query: { $sort: { investors: this.sort_by } },
			})
		},
	},

	watch: {
		'sort.selected'() {
			this.sort_by *= -1
			this.clearOpportunities()
			this.fetch()
		},
	},

	created() {
		this.fetch()
	},
}
</script>

<style lang='sass' src='./Home.sass'></style>
