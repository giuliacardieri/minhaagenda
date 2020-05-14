<template> 
	<section>
		<select v-bind:class="{ select_material: user[3].value === 1 || isMaterial, 'browser-default': user[3].value === 2 || isDefault }">
			<option value="" disabled selected>Choose your category</option>
			<option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
		</select>
	   <label v-if="user[3].value === 1 && !isDefault" for="category" class="select-elem__label">Category</label>
	 </section>
</template>

<script>
  import { db } from './mixins/db'
  import { userprefs } from './mixins/userprefs'

  export default {
  	props: [ 'isMaterial', 'isDefault' ],
  	mixins: [ db, userprefs ],
	data() {
	    return {
	      'categories': this.getCategories(),
	      'user': this.getUser()
	    }
	  },
	  mounted: function (el) {
	  	console.log('is material? ' + this.isMaterial)
	    var instances = M.FormSelect.init(document.querySelectorAll('.select_material'));
	  }
	}
</script>