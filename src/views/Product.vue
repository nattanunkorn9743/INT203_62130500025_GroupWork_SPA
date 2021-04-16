<template>
  <div class="product">
  

    <div class="max-w-4xl mx-auto my-10 justify-items-center justify">
      <!-- Topic -->
      <!-- <div class="p-2 text-4xl font-bold text-center bg-gradient-to-r from-purple-300 via-pink-500 to-blue-300">Gallery
        ( {{countLike}} )</div> -->

    




 <div  v-for="task in tasks" :key="task.title" class="items-center ">

         <!-- preview -->
    <div v-show="preview.isShowPreview">
      <div class="fixed inset-0 z-40 flex items-center object-fill object-center overflow-auto animated">
        <div class="fixed flex flex-col justify-end w-full max-w-md p-8 m-auto align-top bg-pink-200 rounded shadow-2xl animated fadeInUp md:relative pin-b pin-x">
          
          <div class="m-10 border-8 rounded shadow-xl ">
            <!--  picture -->
            <div class="text-center">
              <img :src="preview.previewSrc" class="my-24 img-responsive">
              <p>{{task.title}}</p>
            </div>
  
          </div>
        </div>
        
      </div>
      
    </div>






        <div class="rounded shadow-xl gallery ">
          <!--  picture -->
          <div>
            <button v-on:click="showPreview(index)"
              class="transition duration-500 ease-in-out transform bg-blue-800 justify-items-start hover:bg-white hover:-translate-y-2 hover:scale-110 ">
              <img v-bind:src="task.image" class="h-44 w-36">
              {{task.title}}

            </button>
          </div>


          <!-- click like -->
          <div>
            <button v-on:click="toggleDone(index)" :class="{done: task.done}"
              class="justify-end text-white duration-500 ease-in-out transform text-whtransition-colors material-icons hover:text-red-600 ">
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
            tasks: [{title: '1',button:'like1',image:'data:image/jpeg;base64,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',done: false},
                    {title: '2',button:'like2',image:'https://www.treehugger.com/thmb/L74TO5Q_Y6qR5R_uZ_uJt1DLWaI=/530x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2013__05__pinguino-7f5d3d71aa39464a8ef37e7c75742213.jpg', done: false},
                    {title: '3',button:'like3',image:'https://pbs.twimg.com/media/EeUkRLXXsAAIglv?format=jpg&name=small', done: false},
                    {title: '4',button:'like3',image:'https://i.pinimg.com/originals/1b/5e/9e/1b5e9eb3642ee031fbba11ccb433d7ae.jpg', done: false},
                    {title: '5',button:'like3',image:'https://upload.wikimedia.org/wikipedia/commons/1/14/Gatto_europeo4.jpg', done: false},
                    {title: '6',button:'like3',image:'https://previews.123rf.com/images/evdoha/evdoha1609/evdoha160900414/86858260-beautiful-tabby-cat.jpg', done: false},
                    {title: '7',button:'like3',image:'https://i.pinimg.com/originals/1b/5e/9e/1b5e9eb3642ee031fbba11ccb433d7ae.jpg', done: false},
                    {title: '8',button:'like3',image:'https://upload.wikimedia.org/wikipedia/commons/1/14/Gatto_europeo4.jpg', done: false},
                    {title: '9',button:'like3',image:'https://previews.123rf.com/images/evdoha/evdoha1609/evdoha160900414/86858260-beautiful-tabby-cat.jpg', done: false}
                ],
                input: {
                    isSearch: false,
                    searchText: '',
                },
                 preview: {
                    isShowPreview: false,
                    previewSrc: ''
                 }   
                
                
            // pic:[{pic1:}]
        }
    },
    methods: {
        toggleDone(index){
            this.tasks[index].done = !this.tasks[index].done
        },
       
        showPreview(index){
            this.preview.isShowPreview = true;
            this.preview.previewSrc = this.tasks[index].image;
            // document.getElementById("open").style.display = "block";
        },
        
    
        countLike(){
            return this.tasks.filter(t => t.done).length;
        },
        // keyupEnter(){
        //     return this.tasks.filter(tasks =>{return tasks.title.toLowerCase().includes(this.input.searchText.toLowerCase())});
        // },

    }
};
</script>
<style scoped>
div.gallery {
    margin: 20px;
    border: 5px solid rgb(255, 182, 192);
    float: left;
    width: 180px;
    /* padding: 100px; */
    background-color: #f5bfddfd;
    text-align: center;
    align-items: center;
    
    
    
  }
div.preview{
  
  background-color: rgba(7, 1, 1, 0.548);
  
  

}
.w3-third img{margin-bottom: -6px; opacity: 0.8; cursor: pointer}
.w3-third img:hover{opacity: 1}
  
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

  .like{
    color: rgb(214, 82, 174);  
  }
  .done {
    
    color: rgb(255, 0, 0) ;
    text-align: center;
    align-content: center;
}
</style>
