import React from 'react'
import {Alert} from 'reactstrap'

const AlertResults = (props) =>{

const onDismiss = () =>{
        props.onDismiss()
    }

    return(
<Alert color="info" isOpen={props.alert} toggle={onDismiss}>
No Records Found Matching Your Search Parameters
</Alert>
    )
}

export default AlertResults