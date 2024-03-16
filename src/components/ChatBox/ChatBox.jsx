import ChatHeader from "../ChatHeader/ChatHeader"
import './ChatBox.css'
import MessageList from "../MessageList/MessageList"
import SendMessageInput from "../SendMessageInput/SendMessageInput"

const ChatBox = () => {
    return (
        <div className="h-[100%] relative chatBox w-[67%] p-3 lg:p-7 bg-[#57575766] opacity-80 rounded-xl overflow-y-auto" >
            <ChatHeader />
            <MessageList />
            <SendMessageInput />
        </div>
    )
}

export default ChatBox