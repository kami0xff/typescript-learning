//set of named constants mapped to a unique set of values 
const iconDisplay = (userTier:number) => {
    switch(userTier){
        case 1:{
            //low tier icon

        }
        case 2:{
            //mid tier icon
        }
        case 3:{
            //VIP icon
        } 
        default:{
            throw Error();
        }
    }
}
iconDisplay(1);




enum UserTier {
    Low = 1,
    Mid = 2,
    Vip = "VIP"
}
//maybe i could assign these values to default objects as well ?    
    //seems like you can't and that only string and number enums are possible
    //you can also have a mix of strings and numbers but that is kind of rare in terms of usescasses

    //const enum will prevent dynamically looking up the members of the enum
    //instead at compile time the tsc compiler will just convert our enum to the value literal 
    //which is more efficient. 


const iconDisplay2 = (userTier:UserTier) => {
    switch(userTier){
        case UserTier.Low:{
            //low tier icon

        }
        case UserTier.Mid:{
            //mid tier icon
        }
        case UserTier.Vip:{
            //VIP icon
        } 
        default:{
            throw Error();
        }
    }
}
iconDisplay2(UserTier.Vip);


