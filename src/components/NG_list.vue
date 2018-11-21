<template>
<div id='NGList'>
  <h1>NG表</h1>
  
  <div class='reg_NG'>
    <a v-on:click='show_form = !show_form'>▼ NGを入力</a>
    <div class='dish' v-if='show_form'>
      
      <div class='inner_NG'>
        <p><a v-on:click='show_apa = !show_apa'>▼ 前菜</a></p>
        <table v-if='show_apa' align='center'>
          <tr v-for='tables of table_list'>
            <th v-for='table of tables'>
              <label class='checkbox'>
                <input type='checkbox' v-on:click='change_state(1, table)' class='checkbox' v-bind:checked='NG_list[1][table]'>
                {{table}}
              </label>
            </th>
          </tr>
        </table>
      </div>
      
      <div class='inner_NG'>
        <p><a v-on:click='show_soup = !show_soup'>▼ スープ</a></p>
        <table v-if='show_soup' align='center'>
          <tr v-for='tables of table_list'>
            <th v-for='table of tables'>
              <label class='checkbox'>
                <input type='checkbox' v-on:click='change_state(2, table)' class='checkbox' v-bind:checked='NG_list[2][table]'>
                {{table}}
              </label>
            </th>
          </tr>
        </table>
      </div>
      
      <div class='inner_NG'>
        <p><a v-on:click='show_fish = !show_fish'>▼ 魚</a></p>
        <table v-if='show_fish' align='center'>
          <tr v-for='tables of table_list'>
            <th v-for='table of tables'>
              <label class='checkbox'>
                <input type='checkbox' v-on:click='change_state(3, table)' class='checkbox' v-bind:checked='NG_list[3][table]'>
                {{table}}
              </label>
            </th>
          </tr>
        </table>
      </div>
      
      <div class='inner_NG'>
        <p><a v-on:click='show_meet = !show_meet'>▼ 肉</a></p>
        <table v-if='show_meet' align='center'>
          <tr v-for='tables of table_list'>
            <th v-for='table of tables'>
              <label class='checkbox'>
                <input type='checkbox' v-on:click='change_state(4, table)' class='checkbox' v-bind:checked='NG_list[4][table]'>
                {{table}}
              </label>
            </th>
          </tr>
        </table>
      </div>
      
      <div class='inner_NG'>
        <p><a v-on:click='show_gal = !show_gal'>▼ お茶漬け</a></p>
        <table v-if='show_gal' align='center'>
          <tr v-for='tables of table_list'>
            <th v-for='table of tables'>
              <label class='checkbox'>
                <input type='checkbox' v-on:click='change_state(5, table)' class='checkbox' v-bind:checked='NG_list[5][table]'>
                {{table}}
              </label>
            </th>
          </tr>
        </table>
      </div>
      
      <div class='inner_NG'>
        <p><a v-on:click='show_des = !show_des'>▼ デザート</a></p>
        <table v-if='show_des' align='center'>
          <tr v-for='tables of table_list'>
            <th v-for='table of tables'>
              <label class='checkbox'>
                <input type='checkbox' v-on:click='change_state(6, table)' class='checkbox' v-bind:checked='NG_list[6][table]'>
                {{table}}
              </label>
            </th>
          </tr>
        </table>
      </div>
      
      <a v-on:click='show_form = !show_form'>▲ 折りたたむ</a>
    </div>
  </div>
  
  <div class='show_NG'>
    <a v-on:click='show_NG = !show_NG'>▼ NG表</a>
    <div v-if='show_NG' class='NG_list'>
      <ul>
        <li class='label'>前菜NG</li>
        <li class='value'>
          <td v-for='table of table_list_flatten' v-if='NG_list[1][table]'> &nbsp;{{table}},</td>
        </li>
        
        <li class='label'>スープNG</li>
        <li class='value'>
          <td v-for='table of table_list_flatten' v-if='NG_list[2][table]'> &nbsp;{{table}},</td>
        </li>
        
        <li class='label'>魚料理NG</li>
        <li class='value'>
          <td v-for='table of table_list_flatten' v-if='NG_list[3][table]'> &nbsp;{{table}},</td>
        </li>
        
        <li class='label'>肉料理NG</li>
        <li class='value'>
          <td v-for='table of table_list_flatten' v-if='NG_list[4][table]'> &nbsp;{{table}},</td>
        </li>
        
        <li class='label'>お茶漬けNG</li>
        <li class='value'>
          <td v-for='table of table_list_flatten' v-if='NG_list[5][table]'> &nbsp;{{table}},</td>
        </li>
        
        <li class='label'>デザートNG</li>
        <li class='value'>
          <td v-for='table of table_list_flatten' v-if='NG_list[6][table]'> &nbsp;{{table}},</td>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default{
    name: 'NGList',
    data (){
        return {
            table_list : [
                ['A1', 'A2', 'A3', 'A4'],
                ['B1', 'B2', 'B3', 'B4'],
                ['C1', 'C2', 'C3', 'C4'],
                ['D1', 'D2', 'D3', 'D4'],
                ['E1', 'E2', 'E3', 'E4'],
            ],
            table_list_flatten : [
                'A1', 'A2', 'A3', 'A4',
                'B1', 'B2', 'B3', 'B4',
                'C1', 'C2', 'C3', 'C4',
                'D1', 'D2', 'D3', 'D4',
                'E1', 'E2', 'E3', 'E4',
            ],
            NG_list : {},
            num_dish : 0,
            show_form : false,
            show_apa : false,
            show_soup : false,
            show_fish : false,
            show_meet : false,
            show_gal : false,
            show_des : false,
            show_NG : false,
        }
    },
    created :function() {
        this.add_dish()
        this.add_dish()
        this.add_dish()
        this.add_dish()
        this.add_dish()
        this.add_dish()
    },
    methods : {
        add_dish : function(name){
            this.num_dish ++
            var NG = {}
            for (var tables of this.table_list){
                for (var table of tables){
                    NG[table] = false;
                }
            }
            this.NG_list[this.num_dish] = NG
        },
        change_state : function(num, table){
            this.NG_list[Number(num)][table] = !this.NG_list[Number(num)][table]
        },
    }
}
</script>

<style>
#NGList{
}
.reg_NG{
    background-color: #FFF5EE;
    padding:5px;
    margin:5px;
    border-style: #FF1493 solid 5px;
    border-radius: 10px;
}
.inner_NG{
    background-color: #FFF0F5;
    border-radius: 10px;
    padding: 5px;
    margin:5px;
}
ul, li{
    list-style-type: none;
    margin:5px;
}
.NG{
    border:#eeeeee solid 2px;
    background-color: #FFE4E1;
    font-size: 20px;
}
.checkbox{
    font-size:25px;
    background-color: #FFE4E1;
    border-radius:4px;
    font-weight: normal;
}
.show_NG{
    background-color: #FFF5EE;
    padding:5px;
    margin:5px;
    border-style: #FF1493 solid 5px;
    border-radius: 10px;
}
table{
    text-align: left;
    font-size: 20px;
}
.NG_list{
    text-align:left;
}
.label{
    font-weight:bold;
    font-size:20px;
    border-bottom:#aaaaaa dashed 2px;
}
.value{
    font-size:25px;
}
ul{
    padding-left:5px;
}
a{
    font-size:20px;
}

</style>
