<template>
  <div class="product">
    <div class="max-w-4xl mx-auto my-10 justify-items-center justify">
      <!-- Topic -->
      <!-- <div class="p-2 text-4xl font-bold text-center bg-gradient-to-r from-purple-300 via-pink-500 to-blue-300">Gallery
        ( {{countLike}} )</div> -->

      <div
        v-for="(task, index) in tasks"
        :key="task.title"
        class="items-center"
      >
        <!-- preview -->
        <div v-show="task.done">
          <div
            class="fixed inset-0 z-40 flex items-center object-fill object-center overflow-auto animated"
          >
            <div
              class="fixed flex flex-col justify-end w-full max-w-md p-8 m-auto align-top bg-blue-400 rounded shadow-2xl animated fadeInUp md:relative pin-b pin-x"
            >
              <div class="m-10 border-8 rounded shadow-xl">
                <!--  picture -->
                <div class="text-center">
                  <img :src="preview.previewSrc" class="my-24 img-responsive" />
                  <p>{{ task.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded shadow-xl gallery">
          <!--  picture -->
          <div>
            <button
              v-on:click="showPreview(index)"
              class="transition duration-500 ease-in-out transform bg-blue-400 justify-items-start hover:bg-white hover:-translate-y-2 hover:scale-110"
            >
              <img v-bind:src="task.image" class="h-44 w-36" />
              <div class="text-2xl">{{ tasks.title }}</div>
            </button>
          </div>

          <!-- click like -->
          <div>
            <button
              v-on:click="addProduct(index)"
              :class="{ done: task.done }"
              class="justify-end text-white duration-500 ease-in-out transform text-whtransition-colors material-icons hover:text-red-600"
            >
              <!-- fill-current text-white transition-colors duration-500 ease-in-out hover:text-red-600 transform hover:-translate-y-1 hover:scale-110 -->
              <i class="material-icons">add_box</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  // name: "product",
  // components: {
  //   // HelloWorld,
  // },
    data() {
        return {
            tasks: [{id:123,title: 'Harmony Bear',type:'INFP',image:'https://i.pinimg.com/564x/5a/cf/c1/5acfc18479a81b506f9651bd1dae7f22.jpg',done: false,price:299},
                    {id:456,title: 'Tenderheart',type:'ENFJ',image:'https://i.pinimg.com/564x/82/48/62/824862b8ca0df77ed14177df4d87183e.jpg', done: false,price:289},
                    {id:789,title: 'Funshine Bear',type:'ESPF',image:'https://i.pinimg.com/564x/d8/2b/1f/d82b1f322c8c19d21f9e86330ae29238.jpg', done: false,price:312},
                    {id:101,title: 'Bedtime Bear',type:'INFP',image:'https://i.pinimg.com/564x/ee/ce/58/eece5854fb32ce00aab8f9b7340ea68e.jpg', done: false,price:289},
                    {id:112,title: 'Secrect Bear',type:'ISTJ',image:'https://i.pinimg.com/564x/27/20/79/272079e14f29532c4361e5dee47599d8.jpg', done: false,price:350},
                    {id:131,title: 'Cheer Bear',type:'INFJ',image:'https://i.pinimg.com/564x/4a/91/2f/4a912fca3e6e245669398f92e01c953c.jpg', done: false,price:359},
                    {id:415,title: 'Grams Bear',type:'ISFJ',image:'https://i.pinimg.com/564x/0b/59/01/0b59016dc9e04c37cb5ff859c75b155e.jpg', done: false,price:399},
                    {id:161,title: 'Good luck Bear',type:'ESTP',image:'https://i.pinimg.com/564x/fe/e8/e9/fee8e955928083298debe3cb06202932.jpg', done: false,price:345},
                    {id:718,title: 'Wish Bear',type:'INTJ',image:'https://i.pinimg.com/564x/41/a6/42/41a642f170d71a39f3655f66c555b4d6.jpg', done: false,price:311}
                ],
                
                input: {
                    isSearch: false,
                    searchText: '',
                },
                 preview: {
                    isShowPreview: false,
                    previewSrc: ' '
                 },
                 
            products: [
      
            ]
                      
                } 
                
                
            // pic:[{pic1:}]
        },
    methods: {
        async addProduct(index){
        // if (this.password == this.confirm_password){
           const basket = {
            id: this.tasks[index].id,
            title: this.tasks[index].title,
            type: this.tasks[index].type,
            price:this.tasks[index].price, 
            
            // id: 222,
            // title: "3baer",
            // type:"INRE",
            // price:111,  
        }
        const response = await fetch('http://localhost:5000/products',{
          method: 'POST',
          headers:{
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            id: basket.id,
            product_name: basket.title,
            type: basket.type,
            price:basket.price,
            
           
            
          })
        })
        // console.log(response.json())
        const data = await response.json()
      // alert(data)
        this.products = [...this.products,data]
        // console.log(this.products)
        //  this.tasks.id: null,
                      // title: '',
                      // type: '',
                      // price:null,
        
      },
      showPreview(index){
        this.tasks[index].done = true
        this.preview.previewSrc = this.tasks[index].image
        
      }
       
       

    }
};
</script>
<style scoped>
div.gallery {
  margin: 20px;
  /* border: 5px solid rgb(255, 182, 192); */
  float: left;
  width: 180px;
  /* padding: 100px; */
  background-color: #b9ddfffd;
  text-align: center;
  align-items: center;
}
div.preview {
  background-color: rgba(7, 1, 1, 0.548);
}
.w3-third img {
  margin-bottom: -6px;
  opacity: 0.8;
  cursor: pointer;
}
.w3-third img:hover {
  opacity: 1;
}

/* div.gallery:hover {
    border: 1px solid #777;
  }
  
  div.gallery img {
    width: 100%;
    height: auto;
  }
  
  div.desc {
    padding: 15px;
    text-align: center;
  } */

.like {
  color: rgb(214, 82, 174);
}
.done {
  color: rgb(255, 0, 0);
  text-align: center;
  align-content: center;
}
</style>
