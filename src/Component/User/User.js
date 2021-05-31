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
    //ternary operator
    const gretting2 = familiar? <h2>kache asho</h2> : <h3>Jaaa Vaaag</h3> 
    return (
       <div>
            <div>
            {greetings}
            {gretting2}
            
        </div>
        <div>
            <h1>Food</h1>
            {familiar? <h4>yes i will buy food for you </h4>: <h4> no bro his his whos whos</h4>}
            <br />
            <h4>condition</h4>
            {familiar&& <h1>yes i will go with you</h1>}
        </div>
       </div>
    );
};

export default User;