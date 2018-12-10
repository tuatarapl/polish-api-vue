import Vue from 'vue'
Vue.component('privilege-domestic-transfer-edit', {
    props: ['privilege', 'readonly'],
    template: `
<div v-if="privilege">
    <scope-usage-limit-edit v-model="privilege.scopeUsageLimit" :readonly="readonly"></scope-usage-limit-edit>
    <h2>Recipient</h2>
    <recipient-pis-edit v-model="privilege.recipient" :readonly="readonly"></recipient-pis-edit>
    <h2>Sender</h2>
    <sender-pis-domestic-edit v-model="privilege.sender" :readonly="readonly"></sender-pis-domestic-edit>
    <h2>Transfer Data</h2>
    <transfer-data-edit v-model="privilege.transferData" :readonly="readonly"></transfer-data-edit>
    <delivery-mode-edit v-model="privilege.deliveryMode" kind="domestic" :readonly="readonly"></delivery-mode-edit>
    <system-edit v-model="privilege.system" kind="domestic" :readonly="readonly"></system-edit>
    <execution-mode-edit v-model="privilege.executionMode" :readonly="readonly"></execution-mode-edit>
</div>
    `
})

Vue.component('privilege-foreign-transfer-eea-edit', {
    props: ['privilege', 'readonly'],
    template: `
<div v-if="privilege">
    <scope-usage-limit-edit v-model="privilege.scopeUsageLimit" :readonly="readonly"></scope-usage-limit-edit>
    <h2>Recipient</h2>
    <recipient-pis-foreign-edit v-model="privilege.recipient" :readonly="readonly"></recipient-pis-foreign-edit>
    <h2>Sender</h2>
    <sender-pis-foreign-edit v-model="privilege.sender" :readonly="readonly"></sender-pis-foreign-edit>
    <h2>Transfer Data</h2>
    <transfer-data-edit v-model="privilege.transferData" :readonly="readonly"></transfer-data-edit>
    <delivery-mode-edit v-model="privilege.deliveryMode" kind="eea" :readonly="readonly"></delivery-mode-edit>
    <system-edit v-model="privilege.system" kind="eea" :readonly="readonly"></system-edit>
    <execution-mode-edit v-model="privilege.executionMode" :readonly="readonly"></execution-mode-edit>
</div>
    `
})

Vue.component('privilege-foreign-transfer-non-eea-edit', {
    props: ['privilege', 'readonly'],
    template: `
<div v-if="privilege">
    <scope-usage-limit-edit v-model="privilege.scopeUsageLimit" :readonly="readonly"></scope-usage-limit-edit>
    <h2>Recipient</h2>
    <recipient-pis-foreign-edit v-model="privilege.recipient" :readonly="readonly"></recipient-pis-foreign-edit>
    <h2>Recipient Bank</h2>
    <bank-edit v-model="privilege.recipientBank" :readonly="readonly"></bank-edit>
    <h2>Sender</h2>
    <sender-pis-foreign-edit v-model="privilege.sender" :readonly="readonly"></sender-pis-foreign-edit>
    <h2>Transfer Data</h2>
    <transfer-data-edit v-model="privilege.transferData" :readonly="readonly"></transfer-data-edit>
    <div class="form-group">
        <label for="transferCharges">Transfer Charges</label>
        <input type="text" class="form-control" id="transferCharges"
            v-model="privilege.transferCharges" :readonly="readonly"/>
    </div>
    <delivery-mode-edit v-model="privilege.deliveryMode" kind="non-eea" :readonly="readonly"></delivery-mode-edit>
    <system-edit v-model="privilege.system" kind="non-eea" :readonly="readonly"></system-edit>
    <execution-mode-edit v-model="privilege.executionMode" :readonly="readonly"></execution-mode-edit>
</div>
    `
})

Vue.component('privilege-tax-transfer-edit', {
    props: ['privilege', 'readonly'],
    template: `
<div v-if="privilege">
    <scope-usage-limit-edit v-model="privilege.scopeUsageLimit" :readonly="readonly"></scope-usage-limit-edit>
    <h2>Recipient</h2>
    <recipient-pis-edit v-model="privilege.recipient" :readonly="readonly"></recipient-pis-edit>
    <h2>Sender</h2>
    <sender-pis-domestic-edit v-model="privilege.sender" :readonly="readonly"></sender-pis-domestic-edit>
    <h2>Transfer Data</h2>
    <transfer-data-edit v-model="privilege.transferData" :readonly="readonly"></transfer-data-edit>
    <h2>Us Info</h2>
    <us-info-edit v-model="privilege.usInfo" :readonly="readonly"></us-info-edit>
    <delivery-mode-edit v-model="privilege.deliveryMode" kind="domestic" :readonly="readonly"></delivery-mode-edit>
    <system-edit v-model="privilege.system" kind="domestic" :readonly="readonly"></system-edit>
    <execution-mode-edit v-model="privilege.executionMode" :readonly="readonly"></execution-mode-edit>
</div>
    `
})

Vue.component('privilege-cancel-payment-edit', {
    props: ['privilege', 'readonly'],
    template: `
<div v-if="privilege">
    <scope-usage-limit-edit v-model="privilege.scopeUsageLimit" :readonly="readonly"></scope-usage-limit-edit>
    <div class="form-group">
        <label for="paymentId">Payment Id</label>
        <input type="text" class="form-control" id="paymentId"
            v-model="privilege.paymentId" :readonly="readonly"/>
    </div>
    <div class="form-group">
        <label for="bundleId">Bundle Id</label>
        <input type="text" class="form-control" id="bundleId"
            v-model="privilege.bundleId" :readonly="readonly"/>
    </div>
</div>
    `
})

Vue.component('privilege-bundle-transfers-edit', {
    props: ['privilege', 'readonly'],
    template: `
<div v-if="privilege">
    <scope-usage-limit-edit v-model="privilege.scopeUsageLimit" :readonly="readonly"></scope-usage-limit-edit>
    <div class="form-group">
        <label for="transfersTotalAmount">Transfers Total Amount</label>
        <input type="text" class="form-control" id="transfersTotalAmount"
            v-model="privilege.transfersTotalAmount" :readonly="readonly"/>
    </div>
    <type-of-transfers-edit v-model="request.typeOfTransfers" :readonly="readonly">
    </type-of-transfers-edit>
    <template v-if="privilege.typeOfTransfers === 'domestic'">
        <h2>Domestic Transfers</h2>
        <transfers-edit class="mb-4" component="domestic-transfer-edit"
            v-model="privilege.domesticTransfers" :readonly="readonly">
        </transfers-edit>
    </template>
    <template v-if="privilege.typeOfTransfers === 'EEA'">
        <h2>EEA Transfers</h2>
        <transfers-edit class="mb-4" component="foreign-transfer-eea-edit"
            v-model="privilege.EEATransfers" :readonly="readonly">
        </transfers-edit>
    </template>
    <template v-if="privilege.typeOfTransfers === 'nonEEA'">
        <h2>Non EEA Transfers</h2>
        <transfers-edit class="mb-4" component="foreign-transfer-non-eea-edit"
            v-model="privilege.nonEEATransfers" :readonly="readonly">
        </transfers-edit>
    </template>
    <template v-if="privilege.typeOfTransfers === 'tax'">
        <h2>Tax Transfers</h2>
        <transfers-edit  class="mb-4" component="tax-transfer-edit"
            v-model="privilege.taxTransfers" :readonly="readonly">
        </transfers-edit>
    </template>
</div>
    `
})

Vue.component('privilege-domestic-transfer-view', {
    props: ['privilege'],
    template: `
<div v-if="privilege">
    <scope-usage-limit-view :scopeUsageLimit="privilege.scopeUsageLimit"></scope-usage-limit-view>
    <recipient-pis-view :recipient="privilege.recipient" ></recipient-pis-view>
    <sender-pis-domestic-view :sender="privilege.sender"></sender-pis-domestic-view>
    <transfer-data-view :transferData="privilege.transferData"></transfer-data-view>
    <delivery-mode-view :deliveryMode="privilege.deliveryMode"></delivery-mode-view>
    <system-view :system="privilege.system"></system-view>
    <execution-mode-view :executionMode="privilege.executionMode"></execution-mode-view>
</div>
    `
})

Vue.component('privilege-foreign-transfer-eea-view', {
    props: ['privilege'],
    template: `
<div v-if="privilege">
    <scope-usage-limit-view :scopeUsageLimit="privilege.scopeUsageLimit"></scope-usage-limit-view>
    <recipient-pis-foreign-view :recipient="privilege.recipient" ></recipient-pis-foreign-view>
    <sender-pis-foreign-view :sender="privilege.sender"></sender-pis-foreign-view>
    <transfer-data-view :transferData="privilege.transferData"></transfer-data-view>
    <delivery-mode-view :deliveryMode="privilege.deliveryMode"></delivery-mode-view>
    <system-view :system="privilege.system"></system-view>
    <execution-mode-view :executionMode="privilege.executionMode"></execution-mode-view>
</div>
    `
})

Vue.component('privilege-foreign-transfer-non-eea-view', {
    props: ['privilege'],
    template: `
<div v-if="privilege">
    <scope-usage-limit-view :scopeUsageLimit="privilege.scopeUsageLimit"></scope-usage-limit-view>
    <recipient-pis-foreign-view :recipient="privilege.recipient" ></recipient-pis-foreign-view>
    <bank-view :bank="privilege.recipientBank"></bank-view>
    <sender-pis-foreign-view :sender="privilege.sender"></sender-pis-foreign-view>
    <transfer-data-view :transferData="privilege.transferData"></transfer-data-view>
    <transfer-charges-view :transferCharges="privilege.transferCharges"></transfer-charges-view>
    <delivery-mode-view :deliveryMode="privilege.deliveryMode"></delivery-mode-view>
    <system-view :system="privilege.system"></system-view>
    <execution-mode-view :executionMode="privilege.executionMode"></execution-mode-view>
</div>
    `
})

Vue.component('privilege-tax-transfer-view', {
    props: ['privilege'],
    template: `
<div v-if="privilege">
    <scope-usage-limit-view :scopeUsageLimit="privilege.scopeUsageLimit"></scope-usage-limit-view>
    <recipient-pis-view :recipient="privilege.recipient" ></recipient-pis-view>
    <sender-pis-domestic-view :sender="privilege.sender"></sender-pis-domestic-view>
    <transfer-data-view :transferData="privilege.transferData"></transfer-data-view>
    <us-info-view :usInfo="privilege.usInfo"></us-info-view>
    <delivery-mode-view :deliveryMode="privilege.deliveryMode"></delivery-mode-view>
    <system-view :system="privilege.system"></system-view>
    <execution-mode-view :executionMode="privilege.executionMode"></execution-mode-view>
</div>
    `
})

Vue.component('domestic-transfer-view', {
    props: ['privilege'],
    template: `
<div v-if="privilege">
    <scope-usage-limit-view :scopeUsageLimit="privilege.scopeUsageLimit"></scope-usage-limit-view>
    <recipient-pis-view :recipient="privilege.recipient" ></recipient-pis-view>
    <sender-pis-domestic-view :sender="privilege.sender"></sender-pis-domestic-view>
    <transfer-data-view :transferData="privilege.transferData"></transfer-data-view>
    <tpp-transaction-id-view :tppTransactionId="privilege.tppTransactionId"></tpp-transaction-id-view>
    <delivery-mode-view :deliveryMode="privilege.deliveryMode"></delivery-mode-view>
    <system-view :system="privilege.system"></system-view>
    <hold-view :hold="privilege.hold"></hold-view>
    <execution-mode-view :executionMode="privilege.executionMode"></execution-mode-view>
</div>
    `
})

Vue.component('foreign-transfer-eea-view', {
    props: ['privilege'],
    template: `
<div v-if="privilege">
    <scope-usage-limit-view :scopeUsageLimit="privilege.scopeUsageLimit"></scope-usage-limit-view>
    <recipient-pis-foreign-view :recipient="privilege.recipient" ></recipient-pis-foreign-view>
    <sender-pis-foreign-view :sender="privilege.sender"></sender-pis-foreign-view>
    <transfer-data-view :transferData="privilege.transferData"></transfer-data-view>
    <tpp-transaction-id-view :tppTransactionId="privilege.tppTransactionId"></tpp-transaction-id-view>
    <delivery-mode-view :deliveryMode="privilege.deliveryMode"></delivery-mode-view>
    <system-view :system="privilege.system"></system-view>
    <hold-view :hold="privilege.hold"></hold-view>
    <execution-mode-view :executionMode="privilege.executionMode"></execution-mode-view>
</div>
    `
})

Vue.component('foreign-transfer-non-eea-view', {
    props: ['privilege'],
    template: `
<div v-if="privilege">
    <scope-usage-limit-view :scopeUsageLimit="privilege.scopeUsageLimit"></scope-usage-limit-view>
    <recipient-pis-foreign-view :recipient="privilege.recipient" ></recipient-pis-foreign-view>
    <bank-view :bank="privilege.recipientBank"></bank-view>
    <sender-pis-foreign-view :sender="privilege.sender"></sender-pis-foreign-view>
    <transfer-data-view :transferData="privilege.transferData"></transfer-data-view>
    <transfer-charges-view :transferCharges="privilege.transferCharges"></transfer-charges-view>
    <tpp-transaction-id-view :tppTransactionId="privilege.tppTransactionId"></tpp-transaction-id-view>
    <delivery-mode-view :deliveryMode="privilege.deliveryMode"></delivery-mode-view>
    <system-view :system="privilege.system"></system-view>
    <hold-view :hold="privilege.hold"></hold-view>
    <execution-mode-view :executionMode="privilege.executionMode"></execution-mode-view>
</div>
    `
})

Vue.component('tax-transfer-view', {
    props: ['privilege'],
    template: `
<div v-if="privilege">
    <scope-usage-limit-view :scopeUsageLimit="privilege.scopeUsageLimit"></scope-usage-limit-view>
    <recipient-pis-view :recipient="privilege.recipient" ></recipient-pis-view>
    <sender-pis-domestic-view :sender="privilege.sender"></sender-pis-domestic-view>
    <transfer-data-view :transferData="privilege.transferData"></transfer-data-view>
    <us-info-view :usInfo="privilege.usInfo"></us-info-view>
    <tpp-transaction-id-view :tppTransactionId="privilege.tppTransactionId"></tpp-transaction-id-view>
    <delivery-mode-view :deliveryMode="privilege.deliveryMode"></delivery-mode-view>
    <system-view :system="privilege.system"></system-view>
    <hold-view :hold="privilege.hold"></hold-view>
    <execution-mode-view :executionMode="privilege.executionMode"></execution-mode-view>
</div>
    `
})

Vue.component('privilege-cancel-payment-view', {
    props: ['privilege'],
    template: `
<div v-if="privilege">
    <scope-usage-limit-view :scopeUsageLimit="privilege.scopeUsageLimit"></scope-usage-limit-view>
    <payment-id-view :paymentId="privilege.paymentId"></payment-id-view>
    <bundle-id-view :bundleId="privilege.bundleId"></bundle-id-view>
</div>
    `
})

Vue.component('transfers-view', {
    props: ['transfers', 'component', 'header'],
    template: `
<section>
    <header>{{header}}</header>
    <ul class="list-group">
        <li v-for="item in transfers" class="list-group-item">
            <component :is="component" :privilege="item"></component>
        </li>
    </ul>
</section>
`
})

Vue.component('privilege-bundle-transfers-view', {
    props: ['privilege'],
    template: `
<div v-if="privilege">
    <scope-usage-limit-view :scopeUsageLimit="privilege.scopeUsageLimit"></scope-usage-limit-view>
    <transfers-total-amount-view :transfersTotalAmount="privilege.transfersTotalAmount"></transfers-total-amount-view'>
    <type-of-transfers-view :typeOfTransfers="privilege.typeOfTransfers"></type-of-transfers-view>
    <transfers-view :transfers="privilege.domesticTransfers"
        component="domestic-transfer-view" header="Domestic Transfers">
    </transfers-view>
    <transfers-view :transfers="privilege.EEATransfers"
        component="foreign-transfer-eea-view" header="EEA Transfers">
    </transfers-view>
    <transfers-view :transfers="privilege.nonEEATransfers"
        component="foreign-transfer-non-eea-view" header="Non EEA Transfers">
    </transfers-view>
    <transfers-view :transfers="privilege.taxTransfers"
        component="tax-transfer-view" header="Tax Transfers">
    </transfers-view>
</div>
    `
})
