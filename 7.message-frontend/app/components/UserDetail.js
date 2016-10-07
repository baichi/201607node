import React from 'react';
export default class UserDetail extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {id:props.params.id};
    }
    render(){
        return (
            <div>
                ID:{this.state.id}
            </div>
        )
    }
}