import React, { useState } from "react";

const sampleNotifications = [
  { id: 1, text: "User2 reacted to your post 'Morning Motivation' 👍", time: "2m ago" },
  { id: 2, text: "User3 commented on 'Tech Talk' 💬", time: "15m ago" },
  { id: 3, text: "User1 started following you ✨", time: "1h ago" },
  { id: 4, text: "Your post 'Weekend Vibes' got 10 reactions 🎉", time: "3h ago" },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  const handleRefresh = () => {
    setNotifications(sampleNotifications);
  };

  return (
    <div className="notifications-page">
      <div className="notifications-header">
        <h2 className="section-title">Notifications</h2>
        <button className="button" onClick={handleRefresh}>
          Refresh Notifications
        </button>
      </div>
      <section className="notificationsList">
        {notifications.length === 0 ? (
          <p className="empty-state">Click refresh to load notifications.</p>
        ) : (
          notifications.map((n) => (
            <div key={n.id} className="notification-item">
              <p>{n.text}</p>
              <span className="notif-time">{n.time}</span>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Notifications;