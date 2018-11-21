<template>
<div id='Timer'>
  <div clsas='show_time'>
    <ul>
      <li class='time_label'>次の料理まで</li>
      <li class='time'>{{time}}</li>
    </ul>
  </div>
  
  <br><br>
  <div class='set_time'>
    <ul>
      <li class='time_label2'>次の料理時間</li>
      <li class='time2'>{{target_time}}</li>
      <li>
        <button class='time_button' v-on:click='increment'> ＋ </button>
        &nbsp;
        <button class='time_button' v-on:click='decrement'> ー </button>
        &nbsp;
        <button class='time_button' v-on:click='initTarget'> 現在時刻 </button>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
    name: 'Timer',
    data () {
        return {
            message : 'Hi',
            time : null,
            timerObj : null,
            target_time : null,
            target_hour : null,
            target_min : null,
        }
    },
    created : function(){
        this.updateTimer()
        this.initTarget()
    },
    methods : {
        toDoubleDigits : function(num){
            num += "";
            if (num.length === 1) {
                num = "0" + num;
            }
            return num;     
        },
        increment : function(){
            var min = this.target_min
            var hour = this.target_hour
            min ++
            if (min >= 60){
                min = min - 60
                hour ++
            }
            this.target_min = min
            this.target_hour = hour
            this.target_time = this.toDoubleDigits(this.target_hour) + ':' + this.toDoubleDigits(this.target_min)
        },
        decrement : function(){
            var min = this.target_min
            var hour = this.target_hour
            min --
            if (min < 0){
                min = 60 + min
                hour --
            }
            this.target_min = min
            this.target_hour = hour
            this.target_time = this.toDoubleDigits(this.target_hour) + ':' + this.toDoubleDigits(this.target_min)
        },
        calc_diff : function(){
            var now = new Date()
            var target_sec = (this.target_hour * 60 * 60) + (this.target_min * 60)
            var present_sec = (now.getHours() * 60 * 60) + (now.getMinutes() * 60) + now.getSeconds() 
            var remain_time = target_sec - present_sec
            if (remain_time < 0){
                return ['0', '0']
            } else{
                var remain_min = Math.floor(remain_time/60)
                var remain_sec = remain_time - (remain_min * 60)
                return [remain_min.toString(), remain_sec.toString()]
            }
        },
        initTarget : function(){
            var now = new Date()
            this.target_hour = now.getHours()
            this.target_min = now.getMinutes()
            this.target_time = this.toDoubleDigits(this.target_hour) + ':' + this.toDoubleDigits(this.target_min)
        },
        show_time : function(){
            var now = new Date()
            let timeString = this.calc_diff().map(function(str){
                if (str.length < 2){
                    return '0' + str
                } else {
                    return str
                }
            })
            this.time = timeString[0] + ':' + timeString[1]
        },
        updateTimer : function(){
            let self = this
            this.timerObj = setInterval(function() { self.show_time()}, 1000) 
        },
    },
}
</script>

<style>
ul, li{
    list-style-type: none;
}
.time{
    font-size: 700%;
}
.time_label{
    font-size:400%;
}
.time2{
    font-size: 400%;
}
.time_label2{
    font-size:300%;
}
.time_button{
    border:#eeeeee  solid 2px;
    height: 60px;
    font-size:200%;
}
</style>
