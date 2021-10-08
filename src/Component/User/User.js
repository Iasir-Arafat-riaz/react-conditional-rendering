import React from "react";

const User = (props) => {
  const { familiar } = props;
  console.log(familiar);
  //Element variable
  let greeting;
  if (familiar) {
    greeting = "i am your friend, come with me for dinner";
  } else {
    greeting = "who are hell are you ";
  }

  return (
    <div>
      <div>
        <h1>Element variable</h1>
        {/* conditonal rendering with element variable */}
        <h3>{greeting}</h3>
      </div>
      <div>
        <h1>Ternery</h1>
        {/* conditonal rendering with ternery operator */}
        {familiar ? (
          <h3>Onekdin Adda dei na aj add hobe</h3>
        ) : (
          <h3>do you know me , i don't knoe you</h3>
        )}
      </div>
      <div>
        <h1>using &&</h1>
        {/* using && for conditonal rendering if condition is true then go nest step */}
        {familiar && <h4>you and me are awesome</h4>}
      </div>
      <div>
        <h1>using ||</h1>
        {/* using || for conditional rendering if condition is true don't go to next line, when condition false then go to next step(line) */}
        {familiar || <h4>please some moment</h4>}
      </div>
    </div>
  );

  // const familiar = props.familiar;
  // let greetings;
  // if (familiar === true) {
  //   greetings = <p>Welcome My Friend</p>;
  // } else {
  //   greetings = <p>Who the hell are you ?</p>;
  // }
  // //ternary operator
  // const gretting2 = familiar ? <h2>kache asho</h2> : <h3>Jaaa Vaaag</h3>;
  // return (
  //   <div>
  //     <div>
  //       {greetings}
  //       {gretting2}
  //     </div>
  //     <div>
  //       <h1>Food</h1>
  //       {familiar ? (
  //         <h4>yes i will buy food for you </h4>
  //       ) : (
  //         <h4> no bro his his whos whos</h4>
  //       )}
  //       <br />
  //       <h4>condition</h4>
  //       {familiar && <h1>yes i will go with you</h1>}
  //     </div>
  //   </div>
  // );
};

export default User;
