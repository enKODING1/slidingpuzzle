var puzzArr = new Array();
var Xlen = 3; //col
var Ylen = 3;//row
var board = document.getElementById('board');

//텍스트를 html요소로 변환시켜주는 함수
function inputHTML(element,data){
    element.innerHTML = data;
    document.body.appendChild(element);
}

//배열을 랜덤하게 섞는 함수
function shuffleArray(arr){
    for(var i = 0 ; i < arr.length ; i++){
        let j = Math.floor(Math.random() * i);
        const x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
}
//퍼즐판을 보여주는 함수
function showPuzzle(){
    var html = '';
    for(let x=0;x<Xlen;x++){
        html =+ "<tr>";
        for(let y=0; y<Ylen;y++){
            html =+ "<td>he</td>";
        }
    }

    inputHTML(board,html);
}

//숫자들을 배열속에 초기화
function initPuzzle(){
    var Size = Xlen*Ylen;
    for(var i = 0; i < Size; i++){
        puzzArr[i]=i;
    }
    shuffleArray(puzzArr);
}
function createTable(){   
}








