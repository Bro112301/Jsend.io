let cookies = 0;
let cookiesPerClick = 1;

function clickCookie() {
  cookies += cookiesPerClick;
  updateCookieDisplay();
}

function updateCookieDisplay() {
  document.getElementById('cookie-count').textContent = cookies;
}

function purchaseUpgrade(upgradeId) {
  let upgrade = upgrades[upgradeId];
  if (cookies >= upgrade.cost) {
    cookies -= upgrade.cost;
    upgrade.buy();
    updateUpgradeDisplay();
    updateCookieDisplay();
  }
}

function updateUpgradeDisplay() {
  for (let upgradeId in upgrades) {
    let upgrade = upgrades[upgradeId];
    let upgradeElement = document.getElementById('upgrade-' + upgradeId);
    upgradeElement.textContent = upgrade.name + ': ' + upgrade.cost + ' cookies';
    if (cookies < upgrade.cost) {
      upgradeElement.classList.add('disabled');
    } else {
      upgradeElement.classList.remove('disabled');
    }
  }
}

let upgrades = {
  cursor: {
    name: 'Cursor',
    cost: 10,
    multiplier: 1.5,
    buy() {
      cookiesPerClick *= this.multiplier;
    }
  },
  grandma: {
    name: 'Grandma',
    cost: 100,
    multiplier: 2,
    buy() {
      cookiesPerClick *= this.multiplier;
    }
  }
};

updateCookieDisplay();
updateUpgradeDisplay();

document.getElementById('cookie').addEventListener('click', clickCookie);

for (let upgradeId in upgrades) {
  document.getElementById('upgrade-' + upgradeId).addEventListener('click', () => purchaseUpgrade(upgradeId));
}
