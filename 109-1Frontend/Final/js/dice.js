// 骰子
var button = document.getElementById("countbtn"),
    count = 0;
var num = 0;    
var role_1 = 0;
var role_2 = 0;
var win_1 = 0;
var win_2 = 0;
var stop = 1;

button.onclick = function throwdice() {
    count += 1;
    button.innerHTML = "Throw Dice " + count;
    var randomdice = Math.round(Math.random() * 2) + 1;
    document.images["mydice"].src = "./img/" + randomdice + ".png";
    // 骰子奇數時角色1移動
    if (count % 2 == 1) {
        document.images["#role1"];
        role_1 += randomdice;
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
    }
    // 骰子偶數時角色2移動
    if (count % 2 == 0) {
        document.images["#role2"];
        role_2 += randomdice;
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
    }
    }




// 基隆問答
var numChoi = 3;
var answers1 = "b";
function QA1(form) {
  var currSelection1;
  var cnt_1 = 0;//記錄是否有選該選項
    for (j=0; j<numChoi; j++) {
      currSelection1 = form.elements[j];
      if (currSelection1.checked) {
        if (currSelection1.value == answers1) {
          alert("一起欣賞基隆正濱漁港彩虹屋吧!");
          break;
        }
        else{
          if (count % 2 == 1){
            role_1 -= 1;
            $("#role1").appendTo("#"+(role_1)).addClass("move3");
          }
          if (count % 2 == 0){
            role_2 -= 1;
            $("#role2").appendTo("#"+(role_2)).addClass("move3");
          }
          alert("娃~~~後退一步囉QQ");
        }
      }
      else{
        cnt_1 += 1;
        //若cnt_1=3則表示都沒有選擇
        if(cnt_1 == numChoi){
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
}
// 臺北問答
var answers2 = "c";
function QA2(form) {
  var currSelection2;
  var cnt_2 = 0;//記錄是否有選該選項
    for (j=0; j<numChoi; j++) {
      currSelection2 = form.elements[j];
      if (currSelection2.checked) {
        if (currSelection2.value == answers2) {
          alert("一起欣賞101跨年煙火吧!");
          break;
        }
        else{
          if (count % 2 == 1){
            role_1 -= 1;
            $("#role1").appendTo("#"+(role_1)).addClass("move3");
          }
          if (count % 2 == 0){
            role_2 -= 1;
            $("#role2").appendTo("#"+(role_2)).addClass("move3");
          }
            alert("娃~~~後退一步囉QQ");
        }
      }
      else{
        cnt_2 += 1;
        if(cnt_2 == numChoi){
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
}
// 新北問答
var answers3 = "c";
function QA3(form) {
  var currSelection3;
  var cnt_3 = 0;//記錄是否有選該選項
    for (j=0; j<numChoi; j++) {
      currSelection3 = form.elements[j];
      if (currSelection3.checked) {
        if (currSelection3.value == answers3) {
          alert("一起去放天燈吧!");
          break;
        }
        else{
          if (count % 2 == 1){
            role_1 -= 1;
            $("#role1").appendTo("#"+(role_1)).addClass("move3");
          }
          if (count % 2 == 0){
            role_2 -= 1;
            $("#role2").appendTo("#"+(role_2)).addClass("move3");
          }
          alert("娃~~~後退一步囉QQ");
        }
      }
      else{
        cnt_3 += 1;
        //若cnt_1=3則表示都沒有選擇
        if(cnt_3 == numChoi){
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
}
// 桃園問答
var answers4 = "b";
function QA4(form) {
  var currSelection4;
  var cnt_4 = 0;//記錄是否有選該選項
    for (j=0; j<numChoi; j++) {
      currSelection4 = form.elements[j];
      if (currSelection4.checked) {
        if (currSelection4.value == answers4) {
          alert("一起去看石門水庫洩洪吧!");
          break;
        }
        else{
          if (count % 2 == 1){
            role_1 -= 1;
            $("#role1").appendTo("#"+(role_1)).addClass("move3");
          }
          if (count % 2 == 0){
            role_2 -= 1;
            $("#role2").appendTo("#"+(role_2)).addClass("move3");
          }
          alert("娃~~~後退一步囉QQ");
        }
      }
      else{
        cnt_4 += 1;
        if(cnt_4 == numChoi){
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
}
// 新竹問答
var answers5 = "a";
function QA5(form) {
  var currSelection5;
  var cnt_5 = 0;//記錄是否有選該選項
    for (j=0; j<numChoi; j++) {
      currSelection5 = form.elements[j];
      if (currSelection5.checked) {
        if (currSelection5.value == answers5) {
          alert("一起去新竹吃好吃的柿餅吧!");
          break;
        }
        else{
          if (count % 2 == 1){
            role_1 -= 1;
            $("#role1").appendTo("#"+(role_1)).addClass("move3");
          }
          if (count % 2 == 0){
            role_2 -= 1;
            $("#role2").appendTo("#"+(role_2)).addClass("move3");
          }
          alert("娃~~~後退一步囉QQ");
        }
      }
      else{
        cnt_5 += 1;
        if(cnt_5 == numChoi){
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
}
// 苗栗問答
var answers6 = "b";
function QA6(form) {
  var currSelection6;
  var cnt_6 = 0;//記錄是否有選該選項
    for (j=0; j<numChoi; j++) {
      currSelection6 = form.elements[j];
      if (currSelection6.checked) {
        if (currSelection6.value == answers6) {
          alert("一起去苗栗賞花吧!");
          break;
        }
        else{
          if (count % 2 == 1){
            role_1 -= 1;
            $("#role1").appendTo("#"+(role_1)).addClass("move3");
          }
          if (count % 2 == 0){
            role_2 -= 1;
            $("#role2").appendTo("#"+(role_2)).addClass("move3");
          }
          alert("娃~~~後退一步囉QQ");
        }
      }
      else{
        cnt_6 += 1;
        if(cnt_6 == numChoi){
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
}
// 臺中問答
var answers7 = "b";
function QA7(form) {
  var currSelection7;
  var cnt_7 = 0;//記錄是否有選該選項
    for (j=0; j<numChoi; j++) {
      currSelection7 = form.elements[j];
      if (currSelection7.checked) {
        if (currSelection7.value == answers7) {
          alert("一起去臺中路思義教堂打卡吧!");
          break;
        }
        else{
          if (count % 2 == 1){
            role_1 -= 1;
            $("#role1").appendTo("#"+(role_1)).addClass("move3");
          }
          if (count % 2 == 0){
            role_2 -= 1;
            $("#role2").appendTo("#"+(role_2)).addClass("move3");
          }
          alert("娃~~~後退一步囉QQ");
        }
      }
      else{
        cnt_7 += 1;
        if(cnt_7 == numChoi){
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
}

// 暫停  不會寫QQ
function QA8(form) {
  alert("暫停一次");
  count +=2;
}
  
// 南投問答
var answers9 = "c";
function QA9(form) {
  var currSelection9;
  var cnt_9 = 0;//記錄是否有選該選項
    for (j=0; j<numChoi; j++) {
      currSelection9 = form.elements[j];
      if (currSelection9.checked) {
        if (currSelection9.value == answers9) {
          alert("一起去日月潭走走吧!");
          break;
        }
        else{
          if (count % 2 == 1){
            role_1 -= 1;
            $("#role1").appendTo("#"+(role_1)).addClass("move3");
          }
          if (count % 2 == 0){
            role_2 -= 1;
            $("#role2").appendTo("#"+(role_2)).addClass("move3");
          }
          alert("娃~~~後退一步囉QQ");
        }
      }
      else{
        cnt_9 += 1;
        if(cnt_9 == numChoi){
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
}
// 嘉義問答
var answers10 = "a";
function QA10(form) {
  var currSelection10;
  var cnt_10 = 0;//記錄是否有選該選項
    for (j=0; j<numChoi; j++) {
      currSelection10 = form.elements[j];
      if (currSelection10.checked) {
        if (currSelection10.value == answers10) {
          alert("一起去阿里山看日出吧!");
          break;
        }
        else{
          if (count % 2 == 1){
            role_1 -= 1;
            $("#role1").appendTo("#"+(role_1)).addClass("move3");
          }
          if (count % 2 == 0){
            role_2 -= 1;
            $("#role2").appendTo("#"+(role_2)).addClass("move3");
          }
          alert("娃~~~後退一步囉QQ");
        }
      }
      else{
        cnt_10 += 1;
        if(cnt_10 == numChoi){
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
}
// 臺南問答
var answers11 = "c";
function QA11(form) {
  var currSelection11;
  var cnt_11 = 0;//記錄是否有選該選項
    for (j=0; j<numChoi; j++) {
      currSelection11 = form.elements[j];
      if (currSelection11.checked) {
        if (currSelection11.value == answers11) {
          alert("一起去安平古堡見證歷史吧!");
          break;
        }
        else{
          if (count % 2 == 1){
            role_1 -= 1;
            $("#role1").appendTo("#"+(role_1)).addClass("move3");
          }
          if (count % 2 == 0){
            role_2 -= 1;
            $("#role2").appendTo("#"+(role_2)).addClass("move3");
          }
          alert("娃~~~後退一步囉QQ");
        }
      }
      else{
        cnt_11 += 1;
        if(cnt_11 == numChoi){
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
}
// 高雄問答
var answers12 = "b";
function QA12(form) {
  var currSelection12;
  var cnt_12 = 0;//記錄是否有選該選項
    for (j=0; j<numChoi; j++) {
      currSelection12 = form.elements[j];
      if (currSelection12.checked) {
        if (currSelection12.value == answers12) {
          alert("一起去美麗島站看看美麗的功之穹頂吧!");
          break;
        }
        else{
          if (count % 2 == 1){
            role_1 -= 1;
            $("#role1").appendTo("#"+(role_1)).addClass("move3");
          }
          if (count % 2 == 0){
            role_2 -= 1;
            $("#role2").appendTo("#"+(role_2)).addClass("move3");
          }
          alert("娃~~~後退一步囉QQ");
        }
      }
      else{
        cnt_12 += 1;
        if(cnt_12 == numChoi){
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
}
// 屏東問答
var answers13 = "a";
function QA13(form) {
  var currSelection13;
  var cnt_13 = 0;//記錄是否有選該選項
    for (j=0; j<numChoi; j++) {
      currSelection13 = form.elements[j];
      if (currSelection13.checked) {
        if (currSelection13.value == answers13) {
          alert("一起流浪到國境之南吧!");
          break;
        }
        else{
          if (count % 2 == 1){
            role_1 -= 1;
            $("#role1").appendTo("#"+(role_1)).addClass("move3");
          }
          if (count % 2 == 0){
            role_2 -= 1;
            $("#role2").appendTo("#"+(role_2)).addClass("move3");
          }
          alert("娃~~~後退一步囉QQ");
        }
      }
      else{
        cnt_13 += 1;
        if(cnt_13 == numChoi){
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
}
// 花蓮問答
var answers14 = "c";
function QA14(form) {
  var currSelection14;
  var cnt_14 = 0;//記錄是否有選該選項
    for (j=0; j<numChoi; j++) {
      currSelection14 = form.elements[j];
      if (currSelection14.checked) {
        if (currSelection14.value == answers14) {
          alert("一起流浪到國境之南吧!");
          break;
        }
        else{
          if (count % 2 == 1){
            role_1 -= 1;
            $("#role1").appendTo("#"+(role_1)).addClass("move3");
          }
          if (count % 2 == 0){
            role_2 -= 1;
            $("#role2").appendTo("#"+(role_2)).addClass("move3");
          }
          alert("娃~~~後退一步囉QQ");
        }
      }
      else{
        cnt_14 += 1;
        if(cnt_14 == numChoi){
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
}
// 蘭嶼問答
var answers15 = "b";
function QA15(form) {
  var currSelection14;
  var cnt_15 = 0;//記錄是否有選該選項
    for (j=0; j<numChoi; j++) {
      currSelection15 = form.elements[j];
      if (currSelection15.checked) {
        if (currSelection15.value == answers14) {
          alert("一起去蘭嶼參加飛魚季吧!");
          break;
        }
        else{
          if (count % 2 == 1){
            role_1 -= 1;
            $("#role1").appendTo("#"+(role_1)).addClass("move3");
          }
          if (count % 2 == 0){
            role_2 -= 1;
            $("#role2").appendTo("#"+(role_2)).addClass("move3");
          }
          alert("娃~~~後退一步囉QQ");
        }
      }
      else{
        cnt_15 += 1;
        if(cnt_15 == numChoi){
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




var hidden = false;
function action() {
    hidden = !hidden;
    if(hidden) {
        document.getElementById('togglee').style.visibility = 'hidden';
    } else {
        document.getElementById('togglee').style.visibility = 'visible';
    }
}