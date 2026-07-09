alert("script is connected");
document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enter-btn");
  const enterScreen = document.getElementById("enter-screen");
  const mainUI = document.getElementById("main-ui");
  const bootOutput = document.getElementById("boot-output");

  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

  function addLine(text) {
    const line = document.createElement("div");
    line.className = "boot-line";
    line.textContent = text;
    bootOutput.appendChild(line);
    bootOutput.scrollTop = bootOutput.scrollHeight;

    while (bootOutput.children.length > 60) {
      bootOutput.removeChild(bootOutput.firstChild);
    }
  }

  async function typeLine(text, speed = 8) {
    const line = document.createElement("div");
    line.className = "boot-line";
    bootOutput.appendChild(line);

    for (let i = 0; i <= text.length; i++) {
line.textContent = text.substring(0, i) + "▋";
      bootOutput.scrollTop = bootOutput.scrollHeight;
      await wait(speed);
    }

    line.textContent = text;
  }

  async function runBoot() {
    enterScreen.style.display = "none";
    mainUI.classList.add("hidden");
    bootOutput.classList.remove("hidden");
    bootOutput.innerHTML = "";

    const bootSteps = [
      "[OK] Loading endpoint_support_engine.kext",
      "[OK] Injecting Intune provisioning module",
      "[OK] Syncing Windows Autopilot profile",
      "[OK] Mapping Entra ID records",
      "[OK] Validating Microsoft 365 services",
      "[OK] Opening Meraki switch telemetry",
      "[OK] Linking PrinterLogic driver table",
      "[OK] Loading ABM enrollment profile",
      "[OK] Decrypting Champion Homes logs",
      "[OK] Decrypting Corewell Health logs",
      "[SCAN] Checking endpoint compliance",
      "[SCAN] Enumerating portfolio modules",
      "[WARN] Legacy cache detected... retrying",
      "[OK] Building UI command shell"
    ];

    addLine("> Booting TranquilinoOS...");
    await wait(300);
    addLine("> Initializing exploit chain...");
    await wait(300);
    addLine("> Elevating terminal session...");
    await wait(300);
    addLine("");

    for (let i = 0; i < 45; i++) {
      const step = bootSteps[Math.floor(Math.random() * bootSteps.length)];
      const hex = Math.random().toString(16).substring(2, 10).toUpperCase();
      const mem = Math.floor(Math.random() * 9999);

      await typeLine(`root@tranquilino:~$ ${step} :: 0x${hex} :: mem_${mem}`, 5);
      await wait(70);
    }

    addLine("");
    await typeLine("root@tranquilino:~$ sudo unlock-system --force", 9);
    await wait(350);
    addLine("> FIREWALL RESPONSE: FAILED");
    await wait(350);
    addLine("> PRIVILEGE ESCALATION: SUCCESS");
    await wait(350);
    addLine("> ROOT ACCESS: GRANTED");
    await wait(500);
    addLine("> SYSTEM UNLOCKED");
    await wait(700);

    bootOutput.classList.add("hidden");
    mainUI.classList.remove("hidden");
  }

  enterBtn.addEventListener("click", runBoot);

  document.querySelectorAll(".command-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".panel").forEach(panel => panel.classList.add("hidden"));
      document.querySelectorAll(".command-btn").forEach(button => button.classList.remove("active"));

      btn.classList.add("active");

      const target = document.getElementById(btn.dataset.target);
      if (target) target.classList.remove("hidden");
    });
  });

  const projects = {
    win11: "[ ENTERPRISE WINDOWS 11 MIGRATION ]\n\nSupported a 1,500+ device Windows 10 to Windows 11 Enterprise migration across U.S. and Canadian manufacturing locations.",
    intune: "[ INTUNE ADMINISTRATION ]\n\nSupported device enrollment, compliance checks, policy validation, troubleshooting, and endpoint provisioning workflows.",
    autopilot: "[ WINDOWS AUTOPILOT ]\n\nUploaded hardware hashes, validated OOBE enrollment, supported DEM provisioning, and assisted with device readiness.",
    entra: "[ ENTRA ID ADMINISTRATION ]\n\nSupported user and device administration, MFA enrollment, access troubleshooting, and identity validation.",
    powerbi: "[ POWER BI INVENTORY DASHBOARD ]\n\nBuilt inventory reporting dashboards to support endpoint tracking, deployment planning, and asset visibility.",
    abm: "[ APPLE BUSINESS MANAGER ]\n\nSupported Apple Business Manager, Apple Configurator, iPad enrollment, and activation lock workflows.",
    meraki: "[ CISCO MERAKI ]\n\nSupported VLAN validation, switch port checks, PoE troubleshooting, VPN access, and device connectivity.",
    printerlogic: "[ PRINTERLOGIC ]\n\nSupported printer deployment, IP validation, scan-to-email troubleshooting, driver packaging, and endpoint printer access."
  };

  document.querySelectorAll("[data-project]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("project-output").innerText = projects[btn.dataset.project];
    });
  });

  const logs = {
    champion: "[ DESKTOP ENGINEER | CHAMPION HOME BUILDERS ]\n\nSupported endpoint provisioning, Windows 11 migration, Intune, Autopilot, Entra ID, ABM, Meraki, PrinterLogic, Microsoft 365, and enterprise support.",
    corewell: "[ IT LIFECYCLE REFRESH | COREWELL HEALTH ]\n\nImaged, deployed, and refreshed enterprise devices using PXE / USB imaging, ServiceNow workflows, asset tracking, and hardware lifecycle processes.",
    marigo: "[ TECHNICAL OPERATIONS LEAD | MARI-GO ]\n\nSupported technical operations, documentation, Jira workflows, AI integration, and process improvement.",
    animation: "[ LEAD ANIMATION INSTRUCTOR ]\n\nLed workshops, supported students, maintained studio operations, and created structured learning environments."
  };

  document.querySelectorAll("[data-role]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("log-output").innerText = logs[btn.dataset.role];
    });
  });
});};};