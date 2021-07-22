<template>
<section>
    <router-link to="/explore">back</router-link>
    <ul v-if="topic" id="messages">
        <li v-for="(msg,idx) in msgs" :key="idx">
            <span>{{msg.from}}:</span>{{msg.txt}}
        </li>
    </ul>
    <form @submit.prevent="sendMsg" id="form">
        <input id="input" v-model="msg.txt" autocomplete="off" />
        <button >Send</button>
    </form>
</section>
</template>

<script>
import {socketService} from '../services/socket.service.js'
export default {
    data(){
        return{
            msg:{from:this.$store.getters.loggedinUser.username,txt:''},
            msgs:[],
            topic:this.$store.getters.getCurrGig._id
        }
    },
    created(){
    socketService.emit('chat topic', this.topic)
    socketService.on('chat addMsg', this.addMsg)
    socketService.on('chat-history', msgs=>{
        msgs.forEach(this.addMsg)
    })
    },
    destroyed(){
        socketService.off('chat addMsg', this.addMsg)
    },
methods:{
    addMsg(msg) {
    this.msgs.push(msg)
    },
    sendMsg() {
    socketService.emit('chat newMsg', this.msg)
    this.msg = {from: this.$store.getters.loggedinUser.username, txt: ''};
    },
}
}
</script>
