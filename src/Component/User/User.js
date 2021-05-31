import React from 'react';

const User = (props) => {
    const familiar = props.familiar
    let greetings;
    if (familiar===true){
        greetings = <p>Welcome My Friend</p>
    }
    else{
        greetings = <p>Who the hell are you ?</p>
    }
    return (
        <div>
            {greetings}
        </div>
    );
};

export default User;