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

    while (bootOutput.children.length > 65) {
      bootOutput.removeChild(bootOutput.firstChild);
    }
  }

  async function typeLine(text, speed = 5) {
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

    const commands = [
      "nmap -sV tranquilino.local --open",
      "ssh root@tranquilino-os",
      "decrypt --target career_snapshot.db",
      "inject endpoint_support_engine.kext",
      "mount /portfolio/index",
      "scan --intune --entra --autopilot",
      "bypass legacy_profile_cache.lock",
      "elevate --role endpoint_admin",
      "load modules summary portfolio logs contact",
      "unlock --session Charlie_Tranquilino"
    ];

    const responses = [
      "[OK] Kernel accepted",
      "[OK] Intune module loaded",
      "[OK] Autopilot profile synced",
      "[OK] Entra records mapped",
      "[OK] ABM enrollment profile mounted",
      "[OK] Meraki telemetry linked",
      "[OK] PrinterLogic table loaded",
      "[WARN] Legacy cache detected",
      "[SCAN] Endpoint compliance verified",
      "[ACCESS] Privilege escalation successful",
      "[ROOT] TranquilinoOS unlocked"
    ];

    addLine("> Booting TranquilinoOS...");
    await wait(250);
    addLine("> Initializing exploit chain...");
    await wait(250);
    addLine("> Elevating terminal session...");
    await wait(250);
    addLine("");

    for (let i = 0; i < 55; i++) {
      const cmd = commands[Math.floor(Math.random() * commands.length)];
      const res = responses[Math.floor(Math.random() * responses.length)];
      const hex = Math.random().toString(16).substring(2, 10).toUpperCase();

      await typeLine("root@tranquilino:~$ " + cmd, 4);
      await wait(45);
      addLine(res + " :: 0x" + hex);
      await wait(55);
    }

    addLine("");
    await typeLine("root@tranquilino:~$ sudo unlock-system --force", 7);
    await wait(300);
    addLine("> FIREWALL RESPONSE: FAILED");
    await wait(300);
    addLine("> PRIVILEGE ESCALATION: SUCCESS");
    await wait(300);
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
});});};};