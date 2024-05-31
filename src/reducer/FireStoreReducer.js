
const initialState = {
    users : []
} 

export const FirestoreReducer = (state = initialState,action)=>{
    switch(action.type){
        case "Viewdata" : 
        console.log(action.payload);
        return {...state,
            users : action.payload
        }
        default :
        return state;
    }
}