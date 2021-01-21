// 隱藏modal按鈕，參考：https://stackoverflow.com/questions/55174527/data-toggle-in-javascript-function
$(() => {
  $("#exampleModalA").modal('toggle'); 
  $("#exampleModalA").modal('target'); 
})
// 當按下開始遊戲進入選角色
var isFirstClick = false
$('#start').on('click', () => {
  $("#exampleModalB").modal('toggle'); 
  $("#exampleModalB").modal('target'); 
})
var roleName = ['臺灣黑熊','梅花鹿','石虎','臺灣獼猴','臺灣藍鵲','黑面琵鷺','櫻花鉤吻鮭','飛鼠']
var role_choose = function()
{
  var str = this.id;
    var rName = str.split("_");
    r = rName[1]-1
  if (!isFirstClick){
    document.getElementById("role1").src = "./img/"+this.id+".png";
    alert('角色1為'+roleName[r]);
    isFirstClick = true;
  }
  else if (isFirstClick){
    document.getElementById("role2").src = "./img/"+this.id+".png";
    alert('角色2為'+roleName[r]);
    isFirstClick = false;
  }
}
document.getElementById('r_1').onclick = role_choose;
document.getElementById('r_2').onclick = role_choose;
document.getElementById('r_3').onclick = role_choose;
document.getElementById('r_4').onclick = role_choose;
document.getElementById('r_5').onclick = role_choose;
document.getElementById('r_6').onclick = role_choose;
document.getElementById('r_7').onclick = role_choose;
document.getElementById('r_8').onclick = role_choose;

// $choosebtn.on('click', function (){
//     console.log(this)
//   })
// 骰子
var button = document.getElementById("countbtn"),
    count = 0;
var num = 0;    
var role_1 = 0;
var role_2 = 0;
var win_1 = 0;
var win_2 = 0;
var stop_1 = 0;
var stop_2 = 0;
var randomdice_1 = 0; 
var randomdice_1 = 0;
var question_selector = 0;
var question_array = [["基隆廟口夜市有名的鼎邊銼的「銼」在臺語中是什麼意思?", "基隆廟口的發跡與奠濟宮密不可分，請問奠濟宮所奉祠的神祇為何?", "基隆廟口夜市有名的營養三明治與何國人有關?"],["101高度最接近多少公尺?", "位於101附近的象山為四獸山之一，請問下列何者並「非」四獸山之一?", "臺北市吉祥物「熊讚」出現的原因?"],["「放天燈」為什麼節日的習俗?", "水湳洞的陰陽海為許多網美打卡聖地，請問其形成原因為何?", "野柳內有許多特別的岩石，其中女王頭為一蕈狀岩，請問以下何者也是?"],["石門水庫的蓄水量為臺灣第幾大?", "大溪地區在雍正年間以前為何族的勢力範圍?", "桃園有許多特殊的當地用語，請問「烙」為什麼意思?"],["新竹柿餅背後的功臣「九降風」的「九」是什麼意思?", "新竹有名的米粉製造技術由何地區傳入?", "衛服部要求米粉產品的含米量須達100％才能稱作純米米粉，幾%以上未達100％者，僅可稱調和米粉?"],["苗栗有著名的油桐花祭，請問油桐花又有什麼別稱?", "有草莓之鄉的苗栗大湖，草莓面積與產量約佔全國幾成?", "何者非苗栗特產肚臍餅的餡料?"],["臺中最美校園中的路思義教堂是打卡熱點，其設計風格為何?", "崑派餅店出身的魏清海師傅以何種原形改良成現今的太陽餅?", "何者非臺中花博的吉祥物"],[],["請問臺灣第一大湖泊日月潭最早的住民是以下哪個族群?", "南投為濁水溪的源頭，請問濁水溪為臺灣第幾長的河流?", "下列哪個鄉鎮為日月潭紅茶的製茶重鎮?"],["其實阿里山不是一座山而是一個風景區，請問阿里山離哪座山脈最遠?", "日治時期嘉義曾有什麼「都」之美譽?", "因清治時代興築之古城形狀，嘉義又名什麼「城」?"],["安平古堡為荷蘭人所建的據點，請問當時的名字為何?", "赤崁樓內有九隻贔屭，請問「贔屭」讀音為何？", "臺南有名的膨餅，在清代時期，下列何者「非」常民在生活中的運用？"],["高雄著名的「光之穹頂」位在哪個捷運站?", "高雄又稱「打狗」，那請問「打貓」是哪裡？", "愛河為高雄城市之河，請問其發源於哪裡？"],["鵝鑾鼻附近有一巨大礁岩形似帆船故得名，請問「鵝鑾」是哪族語的「帆船」?", "何者為臺鐵最南端的車站？", "恆春有三寶，請問下列何者不是？"],["堪稱鬼斧神工的太魯閣峽谷是由哪條溪流切鑿形成?", "花蓮主要的原住民阿美族為母系社會，請問下列何族亦是？", "花蓮有名的花蓮薯最初的創始店由何人所創？"],["飛魚季為達悟族的重要節日，所有同一年度飛魚季捕獲的飛魚必須於何時前吃完?", "拼板舟紅黑白配色的圓形圖騰象徵何者？", "蘭嶼舊稱紅頭嶼，現改名蘭嶼，請問「蘭」指何者？"]]
var option_1_array = [["跑動","開漳聖王","美國"],["610公尺","虎山","100年建國紀念"],["春節","海底溫泉","花生石"],["第一大","布農族","很熱"],["農曆九月","中國上海","30%"],["四月白","三成","芋頭泥"],["古典主義","餡餅","馬"],[],["漢人","第一","國姓鄉"],["海岸山脈","木都","桃城"],["聖多明哥城","ㄅㄟˋ ㄔㄢˊ","頒獎"],["西子灣站","屏東林邊","仁武"],["排灣族","屏東車站","玉米"],["花蓮溪","卑南族","漢人"],["7/7","圓滿","蘭草"]]
var option_2_array = [["蠕動","三山國王","法國"],["560公尺","豹山","2015年全中運"],["兒童節","天然礦物","仙女鞋"],["第二大","泰雅族","凶狠"],["每月九日","中國江西","50%"],["五月雪","五成","綠豆泥"],["現代主義","酥餅","石虎"],[],["鄒族","第二","仁愛鄉"],["雪山山脈","畫都","方城"],["普羅民遮城","ㄅㄟˋ ㄒㄧˋ","示愛"],["美麗島站","嘉義民雄","旗山"],["卑南族","潮州車站","瓊麻"],["卑南溪","賽夏族","日本人"],["10/15","太陽","蘭花"]]
var option_3_array = [["跳動","濟公活佛","越南"],["510公尺","狼山","2017年世大運"],["元宵節","工廠廢水","金剛石"],["第三大","卡那卡那富族","丟臉"],["晚上九點","中國福建","80%"],["六月花","八成","番薯泥"],["後現代主義","麥芽餅","臺灣獼猴"],[],["邵族","第三","魚池鄉"],["玉山山脈","茶都","梅城"],["熱蘭遮城","ㄅㄧˋ ㄒㄧˋ","吵架和好"],["夢時代站","臺北貓空","美濃"],["西拉雅族","枋山車站","洋蔥"],["立霧溪","排灣族","阿美族人"],["12/32","眼睛","木蘭"]]

button.onclick = function throwdice() {
  count += 1;
  button.innerHTML = "Role1 Throw";
  randomdice_1 = Math.round(Math.random() * 2) + 1; //決定角色1的前進步數
  randomdice_2 = Math.round(Math.random() * 2) + 1; //決定角色2的前進步數
  question_selector =  Math.round(Math.random() * 2) + 1; //決定題目為三題中哪一題
    // 骰子奇數時角色1移動
    if (count % 2 == 1) {
      button.innerHTML = "Role2 Throw"
      document.getElementById("dicegif").src = "./img/" + randomdice_1 + ".png";
      document.images["#role1"];
      role_1 += randomdice_1;
      if(role_1 >= 16){
          role_1 -= 16;
          win_1 = 1;
      }
      if(role_1 != 8 || role_1 != 0){
        if(role_1 <8){
          document.getElementsByClassName("question")[role_1-1].innerHTML = question_array[role_1-1][question_selector-1]
          document.getElementsByClassName("option_1")[role_1-1].innerHTML = option_1_array[role_1-1][question_selector-1]
          document.getElementsByClassName("option_2")[role_1-1].innerHTML = option_2_array[role_1-1][question_selector-1]
          document.getElementsByClassName("option_3")[role_1-1].innerHTML = option_3_array[role_1-1][question_selector-1]
        }
        else{
          document.getElementsByClassName("question")[role_1-2].innerHTML = question_array[role_1-1][question_selector-1]
          document.getElementsByClassName("option_1")[role_1-2].innerHTML = option_1_array[role_1-1][question_selector-1]
          document.getElementsByClassName("option_2")[role_1-2].innerHTML = option_2_array[role_1-1][question_selector-1]
          document.getElementsByClassName("option_3")[role_1-2].innerHTML = option_3_array[role_1-1][question_selector-1]
        }
      }
      $("#role1").appendTo("#"+(role_1)).addClass("move3");
      // 走到1就會出現1的題目
      for (i=0; i<16; i++) {
          if(role_1 == i && win_1 == 0){
              document.querySelector('#btn'+i).click(); 
          }
        }
      if (win_1 == 1){
          let name = prompt('What is your name', 'Type your name'); // 輸入贏家名字
          alert(`🎉${name} wins!!🎉`,500);
          // setTimeout("alert('Role1 Win!!!')",500);
          setTimeout("location.reload()",1000);
      }
      setTimeout("document.getElementById('dicegif').src = './img/dice.gif'",7000);
      //setTimeout(() => {button.innerHTML = "Role1 Throw"}, 7000);
  }
  // 骰子偶數時角色2移動
  if (count % 2 == 0) {
      button.innerHTML = "Role1 Throw"
      document.getElementById("dicegif").src = "./img/" + randomdice_2 + ".png";
      document.images["#role2"];
      role_2 += randomdice_2;
      if(role_2 >= 16){
          role_2 -= 16;
          win_2 = 1;
      }
      if(role_2 != 8 || role_2 != 0){
        if(role_2 < 8){
          document.getElementsByClassName("question")[role_2-1].innerHTML = question_array[role_2-1][question_selector-1]
          document.getElementsByClassName("option_1")[role_2-1].innerHTML = option_1_array[role_2-1][question_selector-1]
          document.getElementsByClassName("option_2")[role_2-1].innerHTML = option_2_array[role_2-1][question_selector-1]
          document.getElementsByClassName("option_3")[role_2-1].innerHTML = option_3_array[role_2-1][question_selector-1]
        }
        else{
          document.getElementsByClassName("question")[role_2-2].innerHTML = question_array[role_2-1][question_selector-1]
          document.getElementsByClassName("option_1")[role_2-2].innerHTML = option_1_array[role_2-1][question_selector-1]
          document.getElementsByClassName("option_2")[role_2-2].innerHTML = option_2_array[role_2-1][question_selector-1]
          document.getElementsByClassName("option_3")[role_2-2].innerHTML = option_3_array[role_2-1][question_selector-1]
        }
      }
      $("#role2").appendTo("#"+(role_2)).addClass("move3");
      for (i=0; i<16; i++) {
          if(role_2 == i && win_2 == 0){
              document.querySelector('#btn'+i).click(); 
          }
        }
      if (win_2 == 1){
          let name = prompt('What is your name', 'Type your name'); // 輸入贏家名字
          alert(`🎉${name} wins!!🎉`,500); 
          setTimeout("location.reload()",1000);
      }
      setTimeout("document.getElementById('dicegif').src = './img/dice.gif'",5000);
      // setTimeout(() => {button.innerHTML = "Role1 Throw"}, 5000);
  }
  }

// 各縣市問答
    var numChoi = 3;
    var answers = [["b","a","a"],["c","c","c"],["c","b","c"],["b","b","c"],["a","c","b"],["b","c","a"],["b","b","c"],"x",["c","a","c"],["a","b","a"],["c","c","b"],["b","b","a"],["a","c","a"],["c","a","b"],["b","c","b"]];
    var correct_string = ["答對了!一起欣賞基隆正濱漁港彩虹屋吧!","答對了!一起去臺北欣賞101跨年煙火吧!","答對了!一起去新北平溪放天燈吧!","答對了!一起去桃園看石門水庫洩洪吧!","答對了!一起去新竹吃好吃的柿餅吧!","答對了!一起去苗栗賞花吧!","答對了!一起去臺中路思義教堂打卡吧!","暫停一次","答對了!一起去南投日月潭走走吧!","答對了!一起去嘉義阿里山看日出吧!","答對了!一起去臺南安平古堡見證歷史吧!","答對了!一起去高雄美麗島站看看美麗的功之穹頂吧!","答對了!一起流浪到國境之南平屏東吧!","答對了!一起去花蓮瞧瞧壯觀的太魯閣吧!","答對了!一起去蘭嶼參加飛魚季吧!"]
    function QA(form,index) {
      if(index != 8){
        var currSelection;
        var cnt = 0;//記錄是否有選該選項
          for (j=0; j<numChoi; j++) {
            currSelection = form.elements[j];
            if (currSelection.checked) {
              currSelection.checked = false
              if (currSelection.value == answers[index-1][question_selector-1]) {
                alert(correct_string[index-1]);
                break;
              }
              else{
                if (count % 2 == 1){
                  role_1 -= randomdice_1;
                  $("#role1").appendTo("#"+(role_1)).addClass("move3");
                }
                if (count % 2 == 0){
                  role_2 -= randomdice_2;
                  $("#role2").appendTo("#"+(role_2)).addClass("move3");
                }
                alert("娃~答錯囉~~只能留在原地囉QQ");
              }
            }
            else{
              cnt += 1;
              //若cnt=3則表示都沒有選擇
              if(cnt == numChoi){
                if (count % 2 == 1){
                  role_1 = 0;
                  $("#role1").appendTo("#"+(role_1)).addClass("move3");
                }
                if (count % 2 == 0){
                  role_2 = 0;
                  $("#role2").appendTo("#"+(role_2)).addClass("move3");
                }
                alert("不選答案齁🤔回到原點囉");          
              }
            }
          }
          if(stop_1 == 1){
            count += 1;
            stop_1 = 0;
            button.innerHTML = "Role2 Throw";
          }
          if(stop_2 == 1){
            count += 1;
            stop_2 = 0;
            button.innerHTML = "Role1 Throw";
          }
      }
      else{
        alert("暫停一次");
        if(count % 2 == 1){
          stop_1 = 1;
        }
        if(count % 2 == 0){
          stop_2 = 1;
        }
        if(stop_1 == 1 && stop_2 == 1){
            if(count % 2 == 1){
              button.innerHTML = "Role2 Throw";
            }
            else{
              button.innerHTML = "Role1 Throw";
            }
            count += 2
            stop_1 = 0
            stop_2 = 0
        }
      }
    }





// Quiz
var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')
})
