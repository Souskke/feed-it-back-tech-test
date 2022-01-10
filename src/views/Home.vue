<template>
    <v-container>
        <h3 class="mb-3">Guest Orders</h3>

        <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="dates"
            transition="scale-transition"
            offset-y
            min-width="auto"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    label="Select a date or range to view"
                    v-model="dateRangeText"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    solo
                    dense
                />
            </template>
            <v-date-picker
                v-model="dates"
                range
                no-title
                scrollable
            >
                <v-spacer />
                <v-btn
                    text
                    color="primary"
                    @click="menu = false"
                >
                    Cancel
                </v-btn>
                <v-btn
                    text
                    color="primary"
                    @click="() => {$refs.menu.save(dates); this.fetchguests({dateRange: this.dates});}"
                >
                    OK
                </v-btn>
            </v-date-picker>
        </v-menu>
        <v-card min-height="400px">
            <v-data-table
                v-if="guests.length > 0"
                :headers="tableHeaders"
                :items="guests"
                :single-expand="true"
                :expanded.sync="expanded"
                item-key="email"
                show-expand
                class="elevation-1"
                :loading="loading"
            >
                <template v-slot:expanded-item="{ headers, item }">
                    <td :colspan="headers.length">
                        <order-display :order="item.order"/>
                    </td>
                </template>
            </v-data-table>
            <div v-else class="pa-3 d-flex justify-center">
                <span>Please select a date or date range above to view order data</span>
            </div>
        </v-card>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import OrderDisplay from '../components/OrderDisplay.vue';

export default {
    name: 'Home',
    components: { 
        OrderDisplay
    },
    data () {
        return {
            menu: false,
            dates: [],
            expanded: [],
            tableHeaders: [
                { text: 'First name' , value: 'first_name'},
                { text: 'Last name' , value: 'last_name'},
                { text: 'Email', value: 'email' },
                { text: 'Date of visit', value: 'visited' },
                { text: '', value: 'data-table-expand' },
            ],
            orderTableHeaders: [
                { text: 'Item', value: 'name' },
                { text: 'Quantity', value: 'quantity' },
                { text: 'Price', value: 'price' }
            ]
        };
    },
    computed: {
        dateRangeText () {
            return this.dates.join(' ~ ');
        },
        ...mapGetters({
            guests: 'getGuests',
            loading: 'getLoading'
        })
    },
    methods: {
        ...mapActions({
            fetchguests: 'fetchGuests'
        })
    }
};
</script>
