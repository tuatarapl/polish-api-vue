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

Vue.component('transfers-edit', {
    props: ['value', 'component', 'readonly'],
    template: `
<ul class="list-group">
    <li v-for="(item, index) in value" class="list-group-item">
        <component :is="component" :privilege="item" :readonly="readonly"></component>
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
    <div class="form-group">
        <label for="typeOfTransfers">Type of Transfers</label>
        <select type="text" class="form-control" id="typeOfTransfers"
            v-model="privilege.typeOfTransfers" :disabled="readonly">
            <option>domestic</option>
            <option>EEA</option>
            <option>nonEEA</option>
            <option>tax</option>
        </select>
        <h2>Domestic Transfers</h2>
        <transfers-edit class="mb-4" component="privilege-domestic-transfer-edit"
            v-model="privilege.domesticTransfers" :readonly="readonly">
        </transfers-edit>
        <h2>EEA Transfers</h2>
        <transfers-edit class="mb-4" component="privilege-foreign-transfer-eea-edit"
            v-model="privilege.EEATransfers" :readonly="readonly">
        </transfers-edit>
        <h2>Non EEA Transfers</h2>
        <transfers-edit class="mb-4" component="privilege-foreign-transfer-non-eea-edit"
            v-model="privilege.nonEEATransfers" :readonly="readonly">
        </transfers-edit>
        <h2>Tax Transfers</h2>
        <transfers-edit  class="mb-4" component="privilege-tax-transfer-edit"
            v-model="privilege.taxTransfers" :readonly="readonly">
        </transfers-edit>
    </div>
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
