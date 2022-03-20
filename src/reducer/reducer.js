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
            const filterCity=[] 
            if(action.value.filterBy === "Filter by City"){
              filterCity.push(...state.cities.filter(city=> city.name.toLowerCase().startsWith(action.value.value.toLowerCase().trim())))
            }else{
              filterCity.push(...state.cities.filter(city=> city.continents.toLowerCase().startsWith(action.value.value.toLowerCase().trim())))
            }
            return{
                ...state,                
                filterCity:filterCity,
                
            }            

        default:return state
    }
    
}

export default reducer;