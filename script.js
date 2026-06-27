const enterBtn = document.getElementById("enter-btn");
const enterScreen = document.getElementById("enter-screen");
const bootOutput = document.getElementById("boot-output");
const mainUI = document.getElementById("main-ui");
const bootLogo = document.getElementById("boot-logo");

const buttons = document.querySelectorAll(".command-btn");

const projects = {
  win11: "[ ENTERPRISE WINDOWS 11 MIGRATION ]\n\nSupported a 1,500+ device Windows 10 to Windows 11 Enterprise migration.\n\nTools: Intune, Autopilot, Entra ID, Active Directory, enterprise imaging, VPN.",
  intune: "[ INTUNE ADMINISTRATION ]\n\nManaged device enrollment, compliance checks, policy support, and troubleshooting.",
  autopilot: "[ WINDOWS AUTOPILOT ]\n\nUploaded hardware hashes, validated OOBE enrollment, and supported device provisioning.",
  entra: "[ ENTRA ID ADMINISTRATION ]\n\nSupported user/device administration, MFA enrollment, ADUC checks, and access troubleshooting.",
  powerbi: "[ POWER BI INVENTORY DASHBOARD ]\n\nBuilt inventory reporting dashboards for endpoint tracking, hardware counts, and deployment planning.",
  abm: "[ APPLE BUSINESS MANAGER ]\n\nSupported ABM, Apple Configurator, iPad enrollment, and activation lock workflows.",
  meraki: "[ CISCO MERAKI ]\n\nValidated VLANs, switch ports, PoE, VPN access, and printer/device connectivity.",
  printerlogic: "[ PRINTERLOGIC ]\n\nSupported printer deployment, IP validation, scan-to-email troubleshooting, and driver packaging."
};

const logs = {
  helpdesk: "[ DESKTOP ENGINEER | CHAMPION HOME BUILDERS ]\n\n- Supported a 1,500+ endpoint Windows 11 migration across U.S. and Canadian locations.\n- Provisioned, enrolled, and supported 150+ Windows and Apple devices using Intune, Autopilot, Entra ID, AD, ABM, and DEM.\n- Administered PrinterLogic, Cisco Meraki, 8x8, Intune, Entra ID, and ABM while creating deployment documentation and QC standards.",
  techops: "[ TECHNICAL OPERATIONS LEAD | MARI-GO ]\n\n- Lead coordination between technical, design, and operations teams.\n- Support AI integration, documentation, version control, and knowledge base indexing.\n- Develop SOPs based on Jira tickets and backlog trends.",
  lifecycle: "[ IT LIFECYCLE REFRESH | COREWELL HEALTH ]\n\n- Imaged and deployed 1,000+ desktops, laptops, and AIO devices using PXE boot / USB imaging.\n- Managed IT workflows and asset lifecycles in ServiceNow.\n- Supported hospital refreshes while minimizing downtime.",
  animation: "[ LEAD ANIMATION INSTRUCTOR ]\n\n- Led animation workshops and maintained studio standards.\n- Prepared tools, resources, and inventory for classes.\n- Supported creative projects, events, and student learning."
};

function addLine(text) {
  const line = document.createElement("div");
  line.className = "boot-line";
  line.textContent = text;
  bootOutput.appendChild(line);
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runBootSequence() {
  bootOutput.classList.remove("hidden");
  bootOutput.innerHTML = "";

  if (bootLogo) bootLogo.classList.remove("hidden");

  const lines = [
    "> Booting TranquilinoOS...",
    "> Injecting kernel: endpoint_support_engine.kext",
    "> Loading driver: intune_device_provisioning.sys",
    "> Loading driver: windows_autopilot_boot.sys",
    "> Mounting volume: portfolio.index",
    "> Syncing career_snapshot.view",
    "> System unlocked.",
    "> Awaiting command..."
  ];

  for (const line of lines) {
    addLine(line);
    await wait(250);
  }

  bootOutput.classList.add("hidden");
  if (bootLogo) bootLogo.classList.add("hidden");
  mainUI.classList.remove("hidden");
}

if (enterBtn) {
  enterBtn.addEventListener("click", () => {
    enterScreen.style.display = "none";
    runBootSequence();
  });
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const targetId = button.dataset.target;

    document.querySelectorAll(".panel").forEach(panel => {
      panel.classList.add("hidden");
    });

    const targetPanel = document.getElementById(targetId);
    if (targetPanel) {
      targetPanel.classList.remove("hidden");
    }
  });
});

document.querySelectorAll(".folder-btn[data-project]").forEach(button => {
  button.addEventListener("click", () => {
    const output = document.getElementById("project-output");
    output.innerText = projects[button.dataset.project];
  });
});

document.querySelectorAll(".log-link").forEach(button => {
  button.addEventListener("click", () => {
    const output = document.getElementById("log-output");
    output.innerText = logs[button.dataset.role];
  });
});}