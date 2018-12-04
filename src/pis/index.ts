import Vue from 'vue'
import './edit'
import './view'
Vue.component('recipient-pis-edit', {
    props: ['value', 'readonly'],
    template: `
<div class="ml-4">
    <template v-if="value">
        <div class="form-group">
            <label for="accountNumber">Account Number</label>
            <input type="text" class="form-control" id="accountNumber" v-model="value.accountNumber"
                :readonly="readonly"/>
        </div>
        <div class="form-group">
            <label for="nameAddress">Name Address</label>
            <input type="text" class="form-control" id="accountNumber"
                v-model="value.nameAddress.value[0]" :readonly="readonly"/>
            <input type="text" class="form-control" id="accountNumber"
                v-model="value.nameAddress.value[1]" :readonly="readonly"/>
            <input type="text" class="form-control" id="accountNumber"
                v-model="value.nameAddress.value[2]" :readonly="readonly"/>
            <input type="text" class="form-control" id="accountNumber"
                v-model="value.nameAddress.value[3]" :readonly="readonly"/>
        </div>
    </template>
    <button type="button" class="btn btn-primary" @click="doInitialize()" v-if="!readonly && !value">
        Initialize
    </button>
</div>
`,
    methods: {
        doInitialize() {
            this.$emit('input', {nameAddress: {value: []}})
        }
    }
})

Vue.component('recipient-pis-foreign-edit', {
    props: ['value', 'readonly'],
    template: `
<div class="ml-4">
    <template v-if="value">
        <div class="form-group">
            <label for="accountNumber">Account Number</label>
            <input type="text" class="form-control" id="accountNumber" v-model="value.accountNumber"
                :readonly="readonly"/>
        </div>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" v-model="value.name"
                :readonly="readonly"/>
        </div>
        <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" id="address_0"
                v-model="value.address[0]" :readonly="readonly"/>
            <input type="text" class="form-control" id="address_1"
                v-model="value.address[1]" :readonly="readonly"/>
            <input type="text" class="form-control" id="address_2"
                v-model="value.address[2]" :readonly="readonly"/>
            <input type="text" class="form-control" id="address_3"
                v-model="value.address[3]" :readonly="readonly"/>
        </div>
    </template>
    <button type="button" class="btn btn-primary" @click="doInitialize()" v-if="!readonly && !value">
        Initialize
    </button>
</div>
`,
    methods: {
        doInitialize() {
            this.$emit('input', {address: []})
        }
    }
})

Vue.component('sender-pis-domestic-edit', {
    props: ['value', 'readonly'],
    template: `
<div class="ml-4">
    <template v-if="value">
        <div class="form-group">
            <label for="accountNumber">Account Number</label>
            <input type="text" class="form-control" id="accountNumber"
                v-model="value.accountNumber" :readonly="readonly"/>
        </div>
        <div class="form-group">
            <label for="nameAddress">Name Address</label>
            <input type="text" class="form-control" id="accountNumber"
                v-model="value.nameAddress.value[0]" :readonly="readonly"/>
            <input type="text" class="form-control" id="accountNumber"
                v-model="value.nameAddress.value[1]" :readonly="readonly"/>
            <input type="text" class="form-control" id="accountNumber"
                v-model="value.nameAddress.value[2]" :readonly="readonly"/>
            <input type="text" class="form-control" id="accountNumber"
                v-model="value.nameAddress.value[3]" :readonly="readonly"/>
        </div>
    </template>
    <button type="button" class="btn btn-primary" @click="doInitialize()" v-if="!readonly && !value">
        Initialize
    </button>
</div>
`,
    methods: {
        doInitialize() {
            this.$emit('input', {nameAddress: {value: []}})
        }
    }
})

Vue.component('sender-pis-foreign-edit', {
    props: ['value', 'readonly'],
    template: `
<div class="ml-4">
    <template v-if="value">
        <div class="form-group">
            <label for="accountNumber">Account Number</label>
            <input type="text" class="form-control" id="accountNumber"
                v-model="value.accountNumber" :readonly="readonly"/>
        </div>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" v-model="value.name" :readonly="readonly"/>
        </div>
    </template>
    <button type="button" class="btn btn-primary" @click="doInitialize()" v-if="!readonly && !value">
        Initialize
    </button>
</div>
`,
    methods: {
        doInitialize() {
            this.$emit('input', {})
        }
    }
})

Vue.component('frequency-edit', {
    props: ['value', 'readonly'],
    template: `
<div class="ml-4">
    <template v-if="value">
        <div class="form-group">
            <label for="periodType">Period Type</label>
            <select type="text" class="form-control" id="periodType"
                v-model="value.periodType" :disabled="readonly">
                <option>day</option>
                <option>week</option>
                <option>month</option>
            </select>
        </div>
        <div class="form-group">
            <label for="periodValue">Period Value</label>
            <input type="text" class="form-control" id="periodValue"
                v-model.number="value.periodValue" :readonly="readonly"/>
        </div>
    </template>
    <button type="button" class="btn btn-primary" @click="doInitialize()" v-if="!readonly && !value">
        Initialize
    </button>
</div>
`,
    methods: {
        doInitialize() {
            this.$emit('input', {})
        }
    }
})

Vue.component('recurrence-edit', {
    props: ['value', 'readonly'],
    template: `
<div class="ml-4">
    <template v-if="value">
        <div class="form-group">
            <label for="startDate">Start Date</label>
            <input type="date" class="form-control" id="startDate"
                v-model="value.startDate" :readonly="readonly"/>
        </div>
        <h4>Frequency</h4>
        <frequency-edit v-model="value.frequency"></frequency-edit>
        <div class="form-group">
            <label for="endDate">End Date</label>
            <input type="date" class="form-control" id="endDate"
                v-model="value.endDate" :readonly="readonly"/>
        </div>
        <div class="form-group">
            <label for="dayOffOffsetType">Day Offset Type</label>
            <select type="text" class="form-control" id="dayOffOffsetType"
                v-model="value.dayOffOffsetType" :disabled="readonly">
                <option>before</option>
                <option>after</option>
            </select>
        </div>
    </template>
    <button type="button" class="btn btn-primary" @click="doInitialize()" v-if="!readonly && !value">
        Initialize
    </button>
</div>
`,
    methods: {
        doInitialize() {
            this.$emit('input', {})
        }
    }
})

Vue.component('transfer-data-edit', {
    props: ['value', 'readonly'],
    template: `
<div class="ml-4">
    <template v-if="value">
        <div class="form-group">
            <label for="description">Description</label>
            <input type="text" class="form-control" id="description"
                v-model="value.description" :readonly="readonly"/>
        </div>
        <div class="form-group">
            <label for="amount">Amount</label>
            <input type="text" class="form-control" id="amount"
                v-model="value.amount" :readonly="readonly"/>
        </div>
        <div class="form-group">
            <label for="executionDate">Execution Date</label>
            <input type="date" class="form-control" id="executionDate"
                v-model="value.executionDate" :readonly="readonly"/>
        </div>
        <h3>Recurrence</h3>
        <recurrence-edit v-model="value.recurrence" :readonly="readonly"></recurrence-edit>
        <div class="form-group">
            <label for="currency">Currency</label>
            <input type="text" class="form-control" id="currency"
                v-model="value.currency" :readonly="readonly"/>
        </div>
    </template>
    <button type="button" class="btn btn-primary" @click="doInitialize()" v-if="!readonly && !value">
        Initialize
    </button>
</div>
`,
    methods: {
        doInitialize() {
            this.$emit('input', {})
        }
    }
})

Vue.component('bank-edit', {
    props: ['value', 'readonly'],
    template: `
<div class="ml-4">
    <template v-if="value">
        <div class="form-group">
            <label for="bicOrSwift">BIC or SWIFT</label>
            <input type="text" class="form-control" id="bicOrSwift"
                v-model="value.bicOrSwift" :readonly="readonly"/>
        </div>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name"
                v-model="value.name" :readonly="readonly"/>
        </div>
        <div class="form-group">
            <label for="code">Code</label>
            <input type="text" class="form-control" id="code"
                v-model="value.code" :readonly="readonly"/>
        </div>
        <div class="form-group">
            <label for="countryCode">Country Code</label>
            <input type="text" class="form-control" id="countryCode"
                v-model="value.countryCode" :readonly="readonly"/>
        </div>
        <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" id="address_0"
                v-model="value.address[0]" :readonly="readonly"/>
            <input type="text" class="form-control" id="address_1"
                v-model="value.address[1]" :readonly="readonly"/>
            <input type="text" class="form-control" id="address_2"
                v-model="value.address[2]" :readonly="readonly"/>
            <input type="text" class="form-control" id="address_3"
                v-model="value.address[3]" :readonly="readonly"/>
        </div>
    </template>
    <button type="button" class="btn btn-primary" @click="doInitialize()" v-else>
        Initialize
    </button>
</div>
`,
    methods: {
        doInitialize() {
            this.$emit('input',  {
                address: []
            })
        }
    }
})

Vue.component('us-info-edit', {
    props: ['value', 'readonly'],
    template: `
<div class="ml-4">
    <template v-if="value">
        <div class="form-group">
            <label for="bicOrSwift">Payor Id</label>
            <input type="text" class="form-control" id="bicOrSwift"
                v-model="value.payerInfo.payorId" :readonly="readonly"/>
        </div>
        <div class="form-group">
            <label for="payorIdType">Payor Id Type</label>
            <select type="text" class="form-control" id="payorIdType"
                v-model="value.payerInfo.payorIdType" :disabled="readonly">
                <option>N</option>
                <option>P</option>
                <option>R</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>
        <div class="form-group">
            <label for="formCode">Form Code</label>
            <input type="text" class="form-control" id="formCode"
                v-model="value.formCode" :readonly="readonly"/>
        </div>
        <div class="form-group">
            <label for="periodId">Period Id</label>
            <input type="text" class="form-control" id="periodId"
                v-model="value.periodId" :readonly="readonly"/>
        </div>
        <div class="form-group">
            <label for="periodType">Period Type</label>
            <input type="text" class="form-control" id="periodType"
                v-model="value.periodType" :readonly="readonly"/>
        </div>
        <div class="form-group">
            <label for="year">Year</label>
            <input type="number" class="form-control" id="year"
                v-model.number="value.year" :readonly="readonly"/>
        </div>
        <div class="form-group">
            <label for="obligationId">Obligation Id</label>
            <input type="text" class="form-control" id="obligationId"
                v-model="value.obligationId" :readonly="readonly"/>
        </div>
    </template>
    <button type="button" class="btn btn-primary" @click="doInitialize()" v-else>
        Initialize
    </button>
</div>
`,
    methods: {
        doInitialize() {
            this.$emit('input',   {
                payerInfo: {}
            })
        }
    }
})

Vue.component('delivery-mode-edit', {
    props: ['value', 'kind', 'readonly'],
    template: `
<div class="form-group">
    <label for="deliveryMode">Delivery Mode</label>
    <select type="text" class="form-control" id="deliveryMode"
        :value="value" @input="$emit('input',$event.target.value)" :disabled="readonly">
        <template v-if="kind == 'domestic' || kind == 'eea' || kind == 'tax'">
            <option>ExpressD0</option>
            <option>StandardD1</option>
        </template>
        <template v-if="kind == 'non-eea'">
            <option>ExpressD0</option>
            <option>UrgentD1</option>
            <option>StandardD2</option>
        </template>
    </select>
</div>
`
})

Vue.component('system-edit', {
    props: ['value', 'kind', 'readonly'],
    template: `
<div class="form-group">
    <label for="system">System</label>
    <select type="text" class="form-control" id="system"
        :value="value" @input="$emit('input',$event.target.value)" :disabled="readonly">
        <template v-if="kind == 'domestic'">
            <option>Elixir</option>
            <option>ExpressElixir</option>
            <option>Sorbnet</option>
            <option>BlueCash</option>
            <option>Internal</option>
        </template>
        <template v-if="kind == 'eea'">
            <option>SEPA</option>
            <option>InstantSEPA</option>
            <option>Target</option>
        </template>
        <template v-if="kind == 'non-eea'">
            <option>Swift</option>
        </template>
        <template v-if="kind == 'tax'">
            <option>Elixir</option>
            <option>ExpressElixir</option>
        </template>
    </select>
</div>
`
})

Vue.component('execution-mode-edit', {
    props: ['value', 'readonly'],
    template: `
<div class="form-group">
    <label for="executionMode">Execution Mode</label>
    <select type="text" class="form-control" id="executionMode"
        :value="value" @input="$emit('input',$event.target.value)" :disabled="readonly">
        <option>Immediate</option>
        <option>FutureDated</option>
        <option>Recurring</option>
    </select>
</div>
`
})
