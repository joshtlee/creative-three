<template>
  <div class="home">
    <MainMenu/>
    <div id='application'>
        <h1>Application</h1>
        <hr>
        <p>Full Name</p>
        <textarea v-model="Name" cols=20 rows=1 placeholder="Name" ></textarea>
        <p>Date of Birth</p>
        <datepicker  wrapper-class ='date' v-model="birth" input-class='date' placeholder="Select Date"></datepicker>
        <p>Address</p>
        <textarea v-model="Address" cols=20 rows=1 placeholder="Address" ></textarea>
        <p>Gender:</p>
        <label for="male">Male</label>
        <input type="radio" id="male" value="male" v-model="gender" name = "gender">
        
        <br>
        <label for="female">Female</label> 
        <input type="radio" id="female" value="female" v-model="gender" name="gender">
        <br>
        <div id="essays">
            <h3>Essays</h3>
            <hr>
            <br>
            <p>Describe a topic, idea, or experience that you find so engaging that
             it makes you lose all track of time. What have you done to learn more 
             or engage further in the topic, idea or experience? What resources do 
             you use to learn more?</p>
             <textarea v-model="essayOne" cols=100 rows=20 placeholder="respond here" ></textarea>
             <br>
             <p>Have you become aware of significant needs in your family, school, 
                 and/or community? Please explain how you have worked toward meeting 
                 those needs.</p>
            <textarea v-model="essayTwo" cols=100 rows=20 placeholder="respond here" ></textarea>
            <br>
            <br>
            <button id='submit' @click="sendApplication">Submit</button>
            <button id='Edit/Delete' @click="editOrDelete">Edit/Delete</button>
            <div id="edit" v-if="edit">         
                <div class="suggestion" v-for="a in applications" :key="a.id" @click="selectItem(a)">{{a.name}}
                </div>
                <div v-if="changeVal">
                    <button @click="deleteApp(selectApp)">Delete </button>
                    <button @click="nameChange= true">Change Name </button>
                </div>
                <div v-if="nameChange">
                    <input v-model="newName">
                    <button @click="editApplicant(selectApp)">Submit</button>
                </div>
            </div>
        </div>
        
        
    
    </div>  
  </div>
  
</template>

<script>
import MainMenu from '../components/MainMenu.vue'
import Datepicker from 'vuejs-datepicker';
import axios from 'axios';


export default {
  name: 'ApplicationView',
  components: { MainMenu,Datepicker },
  data() {
      return{
          gender: null,
          applications: [],
          Name: null,
          edit: false,
          birth: null,
          Address: null,
          essayOne: null,
          essayTwo: null,
          addApply: null,
          selectApp:null,
          changeVal:false,
          nameChange:false,
          newName:null
      }
  },
  created() {
        this.getApplicants();
    },
  methods: {
      selectItem(a){
          this.selectApp = a;
          
          if(this.changeVal){
              this.changeVal = false;
          }
          else{
              this.changeVal = true;
          }
      },
      editOrDelete(){
          if(this.edit){
              this.edit = false;
          }
          else{
              this.edit = true;
          }
          
      },
      async sendApplication(){
          try {
            let r2 = await axios.post('/api/apply', {
                name: this.Name,
                birth: this.birth,
                address: this.address,
                firstEssay: this.essayOne,
                secondEssay: this.essayTwo       
            });
            this.addApply = r2;
            this.Name = "";
            this.gender="";
            this.birth = "";
            this.Address = "";
            this.essayTwo = "";
            this.essayOne = "";

        } catch (error) {
            console.log(error);
      }
      },
      async getApplicants() {
        try {
            let response = await axios.get("/api/applications");
            this.applications = response.data;
            return true;
            } catch (error) {
            console.log(error);
            }
      },
      async deleteApp(app) {
      try {
        await axios.delete("/api/applicants/" + app._id);
        this.selectApp= null;
        this.getApplicants();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editApplicant(app) {
      try {
        await axios.put("/api/applicants/" + app._id, {
          name:this.newName
        });
        this.selectApp = null;
        this.getApplicants();
        this.nameChange = false;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    },
      
 
}
</script>
<style scoped>

h1{
    text-align: center;
}
#date{
    text-align: center;
}
#essays{
    text-align: center;
}
#submit{
    text-align: center;
}
#edit {
  border: 1px solid #ccc;
  width: 200px;
  text-align: center;
}
.suggestion {
  min-height: 20px;
  min-width: 50px;
}
.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}
</style>