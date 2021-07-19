<template>
  <div class="user-orders-page">
    <div class="user-orders main-layout">
      <table>
        <caption class="user-erders-main-title">
          Manage Orders
        </caption>
        <thead>
          <tr>
            <th scope="col">Buyer</th>
            <th scope="col">Gig</th>
            <th scope="col">Due on</th>
            <th scope="col">Total</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row" data-label="Account">Visa - 6076</td>
            <td data-label="Gig">hello world</td>
            <td data-label="Due on">02/01/2016 - 02/29/2016</td>
            <td data-label="Total">$2,443</td>
            <td data-label="Status">pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>