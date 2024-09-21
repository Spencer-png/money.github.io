// Mock data - replace with actual API calls in production
let invites = ['INVITE1', 'INVITE2', 'INVITE3'];
let users = ['user1', 'user2', 'user3'];
let bans = ['baduser1', 'baduser2'];
let beta = ['Beta user1', 'Beta user2'];
let adminInvites = ['ADMIN1', 'ADMIN2'];
let betaMode = false;

// Generate Invite
document.getElementById('generateInvite').addEventListener('click', function() {
    const newInvite = 'INVITE' + Math.random().toString(36).substr(2, 8);
    invites.push(newInvite);
    updateInviteList();
});

// Update Invite List
function updateInviteList() {
    const inviteList = document.getElementById('inviteList');
    inviteList.innerHTML = '';
    invites.forEach(invite => {
        const li = document.createElement('li');
        li.textContent = invite;
        inviteList.appendChild(li);
    });
}

// Update User List
function updateUserList() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user}</td>
            <td><button onclick="removeUser('${user}')">Remove</button></td>
        `;
        userList.appendChild(tr);
    });
}

// Remove User
function removeUser(username) {
    users = users.filter(user => user !== username);
    updateUserList();
}

// Ban User
document.getElementById('banUser').addEventListener('click', function() {
    const username = document.getElementById('banUsername').value;
    if (username && !bans.includes(username)) {
        bans.push(username);
        updateBanList();
        document.getElementById('banUsername').value = '';
    }
});

// Update Ban List
function updateBanList() {
    const banList = document.getElementById('banList');
    banList.innerHTML = '';
    bans.forEach(ban => {
        const li = document.createElement('li');
        li.textContent = ban;
        banList.appendChild(li);
    });
}

// Generate Admin Invite
document.getElementById('generateAdminInvite').addEventListener('click', function() {
    const newAdminInvite = 'ADMIN' + Math.random().toString(36).substr(2, 8);
    adminInvites.push(newAdminInvite);
    updateAdminInviteList();
});

// Update Admin Invite List
function updateAdminInviteList() {
    const adminInviteList = document.getElementById('adminInviteList');
    adminInviteList.innerHTML = '';
    adminInvites.forEach(invite => {
        const li = document.createElement('li');
        li.textContent = invite;
        adminInviteList.appendChild(li);
    });
}

// Update Beta Status
document.getElementById('Betalist').addEventListener('click', function() {
    const username = document.getElementById('BetaUsername').value;
    if (username && !beta.includes(username)) {
        beta.push(username);
        updateBetaStatus();
        document.getElementById('BetaUsername').value = '';
    }
})

// Update Beta List
function updateBetaList() {
    const betaList = document.getElementById('BetaList');
    betaList.innerHTML = '';
    bans.forEach(beta => {
        const lil = document.createElement('lil');
        lil.textContent = beta;
        betaList.appendChild(lil);
    });
}

// Initial updates
updateInviteList();
updateUserList();
updateBanList();
updateAdminInviteList();
updateBetaStatus();
updateBetaList();

// Crosshair functionality
document.addEventListener('mousemove', (e) => {
    const crosshair = document.querySelector('.crosshair');
    crosshair.style.left = `${e.clientX - 10}px`;
    crosshair.style.top = `${e.clientY - 10}px`;
});
