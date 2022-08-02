<template>
  <base-card>
<!--    <form v-on:submit.prevent="addNewAttribute"-->
    <form @submit.prevent=""
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
          <label  class="tick"  for="right" style="font-weight: normal">right</label>
</span>

        <span>
          <input type="checkbox" id="left" name="left">
          <label class="tick" for="left" style="font-weight: normal">left</label>
        </span>

      </div>

      <div class="form-control">
        <label for="best-attribute">Best Attributes</label>
        <input type="text" id="best-attribute" v-model="newBestAttributeText" ref="bestAttributes"
               placeholder="E.g. leadership" autocomplete="off"/>
        <br>
        <button type='submit' @click="submit(addNewAttribute())" class="buttonAdd" >Add</button>
<br>
        <br>
        <label for="weakness-attribute">Weakness Attributes</label>
        <input type="text" id="weakness-attribute" v-model="newWeaknessAttributeText" ref="weaknessAttribute"
               placeholder="E.g. strength" autocomplete="off"/>
        <br>
        <button class="buttonAddWeak" >Add</button>
      </div>

<div class="shitUp">
  <base-card>

      <h4 class="topicSTyle">Best Attributes</h4>
      <div class="list-attribute">
        <ul>
          <li
              v-for="(best) in bestAttributes" :key="best"
          >
            <span class="listSStrength">{{ best.item }}</span>
          </li>
        </ul>
    </div>

  </base-card>
</div>



      <div class=" form-control
          ">


        <label for="link">Link to Player Stats</label>
        <input type="url" id="link" v-model="link" ref="link"/>


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

// import List from "@/components/ScoutDetails/LIstPlayer";

import BaseCard from "@/components/UI/BaseCard";
export default {
  components: {
    BaseCard
    // 'list-item': List,
  },
  props: ['item'],
  bestAttributesInput: "",
  data() {
    return {
      imgSrc: '',
      newBestAttributeText: '',
      props: ["bestAttributes"],
      bestAttributes: [
        {
          id: 1,
          item: 'leadership'
        },
        {
          id: 2,
          item: 'defense'
        }
      ],
      nextAttributeId: 3

      // {
      //   id: 3,
      //   item: 'speed'
      // },
      // {
      //   id: 4,
      //   item: 'passing'
      // },
      // {
      //   id: 5,
      //   item: 'strength'
      // },
      // {
      //   id: 6,
      //   item: 'aggression'
      // },
      // {
      //   id: 7,
      //   item: 'vision'
      // },
      // {
      //   id: 8,
      //   item: 'crossing'
      // },
      // {
      //   id: 9,
      //   item: 'finishing'
      // },
      // {
      //   id: 10,
      //   item: 'heading'
      // },
      // {
      //   id: 11,
      //   item: 'short passing'
      // },
      // {
      //   id: 12,
      //   item: 'long passing'
      // },
      // {
      //   id: 13,
      //   item: 'curve'
      // },
      // {
      //   id: 14,
      //   item: 'free kick'
      // },
      // {
      //   id: 15,
      //   item: 'long shot'
      // },
      // {
      //   id: 16,
      //   item: 'shot power'
      // },
      // {
      //   id: 17,
      //   item: 'volley'
      // },
      // {
      //   id: 18,
      //   item: 'penalty shot'
      // },
      // {
      //   id: 19,
      //   item: 'kicking'
      // },
      // {
      //   id: 20,
      //   item: 'handling'
      // },
      // {
      //   id: 21,
      //   item: 'reflexes'
      // },
      // {
      //   id: 22,
      //   item: 'jumping'
      // },
      // {
      //   id: 23,
      //   item: 'sprint speed'
      // },
      // {
      //   id: 24,
      //   item: 'balance'
      // },
      // {
      //   id: 25,
      //   item: 'ball control'
      // },

    }
  },

  methods: {
    addNewAttribute: function () {

      // handle empty input
      if (this.newBestAttributeText === '') {
        return false;
      } else {
        console.log(this.newBestAttributeText, this.nextAttributeId);
        this.bestAttributes.push({
          id: this.nextAttributeId++,
          item: this.newBestAttributeText
        });
        this.newBestAttributeText = '';
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

.buttonAddWeak{
  background-color: #c6050b;
  color: #ffffff;
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

.shitUp {
  margin-right: 40px;
   width: 100%;
  max-width: 100%;
  backface-visibility: hidden;
  padding-right: 70px;
  padding-left: 10px;

}

.listSStrength {
  color: #7921c1;
}



div {
  margin: auto;
  max-width: 40rem;
  background-color: aliceblue;

}

.topicSTyle{
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

.background-color{
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
.tick{
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




</style>






