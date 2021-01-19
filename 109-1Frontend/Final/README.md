HsuehChieh.github.io/109-1Frontend/Final/TaiwanMonopoly.html

步驟：

一、初始設定
    1.英文字型設定－使用google font
    2.中文字型設定－利用@font-face使用本機端的字型

二、載入遊戲時的遊戲說明彈跳視窗
    1.bootstrap－modal
    2.jQuery－隱藏modal按鈕，當頁面載入即執行modal

三、角色選擇
    1.bootstrap－modal
    2.jQuery－當點擊開始遊戲時進入選擇角色的視窗
    3.將每個圖片設為button，當點擊奇數次則角色一選擇，點擊偶數次角色二選擇

四、大富翁底圖
    1.利用css class繪製box
    2.選擇各縣市插圖
    3.z-index設為-1，使其確定在底部

五、function throwdice(jQuery)
    1.當點擊擲骰時記錄點擊次數
    2.當點擊次數為奇數則角色一擲骰前進，偶數則為角色二
    3.利用Math.round(Math.random() * 2) + 1決定骰子點數與題目
    4.利用appendTo使角色移動到骰到的位置
    5.到該點後跳出該縣市的問答視窗
    6.當有一個角色完成一圈後跳出視窗讓贏家輸入名字後跳出獲勝訊息
    7.設定時間到即重整頁面，遊戲重新開始

六、各縣市問答(jQuery)
    1.利用currSelection記錄現在選擇的選項
    2.若currSelection的值等於答案則跳出答對的視窗，並break
    3.若currSelection的值不等於答案則退回原本的那格
    4.不回答則回到原點
    5.有一格暫停，獨立出來另外寫
    6.利用Array設計三道問題，使題目產生變化

七、期末報告第二點要求「新增、刪除、顯示、隱藏 HTML Element 等功能」
    1.$("#role1").appendTo("#"+(role_1)).addClass("move3")
    2.exampleModal.addEventListener
