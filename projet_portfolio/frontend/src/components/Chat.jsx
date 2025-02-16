import React, { useEffect, useState } from "react";
import { Chat, Channel, ChannelHeader, MessageList, MessageInput } from "stream-chat-react";
import { StreamChat } from "stream-chat";
import "stream-chat-react/dist/css/index.css";

const ChatComponent = ({ userId, token }) => {
  const [chatClient, setChatClient] = useState(null);

  useEffect(() => {
    if (!userId || !token) return;

    const client = StreamChat.getInstance("n3esdddgvfpz"); // API Key publique

    const connectUser = async () => {
      await client.connectUser({ id: userId, name: userId }, token);
      setChatClient(client);
    };

    connectUser();

    return () => {
      client.disconnectUser();
    };
  }, [userId, token]);

  if (!chatClient) return <p>Chargement du chat...</p>;

  const channel = chatClient.channel("messaging", "event-chat", {
    name: "Chat de l'événement",
  });

  return (
    <Chat client={chatClient} theme="messaging light">
      <Channel channel={channel}>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Channel>
    </Chat>
  );
};

export default ChatComponent;