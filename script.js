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
  "Injecting kernel: endpoint_support_engine.kext",
  "Injecting kernel: system_administration_core.kext",
  "Uploading module: desktop_engine.champion_home_builders",
  "Uploading module: tech_ops_lead.mari_go",
  "Uploading module: it_lifecycle.corewell_health",
  "Loading driver: intune_device_provisioning.sys",
  "Loading driver: azure_ad_identity.sys",
  "Loading driver: windows_autopilot_boot.sys",
  "Starting service: freshservice_daemon",
  "Starting service: servicenow_assetd",
  "Mounting volume: imaging_pipeline.pxe",
  "Mounting volume: inventory_management.db",
  "Enabling security surface: mfa_guardian",
  "Loading daemon: asset_handoffd",
  "Optimizing cache: endpoint_profiles.cache"
];

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