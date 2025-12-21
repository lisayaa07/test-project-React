import { useState, useOptimistic, startTransition } from "react";

async function sendMessageToServer(message) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    ...message,
    pending: false
  };
}

export default function Chat() {
  // state จริงจาก server
  const [messages, setMessages] = useState([]);

  // optimistic state
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [...state, newMessage]
  );

  const [text, setText] = useState("");

 const sendMessage = async () => {
  if (!text.trim()) return;

  const tempMessage = {
    id: Date.now(),
    text,
    pending: true
  };

  // 🚀 แสดงทันที
  startTransition(() => {
    addOptimisticMessage(tempMessage);
  });

  setText("");

  // 🌐 รอ server
  const savedMessage = await sendMessageToServer({
    ...tempMessage,
    pending: false
  });

  // ✅ เพิ่มเข้า state จริง
  setMessages(prev => [...prev, savedMessage]);
};


  return (
    <div style={{ width: "400px", margin: "40px auto" }}>
      <h2>Chat</h2>

      <div
        style={{
          minHeight: "200px",
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px"
        }}
      >
        {optimisticMessages.map((msg) => (
          <div
            key={msg.id}
            style={{
              opacity: msg.pending ? 0.4 : 1,
              transition: "opacity 0.3s",
              marginBottom: "5px"
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type message..."
        style={{ width: "70%" }}
      />
      <button onClick={sendMessage} style={{ marginLeft: "10px" }}>
        Send
      </button>
    </div>
  );
}
