/* =============================================================================
   PROJECT DATA
   =============================================================================
   HOW TO ADD A NEW PROJECT (do this, nothing else needs to change):

   1. Copy the TEMPLATE object below (between the ===== TEMPLATE ===== markers).
   2. Paste it as a new entry in the `projects` array — anywhere, order here
      is the order the tabs appear in.
   3. Fill in the fields. Leave `images` as an empty array if you don't have
      photos yet — a placeholder card will show automatically.
   4. Drop your images in  assets/images/<your-project-id>/  and list their
      filenames in the `images` array, e.g. "assets/images/my-project/01.jpg".
   5. Save the file and refresh the page — the new tab appears automatically,
      no other code changes needed.
   ============================================================================= */

const projects = [
  {
    id: "manatee-domgas",
    tabLabel: "Shell Manatee / NGC DOMGAS",
    org: "Plant Solutions Ltd — Mentor: Ansaar Hosein",
    title: "Shell Manatee Project — NGC DOMGAS Facility Commissioning",
    role: "Automation Engineering Associate",
    status: "Commissioned — first HC 900 deployment", 
    tags: ["Honeywell HC 900 PLC · SIL 2", "Process Design Suite", "Modbus/TCP", "AutoCAD", "Station Designer HMI"],
    points: [
      "Pioneered, engineered, and tested the automation package for the NGC DOMGAS facility commissioning on the Shell Manatee project, using the Honeywell HC 900 PLC (SIL 2) and Honeywell Process Design Software — the first time an HC 900 was introduced at Plant Solutions Ltd.",
      "Built the control logic for the Pipeline Control System (PCS), Fire & Gas System (FGS), and Pipeline Safety System (PSS).",
      "Produced Panel Layout Drawings, Communication Architecture Drawings, and I/O Wiring Diagrams in AutoCAD.",
      "Programmed the Honeywell HC 900 SIL 2 for the PCS,FGS,and PSS and communicated with the Honeywell CR 900 HMI over Modbus/TCP.",
    ],
    images: [
       "assets/images/manatee-domgas/honeywell plcs.jpg",
      // "assets/images/manatee-domgas/panel-layout.jpg",
      // "assets/images/manatee-domgas/hmi-screen.jpg",
    ],
  },

  
   {
    id: "A.P.U.A Consolidated SCADA Project",
    tabLabel: "A.P.U.A Consolidated SCADA Project",
    org: "Control Technologies Ltd",
    title: "A.P.U.A Consolidated SCADA System",
    role: "Technical Development Engineer",
    status: "Commissioned",
    tags: ["Ignition SCADA", "Allen Bradley Micro 800", "Modbus/TCP", "MQTT", "Teltonika RUT 956"],
    points: [
      "Developed PLC programming logic on Connected Components Workbench to allow for control of 69 sites containg instruments integrated into Ignition for Acuator Control, Level Calculation, Flow Metering and bidriectional MQTT Transmission",
      "Integrated with Automation Direct Click-Plus PLCs, Maple Systems HMIs and Grunfas Pumps",
      "Produced I/O indices, interconnect drawings and SCADA Server Rack Layouts for documentation.",
      "Established bidirectional communication between MIcro 800 PLCs and Ignition using Teltonika RUT 956 routers with MQTT functionality connecting to Ignition's MQTT modules including Engine and Distributor",
      "Fabricated SCADA Screens using P&ID drawings to emmulate site specific piping and instrumentation with added control and monitoring",
    ],
    images: [
       "assets/images/manatee-domgas/honeywell plcs.jpg",
      // "assets/images/manatee-domgas/panel-layout.jpg",
      // "assets/images/manatee-domgas/hmi-screen.jpg",
    ],
  },


   
  {
    id: "campari-ansa",
    tabLabel: "Campari / ANSA Chemicals",
    org: "Plant Solutions Ltd",
    title: "Campari Jamaica & ANSA Chemicals — Tank Level Volume System",
    role: "Automation Engineering Associate",
    status: "Commissioned",
    tags: ["Honeywell Control Edge Builder", "Control Edge RTU 2020", "SLN 700 Radar Level Transmitter", "Function Block Diagrams"],
    points: [
      "Engineered and tested an industrial solution for ANSA Chemicals and Campari Jamaica on the Honeywell Control Edge Builder software and Control Edge RTU 2020, built from arrays and function block diagrams.",
      "Fed a level reading from a Honeywell SLN 700 non-contact radar level transmitter into a user-defined function block.",
      "Cross-referenced the reading against a strapping table loaded into an array to resolve intermediate and definite tank volume in real time.",
    ],
    images: [
      // "assets/images/campari/rtu-setup.jpg",
    ],
  },

  /* ===================== TEMPLATE — copy from here down ====================
  {
    id: "your-project-id",                 // unique, lowercase, no spaces
    tabLabel: "Short name for the tab",    // ~2-4 words
    org: "Company / course / team",
    title: "Full project title",
    role: "Your role",
    status: "e.g. Commissioned / In progress / Prototype",
    tags: ["Key tool 1", "Key tool 2", "Protocol / standard"],
    points: [
      "First key contribution, written as one clear sentence.",
      "Second key contribution.",
      "Third key contribution — add as many as you need.",
    ],
    images: [
      "assets/images/your-project-id/01.jpg",
      "assets/images/your-project-id/02.jpg",
    ],
  },
  ======================= TEMPLATE — copy to here ========================= */
];

/* =============================================================================
   RENDER: project tabs + panel
   ============================================================================= */
const tabsEl = document.getElementById("projectTabs");
const panelEl = document.getElementById("projectPanel");

function renderTabs(activeId) {
  tabsEl.innerHTML = "";
  projects.forEach((p) => {
    const btn = document.createElement("button");
    btn.className = "project-tab" + (p.id === activeId ? " active" : "");
    btn.textContent = p.tabLabel;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", p.id === activeId ? "true" : "false");
    btn.addEventListener("click", () => setActiveProject(p.id));
    tabsEl.appendChild(btn);
  });

  // Ghost tab hints that more projects can be added later — purely visual, not clickable
  const ghost = document.createElement("span");
  ghost.className = "project-tab ghost";
  ghost.textContent = "+ more soon";
  tabsEl.appendChild(ghost);
}

function renderMedia(project) {
  if (!project.images || project.images.length === 0) {
    return `
      <div class="project-media">
        <div class="project-thumb">Add images to<br>assets/images/${project.id}/<br>and list them in script.js</div>
      </div>`;
  }
  if (project.images.length === 1) {
    return `
      <div class="project-media">
        <div class="project-thumb"><img src="${project.images[0]}" alt="${project.title}" loading="lazy"></div>
      </div>`;
  }
  const thumbs = project.images
    .map((src) => `<div class="project-thumb"><img src="${src}" alt="${project.title}" loading="lazy"></div>`)
    .join("");
  return `<div class="project-media"><div class="thumb-grid">${thumbs}</div></div>`;
}

function renderPanel(project) {
  panelEl.innerHTML = `
    <article class="project-card">
      ${renderMedia(project)}
      <div class="project-body">
        <p class="project-status">${project.status}</p>
        <p class="project-org mono">${project.org}</p>
        <h3>${project.title}</h3>
        <p class="project-role">${project.role}</p>
        <ul class="project-list">
          ${project.points.map((pt) => `<li>${pt}</li>`).join("")}
        </ul>
        <div class="project-tags mono">
          ${project.tags.map((t) => `<span>${t}</span>`).join("")}
        </div>
      </div>
    </article>
  `;
}

function setActiveProject(id) {
  const project = projects.find((p) => p.id === id);
  if (!project) return;
  renderTabs(id);
  renderPanel(project);
}

if (projects.length > 0) {
  setActiveProject(projects[0].id);
}

/* =============================================================================
   NAV: shrink/blur on scroll + mobile toggle
   ============================================================================= */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 12);
});

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

/* =============================================================================
   SCROLL REVEAL
   ============================================================================= */
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in-view"));
}

/* =============================================================================
   FOOTER YEAR
   ============================================================================= */
document.getElementById("year").textContent = new Date().getFullYear();
