import React from 'react';
import './App.css';

// import { ZoomMtg } from '@zoomus/websdk';
import FormComponent from './components/FormComponent';

// ZoomMtg.setZoomJSLib('https://source.zoom.us/2.13.0/lib', '/av');

// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareWebSDK();
// // loads language files, also passes any error messages to the ui
// ZoomMtg.i18n.load('en-US');
// ZoomMtg.i18n.reload('en-US');

// const values = {
//   ZOOM_MEETING_SDK_KEY : "sPWY_Qn6QVyB41ZsGjHH9Q",
//   ZOOM_MEETING_SDK_SECRET : "eSDVyi8a7FpM5cMJvst1suZ1kowqsEaj",
//   meetingNumber: 87281097514,
//   role : 0,
//   signature : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiJzUFdZX1FuNlFWeUI0MVpzR2pISDlRIiwibW4iOjg3MjgxMDk3NTE0LCJyb2xlIjowLCJpYXQiOjE2OTA0Mzg2NjYsImV4cCI6MTY5MDQ0NTg2NiwiYXBwS2V5Ijoic1BXWV9RbjZRVnlCNDFac0dqSEg5USIsInRva2VuRXhwIjoxNjkwNDQ1ODY2fQ.pHUblTzrLXFKVniVcGmySwuvuE1iX5e__9AyoeCrVlg"
// }

// TESTING
function App() {
  return (
    <div className="App">
      <main>
        {/* <h1>Zoom Meeting SDK Sample React</h1>
        {/* <button onClick={getSignature}>Join Meeting</button> */}
        {/* <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={userName} onChange={handleUserNameChange} />
          {userNameError && <span style={{ color: 'red' }}>{userNameError}</span>}
        </div>
        <div>
          <label>Useremail:</label>
          <input type="text" value={userEmail} onChange={handleUserEmailChange} />
          {userEmailError && <span style={{ color: 'red' }}>{userEmailError}</span>}
        </div>
        <button type="submit">Join Meeting</button>
      </form>  */}
      <FormComponent/>
      </main>
    </div>
  );
}

export default App;
