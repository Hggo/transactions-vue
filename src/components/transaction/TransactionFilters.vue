<template>
  <div class="filters">
    <label class="filter-by-title-label">
      <span class="search-icon">
        <img src="@/assets/search-solid.svg" height="20px" />
      </span>
      <input type="text" placeholder="Pesquise por título" class="filter-by-title" v-model="titleFilter"/>
    </label>
    <select v-model="statusFilter">
      <option value="">Status</option>
      <option value="created">Solicitada</option>
      <option value="processing">Processada</option>
      <option value="processed">Concluída</option>
    </select>
  </div>
</template>

<script lang="ts">
import vue from 'vue'

export default vue.extend({
  data () {
    return {
      timeout: 0,
      debouncedTitleFilter: '',
      statusFilter: ''
    }
  },
  computed: {
    titleFilter: {
      get (): string {
        return this.debouncedTitleFilter
      },
      set (value: string) {
        if (this.timeout) clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.debouncedTitleFilter = value
          this.$store.commit('changeFilterTitle', value)
        }, 300)
      }
    }
  },
  watch: {
    statusFilter (value: string) {
      this.$store.commit('changeFilterStatus', value)
    }
  }
})
</script>

<style lang="less">
.filters {
  width: 100%;
  display: flex;
  align-content: flex-start;
  margin: 20px 0px;
}
.filter-by-title-label {
  position: relative;
  margin-right: 2vw;
}
.filter-by-title {
  width: 25vw;
  border-radius: 20px;
  padding: 5px 30px;
  &:focus {
    outline: none;
  }
}
.search-icon {
  position: absolute;
  padding-left: 5px;
  padding-top: 4px;
}
</style>
