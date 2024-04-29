import React from 'react';
import { ChatEngine } from 'react-chat-engine';

function ChatPage() {
	return (
		<div className='bg-gray-300'>
      <ChatEngine
			projectID='b4245e12-2d4e-4f58-8d1d-18b311cc49f1'
			userName='admin'
			userSecret='123456'
			// Render Custom Components
			height='88vh'
			// renderChatList={(chatAppState) => {
      //   return null
      // }}
			// renderChatCard={(chat, index) => {}}
			renderNewChatForm={(creds) => {
        return null
      }}
			// renderChatFeed={(chatAppState) => {}}
			// renderChatHeader={(chat) => {}}
			// renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => {}}
			// renderIsTyping={(typers) => {}}
			// renderNewMessageForm={(creds, chatId) => {}}
			renderChatSettings={(chatAppState) => {
        return null
      }}
			// renderChatSettingsTop={(creds, chat) => {}}
			// renderPeopleSettings={(creds, chat) => {}}
			// renderPhotosSettings={(chat) => {}}
			// renderOptionsSettings={(creds, chat) => {}}
		/>
    </div>
	);
}

export default ChatPage;