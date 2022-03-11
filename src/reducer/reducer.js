export const inicialState = {
    cities: [],
    itineraries: [],
    user:null,
    filterCity:[], 
    cityContinente:[]

}

export const actionType={
    CITIESDB: "CITIESDB",
    ITINERARIESDB: "ITINERARIESDB",
    USER:"USER",
    FILTER:"FILTER",
    
}

const reducer=(state, action)=>{
   
    switch(action.type){
        case "CITIESDB": 
        return{
            ...state,
            cities:action.cities, 
            filterCity:action.cities
        }
        case "ITINERARIESDB": 
        return{
            ...state,
            itineraries:action.itineraries
        }
        case "USER":
            return{
                ...state,
                user: action.user
            }
        
        case "FILTER":
            const filterCity = state.cities.filter(city=> city.name.toLowerCase().startsWith(action.value.toLowerCase().trim()))
            const cityContinente= state.cities.filter(city=> city.continents.toLowerCase().startsWith(action.value.toLowerCase().trim()))       
            return{
                ...state,                
                filterCity:filterCity,
                cityContinente:cityContinente
            }            

        default:return state
    }
    
}

export default reducer;