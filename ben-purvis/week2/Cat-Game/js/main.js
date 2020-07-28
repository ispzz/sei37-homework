const player = {
    element : document.getElementById("player"),
    vector2 : {
        x : "0%",
        y : "0%"
    },
    width : "300px",
    height : "300px",
    setVector : function(_x, _y){
        this.vector2 = { x : _x, y : _y }
    }
} 
const gameObjects = {
        objects : [],
        element : "",
        objectCount : 12,
        src : "",
        vector2 : {
            x : "",
            y : "",
        },
        objectName : "",
        width : "80px",
        height : "50px",
        createObjects : function(element) {
            this.objects.push(element);
        },
        setObjectCount : function(count) {
            this.fishCount = count
        },
        setVector : function(_x, _y) {
            this.vector2 = {x : _x, y : _y}
        },
        getVector : function() {
            return this.vector2;
        },
        setElement : function(element) {
            this.element = element;
        },
        destroy : function(name){
            let obj = this.getObject(name);
            obj.element.remove();
        },
        getObject : function(name){
            for (let i = 0; i < this.objectCount; i++) {
                if (this.objects[i].name === name){
                    return this.objects[i];
                }                
            }
        }
}
let topText = document.createElement("h3")
topText.id = "top-text"
topText.innerText = "YOU MUST EAT ALL THE TROUT TO SAVE EARTH, I REPEAT EAT ALL THE TROUT"
document.body.appendChild(topText)
setInterval(() => {
    topText.style.opacity = "0"
    setTimeout(() => {
        topText.style.opacity = "1"
    }, 200)
}, 500)
let isColliding = false;
let scoreElement = document.getElementById("score-counter");
let score = 0;

onkeydown = (e) => {
    // Move right
    if (e.key === "d" || e.key == "D"){
        incrementX(10);
        player.element.style.transform = setTranslatePoint(player.vector2.x, player.vector2.y);
        player.element.src = "assets/cat-walk.gif";
    }
    // Move left
    if (e.key === "a" || e.key === "A"){
        decrementX(10);
        player.element.style.transform = setTranslatePoint(player.vector2.x, player.vector2.y) + "rotateY(180deg)"
        player.element.src = "assets/cat-walk.gif";
    }
    // Move down
    if(e.key === "s" || e.key === "S"){
        incrementY(10)
        player.element.style.transform = setTranslatePoint(player.vector2.x, player.vector2.y)
        player.element.src = "https://media1.tenor.com/images/35bcd6328cb5cb0ad1557ea422dcc20b/tenor.gif";
    }
    // Move up
    if(e.key === "w" || e.key === "W"){
        decrementY(10)
        player.element.style.transform = setTranslatePoint(player.vector2.x, player.vector2.y)
        player.element.src = "https://media1.tenor.com/images/35bcd6328cb5cb0ad1557ea422dcc20b/tenor.gif";
    }
    for (let i = 0; i < gameObjects.objectCount; i++) {
        if (gameObjects.objects[i] !== undefined){
            if(contains(gameObjects.width, gameObjects.height,
                player.width, player.height,
                parseValue(player.vector2.x, player.vector2.y), 
                getFloatPoint(gameObjects.objects[i].vector2.x, gameObjects.objects[i].vector2.y )))
                {
                    console.log(gameObjects.objects[i].name)
                    gameObjects.destroy(gameObjects.objects[i].name)
                    score += 10;
                    addScore(score);
                    setTimeout(() => {
                        player.element.src = "assets/eat-fish.gif"
                    }, 3000)                  
                }else{
                    player.element.src = "assets/cat-walk.gif"
                }                  
        }
    }
    
}

incrementX = (incrementorX) => {
    let tempX = parseInt(player.vector2.x);
    let newInt =  tempX += incrementorX;
    player.vector2.x = newInt + "%"
}

decrementX = (decrementorX) => {
    let tempX = parseInt(player.vector2.x);
    let newInt =  tempX -= decrementorX;
    player.vector2.x = newInt + "%"
}

incrementY = (incrementorY) => {
    let tempY = parseInt(player.vector2.y);
    let newInt =  tempY += incrementorY;
    player.vector2.y = newInt + "%"
}

decrementY = (decrementorY) => {
let tempY = parseInt(player.vector2.y);
let newInt =  tempY -= decrementorY;
player.vector2.y = newInt + "%"
}

plotFish = () =>{
    for (let i = 0; i < gameObjects.objectCount; i++) {
        gameObjects.createObjects({
            element : document.createElement("img"),
            src :  "assets/fish.png",
            name : "fish-object-" + i,
            vector2 : {
                x : generateRandomPoint().x,
                y : generateRandomPoint().y
            },
        });
        gameObjects.objects[i].element.src = gameObjects.objects[i].src;
        gameObjects.objects[i].element.className = "fish-game-object"
        gameObjects.objects[i].element.style.transform = setTranslatePoint(gameObjects.objects[i].vector2.x, gameObjects.objects[i].vector2.y)
        if(isColliding)
            gameObjects.objects.pop();
        gameObjects.setObjectCount(gameObjects.objects.length)
        console.log(gameObjects.objects[i].element)
        document.body.appendChild(gameObjects.objects[i].element);
    }
}
contains = (targetWidth, targetHeight, collisionBoundsWidth, collisionBoundsHeight, collisionBounds, target) => {
    const bWidth = parseInt(collisionBoundsWidth);
    const bHeight = parseInt(collisionBoundsHeight);
    const tWidth = parseInt(targetWidth)
    const tHeight = parseInt(targetHeight);

    isColliding = (
        target.x + tWidth >= collisionBounds.x &&
        target.x <= collisionBounds.x + bWidth &&
        target.y + tHeight >= collisionBounds.y &&
        target.y <= collisionBounds.y + bHeight
      );
    return isColliding;
}
getFloatPoint = (x, y) => {
    return {x : parseFloat(x), y : parseFloat(y) }
}
generateRandomPoint = () => {
    const OFFSET = 100;
    const point = {
        x : Math.floor(Math.random() * window.innerWidth - OFFSET),
        y : Math.floor(Math.random() * window.innerHeight - OFFSET) 
    }
    point.x += "%";
    point.y += "%";
    return point;
}
parseValue = (x, y) => {
    return {x : parseFloat(x) - 9, y : parseFloat(y) - 9}
}
addScore = (score) => {
    scoreElement.innerText =  "SCORE " + score;
}
// x and y need to be passed through as strings so 
// the css can add the values add a (x + "%") for 
// it to work.
setTranslatePoint = (x, y) => {
    return "translate(" + x +", " + y + ") "
}

plotFish();



