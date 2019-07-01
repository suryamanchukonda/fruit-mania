import React, { Component } from 'react';

export default class Modal extends Component {
    render(){
        if(this.props.show){
            return (
                <div className="modal" id="modal">
                    <div>{this.props.children}</div>
                    <div className="actions">
                        <button 
                            onClick={e => {this.props.onclose()}}
                            className="toggle-button"
                            >close Modal
                        </button>
                    </div>
                </div>
            )
        }else{
            return null
        }
    }
}