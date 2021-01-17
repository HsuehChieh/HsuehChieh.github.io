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

button.onclick = function throwdice() {
    count += 1;
    button.innerHTML = "Throw Dice " + count;
    randomdice_1 = Math.round(Math.random() * 2) + 1;
    randomdice_2 = Math.round(Math.random() * 2) + 1;
    // document.getElementById("dicegif").src = "./img/" + randomdice_1 + ".png";
    // document.images["mydice"].src = "./img/" + randomdice + ".png";
    // 骰子奇數時角色1移動
    if (count % 2 == 1) {
      document.getElementById("dicegif").src = "./img/" + randomdice_1 + ".png";
        document.images["#role1"];
        role_1 += randomdice_1;
        if(role_1 >= 16){
            role_1 -= 16;
            win_1 = 1;
        }
        $("#role1").appendTo("#"+(role_1)).addClass("move3");
        // 走到1就會出現1的題目
        for (i=0; i<16; i++) {
            if(role_1 == i){
                document.querySelector('#btn'+i).click(); 
            }
          }
        if (win_1 == 1){
            let name = prompt('What is your name', 'Type your name'); // 輸入贏家名字
            alert(`🎉${name} wins!!🎉`,500);
            // setTimeout("alert('Role1 Win!!!')",500);
            setTimeout("location.reload()",1000);
        }
        setTimeout("document.getElementById('dicegif').src = './img/dice.gif'",3000)
    }
    // 骰子偶數時角色2移動
    if (count % 2 == 0) {
      document.getElementById("dicegif").src = "./img/" + randomdice_2 + ".png";
        document.images["#role2"];
        role_2 += randomdice_2;
        if(role_2 >= 16){
            role_2 -= 16;
            win_2 = 1;
        }
        $("#role2").appendTo("#"+(role_2)).addClass("move3");
        for (i=0; i<16; i++) {
            if(role_2 == i){
                document.querySelector('#btn'+i).click(); 
            }
          }
        if (win_2 == 1){
            let name = prompt('What is your name', 'Type your name'); // 輸入贏家名字
            alert(`🎉${name} wins!!🎉`,500); 
            setTimeout("location.reload()",1000);
        }
        setTimeout("document.getElementById('dicegif').src = './img/dice.gif'",3000)
    }
    }

// 各縣市問答
    var numChoi = 3;
    var answers = ["b","c","c","b","a","b","b","x","c","a","c","b","a","c","b"];
    var correct_string = ["答對了!一起欣賞基隆正濱漁港彩虹屋吧!","答對了!一起欣賞101跨年煙火吧!","答對了!一起去放天燈吧!","答對了!一起去看石門水庫洩洪吧!","答對了!一起去新竹吃好吃的柿餅吧!","答對了!一起去苗栗賞花吧!","答對了!一起去臺中路思義教堂打卡吧!","暫停一次","答對了!一起去日月潭走走吧!","答對了!一起去阿里山看日出吧!","答對了!一起去安平古堡見證歷史吧!","答對了!一起去美麗島站看看美麗的功之穹頂吧!","答對了!一起流浪到國境之南吧!","答對了!一起去瞧瞧壯觀的太魯閣吧!","答對了!一起去蘭嶼參加飛魚季吧!"]
    function QA(form,index) {
      if(index != 8){
        var currSelection;
        var cnt = 0;//記錄是否有選該選項
          for (j=0; j<numChoi; j++) {
            currSelection = form.elements[j];
            if (currSelection.checked) {
              currSelection.checked = false
              if (currSelection.value == answers[index-1]) {
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
          if(stop_1 == 1 || stop_2 == 1){
            button.innerHTML = "Throw Dice " + (count + 1);
          }
          if(stop_1 == 1){
            count += 1;
            stop_1 = 0;
          }
          if(stop_2 == 1){
            count += 1;
            stop_2 = 0;
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
            button.innerHTML = "Throw Dice " + (count + 2);
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
