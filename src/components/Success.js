import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

 export class Success extends Component { 
   
    render() {        
        return (             
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title ='Confirm user Data'/>
                    <h1>Thank you for your Submission</h1>
                    <p>
                        you will get an email with further instructions
                    </p>               
                        
                </React.Fragment>

            </MuiThemeProvider>
            
               
         );
    }
   
} 

export default  Success;
 
