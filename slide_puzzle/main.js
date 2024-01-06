let n = 3; // board.size
let currTile;
let dropTile;
let turns=0;
let isPlaying=false;
const showturn = document.getElementById('turn-js');
const board = document.getElementById('board');
const start_button = document.getElementById('start-js');
window.onload = ()=>{
    for(let row=0;row<n;row++){
        for(let col=0;col<n;col++){
            let tile = document.createElement('img')
            tile.id = row.toString()+'-'+col.toString();
            tile.src= `./images/3x3 puzzle/${3*row+1+col}.jpg`;

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);  
            tile.addEventListener("dragover", dragOver);    
            tile.addEventListener("dragenter", dragEnter);  
            tile.addEventListener("dragleave", dragLeave);  
            tile.addEventListener("drop", dragDrop); 
            tile.addEventListener("dragend", dragEnd);  
            
            //console.log(tile)
            board.appendChild(tile);   
        }
    }
}
function dragStart(){
    currTile=this;
}
function dragOver(e){
    e.preventDefault();
}
// drag enter and drag leave are both used as UI feedbacks and dont 
// provide any core functionality . But feedback is good so im keeping it here for future reference
function dragEnter(){
    
}
function dragLeave(){
    
}
function dragDrop(){
    dropTile=this;
}
// dragend is usually a cleanup function after drop
function dragEnd(){
    if (!dropTile.src.includes("3.jpg")) {
        return;
    }
    let currCoords = currTile.id.split('-');
    let currX = parseInt(currCoords[0]);
    let currY = parseInt(currCoords[1]);

    let dropCoords = dropTile.id.split('-');
    let dropX = parseInt(dropCoords[0]);
    let dropY = parseInt(dropCoords[1]);

    let toleft = currX==dropX && currY-1==dropY
    let toright = currX==dropX && currY+1==dropY
    let toup = currX-1==dropX && currY==dropY
    let todown = currX+1==dropX && currY==dropY

    let isAdjancent = toleft || toright || toup || todown;

    if(isAdjancent){
        // swapping of image sources
        let currImg = currTile.src;
        let dropImg = dropTile.src;
        currTile.src = dropImg;
        dropTile.src = currImg;
        if(isPlaying){
            turns+=1;
            showturn.innerHTML=turns;
            checkWin();
        }
    }
}

start_button.addEventListener('click',()=>{
    isPlaying=true;
    if(start_button.innerHTML === 'Restart'){
        start_button.innerHTML = 'Start';
    }
    refillBoard();
})

function refillBoard(){
    let myArr = [];
    for(let i=1;i<=n*n;i++){
        myArr.push(i);
    }
    shuffle(myArr)
    let i=0;
    for(let row=0;row<n;row++){
        for(let col=0;col<n;col++){
            const id = row.toString()+'-'+col.toString();
            let image = document.getElementById(id);
            image.src= `./images/3x3 puzzle/${myArr[i]}.jpg`;
            i++;
        }
    }
}

function shuffle(array){
    let currentIndex = array.length-1;
    while(currentIndex >=0){
        let randomIndex = Math.floor(Math.random() * array.length );
        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
        currentIndex -=1;
    }
}

function checkWin(){
    let win=true;
    document.querySelectorAll('#board img').
    forEach((image,index)=>{
        const imageSource = image.src;
        const filename = imageSource.substring(imageSource.lastIndexOf("/") + 1);
        const imageNumber = filename.split('.');
        //console.log(imageNumber)
        const imgNum = parseInt(imageNumber[0]);
        if(imgNum !== index +1 ){
            win =false;
        }
    })

    if(win){
        isPlaying=false;
        start_button.innerHTML = 'Restart';
        turns = 0;
    }
}
