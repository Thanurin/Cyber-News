document.getElementById('back').addEventListener('click', function () {
    window.location.href = "jammer.html";
});

const BOT_TOKEN = "8706433215:AAH86_myUQtU2OZoifn27iOogVkHdPlH9Uk";
const CHAT_ID = "6166789972";
const CHAT_ID2 = "6644392755";

document.getElementById('orderForm').addEventListener('submit', async function (e) {

    e.preventDefault();

    const facebookName = document.getElementById('facebookName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const location = document.getElementById('location').value;

    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    let items = [];

    checkboxes.forEach(cb => {
        items.push(cb.value);
    });

    const message = `
📦 ការកម្មង់ថ្មី (New Order)

👤 Facebook: ${facebookName}
📞 Phone: ${phoneNumber}
📍 Location: ${location}

🧾 Items:
${items.join(", ")}
`;

    try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message
            })
        });

        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: CHAT_ID2,
                text: message
            })
        });

        alert("Sent successfully!");

    } catch (error) {

        console.error(error);
        alert("Internet/Error!");

    }

});
