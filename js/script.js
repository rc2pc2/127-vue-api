const { createApp } = Vue

createApp({
    data() {
        return {
            emailList : [],

        }
    },
    methods:{
        getData(){
            for (let index = 0; index < 15; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    console.log(response.data.response);
                    this.emailList.push(response.data.response);
                });
            } 
        }
    },

    created(){
        this.getData();
    },
}).mount('#app');