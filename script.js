// TranquilinoOS — Charlie Tranquilino Edition
// © 2025 Charlie Tranquilino

// ------------------------ BOOT SETUP ------------------------

// Main boot steps (full OS boot)
const bootSteps = [
  { label: "Injecting kernel: customer_facing_experience.kext", time: 260 },
  { label: "Injecting kernel: endpoint_support_engine.kext", time: 260 },
  { label: "Injecting kernel: system_administration_core.kext", time: 260 },

  { label: "Uploading module: desktop_engine.champion_home_builders", time: 230 },
  { label: "Uploading module: tech_ops_lead.mari_go", time: 230 },
  { label: "Uploading module: it_lifecycle.corewell_health", time: 230 },
  { label: "Uploading module: it_support_training.per_scholas", time: 230 },
  { label: "Uploading module: data_analytics_training.npower", time: 230 },

  { label: "Loading driver: intune_device_provisioning.sys", time: 220 },
  { label: "Loading driver: azure_ad_identity.sys", time: 220 },
  { label: "Loading driver: windows_autopilot_boot.sys", time: 220 },

  { label: "Starting service: freshservice_daemon", time: 220 },
  { label: "Starting service: servicenow_assetd", time: 220 },
  { label: "Starting service: ticket_routing.engine", time: 220 },

  { label: "Mounting volume: imaging_pipeline.pxe", time: 220 },
  { label: "Mounting volume: asset_tracking.index", time: 220 },
  { label: "Mounting volume: inventory_management.db", time: 220 },

  { label: "Enabling security surface: mfa_guardian", time: 220 },
  { label: "Enabling security surface: access_controls.policy", time: 220 },

  { label: "Injecting module: user_training_and_support", time: 210 },
  { label: "Injecting module: cross_team_collaboration", time: 210 },
  { label: "Injecting module: documentation_and_sops", time: 210 },

  { label: "Patching subsystem: voip_8x8_callstack.so", time: 210 },
  { label: "Patching subsystem: poe_device_controller.so", time: 210 },
  { label: "Patching subsystem: basic_networking_dns_dhcp.so", time: 210 },

  { label: "Loading daemon: asset_handoffd", time: 200 },
  { label: "Loading daemon: clinical_support_bridge", time: 200 },

  { label: "Optimizing cache: ticket_history.idx", time: 200 },
  { label: "Optimizing cache: endpoint_profiles.cache", time: 200 }
];

// Mini steps that run every time you click a command
const moduleSteps = [
  { verb: "loading module", suffix: ".core", time: 180 },
  { verb: "mounting view", suffix: ".view", time: 170 },
  { verb: "starting service", suffix: ".service", time: 160 }
];

const bootOutput  = document.getElementById("boot-output");
const mainUI      = document.getElementById("main-ui");
const enterScreen = document.getElementById("enter-screen");
const enterBtn    = document.getElementById("enter-btn");

// ------------------------ HELPERS ------------------------

function addLine(text, parent = bootOutput) {
  const line = document.createElement("div");
  line.className = "boot-line";
  line.textContent = text;
  parent.appendChild(line);

  // always behave like a real terminal: stick to bottom
  parent.scrollTop = parent.scrollHeight;

  return line;
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function animateBar(element, duration) {
  return new Promise(resolve => {
    let progress = 0;
    const ticks = 8;                       // fewer ticks = snappier
    const interval = duration / ticks;

    const timer = setInterval(() => {
      progress += Math.random() * (100 / ticks) * 1.4;
      if (progress >= 100) progress = 100;

      const blocks = Math.floor(progress / 5); // 20 blocks
      const bar =
        "[" +
        "#".repeat(blocks) +
        "-".repeat(20 - blocks) +
        `] ${Math.floor(progress)}%`;

      element.textContent = bar;

      if (progress >= 100) {
        clearInterval(timer);
        resolve();
      }
    }, interval);
  });
}

// ------------------------ MAIN BOOT SEQUENCE ------------------------

async function runBootSequence() {
  bootOutput.classList.remove("hidden");
  bootOutput.innerHTML = "";

  addLine("> Booting TranquilinoOS — Charlie Tranquilino Edition v1.0...");
  addLine("> Entering verbose mode...");
  addLine("");
  await wait(160);

  addLine("> Scanning hardware profile...");
  addLine("[OK] Human multi-core processor detected");
  addLine("[OK] High-capacity pattern recognition online");
  addLine("[OK] Network adapters configured for remote support");
  addLine("");
  await wait(160);

  // process boot steps in batches of 1–3, clearing between so it never feels crowded
  let i = 0;
  while (i < bootSteps.length) {
    const remaining = bootSteps.length - i;
    let batchSize = Math.floor(Math.random() * 3) + 1; // 1–3
    if (batchSize > remaining) batchSize = remaining;

    bootOutput.innerHTML = "";
    addLine("> Continuing verbose boot...");
    addLine("");

    for (let b = 0; b < batchSize; b++) {
      const step = bootSteps[i];

      addLine("> " + step.label);
      const barLine = addLine("[--------------------] 0%");

      // sometimes jump straight to 100% for chaos
      if (Math.random() < 0.3) {
        barLine.textContent = "[####################] 100%";
        await wait(60);
      } else {
        await animateBar(barLine, step.time);
      }

      addLine("[OK]");
      addLine("");
      await wait(40);
      i++;
    }

    await wait(100);
  }

  // finalization
  bootOutput.innerHTML = "";
  addLine("> Finalizing boot sequence...");
  await wait(180);
  addLine("[OK] Resume kernels successfully mapped");
  addLine("[OK] Skill modules loaded into memory");
  addLine("[OK] Processes ready for execution");
  await wait(200);

  // show unlocked, then hide console and reveal UI
  await wait(180);
  bootOutput.innerHTML = "";
  addLine("> System unlocked.");
  addLine("> Awaiting command...");
  addLine("");

  setTimeout(() => {
    bootOutput.classList.add("hidden");   // hide kernel console completely
    mainUI.classList.remove("hidden");    // show the command UI
  }, 400);
}

// ------------------------ PER-CLICK MINI LOADERS ------------------------

async function loadModuleForPanel(label, panel) {
  // show console for this load
  bootOutput.classList.remove("hidden");
  bootOutput.innerHTML = "";

  // mini 3-step loader
  for (const step of moduleSteps) {
    addLine(`> ${step.verb}: ${label}${step.suffix}`);
    const barLine = addLine("[--------------------] 0%");

    if (Math.random() < 0.3) {
      barLine.textContent = "[####################] 100%";
      await wait(60);
    } else {
      await animateBar(barLine, step.time);
    }

    addLine("[OK]");
    addLine("");
    await wait(40);
  }

  // show requested panel
  document.querySelectorAll(".panel").forEach(p =>
    p.classList.add("hidden")
  );
  panel.classList.remove("hidden");

  // hide console again after a beat
  setTimeout(() => {
    bootOutput.classList.add("hidden");
  }, 200);
}

// ------------------------ EVENT WIRING ------------------------

// click-to-enter
enterBtn.addEventListener("click", () => {
  enterScreen.style.display = "none";
  runBootSequence();
});

// command buttons (summary, modules, processes, history, logs, contact)
const buttons = document.querySelectorAll(".command-btn");
// ------------------------ LOG DETAIL TOGGLES ------------------------

const logLinks   = document.querySelectorAll(".log-link");
const logPanels  = document.querySelectorAll(".log-details");

logLinks.forEach(link => {
  link.addEventListener("click", () => {
    const role = link.getAttribute("data-role");
    const targetId = "log-" + role;

    // hide all detail blocks
    logPanels.forEach(p => p.classList.add("hidden"));

    // show only the matching one
    const targetPanel = document.getElementById(targetId);
    if (targetPanel) {
      targetPanel.classList.remove("hidden");
    }
  });
});

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const panel = document.getElementById(targetId);
    if (!panel) return;

    const label = btn.textContent.trim().toLowerCase();
    loadModuleForPanel(label, panel);
  });
});
