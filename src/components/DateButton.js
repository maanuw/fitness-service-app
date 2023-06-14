import React from 'react';

import Button from 'react-bootstrap/Button'

function DateButton({date, times, change, select}) {
    return(
        <Button variant={select ? "success" : "primary"} onClick={() => change(times, date)}>
            {date}
        </Button>
    );
}

export default DateButton;