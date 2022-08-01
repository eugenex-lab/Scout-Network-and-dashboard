<template>
  <base-card>
    <form>
      <div class="form-control">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" ref="name"/>
      </div>
      <div class="form-control">
        <label for="age">Age</label>
        <input type="Number" id="age" v-model="age" ref="age"/>
      </div>
      <div class="form-control">
        <label for="nationality">Nationality</label>
        <input type="text" id="nationality" v-model="nationality" ref="nationality"/>
      </div>
      <div class="form-control">
        <label for="preferredFoot">Preferred Foot</label>
        <input type="text" id="preferredFoot" v-model="preferredFoot" ref="preferredFoot"/>
      </div>

      <div class="form-control">
        <label for="bestAttributes">Best Attributes</label>
        <input type="text" id="bestAttributes" v-model="bestAttributesInput" ref="bestAttributes"/>
        <button type="button" @click="addtoBestAttributes">add</button>

        <ul li v-for="best in bestAttributes"
            :key='best'>
          <li>
            <span>{{best}}</span>
          </li>
        </ul>
      </div>
      <div class="form-control">
        <label for="weakness">Weakness</label>
        <input type="text" id="weakness" v-model="weakness" ref="weakness"/>
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
        <base-button :class="mode" @click="addPlayer">Add Player</base-button>
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

    }
  },
  name: "NewPlayer"
  ,
  methods: {
    onFile(e) {
      const files = e.target.files
      if (!files.length) return

      const reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => (this.imgSrc = reader.result)

    },
    methods: {
      addtoBestAttributes() {
        // check if empty
        if (!this.bestAttributesInput) {
          return
        }
        this.bestAttributes.push(this.bestAttributesInput)

      },
      submittedDat() {
        const enteredName = this.$refs.name.value
        const enteredAge = this.$refs.age.value
        const enteredNationality = this.$refs.nationality.value
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
    }
  }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
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

</style>