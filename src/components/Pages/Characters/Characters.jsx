import React, { Component } from 'react';
import './Characters.css'
import CharacterViewer from '../../Characters/CharacterViewer/CharacterViewer';
import CharacterCreator from '../../Characters/CharacterCreator/CharacterCreator';

class Characters extends Component{
    constructor(props){
        super(props);
        this.state = {
            viewer : -1,
            system: {}
        }

        this.setViewerChoice = this.setViewerChoice.bind(this);
    }

    setViewerChoice(number){
        this.setState({
            viewer: number,
            system: this.state.system
        });
    }

    render(){
        console.log(this.state.viewer);
        if(this.state.viewer == -1){
            //return choice between viewer and creator
            return(
                <ul className="viewerChoiceList">
                    <li className="viewerChoice" onClick={() => this.setViewerChoice(1)}>Character Viewer</li>
                    <li className="viewerChocie" onClick={() => this.setViewerChoice(0)}>Character Creator</li>
                </ul>
            );
        }
        else if(this.state.viewer == 0){
            //return character creator (probably with choice of system first)
            return(
                <CharacterCreator system={this.state.system} />
            );       
        }
        else if(this.state.viewer == 1){
            return (
                <CharacterViewer />
            );
        }
        return(
            <p>Error in state.viewer</p>
        );
    }
}

export default Characters;