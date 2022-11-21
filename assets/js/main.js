var app = new Vue({
el: '#app',
   data: {

      randomMail: '',
      generatedMails: [],

   },
   mounted() {

   },
   created() {

   },
   beforeUpdate() {

   },
   methods: {

      mailGenerator(){

         this.generatedMails.splice(0, 10)
         console.log(this.generatedMails.length)

         for(let i = 0; i < 10; i++){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
               let randomMail = response.data.response;
               this.randomMail = randomMail
               this.generatedMails.push(this.randomMail);
               console.log(this.generatedMails[i]);
            })

         }

      }

   }
})