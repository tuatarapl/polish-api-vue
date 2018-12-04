
import Vue from 'vue'
Vue.component('scope-usage-limit-view', {
    props: ['scopeUsageLimit'],
    template: `
<dl>
    <dt class="col-sm-4">Scope Usage Limit</dt>
    <dd class="col-sm-8">{{scopeUsageLimit}}</dd>
</dl>
`
})

Vue.component('recipient-pis-view', {
    props: ['recipient'],
    template: `
<section class="ml-4" v-if="recipient">
    <header>Recipient</header>
    <dl class="row" v-if="recipient.accountNumber">
        <dt class="col-4">Account Number</dt>
        <dd class="col-8"> {{recipient.accountNumber}}</dd>
    </dl>
    <dl class="row" v-if="recipient.nameAddress && recipient.nameAddress.value">
        <dt class="col-4">Name Address</dt>
        <dd class="col-8">
            <ul class="list-unstyled">
                <li v-for="item in recipient.nameAddress.value">{{item}}</li>
            </ul>
        </dd>
    </dl>
</section>
`
})

Vue.component('recipient-pis-foreign-view', {
    props: ['recipient'],
    template: `
<section class="ml-4" v-if="recipient">
    <header>Recipient</header>
    <dl class="row" v-if="recipient.accountNumber">
        <dt class="col-4">Account Number</dt>
        <dd class="col-8"> {{recipient.accountNumber}}</dd>
    </dl>
    <dl class="row" v-if="recipient.name">
        <dt class="col-4">Name</dt>
        <dd class="col-8"> {{recipient.name}}</dd>
    </dl>
    <dl class="row" v-if="recipient.address">
        <dt class="col-4">Address</dt>
        <dd class="col-8">
            <ul class="list-unstyled">
                <li v-for="item in recipient.address">{{item}}</li>
            </ul>
        </dd>
    </dl>
</section>
`
})

Vue.component('sender-pis-domestic-view', {
    props: ['sender'],
    template: `
<section class="ml-4" v-if="sender">
    <header>Sender</header>
    <dl class="row" v-if="sender.accountNumber">
        <dt class="col-4">Account Number</dt>
        <dd class="col-8"> {{sender.accountNumber}}</dd>
    </dl>
    <dl class="row" v-if="sender.nameAddress && sender.nameAddress.value">
        <dt class="col-4">Name Address</dt>
        <dd class="col-8">
            <ul class="list-unstyled">
                <li v-for="item in sender.nameAddress.value">{{item}}</li>
            </ul>
        </dd>
    </dl>
</section>
`
})

Vue.component('sender-pis-foreign-view', {
    props: ['sender'],
    template: `
<section class="ml-4" v-if="sender">
    <header>Sender</header>
    <dl class="row" v-if="sender.accountNumber">
        <dt class="col-4">Account Number</dt>
        <dd class="col-8"> {{sender.accountNumber}}</dd>
    </dl>
    <dl class="row" v-if="sender.name">
        <dt class="col-4">Name</dt>
        <dd class="col-8"> {{sender.name}}</dd>
    </dl>
</section>
`
})

Vue.component('frequency-view', {
    props: ['frequency'],
    template: `
<section class="ml-4" v-if="frequency">
    <header>Frequency</header>
    <dl class="row" v-if="frequency.periodType">
        <dt class="col-4">Period Type</dt>
        <dd class="col-8"> {{frequency.periodType}}</dd>
    </dl>
    <dl class="row" v-if="frequency.periodValue">
        <dt class="col-4">Period Value</dt>
        <dd class="col-8"> {{frequency.periodValue}}</dd>
    </dl>
</section>
`
})

Vue.component('recurrence-view', {
    props: ['recurrence'],
    template: `
<section class="ml-4" v-if="recurrence">
    <header>Recurrence</header>
    <dl class="row" v-if="recurrence.startDate">
        <dt class="col-4">Start Date</dt>
        <dd class="col-8"> {{recurrence.startDate}}</dd>
    </dl>
    <frequency-view :frequency="recurrence.frequency"></frequency-view>
    <dl class="row" v-if="recurrence.dayOffOffsetType">
        <dt class="col-4">Day Offset Type</dt>
        <dd class="col-8"> {{recurrence.dayOffOffsetType}}</dd>
    </dl>
</section>
`
})

Vue.component('transfer-data-view', {
    props: ['transferData'],
    template: `
<section class="ml-4" v-if="transferData">
    <header>Transfer Data</header>
    <dl class="row" v-if="transferData.description">
        <dt class="col-4">Description</dt>
        <dd class="col-8"> {{transferData.description}}</dd>
    </dl>
    <dl class="row" v-if="transferData.amount">
        <dt class="col-4">Amount</dt>
        <dd class="col-8"> {{transferData.amount}}</dd>
    </dl>
    <dl class="row" v-if="transferData.executionDate">
        <dt class="col-4">Execution Date</dt>
        <dd class="col-8"> {{transferData.executionDate}}</dd>
    </dl>
    <recurrence-view :recurrence="transferData.recurrence"></recurrence-view>
    <dl class="row" v-if="transferData.currency">
        <dt class="col-4">Currency</dt>
        <dd class="col-8"> {{transferData.currency}}</dd>
    </dl>
</section>
`
})

Vue.component('delivery-mode-view', {
    props: ['deliveryMode'],
    template: `
<dl>
    <dt class="col-sm-4">Delivery Mode</dt>
    <dd class="col-sm-8">{{deliveryMode}}</dd>
</dl>
`
})

Vue.component('system-view', {
    props: ['system'],
    template: `
<dl>
    <dt class="col-sm-4">System</dt>
    <dd class="col-sm-8">{{system}}</dd>
</dl>
`
})

Vue.component('execution-mode-view', {
    props: ['executionMode'],
    template: `
<dl>
    <dt class="col-sm-4">Execution Mode</dt>
    <dd class="col-sm-8">{{executionMode}}</dd>
</dl>
`
})
