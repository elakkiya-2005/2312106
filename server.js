const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const notifications = require('./notification.json');

app.post("/notification", (req, res) => {
    const newNotification = req.body;
    notifications.push(newNotification);
    res.status(201).json({
        message: "New notification added",
        product: newNotification
    });
});
app.get("/notification", (req, res) => {
    res.json(notifications);
});
app.get("/notification/:id", (req, res) => {
    const id = Number(req.params.id);
    const notification = notifications.find(n => n.id === id);
    if (!notification) {
        return res.status(404).json({
            message: "Notification not available"
        });
    }
    res.json(notification);
});
app.put("/notification/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = notifications.findIndex(n => n.id === id);
    if (index === -1) {
        return res.status(404).json({
            message: "Notification not found"
        });
    }
    notifications[index] = req.body;
    res.json({
        message: "Updated successfully",
        product: notifications[index]
    });
});
app.delete("/notification/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = notifications.findIndex(n => n.id === id);
    if (index === -1) {
        return res.status(404).json({
            message: "Notification not found"
        });
    }
    notifications.splice(index, 1);
    res.json({
        message: "Notification deleted successfully"
    });
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});