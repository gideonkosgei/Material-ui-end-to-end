import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from  'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

 export class FormPersonalDetails extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() { 
        const {values,handleChange} = this.props; 
        return (             
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title ='Enter Personal Details'/>
                    <TextField
                        hint = 'Enter your Occupation'
                        floatingLabelText = 'Occupation'
                        onChange = {handleChange('occupation')}
                        defaultValue = {values.occupation}
                    />
                    <br/>

                    <TextField
                        hint = 'Enter your City'
                        floatingLabelText = 'City'
                        onChange = {handleChange('city')}
                        defaultValue = {values.city}
                    />  
                    <br/>
                    
                    <TextField
                        hint = 'Enter your Bio'
                        floatingLabelText = 'Bio'
                        onChange = {handleChange('bio')}
                        defaultValue = {values.bio}
                    /> 
                    <br/>
                    <RaisedButton
                    label = "continue"
                    primary = {true}
                    style = {styles.button}
                    onClick = {this.continue}
                    />

                    <RaisedButton
                    label = "Back"
                    primary = {false}
                    style = {styles.button}
                    onClick = {this.continue}
                    />
                        
                </React.Fragment>

            </MuiThemeProvider>
            
               
         );
    }
   
} 
const styles = {
    button : {
        margin : 15 
    }
}
export default  FormPersonalDetails;
 
