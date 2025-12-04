// TranquilinoOS — Charlie Tranquilino Edition
// Text-only kernels, no loading bars

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

// Per-panel kernels for button clicks (NO [COMPLETE])
const panelKernels = {
  summary: [
    "Loading profile_summary.core",
    "Aggregating experience.timeline",
    "Indexing customer-facing_background.db",
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
  parent.scrollTop = parent.scrollHeight;
  return line;
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const MAX_LOG_LINES = 40;  // how many rows can be on screen at once

async function streamLogs(durationMs, lineGenerator, intervalMs = 60) {
  const start = Date.now();

  while (Date.now() - start < durationMs) {
    const text = lineGenerator();
    addLine(text);  // add a new line at the bottom

    // if we have more than MAX_LOG_LINES, remove from the top
    const children = bootOutput.children;
    if (children.length > MAX_LOG_LINES) {
      bootOutput.removeChild(children[0]);
    }

    await wait(intervalMs);
  }
}


function spamLogs(lines = 60) {
  bootOutput.innerHTML = "";

  for (let i = 0; i < lines; i++) {
    const line = document.createElement("div");
    line.className = "boot-line";

    const step =
      bootSteps[Math.floor(Math.random() * bootSteps.length)].label;

    line.textContent = "> " + step;
    bootOutput.appendChild(line);
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

  // small intro text
  addLine("> Booting TranquilinoOS — Charlie Tranquilino Edition v1.0...");
  addLine("> Entering Verbose Mode...");
  addLine("");
  await wait(300);

  addLine("> Initializing hardware profile...");
  addLine("[VERBOSE] Detecting CPU, memory, and adapters...");
  addLine("[VERBOSE] Validating input/output channels...");
  addLine("");
  await wait(400);

  // generator for boot log lines
  const bootLineGenerator = () => {
    const step = bootSteps[Math.floor(Math.random() * bootSteps.length)];
    return "[VERBOSE] " + step.label;
  };

  // stream logs for ~6 seconds
  await streamLogs(6000, bootLineGenerator, 60);

  // finalization + unlock
  addLine("");
  addLine("[STATUS] Finalizing boot sequence...");
  await wait(250);
  addLine("[VERBOSE] Mapping resume kernels into memory space...");
  addLine("[VERBOSE] Synchronizing skill modules across sessions...");
  addLine("[VERBOSE] Validating process table and active context...");
  await wait(350);
  addLine("[OK] System state stabilized");
  addLine("");
  await wait(300);
  addLine("> System Unlocked.");
  addLine("> Awaiting Command...");
  addLine("");

  setTimeout(() => {
    bootOutput.classList.add("hidden");
    if (bootLogo) bootLogo.classList.add("hidden");
    mainUI.classList.remove("hidden");
  }, 400);



  // Extra verbose templates used for all pages
  const verboseMessages = [
    " Allocating memory blocks...",
    " Resolving kernel dependencies...",
    " Linking runtime symbols...",
    " Verifying execution state...",
    " Registering kernel hooks...",
    " Syncing configuration from cache...",
    " Flushing stale handles...",
    " Updating internal routing tables...",
    " Checking security posture...",
    " Confirming I/O channels...",
    " Attaching process scheduler...",
    " Normalizing environment variables...",
    " Preparing diagnostics stream..."
  ];

  const totalPages = 16;          // ~16 screens of logs
  const delayPerPage = 220;       // ms between pages

  for (let page = 0; page < totalPages; page++) {
    // wipe the previous "screen"
    bootOutput.innerHTML = "";

    // header for this page (optional)
    addLine("> Verbose log page " + (page + 1) + " of " + totalPages);
    addLine("");

    // number of lines this page
    const linesThisPage = 12 + Math.floor(Math.random() * 10); // 12–21 lines

    for (let i = 0; i < linesThisPage; i++) {
      let lineText;

      if (Math.random() < 0.45) {
        // ~45% of the time, pull from your real boot steps
        const step = bootSteps[Math.floor(Math.random() * bootSteps.length)];
        lineText = " " + step.label;
      } else {
        // otherwise use a generic verbose line
        lineText = verboseMessages[Math.floor(Math.random() * verboseMessages.length)];
      }

      addLine(lineText);
    }

    // brief pause before wiping and drawing the next "page"
    await wait(delayPerPage);
  }

  // Finalization block
  bootOutput.innerHTML = "";
  addLine(" Finalizing boot sequence...");
  await wait(250);
  addLine(" Mapping resume kernels into memory space...");
  addLine(" Synchronizing skill modules across sessions...");
  addLine(" Validating process table and active context...");
  await wait(350);
  addLine(" System state stabilized");
  addLine("");

  await wait(300);
  addLine("> System Unlocked.");
  addLine("> Awaiting Command...");
  addLine("");

  setTimeout(() => {
    bootOutput.classList.add("hidden");
    if (bootLogo) bootLogo.classList.add("hidden");
    mainUI.classList.remove("hidden");
  }, 400);
}


// ------------------------ PER-CLICK MINI LOADERS ------------------------

async function loadModuleForPanel(label, panel) {
  // hide UI, show kernels only
  mainUI.classList.add("hidden");
  bootOutput.classList.remove("hidden");
  bootOutput.innerHTML = "";

  const niceLabel = capitalize(label);
  const idSlug = label.replace(/\s+/g, "_").toLowerCase();

  addLine("> Processing Command: " + niceLabel);
  addLine("");

  // pick kernels based on which button was pressed
  const kernels = panelKernels[idSlug] || panelKernels.default;

  // run through those kernels quickly WITHOUT [COMPLETE]
  for (const text of kernels) {
    addLine("> " + text);
    await wait(70);   // jailbreak-fast
  }

  // show correct panel
  document.querySelectorAll(".panel").forEach(p =>
    p.classList.add("hidden")
  );
  panel.classList.remove("hidden");

  // bring UI back, hide kernels again
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
