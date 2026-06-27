window.onload = function () {
  const enterBtn = document.getElementById("enter-btn");
  const enterScreen = document.getElementById("enter-screen");
  const mainUI = document.getElementById("main-ui");
  const bootOutput = document.getElementById("boot-output");
  const bootLogo = document.getElementById("boot-logo");

  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function addLine(text) {
    const line = document.createElement("div");
    line.className = "boot-line";
    line.textContent = text;
    bootOutput.appendChild(line);
    bootOutput.scrollTop = bootOutput.scrollHeight;
  }

  async function runBoot() {
    enterScreen.style.display = "none";
    mainUI.classList.add("hidden");
    bootOutput.classList.remove("hidden");
    if (bootLogo) bootLogo.classList.remove("hidden");

    bootOutput.innerHTML = "";

    const bootSteps = [
  "[OK] Injecting kernel: endpoint_support_engine.kext",
  "[OK] Bypassing legacy_profile_cache.lock",
  "[OK] Loading driver: intune_device_provisioning.sys",
  "[WARN] Autopilot hash mismatch detected... retrying",
  "[OK] Autopilot hash accepted",
  "[OK] Mounting volume: portfolio.index",
  "[OK] Syncing career_snapshot.view",
  "[SCAN] Enumerating endpoint modules...",
  "[SCAN] Checking Entra ID records...",
  "[SCAN] Validating Intune compliance state...",
  "[OK] Starting service: freshservice_daemon",
  "[OK] Linking PrinterLogic driver table",
  "[OK] Opening Meraki switch telemetry",
  "[OK] Loading ABM enrollment profile",
  "[OK] Decrypting logs: champion_home_builders.db",
  "[OK] Decrypting logs: corewell_health.db",
  "[OK] Building UI command shell",
  "[OK] Access granted"
];

addLine("> Booting TranquilinoOS...");
addLine("> Initializing exploit chain...");
addLine("> Elevating terminal session...");
addLine("");

for (let i = 0; i < 140; i++) {
  const random = bootSteps[Math.floor(Math.random() * bootSteps.length)];
  const hex = Math.random().toString(16).substring(2, 10).toUpperCase();
  const mem = Math.floor(Math.random() * 9999);

  addLine("> " + random + " :: 0x" + hex + " :: mem_" + mem);

  while (bootOutput.children.length > 70) {
    bootOutput.removeChild(bootOutput.firstChild);
  }

  if (i % 18 === 0) {
    await wait(500); // dramatic pause
  } else if (i % 7 === 0) {
    await wait(180); // small pause
  } else {
    await wait(35); // normal scrolling
  }
}

addLine("");
addLine("> FIREWALL RESPONSE: FAILED");
await wait(550);
addLine("> PRIVILEGE ESCALATION: SUCCESS");
await wait(550);
addLine("> ROOT ACCESS: GRANTED");
await wait(700);
addLine("> SYSTEM UNLOCKED");
addLine("> Awaiting command...");
await wait(500);

addLine("> Booting TranquilinoOS...");

for (let i = 0; i < 120; i++) {
  const random = bootSteps[Math.floor(Math.random() * bootSteps.length)];
  addLine("> " + random);

  while (bootOutput.children.length > 55) {
    bootOutput.removeChild(bootOutput.firstChild);
  }

  await wait(15);
}

addLine("> System unlocked.");
addLine("> Awaiting command...");
await wait(150);

    bootOutput.classList.add("hidden");
    if (bootLogo) bootLogo.classList.add("hidden");
    mainUI.classList.remove("hidden");
  }

  enterBtn.onclick = runBoot;

  document.querySelectorAll(".command-btn").forEach(function (btn) {
    btn.onclick = function () {
      document.querySelectorAll(".panel").forEach(panel => panel.classList.add("hidden"));
      document.querySelectorAll(".command-btn").forEach(b => b.classList.remove("active"));

      btn.classList.add("active");

      const target = document.getElementById(btn.dataset.target);
      if (target) target.classList.remove("hidden");
    };
  });

  const projects = {
    win11: "[ ENTERPRISE WINDOWS 11 MIGRATION ]\n\nSupported a 1,500+ device Windows 10 to Windows 11 Enterprise migration.",
    intune: "[ INTUNE ADMINISTRATION ]\n\nManaged device enrollment, compliance checks, policy support, and troubleshooting.",
    autopilot: "[ WINDOWS AUTOPILOT ]\n\nUploaded hardware hashes, validated OOBE enrollment, and supported device provisioning.",
    entra: "[ ENTRA ID ADMINISTRATION ]\n\nSupported user/device administration, MFA enrollment, ADUC checks, and access troubleshooting.",
    powerbi: "[ POWER BI INVENTORY DASHBOARD ]\n\nBuilt inventory reporting dashboards for endpoint tracking and deployment planning.",
    abm: "[ APPLE BUSINESS MANAGER ]\n\nSupported ABM, Apple Configurator, iPad enrollment, and activation lock workflows.",
    meraki: "[ CISCO MERAKI ]\n\nValidated VLANs, switch ports, PoE, VPN access, and connectivity.",
    printerlogic: "[ PRINTERLOGIC ]\n\nSupported printer deployment, IP validation, scan-to-email troubleshooting, and driver packaging."
  };

  document.querySelectorAll("[data-project]").forEach(function (btn) {
    btn.onclick = function () {
      document.getElementById("project-output").innerText = projects[btn.dataset.project];
    };
  });

  const logs = {
    helpdesk: "[ DESKTOP ENGINEER ]\n\nSupported Windows 11 migration, Intune, Autopilot, ABM, Meraki, PrinterLogic, and endpoint provisioning.",
    techops: "[ TECHNICAL OPERATIONS LEAD ]\n\nSupported technical operations, documentation, Jira workflows, and AI integration.",
    lifecycle: "[ IT LIFECYCLE REFRESH ]\n\nImaged and deployed 1,000+ devices using PXE / USB imaging and ServiceNow workflows.",
    animation: "[ LEAD ANIMATION INSTRUCTOR ]\n\nLed workshops, supported students, and maintained studio operations."
  };

  document.querySelectorAll("[data-role]").forEach(function (btn) {
    btn.onclick = function () {
      document.getElementById("log-output").innerText = logs[btn.dataset.role];
    };
  });
};