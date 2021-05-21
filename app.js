var Xlen = 4;
var Ylen = 4;
var puzzArr = new Array(Xlen);
var arr = new Array();
const SIZE = Xlen*Ylen;
var blank = SIZE - 1;
var board = document.getElementById('board');

//텍스트를 html요소로 변환시켜주는 함수
function inputHTML(element, data) {
    element.innerHTML = data;
    document.body.appendChild(element);
}
//퍼즐판을 보여주는 함수
function updatePuzzle() {
    var html = '';
    for (let x = 0; x < Xlen; x++) {
        html += "<tr>";
        for (let y = 0; y < Ylen; y++) {
            html += `<td>${puzzArr[x][y]}</td>`;
        }
        html += "</tr>";
    }
    inputHTML(board, html);
}

//배열을 랜덤하게 섞는 함수
function shuffleArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        let j= Math.floor(Math.random() * (i+1));
        const x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
}


//숫자들을 배열속에 초기화
function initPuzzle() {
    //1차원배열을 우선 섞음
    for(let i=0;i<SIZE; i++){
        arr[i] = i;
    }
    shuffleArray(arr);

    //섞은 1차원 배열을 2차원배열에 대입
    var count = 0;
    for(let x=0; x<Xlen; x++){
        puzzArr[x] = new Array(Ylen);
        for(let y=0; y<Ylen; y++){
            puzzArr[x][y] = arr[count];
            count++;
        }
    }
    
    console.log(puzzArr);
    updatePuzzle();
}    

function moveTo(move){
     
}

initPuzzle();






