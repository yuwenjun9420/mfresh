<template>
  <div>
    <!-- 分页导航-->
    <div class="pages">
      <!-- <a href class>上一页</a>
        <a href class="cur">1</a>
        <a href>2</a>
        <a href>3</a>
        <a href>4</a>
        <a href>5</a>
      <a href>下一页</a>-->
      <a class="prev-page" :class="curPage==1?'default':''" @click="prePage">上一页</a>
      <ul>
        <li v-for="(item,index) in pagesCount" :key="index" @click="changePaging(item)">
          <a :class="curPage==index+1?'cur':''">{{item}}</a>
        </li>
      </ul>
      <a class="next-page" :class="curPage==pagesCount?'default':''" @click="nextPage">下一页</a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["pagesCount"],
  data() {
    return {
      curPage: 1
    };
  },
  mounted() {
    let pageNum = this.$route.params.id;
    this.curPage = pageNum;
    console.log(this.$route);
  },
  methods: {
    prePage() {
      if (this.curPage > 1) {
        this.curPage--;
        this.$router.push({
          name: this.$route.name,
          params: { id: this.curPage }
        });
      }
    },
    nextPage() {
      if (this.curPage < this.pagesCount) {
        this.curPage++;
        this.$router.push({
          name: this.$route.name,
          params: { id: this.curPage }
        });
      }
    },
    changePaging(index) {
      if (index == this.curPage) {
        return;
      } else {
        this.curPage = index;
        this.$router.push({
          name: this.$route.name,
          params: { id: this.curPage }
        });
      }
    }
  }
};
</script>

