<template>
 <div>
  <div id="computer" :style="computedStyleObject"></div>
  <div>
    <button @click="onClickButton('바위')">바위</button>
    <button @click="onClickButton('가위')">가위</button>
    <button @click="onClickButton('보')">보</button>
  </div>
  <div>{{result}}</div>
  <div>현재 {{socre}}점</div>
  <likecycle-example v-if="true"></likecycle-example>
 </div>
</template>
 
<script>
  const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
  };

  const scores = {
    가위: 1,
    바위: 0,
    보: -1,
  }

  export default {
    data() {
      return {
        imgCoord: rspCoords.바위,
        result: '',
        score: 0,
      };
    },
    computed: {
      computedStyleObject(){
        return { 
          background: `url(http://en.pimg.jp/023/182/267/1/231822267.jpg) ${this.imgCoord} 0`, 
        };
      }
    },
    methods:{  
      onClickButton(choice){
        clearInterval(interval);
        const myScore = score[choice]; 
        const cpuScore = score[computerChoice(this.imgCoord)];
        const diff = myScore - cpuScore;
        if(diff === 0){
          this.result = '비겼습니다.';
        }else if([-1, 2].includes(diff)){
          this.result = '이겼습니다.';
          this.socre += 1;
        }else {
          this.result = '졌습니다.';
          this.socre -= 1;
        }
      },
    },
    beforeCreate(){
      console.log('beforeCreated');
    },
    created(){
      console.log('created');
    },
    beforeMount(){
      console.log('beforeMount');
    },
    mounted(){
      console.log('mounted');
      interval = setInterval(() => {
        if(this.imgCoord === rspCoords.바위){
          this.imgCoord = rspCoords.가위;
        }else if(this.imgCoord === rsp.Coords.가위){
          this.imgCoord = rspCoords.보;
        }else if (this.imgCoord === rspCoords.보){
          this.imgCoord = rsp.Coords.바위;
        }
      }, 100);
    },
    beforeUpdated(){
      console.log('beforeUpdated');
    },
    updated(){
      console.log('updated');
    },
    beforeDestroy(){
      console.log('beforeDestroy');
      clearInterval(interval);
    },
    destroyed(){
      console.log('destroyed');
    },
  };
</script>

<style scoped>
#computer{
  width: 142px;
  height: 200px;
  background-position: 0 0;
}

</style>
