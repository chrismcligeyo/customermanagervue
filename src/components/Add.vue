<template>
    <div class="add container">
        <Alert v-if="alert" v-bind:message="alert" /><!--display only if there is an alet-->
        <h1 class="page-header">Add Customer</h1>
        <form v-on:submit="addCustomer">
            <div class="well">
                <h4>Customer Info</h4>
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" placeholder="First Name" v-model="customer.first_name">
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" placeholder="Last Name" v-model="customer.last_name">
                </div>
            </div>
            <div class="well">
                <h4>Customer Contact</h4>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" placeholder="Email" v-model="customer.email">
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" placeholder="Phone" v-model="customer.phone">
                </div>
            </div>

            <div class="well">
                <h4>Customer Location</h4>
                <div class="form-group">
                    <label>Address</label>
                    <input type="text" class="form-control" placeholder="Address" v-model="customer.address">
                </div>
                <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" placeholder="City" v-model="customer.city">
                </div>
                <div class="form-group">
                    <label>State</label>
                    <input type="text" class="form-control" placeholder="State" v-model="customer.state">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>

    export default {
        name: 'add',
        data () {
            return {
                customer: {},

            }
        },
        methods: {
            addCustomer(e){
                //console.log(123);
                //simple validation
                if(!this.customer.first_name || !this.customer.last_name || !this.customer.email){

                    console.log('Please fill in all required fields') ;
                } else {
                     //create object for allform fields
                    let newCustomer = {
                        first_name: this.customer.first_name,
                        last_name: this.customer.last_name,
                        phone: this.customer.phone,
                        email: this.customer.email,
                        address: this.customer.address,
                        city: this.customer.city,
                        state: this.customer.state
                    };
                    //make post request to api
                    this.$http.post('http://slimapp/api/customer/add', newCustomer)
                        // eslint-disable-next-line no-unused-vars
                        .then(function(response){
                            //redirect after creating post
                            this.$router.push({path: '/', query: {alert: 'Customer Added'}}); //query set here and displayed in ccustomers, loaded at created. when you add customer you will be directed tohomepage with msg customer added
                        });
                    e.preventDefault();
                }
                e.preventDefault();
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
