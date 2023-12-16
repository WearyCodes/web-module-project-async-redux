import React, {useEffect} from "react";
import { connect } from "react-redux";
import { fetchTask } from "./actions/actions";
import { NEW_TASK } from "./actions/actions";
import axios from "axios";

function TodoElement(props) {


    useEffect(() => {
        axios.get(`https://www.boredapi.com/api/activity`)
        .then(res => 
            props.fetchTask(res.data))
        .catch(err => console.log(err))
    }, [])


    return (<div>
        <h4>WHAT SHOULD WE DO TODAY?</h4>
        <h3>{props.activity}</h3>
        <p>Type: {props.type}</p>
        <p>Participants: {props.participants}</p>

        <button>New Task</button>
    </div>)
}

const mapStateToProps = state => {
    return{
        activity: state.activity,
        type: state.type,
        participants: state.participants
    }
}

export default connect(mapStateToProps, { fetchTask })(TodoElement)