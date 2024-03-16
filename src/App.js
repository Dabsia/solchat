import React from 'react'
import Groups from './components/Groups/Groups'
import MsgGroups from './components/MsgGroups/MsgGroups';
import ChatBox from './components/ChatBox/ChatBox';
import SideNav from './components/SideNav/SideNav';
import ParentBackground from './components/ParentBackground/ParentBackground';
import TopNav from './components/TopNav/TopNav';

function App() {
  return (
    <div className='p-3 relative h-[100vh] max-w-[1500px] w-[100%] mx-auto'>

      <TopNav />
      <div className=' justify-between homeContainer flex '>
        <ParentBackground />
        <SideNav />
        <div className='overflow-y-auto  msgContainer rounded-xl h-[100%]' >
          <Groups />
          <MsgGroups />
        </div>
        <ChatBox />

      </div>


    </div>

  );
}

export default App;
