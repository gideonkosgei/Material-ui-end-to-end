import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from  'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

 export class FormPersonalDetails extends Component {
  
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() { 
        const {values: {firstName,lastName,email,occupation,city,bio}} = this.props; 
        return (             
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title ='Confirm user Data'/>

                    <List>

                        <ListItem
                            primaryText = "FirstName"
                            secondaryText = {firstName}
                        />

                        <ListItem
                            primaryText = "LastName"
                            secondaryText = {lastName}
                        />
                        <ListItem
                            primaryText = "Email"
                            secondaryText = {email}
                        />
                        <ListItem
                            primaryText = "occupation"
                            secondaryText = {occupation}
                        />
                        <ListItem
                            primaryText = "city"
                            secondaryText = {city}
                        />
                        <ListItem
                            primaryText = "Bio"
                            secondaryText = {bio}
                        />
                    </List>
                    

                   
                    <RaisedButton
                    label = " Confirm & continue"
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
 
