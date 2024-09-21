// Mock data - replace with actual API calls in production
let userInvites = ['USERINV1', 'USERINV2'];
let subscriptions = [
    { name: 'Premium Plan', status: 'Active', expiryDate: '2024-12-31' },
    { name: 'Beta Plan', status: 'Expired', expiryDate: '2024-09-15' }
];

// Generate Invite
document.getElementById('generateInvite').addEventListener('click', function() {
    const newInvite = 'USERINV' + Math.random().toString(36).substr(2, 8);
    userInvites.push(newInvite);
    updateInviteList();
});

// Update Invite List
function updateInviteList() {
    const inviteList = document.getElementById('inviteList');
    inviteList.innerHTML = '';
    userInvites.forEach(invite => {
        const li = document.createElement('li');
        li.textContent = invite;
        inviteList.appendChild(li);
    });
}

// Update Subscription List
function updateSubscriptionList() {
    const subscriptionList = document.getElementById('subscriptionList');
    subscriptionList.innerHTML = '';
    subscriptions.forEach(sub => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${sub.name}</td>
            <td>${sub.status}</td>
            <td>${sub.expiryDate}</td>
            <td><button onclick="renewSubscription('${sub.name}')">Renew</button></td>
        `;
        subscriptionList.appendChild(tr);
    });
}

// Renew Subscription
function renewSubscription(subName) {
    const sub = subscriptions.find(s => s.name === subName);
    if (sub) {
        sub.status = 'Active';
        sub.expiryDate = '2025-09-20'; // Set to one year from now
        updateSubscriptionList();
    }
}

// Handle Downloads
document.querySelectorAll('.download-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const fileName = this.getAttribute('data-file');
        alert(`Downloading ${fileName}... In a real application, this would initiate the file download.`);
    });
});

// Crosshair functionality
document.addEventListener('mousemove', (e) => {
    const crosshair = document.querySelector('.crosshair');
    crosshair.style.left = `${e.clientX}px`;
    crosshair.style.top = `${e.clientY}px`;
});

// Initial updates
updateInviteList();
updateSubscriptionList();
