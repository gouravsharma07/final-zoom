import React, { useState } from 'react';
import './FormComponent.css'; // Import the CSS file for styling
import { ZoomMtg } from '@zoomus/websdk';
import ZoomMtgEmbedded from "@zoomus/websdk/embedded"

const client = ZoomMtgEmbedded.createClient()

ZoomMtg.setZoomJSLib('https://source.zoom.us/2.13.0/lib', '/av');
// Set the crossOriginIsolated header
// ZoomMtg.setZoomJSLib(ZoomMtg.getZoomJSLib(), '/av', { crossOriginIsolated: true });

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
 
const values = {
  ZOOM_MEETING_SDK_KEY : "vtquzucQQuuvzW_WE39N0A",
  ZOOM_MEETING_SDK_SECRET : "IZZ7xVN4pLQ2rqbfeRTqu3Ie85Qf1vZH",
  meetingNumber: 89295397410,
  role : 0,
  signature : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiJ2dHF1enVjUVF1dXZ6V19XRTM5TjBBIiwibW4iOjg5Mjk1Mzk3NDEwLCJyb2xlIjowLCJpYXQiOjE2OTgzMjc2ODMsImV4cCI6MTY5ODQxNDA4MywiYXBwS2V5IjoidnRxdXp1Y1FRdXV2eldfV0UzOU4wQSIsInRva2VuRXhwIjoxNjk4NDE0MDgzfQ.bYuZgmakaAQKjHanbs2LVeT3TEzonCZvUR7iS6ER2Z8"
}

const FormComponent = () => {
  var sdkKey = values.ZOOM_MEETING_SDK_KEY
  var meetingNumber = values.meetingNumber;
  var passWord = values.password;
  var registrantToken = ''
  var zakToken = ''
  var leaveUrl = 'https://harmonious-chimera-d441e6.netlify.app/'

  function startMeeting(signature) {
    document.getElementById('zmmtg-root').style.display = 'block'
    
    ZoomMtg.init({
      leaveUrl: leaveUrl,

      success: (success) => {
        console.log(success)

        ZoomMtg.join({
          signature: signature,
          sdkKey: sdkKey,
          meetingNumber: meetingNumber,
          passWord: passWord,
          userName: userName,
          userEmail: userEmail,
          tk: registrantToken,
          zak: zakToken,
          success: (success) => {
            console.log(success)
          },
          error: (error) => {
            console.log(error)
          }
        })

      },
      error: (error) => {
        console.log(error)
      }
    });
    ZoomMtg.showPureSharingContent({
      show: true,
      disable: false,
    });
  }
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [userEmailError, setUserEmailError] = useState('');

  const validateUserName = () => {
    if (userName.length <= 3 || !/^[a-zA-Z]+$/.test(userName)) {
      setUserNameError('User name must be greater than 3 characters and contain only alphabets.');
      return false;
    }
    setUserNameError('');
    return true;
  };

  const validateUserEmail = () => {
    if (!userEmail.includes('@gmail.com')) {
      setUserEmailError('Please enter a valid Gmail address.');
      return false;
    }
    setUserEmailError('');
    return true;
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleUserEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const getSignature = () => {
    startMeeting(values.signature);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isUserNameValid = validateUserName();
    const isUserEmailValid = validateUserEmail();

    let meetingSDKElement = document.getElementById('meetingSDKElement')

client.init({ zoomAppRoot: meetingSDKElement, language: 'en-US' })



    if (isUserNameValid && isUserEmailValid) {
      getSignature();

      client.init({
        debug: true,
        zoomAppRoot: 'meetingSDKElement', // Use the correct ID of the HTML element
        language: 'en-US',
        customize: {
          video: {
            isResizable: true,
            viewSizes: {
              default: {
                width: 1000,
                height: 600
              },
              ribbon: {
                width: 1000,
                height: 600
              }
            }
          },
          meetingInfo: ['topic', 'host'],
        },
      });
    }
  };
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>User Name</label>
          <input
            type="text"
            className={`input-field ${userNameError ? 'input-error' : ''}`}
            value={userName}
            onChange={handleUserNameChange}
          />
          {userNameError && <span className="error-message">{userNameError}</span>}
        </div>
        <div className="input-container">
          <label>User Email</label>
          <input
            type="text"
            className={`input-field ${userEmailError ? 'input-error' : ''}`}
            value={userEmail}
            onChange={handleUserEmailChange}
          />
          {userEmailError && <span className="error-message">{userEmailError}</span>}
        </div>
        <button type="submit">Join Meeting</button>
      </form>
      <div id="meetingSDKElement">
</div>
    </div>
  );
};

export default FormComponent;
