/**
 * @file 
 * @author Manav Patel <mpate136@uottawa.ca>
 */

// Bootstrap Imports. 
import Alert from 'react-bootstrap/Alert'


function Warning(message){
    return (
        <Alert variant="warning">{message}</Alert>
    );
}

export default Warning;