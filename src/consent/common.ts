import Vue from 'vue'
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
                    section="pis:EEA"
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
                <template v-if="consent.scope_details.scopeGroupType === 'pis'
                    && privilege['pis:domestic']">
                    <dt class="col-sm-3">Domestic Transfer</dt>
                    <dd class="col-sm-9">
                        <privilege-domestic-transfer-view :privilege="privilege['pis:domestic']">
                        </privilege-domestic-transfer-view>
                    </dd>
                </template>
                <template v-if="consent.scope_details.scopeGroupType === 'pis'
                    && privilege['pis:EEA']">
                    <dt class="col-sm-3">EEA Transfer</dt>
                    <dd class="col-sm-9">
                        <privilege-foreign-transfer-eea-view :privilege="privilege['pis:EEA']">
                        </privilege-foreign-transfer-eea-view>
                    </dd>
                </template>
                <template v-if="consent.scope_details.scopeGroupType === 'pis'
                    && privilege['pis:nonEEA']">
                    <dt class="col-sm-3">Non EEA Transfer</dt>
                    <dd class="col-sm-9">
                        <privilege-foreign-transfer-non-eea-view :privilege="privilege['pis:nonEEA']">
                        </privilege-foreign-transfer-non-eea-view>
                    </dd>
                </template>
                <template v-if="consent.scope_details.scopeGroupType === 'pis'
                    && privilege['pis:tax']">
                    <dt class="col-sm-3">Tax Transfer</dt>
                    <dd class="col-sm-9">
                        <privilege-tax-transfer-view :privilege="privilege['pis:tax']">
                        </privilege-tax-transfer-view>
                    </dd>
                </template>
                <template v-if="consent.scope_details.scopeGroupType === 'pis'
                    && privilege['pis:cancelPayment']">
                    <dt class="col-sm-3">Cancel Payment</dt>
                    <dd class="col-sm-9">
                        <privilege-cancel-payment-view :privilege="privilege['pis:cancelPayment']">
                        </privilege-cancel-payment-view>
                    </dd>
                </template>
                <template v-if="consent.scope_details.scopeGroupType === 'pis'
                    && privilege['pis:bundle']">
                    <dt class="col-sm-3">Bundle Transfers</dt>
                    <dd class="col-sm-9">
                        <privilege-bundle-transfers-view :privilege="privilege['pis:bundle']">
                        </privilege-bundle-transfers-view>
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
