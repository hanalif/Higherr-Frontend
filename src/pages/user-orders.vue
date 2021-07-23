<template>
  <div class="user-orders-page">
    <div class="user-orders main-layout">
      <h1 class="user-orders-main-title main-title">{{this.user.fullname +`'s`}} orders</h1>

      <div class="user-orders-as-buyer-container">
      <table>
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
        <template v-if="userAsSellerOrders">
        <tbody v-for="order in userAsSellerOrders" :key="order._id">
          <tr>
            <td scope="row" data-label="Title" class="table-order-title">{{order.title}}</td>
            <td data-label="Status">{{order.status}}</td>
            <td data-label="Created at">{{order.createdAt}}</td>
            <td data-label="Price"><span>$</span>{{order.price}}</td>
            <td data-label="Seller">{{order.buyer.fullname}}</td>
            <td data-label="Contact seller"><button class="btn">Contact buyer</button></td>
          </tr>
        </tbody>
        </template>
      </table>
      </div>

      <div class="user-orders-as-seller-container">
      <table>
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
            <th scope="col"></th>
          </tr>
        </thead>
        <template v-if="userAsBuyerOrders"> 
          <tbody  v-for="order in userAsBuyerOrders" :key="order._id">
          <tr>
            <td scope="row" data-label="Title" class="table-order-title">{{order.title}}</td>
            <td data-label="Status">{{order.status}}</td>
            <td data-label="Created at">{{order.createdAt}}</td>
            <td data-label="Price"><span>$</span>{{order.price}}</td>
            <td data-label="Seller">{{order.seller.fullname}}</td>
            <td data-label="Contact seller"><button class="btn">Contact seller</button></td>
            <td data-label="Remove order" ><button @click="onRemoveOrder(order._id)" class="btn btn-primary">Cancel order</button></td>
          </tr>
        </tbody> 
        </template>
      </table>
      </div>

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
    },
  },
  methods: {
    onRemoveOrder(orderId) {
       this.$store.dispatch({type: 'removeOrders' , orderId: orderId}).then(() =>{
          console.log('removed')
      });
    }
  },

  created () {
      this.$store.dispatch('loadOrders').then(()=>{
          this.$store.commit({ type: "resetNumOfNewOrders" })
      })
      
     
  },

};
</script>
