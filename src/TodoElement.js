import React from "react";
import { connect } from "react-redux";

const clickHandler = (e) => {
    e.preventDefault()

}

function TodoElement(props) {
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

export default connect(mapStateToProps)(TodoElement)