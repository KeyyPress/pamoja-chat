const App = () => {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <span className="dot" />
          <span>Pamoja Chat</span>
        </div>
        <div>
          <button className="btn-primary">New Chat</button>
        </div>
      </header>
      <main className="layout">
        <aside className="sidebar">
          <div className="search">
            <input placeholder="Search or start a new chat" />
          </div>
          <div className="conversations">
            <div className="conv-item active">Alice</div>
            <div className="conv-item">Bob</div>
            <div className="conv-item">Group: Weekend</div>
          </div>
        </aside>
        <section className="chat">
          <div className="chat-header">
            <strong>Alice</strong>
          </div>
          <div className="messages">
            <div className="bubble">Hey there 👋</div>
            <div className="bubble me">Hi! End-to-end crypto on.</div>
          </div>
          <div className="composer">
            <input placeholder="Type a message" />
            <button className="btn-primary">Send</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
