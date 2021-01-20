function simulate(){
    var nstay = 0;
    var nswitch = 0;
    var plays;
    const maxplays = 100000;

    function play(){
        let doors = [0, 0, 0]; //initializes an array with 3 slots
        let car = Math.floor(Math.random() * Math.floor(3)); //chooses random index for the car
        let choice; //"users" choice of door
        let remove; //which door should be removed
        doors[car] = 'car'; //sets the correct index to the string 'car'
        for(let i = 0; i < 3; i++){ //sets all remaining elements to 'goat'
            if(doors[i] == 0){
                doors[i] = 'goat';
            }
        }

        choice = Math.floor(Math.random() * Math.floor(3)); //users choice is random num

        for(let i = 0; i < 3; i++){
            if(doors[i] == 'goat' && i != choice){ //sets remove variable for door removed
                remove = i;
            }
        }

        doors.splice(remove, 1); //splices the removed door out the array

        if(doors[choice] == 'car'){ //if the user chose the correct door
            nstay = nstay + 1;      //increments stay
        }
        else{
            nswitch = nswitch + 1; //if the user chose the wrong door
        }                         //increments switch
    }
    for(let i = 0; i < 100000; i++){
        play();
    }
    console.log("Stay: " + nstay + "/100000");
    console.log("Switch: " + nswitch + "/100000");

}
simulate();
