<template>
  <!-- <div class="fixed right-0.5 top-0.5 ">
    <div class="max-w-2xl bg-white rounded h-52"> -->
  <div
    id="Basket"
    class="fixed inset-0 z-40 flex items-center object-fill object-center h-auto ml-56 mr-56 overflow-auto animated"
  >
    <div
      class="fixed flex flex-col justify-end m-auto align-top bg-blue-300 rounded shadow-2xl w-6xl hp-8 animated fadeInUp md:relative pin-b pin-x"
    >
      <div class="flex justify-end material-icons" @click="close">
        highlight_off
      </div>

      
      <div class="lex-wrap p-9 justify-items-start max-w-7xl">
        <div>1.name is ....<img class="max-h-36" src="https://i.pinimg.com/564x/5a/cf/c1/5acfc18479a81b506f9651bd1dae7f22.jpg"></div>
        <div>2 <img class="max-h-36" src="https://i.pinimg.com/564x/5a/cf/c1/5acfc18479a81b506f9651bd1dae7f22.jpg"></div>
        <div>3<img class="max-h-36" src="https://i.pinimg.com/564x/5a/cf/c1/5acfc18479a81b506f9651bd1dae7f22.jpg"></div>
        <div>4<img class="max-h-36" src="https://i.pinimg.com/564x/5a/cf/c1/5acfc18479a81b506f9651bd1dae7f22.jpg"></div>
        <div>5<img class="max-h-36" src="https://i.pinimg.com/564x/5a/cf/c1/5acfc18479a81b506f9651bd1dae7f22.jpg"></div>
        <div>6<img class="max-h-36" src="https://i.pinimg.com/564x/5a/cf/c1/5acfc18479a81b506f9651bd1dae7f22.jpg"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
           tasks: [{
               
           }
                ],
             }
  },
  methods:{
      close(){
        
          const bk = document.getElementById("Basket");
          bk.style.display = "none";
        //   <router-link to="/"></router-link>
       
      }
  }
};
</script>

<style scoped>
/* .Basket {
  z-index: 100;  
  position: fixed; 
  top: 15%;
  left: 55%;
  animation-name: fade-in;
  animation-duration: 0.2s;
  animation-iteration-count: 1;
} */
/* .card {
  background: white;
  width: 320px;
  height: 600px;
  border-radius: 5px;
} */
/* .card .content {
  padding: 5px 0 0 10px;
  overflow: scroll;
  width: 300px;
  height: 520px;
  justify-items: center;
} */
/* .card h4 {
  padding: 20px 0 0 20px;
  color: #db2929;
} */
/* .card h4 .close {
  color: #aaaaaa;
  float: right;
  font-size: 20px;
  font-weight: 600;
  padding-right: 8%;
  cursor: pointer;
  transition: 0.3s ease-in;
} */
/* .card h4 .close:hover {
  color: black;
} */
/* .card .content p {
  padding: 10px 10px 10px 10px;
  justify-content: justify;
 
} */
/* @keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(3%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
} */
</style>