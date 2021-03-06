class Stack {
    constructor() {
        this.arr = Array();
        this.Top = -1;
    }

    empty() {
        return this.Top == -1;
    }

    push(data) {
        this.arr[this.Top++] = data;
    }

    pop() {
        if (this.empty()) {
            return -1;
        } else {
            const item = this.arr[this.Top];
            this.Top--;
            return item;
        }
    }

    show() {
        if (this.empty()) {
            return -1
        }
         else
          {
            for (var i = 0; i < this.Top; i++) {
                console.log(this.arr[i]);
            }
            console.log(`스택의 길이는 ${this.Top}`);
        }
    }
}





var Xlen = 4;
var Ylen = 4;
var puzzArr = new Array(Xlen);
var arr = new Array();
const SIZE = Xlen * Ylen;
var board = document.getElementById('board');
var count = 0;


//텍스트를 html요소로 변환시켜주는 함수
function inputHTML(element, data) {
    element.innerHTML = data;
    document.body.appendChild(element);
}

//퍼즐판을 보여주는 함수
function updatePuzzle() {
    var html = '';
    count = 0;
    for (let x = 0; x < Xlen; x++) {
        html += "<tr>";
        for (let y = 0; y < Ylen; y++) {
            html += `<td class='number-${count + 1}'>${puzzArr[x][y]}</td>`;
            count++;
        }
        html += "</tr>";
    }
    inputHTML(board, html);
}

//배열을 랜덤하게 섞는 함수
function shuffleArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        const x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
}


//숫자들을 배열속에 초기화
function initPuzzle() {
    //1차원배열을 우선 섞음
    for (let i = 0; i < SIZE; i++) {
        arr[i] = i;
    }
    shuffleArray(arr);

    //섞은 1차원 배열을 2차원배열에 대입
    for (let x = 0; x < Xlen; x++) {
        puzzArr[x] = new Array(Ylen);
        for (let y = 0; y < Ylen; y++) {
            puzzArr[x][y] = arr[count];
            count++;
        }
    }
    updatePuzzle();
}

//2차원 배열 index 값을 json형태로 반환
function array_key(data) {

    for (let i = 0; i < Xlen; i++) {
        for (let j = 0; j < Ylen; j++) {
            if (puzzArr[i][j] == data) {

                var Arr_val = {
                    "key_x": i,
                    "key_y": j
                };
                console.log(Arr_val);
                var json = JSON.stringify(Arr_val);
                return json;

            }
        }
    }
}


//https://oneroomtable.tistory.com/entry/HTML-%EC%9A%94%EC%86%8C-%ED%81%B4%EB%A6%AD%EC%8B%9C-%ED%8A%B9%EC%A0%95-%ED%81%B4%EB%9D%BC%EC%8A%A4class-%EB%98%90%EB%8A%94-%EC%95%84%EC%9D%B4%EB%94%94id-%EC%95%8C%EC%95%84%EB%82%B4%EA%B8%B0
document.addEventListener('click', function findNode(data) {
    var get_class = data.target.getAttribute('class');
    var get_el = document.querySelector(`.${get_class}`);
    var json_parse = JSON.parse(array_key(get_el.innerText));
    console.log(puzzArr[json_parse.key_x][json_parse.key_y]);
    moveTo(json_parse.key_x, json_parse.key_y);
     
})

function moveTo(x,y){
    var temp = puzzArr[x][y];
    var json_parse = JSON.parse(array_key(0));
    if(puzzArr[x+1][y] == 0 || puzzArr[x-1][y]==0 || puzzArr[x][y+1] == 0 || puzzArr[x][y-1]==0){
        puzzArr[x][y] = puzzArr[json_parse.key_x][json_parse.key_y];
        puzzArr[json_parse.key_x][json_parse.key_y] = temp;
        updatePuzzle();
    }

}

initPuzzle();





