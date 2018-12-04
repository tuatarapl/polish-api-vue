import Vue from 'vue'
Vue.component('domestic-transfer-edit', {
    props: ['privilege', 'readonly'],
    template: `
<div v-if="privilege">
    <h2>Recipient</h2>
    <recipient-pis-edit v-model="privilege.recipient" :readonly="readonly"></recipient-pis-edit>
    <h2>Sender</h2>
    <sender-pis-domestic-edit v-model="privilege.sender" :readonly="readonly"></sender-pis-domestic-edit>
    <h2>Transfer Data</h2>
    <transfer-data-edit v-model="privilege.transferData" :readonly="readonly"></transfer-data-edit>
    <tpp-transaction-id-edit v-model="privilege.tppTransactionId" :readonly="readonly"></tpp-transaction-id-edit>
    <delivery-mode-edit v-model="privilege.deliveryMode" kind="domestic" :readonly="readonly"></delivery-mode-edit>
    <system-edit v-model="privilege.system" kind="domestic" :readonly="readonly"></system-edit>
    <hold-edit v-model="privilege.hold" :readonly="readonly"></hold-edit>
    <execution-mode-edit v-model="privilege.executionMode" :readonly="readonly"></execution-mode-edit>
</div>
    `
})

Vue.component('foreign-transfer-eea-edit', {
    props: ['privilege', 'readonly'],
    template: `
<div v-if="privilege">
    <h2>Recipient</h2>
    <recipient-pis-foreign-edit v-model="privilege.recipient" :readonly="readonly"></recipient-pis-foreign-edit>
    <h2>Sender</h2>
    <sender-pis-foreign-edit v-model="privilege.sender" :readonly="readonly"></sender-pis-foreign-edit>
    <h2>Transfer Data</h2>
    <transfer-data-edit v-model="privilege.transferData" :readonly="readonly"></transfer-data-edit>
    <tpp-transaction-id-edit v-model="privilege.tppTransactionId" :readonly="readonly"></tpp-transaction-id-edit>
    <delivery-mode-edit v-model="privilege.deliveryMode" kind="eea" :readonly="readonly"></delivery-mode-edit>
    <system-edit v-model="privilege.system" kind="eea" :readonly="readonly"></system-edit>
    <hold-edit v-model="privilege.hold" :readonly="readonly"></hold-edit>
    <execution-mode-edit v-model="privilege.executionMode" :readonly="readonly"></execution-mode-edit>
</div>
    `
})

Vue.component('foreign-transfer-non-eea-edit', {
    props: ['privilege', 'readonly'],
    template: `
<div v-if="privilege">
    <h2>Recipient</h2>
    <recipient-pis-foreign-edit v-model="privilege.recipient" :readonly="readonly"></recipient-pis-foreign-edit>
    <h2>Recipient Bank</h2>
    <bank-edit v-model="privilege.recipientBank" :readonly="readonly"></bank-edit>
    <h2>Sender</h2>
    <sender-pis-foreign-edit v-model="privilege.sender" :readonly="readonly"></sender-pis-foreign-edit>
    <h2>Transfer Data</h2>
    <transfer-data-edit v-model="privilege.transferData" :readonly="readonly"></transfer-data-edit>
    <transfer-charges-edit v-model="privilege.transferCharges" :readonly="readonly"></transfer-charges-edit>
    <tpp-transaction-id-edit v-model="privilege.tppTransactionId" :readonly="readonly"></tpp-transaction-id-edit>
    <delivery-mode-edit v-model="privilege.deliveryMode" kind="non-eea" :readonly="readonly"></delivery-mode-edit>
    <system-edit v-model="privilege.system" kind="non-eea" :readonly="readonly"></system-edit>
    <hold-edit v-model="privilege.hold" :readonly="readonly"></hold-edit>
    <execution-mode-edit v-model="privilege.executionMode" :readonly="readonly"></execution-mode-edit>
</div>
    `
})

Vue.component('tax-transfer-edit', {
    props: ['privilege', 'readonly'],
    template: `
<div v-if="privilege">
    <h2>Recipient</h2>
    <recipient-pis-edit v-model="privilege.recipient" :readonly="readonly"></recipient-pis-edit>
    <h2>Sender</h2>
    <sender-pis-domestic-edit v-model="privilege.sender" :readonly="readonly"></sender-pis-domestic-edit>
    <h2>Transfer Data</h2>
    <transfer-data-edit v-model="privilege.transferData" :readonly="readonly"></transfer-data-edit>
    <h2>Us Info</h2>
    <us-info-edit v-model="privilege.usInfo" :readonly="readonly"></us-info-edit>
    <tpp-transaction-id-edit v-model="privilege.tppTransactionId" :readonly="readonly"></tpp-transaction-id-edit>
    <delivery-mode-edit v-model="privilege.deliveryMode" kind="domestic" :readonly="readonly"></delivery-mode-edit>
    <system-edit v-model="privilege.system" kind="domestic" :readonly="readonly"></system-edit>
    <hold-edit v-model="privilege.hold" :readonly="readonly"></hold-edit>
    <execution-mode-edit v-model="privilege.executionMode" :readonly="readonly"></execution-mode-edit>
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
