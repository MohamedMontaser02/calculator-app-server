// Change 'localhost' or 'respberry.local' to this:
const client = mqtt.connect('ws://192.168.1.50:9001');

client.on('connect', () => {
    console.log("Connected to Pi Broker at 192.168.1.50");
    document.getElementById('status').innerText = "Status: Connected";
});

function send(room) {
    if (client.connected) {
        // Ensure this matches the topic your ESP32 is listening to
        client.publish('esp32', room); 
        console.log("Sent: " + room);
    }
}