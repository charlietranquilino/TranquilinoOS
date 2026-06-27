window.onload = function () {
  const enterBtn = document.getElementById("enter-btn");
  const enterScreen = document.getElementById("enter-screen");
  const mainUI = document.getElementById("main-ui");
  const bootOutput = document.getElementById("boot-output");

  enterBtn.onclick = function () {
    enterScreen.style.display = "none";
    bootOutput.classList.add("hidden");
    mainUI.classList.remove("hidden");
  };

  document.querySelectorAll(".command-btn").forEach(function (btn) {
    btn.onclick = function () {
      document.querySelectorAll(".panel").forEach(function (panel) {
        panel.classList.add("hidden");
      });

      document.querySelectorAll(".command-btn").forEach(function (b) {
        b.classList.remove("active");
      });

      btn.classList.add("active");

      const target = document.getElementById(btn.dataset.target);
      if (target) {
        target.classList.remove("hidden");
      }
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
      const output = document.getElementById("project-output");
      if (output) {
        output.innerText = projects[btn.dataset.project];
      }
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
      const output = document.getElementById("log-output");
      if (output) {
        output.innerText = logs[btn.dataset.role];
      }
    };
  });
};  });
};});}