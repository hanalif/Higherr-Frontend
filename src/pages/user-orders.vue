<template>
  <div class="user-orders-page">
    <div class="user-orders main-layout">
      <h1 class="user-orders-main-title main-title">{{this.user.fullname +`'s`}} orders</h1>
      <table class="user-orders-as-seller-container">
        <caption class="user-orders-main-title">
          My orders 
        </caption>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Created at</th>
            <th scope="col">Price</th>
            <th scope="col">Seller</th>
            <th scope="col">Contact seller</th>
          </tr>
        </thead>
        <tbody v-for="order in userAsBuyerOrders" :key="order._id">
          <tr>
            <td scope="row" data-label="Title">{{order.title}}</td>
            <td data-label="Status">{{order.status}}</td>
            <td data-label="Created at">{{order.createdAt}}</td>
            <td data-label="Price">{{order.price}}</td>
            <td data-label="Seller">{{order.seller.fullname}}</td>
            <td data-label="Contact seller"><button class="btn">Contact seller</button></td>
          </tr>
        </tbody>
      </table>

      <table class="user-orders-as-buyer-container">
        <caption class="user-orders-main-title">
          Incoming orders 
        </caption>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Created at</th>
            <th scope="col">Price</th>
            <th scope="col">Buyer</th>
            <th scope="col">Contact buyer</th>
          </tr>
        </thead>
        <tbody v-for="order in userAsSellerOrders" :key="order._id">
          <tr>
            <td scope="row" data-label="Title">{{order.title}}</td>
            <td data-label="Status">{{order.status}}</td>
            <td data-label="Created at">{{order.createdAt}}</td>
            <td data-label="Price">{{order.price}}</td>
            <td data-label="Seller">{{order.buyer.fullname}}</td>
            <td data-label="Contact seller"><button class="btn">Contact buyer</button></td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

      
    }
  },
  computed: {
    userAsSellerOrders() {
       return this.$store.getters.userAsSellerOrders 
    },
    userAsBuyerOrders(){
      return this.$store.getters.userAsBuyerOrders
    },
    user(){
      return this.$store.getters.loggedinUser
    }
    
  },

  created () {
      this.$store.dispatch('loadOrders').then(orders =>{
          console.log('orders', orders)
      });
     
  },

};
</script>
