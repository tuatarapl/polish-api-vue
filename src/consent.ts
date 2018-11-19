import Vue from 'vue'
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
    <div class="form-group">
        <label for="scopeUsageLimit">Scope Usage Limit</label>
        <select class="form-control" id="scopeUsageLimit" v-model="privilege.scopeUsageLimit" :disabled="readonly">
            <option v-for="scopeUsageLimit in scopeUsageLimits">{{scopeUsageLimit}}</option>
        </select>
    </div>
</div>
    `,
    data() {
        return {
            scopeUsageLimits: ['single', 'multiple']
        }
    }
})
Vue.component('privilege-ais-aspsp-in-edit', {
    props: ['privilege', 'readonly'],
    template: `
<div v-if="privilege">
    <div class="form-group">
        <label for="scopeUsageLimit">Scope Usage Limit</label>
        <select class="form-control" id="scopeUsageLimit" v-model="privilege.scopeUsageLimit" :disabled="readonly">
            <option v-for="scopeUsageLimit in scopeUsageLimits">{{scopeUsageLimit}}</option>
        </select>
    </div>
    <div class="form-group">
        <label for="maxAllowedHistoryLong">Max Allowed History Long</label>
        <input type="number" class="form-control" id="maxAllowedHistoryLong"
            v-model.number="privilege.maxAllowedHistoryLong" min="1" max="1460" :readonly="readonly"/>
    </div>
</div>
    `,
    data() {
        return {
            scopeUsageLimits: ['single', 'multiple']
        }
    }
})
