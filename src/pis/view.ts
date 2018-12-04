
import Vue from 'vue'
Vue.component('scope-usage-limit-view', {
    props: ['scopeUsageLimit'],
    template: `
<div>
    <dt class="col-sm-3">Scope Usage Limit</dt>
    <dd class="col-sm-9">{{scopeUsageLimit}}</dd>
</div>
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
