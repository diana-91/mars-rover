// Rover Object Goes Here
// ======================

var rover ={
    direction:'N',
    x:0,
    y:0
}

// ======================
function turnLeft(rover){
    switch(rover.direction){
        case 'N': rover.direction='W';
                    break;
        case 'W': rover.direction='S';
                    break;
        case 'S': rover.direction='E';
                    break;
        case 'E': rover.direction='N';
                    break;
    }
  console.log("turnLeft was called!");
    console.log(rover);
}

function turnRight(rover){
    switch(rover.direction){
        case 'N': rover.direction='E';
                    break;
        case 'W': rover.direction='N';
                    break;
        case 'S': rover.direction='W';
                    break;
        case 'E': rover.direction='S';
                    break;
    }
  console.log("turnRight was called!");
    console.log(rover);
}

function moveForward(rover){
    switch(rover.direction){
        case 'N': rover.y -= 1;
                    break;
        case 'W': rover.x -= 1;
                    break;
        case 'S': rover.y += 1;
                    break;
        case 'E': rover.x += 1;
                    break;
    }
  console.log("moveForward was called");
    console.log(rover);
}
