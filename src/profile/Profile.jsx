import './profile.css';
import React from 'react'
function Profile(props) {
  return (
    <div className="App">
          <div className='card'>
        <div className='upper-container'>
          <div className='image-container'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRj0Zfe95v6mgzswrPMLebtxWExTECHN94Nw&usqp=CAU' alt='' height="100px" width="100px"/>
          </div>
        </div>
        <div className='lower-container'>
          <h3>{props.obj.name}</h3>
          <h4>{props.obj.profession}</h4>
          <p>{props.obj.bio}</p>
          <button onClick={()=>props.handleName(props.obj.name)}> my name</button>
        </div>
          
      </div>
      {props.children}     
    </div>
  );
}

export default Profile;
