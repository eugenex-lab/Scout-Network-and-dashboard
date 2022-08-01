<template>
  <base-card>
    <form class="formx" @submit.prevent="adddNewPlayer"
    >
      <div class="form-control">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" ref="name" autocomplete="off"/>
      </div>
      <div class="form-control">
        <label for="age">Age</label>
        <input type="Number" id="age" v-model="age" ref="age"/>
      </div>
      <div class="form-control">
        <label for="countries">Nationality</label>
        <input name="countries" id="countries" list="countriex">
        <datalist id="countriex">
          <option value="Nigeria">Nigeria</option>
          <option value="USA">USA</option>
          <option value="Germany">Germany</option>
          <option value="England">England</option>
          <option value="France">France</option>
          <option value="Italy">Italy</option>
          <option value="Spain">Spain</option>
          <option value="Russia">Russia</option>
          <option value="China">China</option>
          <option value="Brazil">Brazil</option>
          <option value="Argentina">Argentina</option>
          <option value="Belgium">Belgium</option>
          <option value="Croatia">Croatia</option>
          <option value="Denmark">Denmark</option>
          <option value="Egypt">Egypt</option>
          <option value="Iran">Iran</option>
          <option value="Japan">Japan</option>
          <option value="Mexico">Mexico</option>
        </datalist>
      </div>
      <div class="form-control">
        <label for="preferredFoot">Preferred Foot</label>
        <!--        <input type="text" id="preferredFoot" v-model="preferredFoot" ref="preferredFoot"/>-->
        <span>
          <input type="checkbox" id="right" name="right"
                 checked>
          <label class="right" for="right" style="font-weight: normal">right</label>
</span>

        <span>
          <input type="checkbox" id="left" name="left">
          <label for="left" style="font-weight: normal">left</label>
        </span>


      </div>

      <div class="form-control">
        <label for="bestAttributes">Best Attributes</label>
        <input type="text" id="newBestAttributes" v-model="newBestAttributesText" ref="bestAttributes"
               placeholder="E.g. leadership" autocomplete="off"/>
        <br>
        <button>Add</button>
        <li v-for="attribute in bestAttributes" :key="attribute.id">
          {{ attribute.text }}
        </li>

      </div>
      <div class="form-control">
        <label for="weakness">Weakness</label>
        <input type="text" id="weakness" v-model="weakness" ref="weakness" placeholder="E.g. poor leadership"
               autocomplete="off"/>
      </div>
      <div class="form-control">
        <label for="link">Link to Player Stats</label>
        <input type="url" id="link" v-model="link" ref="link"/>
      </div>
      <div class="form-control">

        <input type="file" @change="onFile" ref="imgSrc"/>
        <img src="imgSrc" v-if="imgSrc" alt="" ref="imgSrc">
      </div>
      <div class="form-control">
        <base-button :class="mode" @click="addPlayer" style="color: #ffffff ; background-color: #790f0f ">Add Player
        </base-button>

      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  bestAttributesInput: "",
  bestAttributes: [],
  data() {
    return {
      imgSrc: '',
      newBestAttributesText: '',

    }
  },
  name: "NewPlayer"
  ,
  methods: {
    addAttribute() {
     if(this.newBestAttributesText){
      this.bestAttributes.push({
        text: this.newBestAttributesText,
      })
      this.newBestAttributesText = ''
     }
    },


    onFile(e) {
      const files = e.target.files
      if (!files.length) return

      const reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => (this.imgSrc = reader.result)

    },
    submittedDat() {
      const enteredName = this.$refs.name.value
      const enteredAge = this.$refs.age.value
      const enteredNationality = this.$refs.countries.value
      const enteredPosition = this.$refs.position.value
      const enteredPreferredFoot = this.$refs.preferredFoot.value
      const enteredBestAttributes = this.$refs.bestAttributes.value
      const enteredWeakness = this.$refs.weakness.value
      const enteredLink = this.$refs.link.value
      const enteredImgSrc = this.$refs.imgSrc.value
      console.log(enteredName)
      console.log(enteredAge)
      console.log(enteredNationality)

      console.log(enteredPosition)
      console.log(enteredPreferredFoot)
      console.log(enteredBestAttributes)
      console.log(enteredWeakness)
      console.log(enteredLink)
      console.log(enteredImgSrc)
    },
  },

}

</script>

<style scoped>


input#age {
  width: 30%;
}

form.formx {
  margin-left: 35px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 90%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;

}

select {
  display: block;
  width: 70%;
  font: inherit;
  padding: 0.15rem;
  border: 0.86px solid #ccc;
  border-radius: 0.25rem;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}

.pushup {
  top: 3.5rem;
}

span {
  display: inline-block;
  margin-right: 1rem;
  font-weight: normal;

}

datalist {
  /*display: inline-block;*/
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;


}


</style>






