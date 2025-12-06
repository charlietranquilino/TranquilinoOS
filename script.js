// TranquilinoOS — Charlie Tranquilino Edition
// Chaotic text-only kernels, no loading bars

// ------------------------ BOOT SETUP ------------------------

// Main boot steps (full OS boot)
const bootSteps = [
  { label: "Injecting kernel: customer_facing_experience.kext" },
  { label: "Injecting kernel: endpoint_support_engine.kext" },
  { label: "Injecting kernel: system_administration_core.kext" },

  { label: "Uploading module: desktop_engine.champion_home_builders" },
  { label: "Uploading module: tech_ops_lead.mari_go" },
  { label: "Uploading module: it_lifecycle.corewell_health" },
  { label: "Uploading module: it_support_training.per_scholas" },
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

  { label: "Injecting module: user_training_and_support" },
  { label: "Injecting module: cross_team_collaboration" },
  { label: "Injecting module: documentation_and_sops" },

  { label: "Patching subsystem: voip_8x8_callstack.so" },
  { label: "Patching subsystem: poe_device_controller.so" },
  { label: "Patching subsystem: basic_networking_dns_dhcp.so" },

  { label: "Loading daemon: asset_handoffd" },
  { label: "Loading daemon: clinical_support_bridge" },

  { label: "Optimizing cache: ticket_history.idx" },
  { label: "Optimizing cache: endpoint_profiles.cache" }
];

// Per-panel kernels for button clicks (NO VERBOSE, plain text)
const panelKernels = {
  summary: [
    "Loading profile_summary.core",
    "Aggregating experience.timeline",
    "Indexing customer_facing_background.db",
    "Optimizing strengths_matrix.cache",
    "Syncing career_snapshot.view",
    "Verifying profile_integrity.checksum"
  ],
  modules: [
    "Loading skill_modules.registry",
    "Mounting endpoint_management.stack",
    "Resolving directory_services.mapping",
    "Linking troubleshooting_playbook.pkg",
    "Refreshing security_controls.index",
    "Updating tools_and_platforms.catalog"
  ],
  processes: [
    "Querying active_processes.table",
    "Syncing current_roles.status",
    "Linking employer_records.chain",
    "Validating uptime_for_roles.monitor",
    "Rebuilding active_stack.snapshot",
    "Confirming process_health.ok"
  ],
  history: [
    "Loading history_archive.core",
    "Replaying past_deployments.log",
    "Reading contract_timeline.db",
    "Reconstructing previous_environments.view",
    "Syncing legacy_skill_usage.cache",
    "Compressing historical_context.bundle"
  ],
  logs: [
    "Streaming system_logs.career",
    "Indexing incident_history.events",
    "Linking ticketing_system.records",
    "Validating accomplishments.audit",
    "Refreshing metrics_and_impact.index",
    "Archiving log_rollup.snapshot"
  ],
  contact: [
    "Resolving contact_routes.dns",
    "Loading communication_channels.cfg",
    "Verifying availability_window.schedule",
    "Mounting social_presence.viewport",
    "Encrypting outbound_contact_packet",
    "Queuing response_pipeline.ready"
  ],
  default: [
    "Loading generic_module.core",
    "Refreshing generic_cache.index",
    "Syncing generic_state.status"
  ]
};

// ------------------------ DOM HOOKS ------------------------

const bootOutput  = document.getElementById("boot-output");
const mainUI      = document.getElementById("main-ui");
const enterScreen = document.getElementById("enter-screen");
const enterBtn    = document.getElementById("enter-btn");
const bootLogo    = document.getElementById("boot-logo");

const buttons   = document.querySelectorAll(".command-btn");
const logLinks  = document.querySelectorAll(".log-link");
const logPanels = document.querySelectorAll(".log-details");

// ------------------------ HELPERS ------------------------

function addLine(text, parent = bootOutput) {
  const line = document.createElement("div");
  line.className = "boot-line";
  line.textContent = text;
  parent.appendChild(line);
  parent.scrollTop = parent.scrollHeight; // always stay at bottom
  return line;
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const MAX_LOG_LINES = 60; // more lines so the screen is fully packed

// tiny one-liner snippets to mix in
const shortSnippets = [
  "> file.tmp",
  "> file.log",
  "> file.sys",
  "> file.xyz",
  "> Loading...",
  "> Loading…",
  "> Showing...",
  "> Ready.",
  "> OK"
];

// chaotic scroll: random burst sizes, random intervals, always pushing up
async function chaoticStreamLogs(durationMs, lineGenerator) {
  const start = Date.now();
  let lastWasShort = false;

  while (Date.now() - start < durationMs) {
    // 1–6 lines per burst (short/medium/full-ish)
    const batchSize = 1 + Math.floor(Math.random() * 6);

    for (let i = 0; i < batchSize; i++) {
      let text;

      // 25% chance of a short line, but never twice in a row
      const useShort = Math.random() < 0.25 && !lastWasShort;

      if (useShort) {
        text = shortSnippets[Math.floor(Math.random() * shortSnippets.length)];
        lastWasShort = true;
      } else {
        text = lineGenerator();
        lastWasShort = false;
      }

      addLine(text);
    }

    // keep only the most recent MAX_LOG_LINES lines so it looks like scrolling up
    while (bootOutput.children.length > MAX_LOG_LINES) {
      bootOutput.removeChild(bootOutput.firstChild);
    }

    // 30–90ms between bursts => fast, chaotic motion
    const interval = 30 + Math.floor(Math.random() * 60);
    await wait(interval);
  }
}


function capitalize(word) {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// ------------------------ MAIN BOOT SEQUENCE ------------------------

async function runBootSequence() {
  if (bootLogo) bootLogo.classList.remove("hidden");
  bootOutput.classList.remove("hidden");
  bootOutput.innerHTML = "";

  // Immediately start with something on screen
  addLine("> Booting TranquilinoOS — Charlie Tranquilino Edition v1.0...");
  addLine("");

  // generator for boot log lines (NO 'VERBOSE')
  const bootLineGenerator = () => {
    const step = bootSteps[Math.floor(Math.random() * bootSteps.length)];
    return "> " + step.label;
  };

  // pre-fill with a bunch of random lines so the screen is full right away
  for (let i = 0; i < 25; i++) {
    addLine(bootLineGenerator());
  }

  // chaotic fast scroll for ~6.5 seconds
  await chaoticStreamLogs(6500, bootLineGenerator);

  // Finalization & unlock
  addLine("");
  addLine("Finalizing boot sequence...");
  await wait(250);
  addLine("Mapping kernels into memory space...");
  addLine("Synchronizing skill modules across sessions...");
  addLine("Validating process table and active context...");
  await wait(350);
  addLine("System state stabilized.");
  addLine("");
  await wait(300);
  addLine("> System unlocked.");
  addLine("> Awaiting command...");
  addLine("");

  setTimeout(() => {
    bootOutput.classList.add("hidden");
    if (bootLogo) bootLogo.classList.add("hidden");
    mainUI.classList.remove("hidden");
  }, 400);
}


// ------------------------ PER-CLICK MINI LOADERS ------------------------

async function loadModuleForPanel(label, panel) {
  // hide UI, show log area
  mainUI.classList.add("hidden");
  bootOutput.classList.remove("hidden");
  bootOutput.innerHTML = "";

  const niceLabel = capitalize(label);
  const idSlug = label.replace(/\s+/g, "_").toLowerCase();

  addLine("> Processing command: " + niceLabel);
  addLine("");

  const kernels = (panelKernels && panelKernels[idSlug]) || panelKernels.default || [];

  let kIndex = 0;
  const panelLineGenerator = () => {
    if (!kernels.length) {
      return "> Executing panel: " + niceLabel;
    }
    const text = kernels[kIndex];
    kIndex = (kIndex + 1) % kernels.length;
    return "> " + text;
  };

  // chaotic fast scroll for ~1 second per button click
  await chaoticStreamLogs(1000, panelLineGenerator);

  // show correct panel
  document.querySelectorAll(".panel").forEach(p =>
    p.classList.add("hidden")
  );
  panel.classList.remove("hidden");

  // hide logs again and bring UI back
  setTimeout(() => {
    bootOutput.classList.add("hidden");
    mainUI.classList.remove("hidden");
  }, 200);
}

// ------------------------ EVENT WIRING ------------------------

// click-to-enter
enterBtn.addEventListener("click", () => {
  enterScreen.style.display = "none";
  runBootSequence();
});

// command buttons (summary, modules, processes, history, logs, contact)
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // highlight chosen button
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const targetId = btn.getAttribute("data-target");
    const panel = document.getElementById(targetId);
    if (!panel) return;

    const label = btn.textContent.trim().toLowerCase();
    loadModuleForPanel(label, panel);
  });
});

// LOG DETAIL TOGGLES
logLinks.forEach(link => {
  link.addEventListener("click", () => {
    const role = link.getAttribute("data-role");
    const targetId = "log-" + role;

    logPanels.forEach(p => p.classList.add("hidden"));

    const targetPanel = document.getElementById(targetId);
    if (targetPanel) {
      targetPanel.classList.remove("hidden");
    }
  });
});

<!-- rebuild -->
  
