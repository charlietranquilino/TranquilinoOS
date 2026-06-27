// TranquilinoOS — Charlie Tranquilino Edition

const bootSteps = [
  { label: "Injecting kernel: customer_facing_experience.kext" },
  { label: "Injecting kernel: endpoint_support_engine.kext" },
  { label: "Injecting kernel: system_administration_core.kext" },
  { label: "Uploading module: desktop_engine.champion_home_builders" },
  { label: "Uploading module: tech_ops_lead.mari_go" },
  { label: "Uploading module: it_lifecycle.corewell_health" },
  { label: "Uploading module: data_analytics_training.npower" },
  { label: "Loading driver: intune_device_provisioning.sys" },
  { label: "Loading driver: azure_ad_identity.sys" },
  { label: "Loading driver: windows_autopilot_boot.sys" },
  { label: "Starting service: freshservice_daemon" },
  { label: "Starting service: servicenow_assetd" },
  { label: "Starting service: ticket_routing.engine" },
  { label: "Mounting volume: imaging_pipeline.pxe" },
  { label: "Mounting volume: asset_tracking.index" },
  { label: "Mounting volume: inventory_management.db" },
  { label: "Enabling security surface: mfa_guardian" },
  { label: "Enabling security surface: access_controls.policy" },
  { label: "Injecting module: documentation_and_sops" },
  { label: "Patching subsystem: voip_8x8_callstack.so" },
  { label: "Patching subsystem: poe_device_controller.so" },
  { label: "Optimizing cache: endpoint_profiles.cache" }
];

const panelKernels = {
  summary: ["Loading profile_summary.core", "Aggregating experience.timeline", "Syncing career_snapshot.view"],
  modules: ["Loading skill_modules.registry", "Mounting endpoint_management.stack", "Updating tools_and_platforms.catalog"],
  processes: ["Loading portfolio.registry", "Mounting project_details.db", "Rendering portfolio.interface"],
  logs: ["Streaming system_logs.career", "Indexing accomplishments.audit", "Refreshing metrics_and_impact.index"],
  contact: ["Resolving contact_routes.dns", "Loading communication_channels.cfg", "Queuing response_pipeline.ready"],
  default: ["Loading generic_module.core", "Refreshing generic_cache.index"]
};

const projects = {
  win11: "[ ENTERPRISE WINDOWS 11 MIGRATION ]\n\nSupported a 1,500+ device Windows 10 to Windows 11 Enterprise migration.\n\nTools: Intune, Autopilot, Entra ID, Active Directory, enterprise imaging, VPN.\n\nImpact: Helped modernize endpoints, improve deployment consistency, and support multi-site hardware readiness.",

  intune: "[ INTUNE ADMINISTRATION ]\n\nManaged device enrollment, compliance checks, policy support, and troubleshooting.\n\nTools: Microsoft Intune, Company Portal, Windows Autopilot.\n\nImpact: Improved endpoint visibility and device onboarding success.",

  autopilot: "[ WINDOWS AUTOPILOT ]\n\nUploaded hardware hashes, validated OOBE enrollment, and supported device provisioning.\n\nTools: Autopilot, DEM, Intune, Entra ID.\n\nImpact: Reduced manual setup and improved deployment flow.",

  entra: "[ ENTRA ID ADMINISTRATION ]\n\nSupported user/device administration, MFA enrollment, ADUC checks, and access troubleshooting.\n\nTools: Entra ID, Active Directory, MFA, ADUC.\n\nImpact: Improved user access readiness and onboarding support.",

  powerbi: "[ POWER BI INVENTORY DASHBOARD ]\n\nBuilt inventory reporting dashboards for endpoint tracking, hardware counts, and deployment planning.\n\nTools: Power BI, Excel, inventory data.\n\nImpact: Improved hardware visibility and deployment planning.",

  abm: "[ APPLE BUSINESS MANAGER ]\n\nSupported ABM, Apple Configurator, iPad enrollment, and activation lock workflows.\n\nTools: ABM, Apple Configurator, iOS enrollment.\n\nImpact: Improved Apple device provisioning consistency.",

  meraki: "[ CISCO MERAKI ]\n\nValidated VLANs, switch ports, PoE, VPN access, and printer/device connectivity.\n\nTools: Cisco Meraki, VLANs, PoE, VPN.\n\nImpact: Helped resolve endpoint and printer connectivity issues.",

  printerlogic: "[ PRINTERLOGIC ]\n\nSupported printer deployment, IP validation, scan-to-email troubleshooting, and driver packaging.\n\nTools: PrinterLogic, INF drivers, Meraki, printer IPs.\n\nImpact: Improved printer availability and reduced repeat issues."
};

const bootOutput = document.getElementById("boot-output");
const mainUI = document.getElementById("main-ui");
const enterScreen = document.getElementById("enter-screen");
const enterBtn = document.getElementById("enter-btn");
const bootLogo = document.getElementById("boot-logo");

const buttons = document.querySelectorAll(".command-btn");
const logLinks = document.querySelectorAll(".log-link");
const logPanels = document.querySelectorAll(".log-details");
const logMenu = document.getElementById("log-menu");
const logsBack = document.getElementById("logs-back");

function addLine(text, parent = bootOutput) {
  const line = document.createElement("div");
  line.className = "boot-line";
  line.textContent = text;
  parent.appendChild(line);
  parent.scrollTop = parent.scrollHeight;
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const shortSnippets = [
  "> file.tmp",
  "> file.log",
  "> file.sys",
  "> Loading...",
  "> Ready.",
  "> OK"
];

async function chaoticStreamLogs(durationMs, lineGenerator) {
  const start = Date.now();

  while (Date.now() - start < durationMs) {
    const batchSize = 1 + Math.floor(Math.random() * 6);

    for (let i = 0; i < batchSize; i++) {
      const useShort = Math.random() < 0.25;
      const text = useShort
        ? shortSnippets[Math.floor(Math.random() * shortSnippets.length)]
        : lineGenerator();

      addLine(text);
    }

    while (bootOutput.children.length > 60) {
      bootOutput.removeChild(bootOutput.firstChild);
    }

    await wait(30 + Math.floor(Math.random() * 60));
  }
}

function capitalize(word) {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
}

async function runBootSequence() {
  if (bootLogo) bootLogo.classList.remove("hidden");

  bootOutput.classList.remove("hidden");
  bootOutput.innerHTML = "";

  addLine("> Booting TranquilinoOS — Charlie Tranquilino Edition v1.0...");
  addLine("");

  const bootLineGenerator = () => {
    const step = bootSteps[Math.floor(Math.random() * bootSteps.length)];
    return "> " + step.label;
  };

  for (let i = 0; i < 25; i++) {
    addLine(bootLineGenerator());
  }

  await chaoticStreamLogs(6500, bootLineGenerator);

  addLine("");
  addLine("Finalizing boot sequence...");
  await wait(250);
  addLine("System state stabilized.");
  addLine("");
  await wait(300);
  addLine("> System unlocked.");
  addLine("> Awaiting command...");

  setTimeout(() => {
    bootOutput.classList.add("hidden");
    if (bootLogo) bootLogo.classList.add("hidden");
    mainUI.classList.remove("hidden");
  }, 400);
}

async function loadModuleForPanel(label, panel) {
  mainUI.classList.add("hidden");
  bootOutput.classList.remove("hidden");
  bootOutput.innerHTML = "";

  const targetId = panel.id;
  const niceLabel = capitalize(label);

  addLine("> Processing command: " + niceLabel);
  addLine("");

  const kernels = panelKernels[targetId] || panelKernels.default;
  let kIndex = 0;

  const panelLineGenerator = () => {
    const text = kernels[kIndex];
    kIndex = (kIndex + 1) % kernels.length;
    return "> " + text;
  };

  await chaoticStreamLogs(1000, panelLineGenerator);

  document.querySelectorAll(".panel").forEach(p => p.classList.add("hidden"));
  panel.classList.remove("hidden");

  setTimeout(() => {
    bootOutput.classList.add("hidden");
    mainUI.classList.remove("hidden");
  }, 200);
}

enterBtn.addEventListener("click", () => {
  enterScreen.style.display = "none";
  runBootSequence();
});

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const targetId = btn.getAttribute("data-target");
    const panel = document.getElementById(targetId);

    if (!panel) return;

    const label = btn.textContent.trim().toLowerCase();
    loadModuleForPanel(label, panel);
  });
});

document.querySelectorAll(".folder-btn").forEach(button => {
  button.addEventListener("click", () => {
    const project = button.dataset.project;
    const output = document.getElementById("project-output");

    if (output && projects[project]) {
      output.innerText = projects[project];
    }
  });
});

logLinks.forEach(link => {
  link.addEventListener("click", () => {
    const role = link.getAttribute("data-role");
    const targetPanel = document.getElementById("log-" + role);

    logPanels.forEach(panel => panel.classList.add("hidden"));

    if (logMenu) logMenu.classList.add("hidden");
    if (targetPanel) targetPanel.classList.remove("hidden");
    if (logsBack) logsBack.classList.remove("hidden");
  });
});

ifif (logsBack) {
  logsBack.addEventListener("click", () => {
    logPanels.forEach(panel => panel.classList.add("hidden"));
    if (logMenu) logMenu.classList.remove("hidden");
    logsBack.classList.add("hidden");
  });
}