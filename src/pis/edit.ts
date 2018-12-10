import Vue from 'vue'
Vue.component('domestic-transfer-edit', {
    props: ['request', 'readonly'],
    template: `
<div v-if="request">
    <h2>Recipient</h2>
    <recipient-pis-edit v-model="request.recipient" :readonly="readonly"></recipient-pis-edit>
    <h2>Sender</h2>
    <sender-pis-domestic-edit v-model="request.sender" :readonly="readonly"></sender-pis-domestic-edit>
    <h2>Transfer Data</h2>
    <transfer-data-edit v-model="request.transferData" :readonly="readonly"></transfer-data-edit>
    <tpp-transaction-id-edit v-model="request.tppTransactionId" :readonly="readonly"></tpp-transaction-id-edit>
    <delivery-mode-edit v-model="request.deliveryMode" kind="domestic" :readonly="readonly"></delivery-mode-edit>
    <system-edit v-model="request.system" kind="domestic" :readonly="readonly"></system-edit>
    <hold-edit v-model="request.hold" :readonly="readonly"></hold-edit>
    <execution-mode-edit v-model="request.executionMode" :readonly="readonly"></execution-mode-edit>
</div>
    `
})

Vue.component('foreign-transfer-eea-edit', {
    props: ['request', 'readonly'],
    template: `
<div v-if="request">
    <h2>Recipient</h2>
    <recipient-pis-foreign-edit v-model="request.recipient" :readonly="readonly"></recipient-pis-foreign-edit>
    <h2>Sender</h2>
    <sender-pis-foreign-edit v-model="request.sender" :readonly="readonly"></sender-pis-foreign-edit>
    <h2>Transfer Data</h2>
    <transfer-data-edit v-model="request.transferData" :readonly="readonly"></transfer-data-edit>
    <tpp-transaction-id-edit v-model="request.tppTransactionId" :readonly="readonly"></tpp-transaction-id-edit>
    <delivery-mode-edit v-model="request.deliveryMode" kind="eea" :readonly="readonly"></delivery-mode-edit>
    <system-edit v-model="request.system" kind="eea" :readonly="readonly"></system-edit>
    <hold-edit v-model="request.hold" :readonly="readonly"></hold-edit>
    <execution-mode-edit v-model="request.executionMode" :readonly="readonly"></execution-mode-edit>
</div>
    `
})

Vue.component('foreign-transfer-non-eea-edit', {
    props: ['request', 'readonly'],
    template: `
<div v-if="request">
    <h2>Recipient</h2>
    <recipient-pis-foreign-edit v-model="request.recipient" :readonly="readonly"></recipient-pis-foreign-edit>
    <h2>Recipient Bank</h2>
    <bank-edit v-model="request.recipientBank" :readonly="readonly"></bank-edit>
    <h2>Sender</h2>
    <sender-pis-foreign-edit v-model="request.sender" :readonly="readonly"></sender-pis-foreign-edit>
    <h2>Transfer Data</h2>
    <transfer-data-edit v-model="request.transferData" :readonly="readonly"></transfer-data-edit>
    <transfer-charges-edit v-model="request.transferCharges" :readonly="readonly"></transfer-charges-edit>
    <tpp-transaction-id-edit v-model="request.tppTransactionId" :readonly="readonly"></tpp-transaction-id-edit>
    <delivery-mode-edit v-model="request.deliveryMode" kind="non-eea" :readonly="readonly"></delivery-mode-edit>
    <system-edit v-model="request.system" kind="non-eea" :readonly="readonly"></system-edit>
    <hold-edit v-model="request.hold" :readonly="readonly"></hold-edit>
    <execution-mode-edit v-model="request.executionMode" :readonly="readonly"></execution-mode-edit>
</div>
    `
})

Vue.component('tax-transfer-edit', {
    props: ['request', 'readonly'],
    template: `
<div v-if="request">
    <h2>Recipient</h2>
    <recipient-pis-edit v-model="request.recipient" :readonly="readonly"></recipient-pis-edit>
    <h2>Sender</h2>
    <sender-pis-domestic-edit v-model="request.sender" :readonly="readonly"></sender-pis-domestic-edit>
    <h2>Transfer Data</h2>
    <transfer-data-edit v-model="request.transferData" :readonly="readonly"></transfer-data-edit>
    <h2>Us Info</h2>
    <us-info-edit v-model="request.usInfo" :readonly="readonly"></us-info-edit>
    <tpp-transaction-id-edit v-model="request.tppTransactionId" :readonly="readonly"></tpp-transaction-id-edit>
    <delivery-mode-edit v-model="request.deliveryMode" kind="domestic" :readonly="readonly"></delivery-mode-edit>
    <system-edit v-model="request.system" kind="domestic" :readonly="readonly"></system-edit>
    <hold-edit v-model="request.hold" :readonly="readonly"></hold-edit>
    <execution-mode-edit v-model="request.executionMode" :readonly="readonly"></execution-mode-edit>
</div>
    `
})

Vue.component('bundle-transfers-edit', {
    props: ['request', 'readonly'],
    template: `
<div v-if="request">
    <tpp-bundle-id-edit v-model="request.tppBundleId" :readonly="readonly">
    </tpp-bundle-id-edit>
    <transfers-total-amount-edit v-model="request.transfersTotalAmount" :readonly="readonly">
    </transfers-total-amount-edit>
    <type-of-transfers-edit v-model="request.typeOfTransfers" :readonly="readonly">
    </type-of-transfers-edit>
    <h2>Domestic Transfers</h2>
    <transfers-edit class="mb-4" component="domestic-transfer-edit"
        v-model="request.domesticTransfers" :readonly="readonly">
    </transfers-edit>
    <h2>EEA Transfers</h2>
    <transfers-edit class="mb-4" component="foreign-transfer-eea-edit"
        v-model="request.EEATransfers" :readonly="readonly">
    </transfers-edit>
    <h2>Non EEA Transfers</h2>
    <transfers-edit class="mb-4" component="foreign-transfer-non-eea-edit"
        v-model="request.nonEEATransfers" :readonly="readonly">
    </transfers-edit>
    <h2>Tax Transfers</h2>
    <transfers-edit  class="mb-4" component="tax-transfer-edit"
        v-model="request.taxTransfers" :readonly="readonly">
    </transfers-edit>
</div>
    `
})

Vue.component('transfers-edit', {
    props: ['value', 'component', 'readonly'],
    template: `
<ul class="list-group">
    <li v-for="(item, index) in value" class="list-group-item">
        <component :is="component" :request="item" :readonly="readonly"></component>
        <button type="button" class="btn btn-primary" @click="doRemove(index)">
            Remove
        </button>
    </li>
    <li class="list-group-item">
        <button type="button" class="btn btn-primary" @click="doAdd()">
            Add
        </button>
    </li>
</ul>
`,
    methods: {
        doAdd() {
            if (this.value) {
                this.value.push({})
            } else {
                this.$emit('input',  [{}])
            }
        },
        doRemove(index: number) {
            this.value.splice(index, 1)
        }
    }
})

Vue.component('type-of-transfers-edit', {
    props: ['value', 'readonly'],
    template: `
<div class="form-group">
    <label for="typeOfTransfers">Type of Transfers</label>
    <select type="text" class="form-control" id="typeOfTransfers"
        :value="value" @input="$emit('input',$event.target.value)" :disabled="readonly">
        <option>domestic</option>
        <option>EEA</option>
        <option>nonEEA</option>
        <option>tax</option>
    </select>
</div>
`
})

Vue.component('transfers-total-amount-edit', {
    props: ['value', 'readonly'],
    template: `
<div class="form-group">
    <label for="transfersTotalAmount">Transfers Total Amount</label>
    <input type="text" class="form-control" id="transfersTotalAmount"
        :value="value" @input="$emit('input',$event.target.value)" :readonly="readonly"/>
</div>
`
})

Vue.component('tpp-bundle-id-edit', {
    props: ['value', 'readonly'],
    template: `
<div class="form-group">
    <label for="tppBundleId">Tpp Bundle Id</label>
    <input type="text" class="form-control" id="tppBundleId"
        :value="value" @input="$emit('input',$event.target.value)" :readonly="readonly"/>
</div>
`
})

Vue.component('transfer-charges-edit', {
    props: ['value', 'readonly'],
    template: `
<div class="form-group">
    <label for="transferCharges">Transfer Charges</label>
    <input type="text" class="form-control" id="transferCharges"
        :value="value" @input="$emit('input',$event.target.value)" :readonly="readonly"/>
</div>
`
})

Vue.component('tpp-transaction-id-edit', {
    props: ['value', 'readonly'],
    template: `
<div class="form-group">
    <label for="tppTransactionId">Tpp Transaction Id</label>
    <input type="text" class="form-control" id="tppTransactionId"
        :value="value" @input="$emit('input',$event.target.value)" :readonly="readonly"/>
</div>
`
})

Vue.component('hold-edit', {
    props: ['value', 'readonly'],
    template: `
<div class="form-group">
    <label for="hold">Hold</label>
    <input type="checkbox" class="form-control" id="hold"
        :checked="value" @input="$emit('input',$event.target.checked)" :readonly="readonly"/>
</div>
`
})
