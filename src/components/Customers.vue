<template>
<div class="customers container">
    <Alert v-if="alert" v-bind:message="alert" /><!--message ispropin add-->
    <h1 class="page-header">Manage Customers</h1>
    <input class="form-control" placeholder="Enter Last Name" v-model="filterInput">
    <br>
    <table class="table table-striped">
        <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="customer in customers"  :key="customer"><!--loop through responseand display in table data-->
            <td>{{customer.first_name}}</td>
            <td>{{customer.last_name}}</td>
            <td>{{customer.email}}</td>
            <td><router-link class="btn btn-default" v-bind:to="'/customer/'+customer.id">View</router-link></td> <!--:to,we bind cause we are including variable-->
        </tr>
        </tbody>
    </table>
</div>
</template>

<script>
    import Alert from './Alert';
    export default {
        name: "customers",
        data(){
            return {
                customers: [],
                alert: '',
                filterInput: ''

            }
        },
        methods:{
            fetchCustomers(){
                this.$http.get('http://slimapp/api/customers')
                .then(function(response){

                    this.customers = response.body;//response is json, we want to pass it as json format to customers array in dataabove

                });

            }
        },
        //method to filter data in table
        filterBy(list, value){
            value = value.charAt(0).toUpperCase() + value.slice(1); //converts first letter to uppercase
            return list.filter(function(customer){
                return customer.last_name.indexOf(value) > -1;
            });
        },
        //add lifecycle hookcalled created. inthis hookwill initial method to get data from api
        created: function () {
            if(this.$route.query.alert){ //if there is query called alert,then display it when page loaded,
                this.alert = this.$route.query.alert;
            }
            this.fetchCustomers();
        },
        //fetchcustomers tobe called when updating occurs too.through created lifecycle

        updated: function(){
            this.fetchCustomers();
        },
        components: {
            Alert
        }

    }
</script>

<style scoped>

</style>
