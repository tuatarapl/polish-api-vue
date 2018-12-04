
import Vue from 'vue'
Vue.component('scope-usage-limit-view', {
    props: ['scopeUsageLimit'],
    template: `
<dl class="row" >
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

Vue.component('bank-view', {
    props: ['bank'],
    template: `
<section class="ml-4" v-if="bank">
    <header>Bank</header>
    <dl class="row" v-if="bank.bicOrSwift">
        <dt class="col-4">BIC or SWIFT</dt>
        <dd class="col-8"> {{bank.bicOrSwift}}</dd>
    </dl>
    <dl class="row" v-if="bank.name">
        <dt class="col-4">Name</dt>
        <dd class="col-8"> {{bank.name}}</dd>
    </dl>
    <dl class="row" v-if="bank.code">
        <dt class="col-4">Code</dt>
        <dd class="col-8"> {{bank.code}}</dd>
    </dl>
    <dl class="row" v-if="bank.countryCode">
        <dt class="col-4">Country Code</dt>
        <dd class="col-8"> {{bank.countryCode}}</dd>
    </dl>
    <dl class="row" v-if="bank.address">
        <dt class="col-4">Address</dt>
        <dd class="col-8">
            <ul class="list-unstyled">
                <li v-for="item in bank.address">{{item}}</li>
            </ul>
        </dd>
    </dl>
</section>
`
})

Vue.component('us-info-view', {
    props: ['usInfo'],
    template: `
<section class="ml-4" v-if="usInfo">
    <header>Us Info</header>
    <dl class="row" v-if="usInfo.payerInfo && usInfo.payerInfo.payorId">
        <dt class="col-4">Payor Id</dt>
        <dd class="col-8"> {{usInfo.payerInfo.payorId}}</dd>
    </dl>
    <dl class="row" v-if="usInfo.payerInfo && usInfo.payerInfo.payorIdType">
        <dt class="col-4">Payor Id Type</dt>
        <dd class="col-8"> {{usInfo.payerInfo.payorIdType}}</dd>
    </dl>
    <dl class="row" v-if="usInfo.formCode">
        <dt class="col-4">Form Code</dt>
        <dd class="col-8"> {{usInfo.formCode}}</dd>
    </dl>
    <dl class="row" v-if="usInfo.periodId">
        <dt class="col-4">Period Id</dt>
        <dd class="col-8"> {{usInfo.periodId}}</dd>
    </dl>
    <dl class="row" v-if="usInfo.periodType">
        <dt class="col-4">Period Type</dt>
        <dd class="col-8"> {{usInfo.periodType}}</dd>
    </dl>
    <dl class="row" v-if="usInfo.year">
        <dt class="col-4">Year</dt>
        <dd class="col-8"> {{usInfo.year}}</dd>
    </dl>
    <dl class="row" v-if="usInfo.obligationId">
        <dt class="col-4">Obligation Id</dt>
        <dd class="col-8"> {{usInfo.obligationId}}</dd>
    </dl>
</section>
`
})

Vue.component('delivery-mode-view', {
    props: ['deliveryMode'],
    template: `
<dl class="row" >
    <dt class="col-sm-4">Delivery Mode</dt>
    <dd class="col-sm-8">{{deliveryMode}}</dd>
</dl>
`
})

Vue.component('system-view', {
    props: ['system'],
    template: `
<dl class="row" >
    <dt class="col-sm-4">System</dt>
    <dd class="col-sm-8">{{system}}</dd>
</dl>
`
})

Vue.component('execution-mode-view', {
    props: ['executionMode'],
    template: `
<dl class="row" >
    <dt class="col-sm-4">Execution Mode</dt>
    <dd class="col-sm-8">{{executionMode}}</dd>
</dl>
`
})

Vue.component('transfer-charges-view', {
    props: ['transferCharges'],
    template: `
<dl class="row" >
    <dt class="col-sm-4">Transfer Charges</dt>
    <dd class="col-sm-8">{{transferCharges}}</dd>
</dl>
`
})
