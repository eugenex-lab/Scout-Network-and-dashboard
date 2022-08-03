<template>
  <base-card>
    <!--    <form v-on:submit.prevent="addNewAttribute"-->
    <form @submit.prevent="submitData">

      <div class="form-control">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" ref="nameInput" autocomplete="off"/>
      </div>

      <div class="form-control">
        <label for="position">Position</label>
        <input list="positions" id="position" v-model="position" ref="positionInput" autocomplete="off"/>
        <datalist id="positions">
          <option v-for="position in positions" :value="position" :key="position"></option>
        </datalist>
      </div>


      <div class="form-control">
        <label for="age">Age</label>
        <input type="Number" id="age" v-model="age" ref="ageInput"/>
      </div>

      <div class="form-control">
        <label for="countries">Nationality</label>
        <input name="countries" id="countries" v-model="countries" list="countriex" ref="countriesInput"
        >
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
<!--      <div class="form-control">-->
<!--        <label for="preferredFoot">Preferred Foot</label>-->
<!--        &lt;!&ndash;        <input type="text" id="preferredFoot" v-model="preferredFoot" ref="preferredFoot"/>&ndash;&gt;-->
<!--        <span>-->
<!--          <input type="checkbox" id="right" name="right" ref="rightInput" v-model="right">-->
<!--          <label class="tick" for="right" style="font-weight: normal">right</label>-->
<!--</span>-->

<!--        <span>-->
<!--          <input type="checkbox" id="left" name="left" ref="leftInput" v-model="left">-->

<!--          <label class="tick" for="left" style="font-weight: normal">left</label>-->
<!--        </span>-->

<!--      </div>-->

      <div class="form-control">
        <label for="best-attribute">Best Attributes</label>
        <input type="text" id="best-attribute" v-model="bestAttribute"
               placeholder="E.g. leadership" autocomplete="off"/>
        <br>
        <button type='submit' @click.prevent="submit(addNewAttribute())" class="buttonAdd">Add</button>
        <br>
        <br>
        <label for="weakness-attribute">Weakness Attributes</label>
        <input type="text" id="weakness-attribute" v-model="weakness"
               placeholder="E.g. strength" autocomplete="off"/>
        <br>
        <!--        <button type='submit' @click="submit(addNewAttributeWeakness())"-->
        <button type='submit' @click.prevent="submit(addNewAttributeWeakness())" class="buttonAdd">Add</button>
        <br>
      </div>

      <div class="shitUp" v-show="showCard">
        <base-card>
          <div class="oneLIne">
            <div class="timelineView">
              <h4 class="topicStyle">Best Attributes</h4>
              <div class="list-attribute">
                <ul>
                  <li
                      v-for="(best,index) in bestAttributes" :key="best"
                      :value="best"
                      :ref=`
                  >
                    <span class="listSStrength" ref="bestAttributesInput">{{ best.item }}</span>
                    <button class="buttonDelete" @click="deleteAttributeStrenght(index)">Delete</button>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h4 class="topicStyle">Weakness Attributes</h4>
              <div class="list-attribute" id="red">
                <ul>
                  <li
                      v-for="(weak, index) in weaknessAttributes" :key="weak" ref="weaknessAttributesInput"
                  >
                    <!--              <span class="listSWeakness">{{ weak.item }}</span>-->

                    <span class="listSWeakness">{{ weak.item }}</span>
                    <button class="buttonDelete" @click="deleteAttributeWeak(index)">Delete</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </base-card>
      </div>


      <div class="form-control">
        <br>
        <label for="link">Resource to Player Profile</label>
        <input type="url" id="link" v-model="link" ref="linkInput"/>
        <br>
        <label for="link">Add Player Image</label>
        <input type="file" @change="onFile"/>"
        <img src="imgSrc" v-if="imgSrc" alt="" ref="imgSrcInput">
      </div>
      <div class="form-control">
        <base-button type="submit" style="color: #ffffff ; background-color: #790f0f ">Add Player
        </base-button>
      </div>


    </form>
  </base-card>
</template>

<script>

// import List from "@/components/ScoutDetails/LIstPlayer";

import BaseCard from "@/components/UI/BaseCard";
// import ValidationForm from "@/components/Validation/ValidationForm";
export default {

  components: {
    BaseCard,

  },
  props: ['item'],
  bestAttributesInput: "",
  weaknessAttributesInput: "",


  data() {
    return {
      showCard: false,
      positions: ["Goalkeeper", "Defender", "Midfielder", "Forward"],

      weaknessAttributes: [],

      bestAttributes: [],
      weakness: "",
      bestAttribute: "",
      imgSrc: '',

      props: ["bestAttributes", "weaknessAttributes"],

      nextAttributeId: 3


    }
  },
  watch: {


    showCard() {

      console.log(this.showCard + " ??___showCard");
      console.log(this.weaknessAttributes.length + " ??___weaknessAttributes");
      console.log(this.bestAttributes.length + " ??___bestAttributes");

      if (this.weaknessAttributes.length > 0 || this.bestAttributes.length > 0) {
        this.showCard = true;
        this.showCard === true;
        return true
      } else {
        this.showCard = false;
        return false
      }
    }

  },
  inject: ["addPlayer"],

  methods: {

    // delete method by index
    deleteAttributeWeak(index) {
      this.weaknessAttributes.splice(index, 1);

    },
    deleteAttributeStrenght(index) {
      this.bestAttributes.splice(index, 1);
    },

    addNewAttributeWeakness: function () {

      if (this.weakness === "") {
        this.showCard = false;
        return false;
      } else if (this.weaknessAttributes.length > 2 || this.weaknessAttributes.length < 0) {
        this.showCard = false;

        return false;
      } else {

        this.weaknessAttributes.push({
          id: this.nextAttributeId,
          item: this.weakness
        });
        this.weakness = '';
        this.nextAttributeId++;
        // this.showCard=== true;
        this.showCard = true;
      }
    },
    addNewAttribute: function () {

      console.log("sign in button is pressed");
      // stop form from submitting

      console.log("showCard");
      console.log(this.showCard + "<-------++-------- showCard");

      // handle empty input
      if (this.bestAttribute === '') {
        this.showCard = false;
        return false;

      } else if (this.bestAttributes.length > 2 || this.bestAttributes.length < 0) {
        this.showCard = false;
        return false;
      } else {
        console.log(this.bestAttribute, this.nextAttributeId);
        this.bestAttributes.push({
          id: this.nextAttributeId++,
          item: this.bestAttribute,
        });
        this.bestAttribute = '';
        // this.showCard=== true;
        this.showCard = true;
      }
    }
    ,
    onFile(e) {
      const files = e.target.files
      if (!files.length) return

      const reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => (this.imgSrc = reader.result)

    },

    submitData() {
      console.log("submitData");
      const enteredName = this.$refs.nameInput.value;
      const enteredPosition = this.$refs.positionInput.value;
      const enteredAge = this.$refs.ageInput.value;
      const enteredCountries = this.$refs.countriesInput.value;
      // const enteredRight = this.$refs.rightInput.value;
      // const enteredLeft = this.$refs.leftInput.value;
      const enteredBestAttributes = this.$refs.bestAttributesInput.value;
      const enteredWeaknessAttributes = this.$refs.weaknessAttributesInput.value;
      const enteredLink = this.$refs.linkInput.value;

      console.log("$$$$$$$$" + enteredName, enteredPosition, enteredAge, enteredCountries,
          // enteredRight, enteredLeft,
          enteredBestAttributes, enteredWeaknessAttributes, enteredLink);

      this.addPlayer(enteredName, enteredPosition, enteredAge, enteredCountries
          // , enteredRight, enteredLeft
          , enteredBestAttributes, enteredWeaknessAttributes, enteredLink);


      console.log("@@@her is age "+enteredAge, "@@@ here is ppsition" + enteredPosition);
    }
  }
}


</script>

<style scoped>
.oneLIne {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.buttonAddWeak {
  background-color: #c6050b;
  color: #ffffff;
  height: 20px;
  text-align: center;
  text-decoration: none;
  font-size: 10px;
  margin-top: -70px;
  cursor: pointer;
  border-radius: 5px;
}

.buttonAdd {
  background-color: #130c6a;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  height: 20px;
  text-align: center;
  text-decoration: none;
  font-size: 10px;
  margin-top: -70px;
  cursor: pointer;

}


.listSStrength {
  color: #7921c1;
}


div {
  margin: auto;
  max-width: 40rem;
  background-color: aliceblue;

}

.topicStyle {
  top: 10px;
  margin-top: 5px;
  font-family: proxima-nova, sans-serif;
  -moz-font-feature-settings: "smcp";
  -ms-font-feature-settings: "smcp";
  -webkit-font-feature-settings: "smcp";
  -o-font-feature-settings: "smcp";
  font-feature-settings: "smcp";
  text-transform: lowercase;
  font-style: italic;
}

.topicStyle red {
  color: #c6050b;
}

.list-attribute {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  margin-top: -30px
}

div.form-control {
  margin: 10px;

}

.background-color {
  background: rgba(143, 175, 222, 0.7);
}

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
  color: #090d7f;
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

.tick {
  color: rgba(105, 85, 195, 0.84);
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

.shitUp {

  margin-right: 4.4rem;
  margin-left: 0.7rem;

}


#red {
  color: #c6050b;
}

.buttonDelete {
  background-color: rgba(198, 5, 11, 0.81);
  color: #ffffff;
  border: none;
  border-radius: 5px;
  height: 15px;
  text-align: center;
  text-decoration: none;
  font-size: 10px;
  margin-top: -70px;
  cursor: pointer;
}


</style>






