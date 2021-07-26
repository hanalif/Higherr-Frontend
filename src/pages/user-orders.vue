<template>
  <div class="user-orders-page">
    <div class="user-orders main-layout">
      <h1 class="user-orders-main-title main-title">
        Your orders overview
      </h1>
      <div class="user-orders-as-buyer-container">
        <table>
          <caption class="user-orders-main-title">
            Incoming orders
            
          </caption>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Status</th>
              <th scope="col">Date</th>
              <th scope="col">Price</th>
              <th scope="col">From</th>
              <th scope="col">Contact buyer</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <template v-if="userAsSellerOrders">
            <tbody v-for="order in userAsSellerOrders" :key="order._id">
              <tr>
                <td scope="row"  class="table-order-title truncate">
                  {{ order.title }}
                </td>
                <td data-label="Status" :class="{done:order.status === 'Done'}">{{ order.status }}</td>
                <td data-label="Created at">{{ order.createdAt }}</td>
                <td data-label="Price">${{ order.price }}</td>
                <td data-label="From">{{ order.buyer.fullname }}</td>
                <td class="table-order-title">
                  <button class="btn">Contact buyer</button>
                </td>
                <td class="table-order-title">
                  <button class="manage-order-btn" @click="openOptions(order._id)">
                    Manage order <span :class="isManage(order._id)">></span>
                    <div
                      class="manage-order"
                      :class="isOpen(order._id)">
                      <h3 @click="acceptOrder(order)">Accept order</h3>
                      <h3 @click="declineOrder(order)">Decline order</h3>
                      <h3 @click="orderDone(order)">Order done</h3>
                    </div>
                  </button>
                </td>
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
              <th scope="col">Date</th>
              <th scope="col">Price</th>
              <th scope="col">Seller</th>
              <th scope="col">Contact seller</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <template v-if="userAsBuyerOrders">
            <tbody v-for="order in userAsBuyerOrders" :key="order._id">
              <tr>
                <td scope="row"  class="table-order-title truncate truncate">
                  {{ order.title }}
                </td>
                <td data-label="Status" :class="{done:order.status === 'Done'}">{{ order.status }}</td>
                <td data-label="Created at">{{ order.createdAt }}</td>
                <td data-label="Price">${{ order.price }}</td>
                <td data-label="Seller">{{ order.seller.fullname }}</td>
                <td class="table-order-title">
                  <button class="btn">Contact seller</button>
                </td>
                <td class="table-order-title">
                  <button
                    @click="onRemoveOrder(order._id)"
                    class="btn btn-danger">
                    Cancel order
                  </button>
                </td>
              </tr>
            </tbody>
          </template>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import manageOrderModal from "../cmps/manage-order-modal.vue";

export default {
  data() {
    return {
      // isManage: false,
      orderId: '',
    };
  },
  computed: {
    userAsSellerOrders() {
      let orders = this.$store.getters.userAsSellerOrders;
      orders.sort((a,b)=>{
         return b.createdAt - a.createdAt
      })
      let ordersForDisplay = JSON.parse(JSON.stringify(orders))
      ordersForDisplay.forEach(o => {
        let date = new Date(o.createdAt)
        const month = date.getUTCMonth() + 1;
        const day = date.getUTCDate();
        const year = date.getUTCFullYear(); 
        o.createdAt = day + "/" + month + "/" + year 
      });

      return ordersForDisplay;
    },
    userAsBuyerOrders() {
      let orders =  this.$store.getters.userAsBuyerOrders;
      orders.sort((a,b)=>{
         return b.createdAt - a.createdAt
      })
      let ordersForDisplay = JSON.parse(JSON.stringify(orders))
      ordersForDisplay.forEach(o => {
        let date = new Date(o.createdAt)
        const month = date.getUTCMonth() + 1;
        const day = date.getUTCDate();
        const year = date.getUTCFullYear(); 
        o.createdAt = day + "/" + month + "/" + year 
      });

      return ordersForDisplay;
    },
    user() {
      return this.$store.getters.loggedinUser;
    },
    isManage() {
      return ((id) => {
        if (id === this.orderId) return 'open'
        else return ''
      })
    },
    isOpen() {
      return ((id) => {
        if (id === this.orderId) return 'visible'
        else return ''
      })
    },
  },
  methods: {
    onRemoveOrder(orderId) {
      this.$store
        .dispatch({ type: "removeOrders", orderId: orderId })
        .then(() => {
          console.log("removed");
        });
    },
    openOptions(id) {
      if (this.orderId === id) this.orderId = ''
      else this.orderId = id
    },
    acceptOrder(order) {
      order.status = "Accepted";
      this.$store.dispatch({ type: "saveOrder", order });
    },
    orderDone(order) {
      order.status = "Done";
      this.$store.dispatch({ type: "saveOrder", order });
    },
    declineOrder(order) {
      this.$store.dispatch({ type: "removeOrders", order });
    },
  },

  created() {
    this.$store.dispatch("loadOrders").then(() => {
      this.$store.commit({ type: "resetNumOfNewOrders" });
    });
  },
  components: {
    manageOrderModal,
  },
};
</script>
