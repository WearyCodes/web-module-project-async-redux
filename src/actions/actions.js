import axios from "axios"


export const NEW_TASK = 'NEW_TASK'


export const fetchTask = (task) => {
    return({type: NEW_TASK, payload: task})
}


export const getTask = () => {
    console.log('getting task')
    return(dispatch => {
        dispatch({type: NEW_TASK});
        axios.get('https://www.boredapi.com/api/activity')
        .then(res => {
            dispatch(fetchTask(res.data))
        })
        .catch(err => console.log(err))
    })
}
