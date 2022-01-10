<template>
    <div class="order-display">
        <div v-for="orderItem in order" :key="orderItem.name" class="order-display__order-item">
            <span class="order-display__item-name">{{orderItem.name}} x {{orderItem.quantity}} </span>
            <span>£{{orderItem.price}}</span>
        </div>
        <div class="order-display__total">
            <span>Total</span>
            <span>£{{total}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrderDisplay',
    props: {
        order: {
            type: Array,
            required: true
        }
    },
    computed: {
        total () {
            return this.order.reduce(function (previousValue, currentValue) {
                return previousValue + currentValue.price;
            }, 0);
        }
    }
};
</script>

<style lang="scss" scoped>
    .order-display {
        width: 100%;
        padding: 1em;
    }

    .order-display__order-item {
        display: flex;
        justify-content: space-between;
    }

    .order-display__total {
        display: flex;
        justify-content: flex-end;

        span:first-of-type {
            margin-right: 1em;
        }
    }

    .order-display__item-name {
        font-weight: 500;
    }
</style>