import { Customer } from './customer';

export class App {
    constructor(){
        this.heading = 'Customer Application Manager';
        this.customers = this.getCustomersFromStorage();
        this.customerName = '';
        this.customerEmail = '';
        this.customerPhone = '';
    }

    //retrieving customers
    getCustomersFromStorage(){
        let customers;
        if(localStorage.getItem('customers') === null){
            customers = [];
        } else{
            customers = JSON.parse(localStorage.getItem('customers'));
        }
    
        return customers;
    }

    //inserting new customer
    addCustomer() {
        if(this.customerName && this.customerEmail && this.customerPhone){
            //inserting new customer
            this.customers.push(new Customer(this.customerName, this.customerEmail, this.customerPhone));
            
            //store in Local Storage
            this.storeCustomer(this.customerName, this.customerEmail, this.customerPhone);
            //clearing customer form
            this.customerName = '';
            this.customerEmail = '';
            this.customerPhone = '';
        }
    }

    //storing customer
    storeCustomer(name, email, phone){
        let customers;
        if(localStorage.getItem('customers') === null){
            customers = [];
        } else{
            customers = JSON.parse(localStorage.getItem('customers'));
        }

        customers.push({name: name, email: email, phone: phone});
        localStorage.setItem('customers',JSON.stringify(customers));
    }

    //deleting customer
    removeCustomer(customer){
        let index = this.customers.indexOf(customer);
        if(index !== -1){
            this.customers.splice(index, 1);
        }

        this.removeCustomerFromStorage(index);
    }

    removeCustomerFromStorage(index){
        let customers = JSON.parse(localStorage.getItem('customers'));
        customers.splice(index, 1);
        localStorage.setItem('customers', JSON.stringify(customers));
    }
}