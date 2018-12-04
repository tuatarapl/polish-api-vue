import Vue from 'vue'
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
