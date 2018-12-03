import Vue from 'vue'
Vue.component('consent-view', {
    props: ['consent'],
    template: `
<dl class="row" v-if="consent">
    <dt class="col-sm-3">Scope Group Type</dt>
    <dd class="col-sm-9">{{consent.scope_details.scopeGroupType}}</dd>

    <template v-if="consent.scope_details.privilegeList.length">
        <dt class="col-sm-3">Privilege List</dt>
        <dd class="col-sm-9">
            <dl class="row"  v-for="privilege in consent.scope_details.privilegeList">
                <dt class="col-sm-3">Account Number</dt>
                <dd class="col-sm-9">{{privilege.accountNumber}}</dd>

                <template v-if="consent.scope_details.scopeGroupType === 'ais-accounts'
                    && privilege['ais-accounts:getAccounts']">
                    <dt class="col-sm-3">Get Accounts</dt>
                    <dd class="col-sm-9">
                        <privilege-ais-aspsp-in-simple-view :privilege="privilege['ais-accounts:getAccounts']">
                        </privilege-ais-aspsp-in-simple-view>
                    </dd>
                </template>

                <template v-if="consent.scope_details.scopeGroupType === 'ais'
                    && privilege['ais:getAccount']">
                    <dt class="col-sm-3">Get Account</dt>
                    <dd class="col-sm-9">
                        <privilege-ais-aspsp-in-simple-view :privilege="privilege['ais:getAccount']">
                        </privilege-ais-aspsp-in-simple-view>
                    </dd>
                </template>

                <template v-if="consent.scope_details.scopeGroupType === 'ais'
                    && privilege['ais:getHolds']">
                    <dt class="col-sm-3">Get Holds</dt>
                    <dd class="col-sm-9">
                        <privilege-ais-aspsp-in-view :privilege="privilege['ais:getHolds']">
                        </privilege-ais-aspsp-in-view>
                    </dd>
                </template>

                <template v-if="consent.scope_details.scopeGroupType === 'ais'
                    && privilege['ais:getTransactionsDone']">
                    <dt class="col-sm-3">Get Transactions Done</dt>
                    <dd class="col-sm-9">
                        <privilege-ais-aspsp-in-view :privilege="privilege['ais:getTransactionsDone']">
                        </privilege-ais-aspsp-in-view>
                    </dd>
                </template>

                <template v-if="consent.scope_details.scopeGroupType === 'ais'
                    && privilege['ais:getTransactionsPending']">
                    <dt class="col-sm-3">Get Transactions Pending</dt>
                    <dd class="col-sm-9">
                        <privilege-ais-aspsp-in-view :privilege="privilege['ais:getTransactionsPending']">
                        </privilege-ais-aspsp-in-view>
                    </dd>
                </template>

                <template v-if="consent.scope_details.scopeGroupType === 'ais'
                    && privilege['ais:getTransactionsRejected']">
                    <dt class="col-sm-3">Get Transactions Rejected</dt>
                    <dd class="col-sm-9">
                        <privilege-ais-aspsp-in-view :privilege="privilege['ais:getTransactionsRejected']">
                        </privilege-ais-aspsp-in-view>
                    </dd>
                </template>

                <template v-if="consent.scope_details.scopeGroupType === 'ais'
                    && privilege['ais:getTransactionsCancelled']">
                    <dt class="col-sm-3">Get Transactions Cancelled</dt>
                    <dd class="col-sm-9">
                        <privilege-ais-aspsp-in-view :privilege="privilege['ais:getTransactionsCancelled']">
                        </privilege-ais-aspsp-in-view>
                    </dd>
                </template>

                <template v-if="consent.scope_details.scopeGroupType === 'ais'
                    && privilege['ais:getTransactionsScheduled']">
                    <dt class="col-sm-3">Get Transactions Scheduled</dt>
                    <dd class="col-sm-9">
                        <privilege-ais-aspsp-in-view :privilege="privilege['ais:getTransactionsScheduled']">
                        </privilege-ais-aspsp-in-view>
                    </dd>
                </template>

                <template v-if="consent.scope_details.scopeGroupType === 'ais'
                    && privilege['ais:getTransactionDetail']">
                    <dt class="col-sm-3">Get Transaction Detail</dt>
                    <dd class="col-sm-9">
                        <privilege-ais-aspsp-in-simple-view :privilege="privilege['ais:getTransactionDetail']">
                        </privilege-ais-aspsp-in-simple-view>
                    </dd>
                </template>
            </dl>
        </dd>
    </template>

    <dt class="col-sm-3">Scope Time Limit</dt>
    <dd class="col-sm-9">{{consent.scope_details.scopeTimeLimit}}</dd>

    <dt class="col-sm-3">Scope Time Duration</dt>
    <dd class="col-sm-9">{{consent.scope_details.scopeTimeDuration}}</dd>

    <dt class="col-sm-3">Consent Id</dt>
    <dd class="col-sm-9">{{consent.scope_details.consentId}}</dd>

    <dt class="col-sm-3">Throttling Policy</dt>
    <dd class="col-sm-9">{{consent.scope_details.throttlingPolicy}}</dd>
</dl>
`
})

Vue.component('privilege-section-view-wrapper', {
    props: ['privilege', 'label', 'component'],
    template: `
<dl class="row" v-if="privilege">
    <dt class="col-sm-3">{{label}}</dt>
    <dd class="col-sm-9"><component :is="component" :privilege="privilege"></component></dd>
</dl>
    `
})

Vue.component('privilege-ais-aspsp-in-simple-view', {
    props: ['privilege', 'readonly'],
    template: `
<dl class="row" v-if="privilege">
    <dt class="col-sm-4">Scope Usage Limit</dt>
    <dd class="col-sm-8">{{privilege.scopeUsageLimit}}</dd>
</dl>
    `
})
Vue.component('privilege-ais-aspsp-in-view', {
    props: ['privilege', 'readonly'],
    template: `
<dl class="row" v-if="privilege">
    <dt class="col-sm-4">Scope Usage Limit</dt>
    <dd class="col-sm-8">{{privilege.scopeUsageLimit}}</dd>

    <dt class="col-sm-4">Max Allowed History Long</dt>
    <dd class="col-sm-8">{{privilege.maxAllowedHistoryLong}}</dd>
</dl>
    `
})

Vue.component('consent-edit', {
    props: ['consent', 'readonly', 'accounts'],
    template: `
<form class="form-group">
    <div class="form-group">
        <label for="scopeGroupType">Scope Group Type</label>
        <select class="form-control" id="scopeGroupType" v-model="consent.scope_details.scopeGroupType"
            @change="consent.scope = $event.target.value" :disabled="readonly">
            <option v-for="scopeGroupType in scopeGroupTypes">{{scopeGroupType}}</option>
        </select>
    </div>
    <div class="form-group" v-if="!readonly || consent.scope_details.privilegeList.length">
        <label for="privilegeList">Privilege List</label>
        <ul class="list-group">
            <li class="list-group-item" v-for="(privilege,index) in consent.scope_details.privilegeList">
                <div class="form-group">
                    <label :for="'accountNumber_'+index">Account Number</label>
                    <select class="form-control" :id="'accountNumber_'+index" v-if="accounts"
                        v-model="privilege.accountNumber" :disabled="readonly">
                        <option v-for="account in accounts" :value="account.accountNumber">
                            {{account.accountNumber}} {{account.accountTypeName}} {{account.accountNameClient}}
                        </option>
                    </select>
                    <input type="text" class="form-control" :id="'accountNumber_'+index"
                        v-model="privilege.accountNumber" :readonly="readonly" v-else/>
                </div>
                <privilege-section-wrapper v-if="consent.scope_details.scopeGroupType === 'ais-accounts'"
                    :privilege="privilege"
                    label="Get Accounts"
                    section="ais-accounts:getAccounts"
                    component="privilege-ais-aspsp-in-simple-edit"
                    :readonly="readonly">
                </privilege-section-wrapper>
                <privilege-section-wrapper v-if="consent.scope_details.scopeGroupType === 'ais'"
                    :privilege="privilege"
                    label="Get Account"
                    section="ais:getAccount"
                    component="privilege-ais-aspsp-in-simple-edit"
                    :readonly="readonly">
                </privilege-section-wrapper>
                <privilege-section-wrapper v-if="consent.scope_details.scopeGroupType === 'ais'"
                    :privilege="privilege"
                    label="Get Holds"
                    section="ais:getHolds"
                    component="privilege-ais-aspsp-in-edit"
                    :readonly="readonly">
                </privilege-section-wrapper>
                <privilege-section-wrapper v-if="consent.scope_details.scopeGroupType === 'ais'"
                    :privilege="privilege"
                    label="Get Transactions Done"
                    section="ais:getTransactionsDone"
                    component="privilege-ais-aspsp-in-edit"
                    :readonly="readonly">
                </privilege-section-wrapper>
                <privilege-section-wrapper v-if="consent.scope_details.scopeGroupType === 'ais'"
                    :privilege="privilege"
                    label="Get Transactions Pending"
                    section="ais:getTransactionsPending"
                    component="privilege-ais-aspsp-in-edit"
                    :readonly="readonly">
                </privilege-section-wrapper>
                <privilege-section-wrapper v-if="consent.scope_details.scopeGroupType === 'ais'"
                    :privilege="privilege"
                    label="Get Transactions Rejected"
                    section="ais:getTransactionsRejected"
                    component="privilege-ais-aspsp-in-edit"
                    :readonly="readonly">
                </privilege-section-wrapper>
                <privilege-section-wrapper v-if="consent.scope_details.scopeGroupType === 'ais'"
                    :privilege="privilege"
                    label="Get Transactions Cancelled"
                    section="ais:getTransactionsCancelled"
                    component="privilege-ais-aspsp-in-edit"
                    :readonly="readonly">
                </privilege-section-wrapper>
                <privilege-section-wrapper v-if="consent.scope_details.scopeGroupType === 'ais'"
                    :privilege="privilege"
                    label="Get Transactions Scheduled"
                    section="ais:getTransactionsScheduled"
                    component="privilege-ais-aspsp-in-edit"
                    :readonly="readonly">
                </privilege-section-wrapper>
                <privilege-section-wrapper v-if="consent.scope_details.scopeGroupType === 'ais'"
                    :privilege="privilege"
                    label="Get Transaction Detail"
                    section="ais:getTransactionDetail"
                    component="privilege-ais-aspsp-in-simple-edit"
                    :readonly="readonly">
                </privilege-section-wrapper>
                <privilege-section-wrapper v-if="consent.scope_details.scopeGroupType === 'pis'"
                    :privilege="privilege"
                    label="Domestic Transfer"
                    section="pis:domestic"
                    component="privilege-domestic-transfer-edit"
                    :readonly="readonly">
                </privilege-section-wrapper>
                <privilege-section-wrapper v-if="consent.scope_details.scopeGroupType === 'pis'"
                    :privilege="privilege"
                    label="EEA Transfer"
                    section="pis:eea"
                    component="privilege-foreign-transfer-eea-edit"
                    :readonly="readonly">
                </privilege-section-wrapper>
                <privilege-section-wrapper v-if="consent.scope_details.scopeGroupType === 'pis'"
                    :privilege="privilege"
                    label="Non EEA Transfer"
                    section="pis:nonEEA"
                    component="privilege-foreign-transfer-non-eea-edit"
                    :readonly="readonly">
                </privilege-section-wrapper>
                <privilege-section-wrapper v-if="consent.scope_details.scopeGroupType === 'pis'"
                    :privilege="privilege"
                    label="Tax Transfer"
                    section="pis:tax"
                    component="privilege-tax-transfer-edit"
                    :readonly="readonly">
                </privilege-section-wrapper>
                <privilege-section-wrapper v-if="consent.scope_details.scopeGroupType === 'pis'"
                    :privilege="privilege"
                    label="Cancel Payment"
                    section="pis:cancelPayment"
                    component="privilege-cancel-payment-edit"
                    :readonly="readonly">
                </privilege-section-wrapper>
                <privilege-section-wrapper v-if="consent.scope_details.scopeGroupType === 'pis'"
                    :privilege="privilege"
                    label="Bundle Transfers"
                    section="pis:bundle"
                    component="privilege-bundle-transfers-edit"
                    :readonly="readonly">
                </privilege-section-wrapper>
                <button type="button" class="btn btn-primary" @click="doDeletePrivilege(index)" v-if="!readonly">
                    Delete
                </button>
            </li>
            <li class="list-group-item" v-if="!readonly">
                <button type="button" class="btn btn-primary" @click="doAddPrivilege()" >Add</button>
            </li>
        </ul>
    </div>
    <div class="form-group">
        <label for="scopeTimeDuration">Scope Time Limit</label>
        <input type="datetime-local" class="form-control" id="scopeTimeLimit"
            v-model="consent.scope_details.scopeTimeLimit" :readonly="readonly"/>
    </div>
    <div class="form-group">
        <label for="scopeTimeDuration">Scope Time Duration</label>
        <input type="number" class="form-control" id="scopeTimeDuration"
            v-model.number="consent.scope_details.scopeTimeDuration" :readonly="readonly"/>
    </div>
    <div class="form-group">
        <label for="consentId">Consent Id</label>
        <input type="text" class="form-control" id="consentId" v-model="consent.scope_details.consentId"
        :readonly="readonly"/>
    </div>
    <div class="form-group">
        <label for="throttlingPolicy">Throttling Policy</label>
        <select class="form-control" id="session" v-model="consent.scope_details.throttlingPolicy" :disabled="readonly">
            <option v-for="throttlingPolicy in throttlingPolicies">{{throttlingPolicy}}</option>
        </select>
    </div>
</form>
    `,
    data() {
        return {
            scopeGroupTypes: ['ais-accounts', 'ais', 'pis'],
            throttlingPolicies: ['psd2Regulatory'],
            scopes: ['ais-accounts', 'ais', 'pis']
        }
    },
    methods: {
        doAddSection(target, section, value) {
            Vue.set(target, section, value)
        },
        doRemoveSection(target, section) {
            Vue.delete(target, section)
        },
        doAddPrivilege() {
            this.consent.scope_details.privilegeList.push({})
        },
        doDeletePrivilege(index) {
            this.consent.scope_details.privilegeList.splice(index, 1)
        }
    }
})

Vue.component('privilege-section-wrapper', {
    props: ['privilege', 'label', 'section', 'component', 'readonly'],
    template: `
<div>
    <h4 v-if="!readonly || privilege[section]">{{label}}
    <button type="button" class="btn btn-primary" v-if="!privilege[section] && !readonly"
        @click="doAddSection(privilege,section,{})">Add</button>
    <button type="button" class="btn btn-primary" v-if="privilege[section] && !readonly"
        @click="doRemoveSection(privilege,section)">Delete</button>
    </h4>
    <component :is="component" :privilege="privilege[section]" :readonly="readonly"></component>
</div>
    `,
    methods: {
        doAddSection(target, section, value) {
            Vue.set(target, section, value)
        },
        doRemoveSection(target, section) {
            Vue.delete(target, section)
        }
    }
})

Vue.component('privilege-ais-aspsp-in-simple-edit', {
    props: ['privilege', 'readonly'],
    template: `
<div v-if="privilege">
    <scope-usage-limit-edit v-model="privilege.scopeUsageLimit" :readonly="readonly"></scope-usage-limit-edit>
</div>
    `
})
Vue.component('privilege-ais-aspsp-in-edit', {
    props: ['privilege', 'readonly'],
    template: `
<div v-if="privilege">
    <scope-usage-limit-edit v-model="privilege.scopeUsageLimit" :readonly="readonly"></scope-usage-limit-edit>
    <div class="form-group">
        <label for="maxAllowedHistoryLong">Max Allowed History Long</label>
        <input type="number" class="form-control" id="maxAllowedHistoryLong"
            v-model.number="privilege.maxAllowedHistoryLong" min="1" max="1460" :readonly="readonly"/>
    </div>
</div>
    `
})

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
        <recurrence-edit v-model="value.recurrence"></recurrence-edit>
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
            <label for="payorIdType">Payor Id< Type</label>
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

Vue.component('scope-usage-limit-edit', {
    props: ['value', 'readonly'],
    template: `
<div class="form-group">
    <label for="scopeUsageLimit">Scope Usage Limit</label>
    <select class="form-control" id="scopeUsageLimit" :value="value"
        @input="$emit('input',$event.target.value)" :disabled="readonly">
        <option>single</option>
        <option>multiple</option>
    </select>
</div>
`
})

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
