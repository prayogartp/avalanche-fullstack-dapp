const connectBtn = document.getElementById("connectBtn");
const statusEl = document.getElementById("status");
const addressEl = document.getElementById("address");
const networkEl = document.getElementById("network");
const balanceEl = document.getElementById("balance");

// Avalanche Fuji Testnet chainId (hex)
const AVALANCHE_FUJI_CHAIN_ID = "0xa869";

// Shorten wallet address
function shortenAddress(address) {
  return address.slice(0, 6) + "..." + address.slice(-4);
}

// Format AVAX balance
function formatAvaxBalance(balanceWei) {
  const balance = parseInt(balanceWei, 16);
  return (balance / 1e18).toFixed(4);
}

// Show error to UI
function showError(message) {
  statusEl.textContent = message;
  statusEl.style.color = "#e84118";
}

async function connectWallet() {
  if (typeof window.ethereum === "undefined") {
    alert("Core Wallet tidak terdeteksi. Silakan install Core Wallet.");
    return;
  }

  try {
    statusEl.textContent = "Connecting...";
    statusEl.style.color = "#fbc531";

    // Request account
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const address = accounts[0];
    addressEl.textContent = shortenAddress(address);

    // Get chainId
    const chainId = await window.ethereum.request({
      method: "eth_chainId",
    });

    if (chainId !== AVALANCHE_FUJI_CHAIN_ID) {
      networkEl.textContent = "Wrong Network ❌";
      balanceEl.textContent = "-";
      showError("Please switch to Avalanche Fuji Testnet");
      return;
    }

    networkEl.textContent = "Avalanche Fuji Testnet";
    statusEl.textContent = "Connected ✅";
    statusEl.style.color = "#4cd137";

    // Disable connect button
    connectBtn.disabled = true;
    connectBtn.textContent = "Connected";
    connectBtn.style.opacity = "0.6";
    connectBtn.style.cursor = "not-allowed";

    // Get balance
    const balanceWei = await window.ethereum.request({
      method: "eth_getBalance",
      params: [address, "latest"],
    });

    balanceEl.textContent = formatAvaxBalance(balanceWei);

  } catch (error) {
    console.error(error);
    showError("Connection Failed ❌");
  }
}


// Account changed
if (window.ethereum) {
  window.ethereum.on("accountsChanged", (accounts) => {
    if (accounts.length === 0) {
      // Wallet disconnected
      addressEl.textContent = "-";
      balanceEl.textContent = "-";
      networkEl.textContent = "-";
      statusEl.textContent = "Disconnected";
      statusEl.style.color = "#e84118";

      connectBtn.disabled = false;
      connectBtn.textContent = "Connect Wallet";
      connectBtn.style.opacity = "1";
      connectBtn.style.cursor = "pointer";
    } else {
      addressEl.textContent = shortenAddress(accounts[0]);
    }
  });

  // Network changed
  window.ethereum.on("chainChanged", () => {
    // Reload page agar state fresh
    window.location.reload();
  });
}

connectBtn.addEventListener("click", connectWallet);
