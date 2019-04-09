let initState = {
    A: [],
    B: [],
    money:0
};


export default (state=initState, action)=> {
    // console.log(state,3);
    // console.log(Object.assign(state,{c:66}));
    // console.log(Object.assign(state,{money:state.money+1}));
        let {type, id, panelName} = action;

    switch (type) {
        case 'ADD_COUNTER':
            if(panelName==='A'){
                return Object.assign({}, state, {A: [...state.A, {
                    id: new Date().getTime(),
                    value: 0
                }]
                }) ;
            }else{
                return Object.assign({}, state, {B: [...state.B, {
                    id: new Date().getTime(),
                    value: 0
                }]
                })
            }

        case 'INCREMENT':
            return Object.assign({},{
                A: state.A.map( elt =>{
                    if(elt.id === id){
                        elt.value++;
                    }
                    return elt;
                } ),
                B: state.B.map( elt =>{
                    if(elt.id === id){
                        elt.value++;
                    }
                    return elt;
                } ),
            })
            ;
        case 'DECREMENT':
            return Object.assign({},{
                A: state.A.map( elt =>{
                    if(elt.id === id){
                        elt.value--;
                    }
                    return elt;
                } ),
                B: state.B.map( elt =>{
                    if(elt.id === id){
                        elt.value--;
                    }
                    return elt;
                } ),
            })
            ;
        case "RESET":
            return {
                A:[],
                B:[],
                money:0
            };
        case "ADD":
            return Object.assign({},state,{money:state.money+1})

        default:
            return state;
    }
}
