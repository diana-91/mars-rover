// Rover Object Goes Here
// ======================

var turno=1;
var rover1 = {
    name: 'R1',
    direction: 'N',
    x: 0,
    y: 0,
    travelLog: new Array()
};
var rover2 = {
    name: 'R2',
    direction: 'N',
    x: 9,
    y: 9,
    travelLog: new Array()
};

var rover3 = {
    name: 'R3',
    direction: 'N',
    x: 9,
    y: 0,
    travelLog: new Array()
};

var rover4 = {
    name: 'R4',
    direction: 'N',
    x: 0,
    y: 9,
    travelLog: new Array()
};
//array de la cuadricula
var grid = [ 
  ['R1,N','','','','','','X','','','R3,N'],
  ['','','','','','','','','',''],
  ['','','X','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','X','',''],
  ['X','','','','','','','','',''],
  ['','','','','','','X','','',''],  
  ['','','','','','','','','',''],
  ['','X','','','','','','','',''],  
  ['R4,N','','','','','','','X','','R2,N']
];
//console.log(grid[0][6]);
// ======================
//funcion de girar a la izquierda
// @rover parametro
function turnLeft(rover) {
    switch (rover.direction) {
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
}

//funcion de girar a la derecha
// @rover parametro
function turnRight(rover) {
    switch (rover.direction) {
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
}

//Función de moverse hacia delante
//@rover parametro
//@return devuelve boolean indicando si hay un obstraculo
function moveForward(rover) {
    var obs=false;
    console.log("moveForward was called");
    switch (rover.direction) {
        case 'N': 
            if(rover.y !=0) {
                if(grid[rover.y -1][rover.x] == '' ){
                    rover.y -= 1;
                   }else{
                        console.log('obstacle in my way!');
                        obs=true;
                   }                
            }else{
                console.log('out of limits!');
                obs=true;
            }
        break;
        case 'W': 
            if(rover.x !=0){
                if(grid[rover.y][rover.x-1] == '' ){
                    rover.x -= 1;
                }else{
                    console.log('obstacle in my way!');
                    obs=true;
                }
            }else{
                console.log('out of limits!');
                obs=true;
            }
        break;
        case 'S': 
            if(rover.y !=9){
                if(grid[rover.y+1][rover.x] == '' ){
                    rover.y += 1;
                }else{
                    console.log('obstacle in my way!');
                    obs=true;
                }
            }else{
                console.log('out of limits!');
                obs=true;
            }
        break;
        case 'E':
            if(rover.x !=9){ 
                if(grid[rover.y][rover.x+1] == '' ){
                    rover.x += 1;
                }else{
                    console.log('obstacle in my way!');
                    obs=true;
                }
            }else{
                console.log('out of limits!');
                obs=true;
            }
        break;
    }
    return obs;
  
}

//Función de moverse hacia atrás
//@rover parametro
//@return devuelve boolean indicando si hay un obstraculo
function moveBackward(rover) {
    var obs=false;
    console.log("moveBackward was called");
    switch (rover.direction) {
        case 'N':
            if(rover.y !=9){
               if(grid[rover.y+1][rover.x] == '' ){ 
                    rover.y += 1;
               }else{
                    console.log('obstacle in my way!');
                    obs=true;
               }
            }else{
                console.log('out of limits!');
                obs=true;
            }
        break;
        case 'W': 
            if(rover.x !=9){
                if(grid[rover.y][rover.x+1] == '' ){
                    rover.x += 1;
                }else{
                    console.log('obstacle in my way!');
                    obs=true;
               }
            }else{
                console.log('out of limits!');
                obs=true;
            }
        break;
        case 'S':
            if(rover.y !=0 ) { 
                if(grid[rover.y-1][rover.x] == '' ){
                    rover.y -= 1;
                }else{
                    console.log('obstacle in my way!');
                    obs=true;
                }
            }else{
                console.log('out of limits!');
                obs=true;
            }
        break;
        case 'E': 
            if(rover.x !=0 ) {
                if(grid[rover.y][rover.x-1] == '' ){
                    rover.x -= 1;
                }else{
                    console.log('obstacle in my way!');
                    obs=true;
                }
            }else{
                console.log('out of limits!');
                obs=true;
            }
        break;
    }
        return obs;

  
}

// Funcion que valida los comandos introducidos:
//@commands comando a validar
//@return booleano que devuelve si el comando es valido o no
function validateF(commands){
    var validate=true;
    
    for(var i=0; i< commands.length && validate == true; i++ ){
        
        if(commands[i] == 'f' || commands[i] == 'b' || commands[i] == 'r' || commands[i] == 'l' ){           
            
          
        }else{
            validate= false;
             console.log('wrong command!, character '+commands[i] + ' invalid');
        }
    }
    
    return validate;
}

// Función que recibe:
//@commands el comando introducido para girar o mover a rover
//@rover objeto que queremos mover
function listCommands(commands) {
    var rover=turnoRover();
    var obs=false;
    var validate = validateF(commands);
    if(validate == true){
        grid[rover.y].splice(rover.x,1,'');
        for(var i=0; i< commands.length && obs==false; i++ ){
            if( obs == false){
                switch(commands[i]){                        
                    case 'f': 
                        obs = moveForward(rover);
                        break;
                    case 'b': obs = moveBackward(rover);
                        break;
                    case 'r': turnRight(rover);
                        break;
                    case 'l': turnLeft(rover);
                        break;

                }
            }else{
                console.log('obstacle in my way!');
            }

                rover.travelLog.push('x='+rover.x+' - y='+rover.y + ' - direction = ' + rover.direction );


        }
            grid[rover.y].splice(rover.x,1,rover.name+','+rover.direction);

        console.log(rover.travelLog);
        console.log(grid);
        
    }
}

function turnoRover(){
    var rover;
    switch(turno){
        case 1: rover=rover1;
            break;
        case 2: rover=rover2;
            break;
        case 3: rover=rover3;
            break;
        case 4: rover=rover4;
            break;
        default: rover= rover1;
            turno=1;
            break;
    }
    console.log('it´s rover '+ turno+ ' turn.');
    turno++;
    return rover;
}
    
    
    


