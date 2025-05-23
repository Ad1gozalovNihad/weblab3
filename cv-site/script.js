

const profilePic = "images/helpdesk.png";

let contact = {
  phone: "+994 55 607 12 57",
  email: "adigozelovnihad113@gmail.com",
  address: "Baki şəhəri, Nizami rayonu, Keşlə qəsəbəsi, Pəhlivan Fərzəliyev 160"
};

let education = [
  {
    years: "2024 - 2028",
    school: "Azərbaycan Texniki Universiteti",
    specialty: "İnformasiya təhlükəsizliyi"
  },
  {
    years: "2024 - 2025",
    school: "IKT lab təlim və tədris mərkəzi",
    specialty: "İT Specialist"
  }
];

let skills = [
  "Əməliyyat Sistemləri və Proqram Təminatı",
  "Hardware və Troubleshooting",
  "Təhlükəsizlik və Məlumat Bərpası",
  "Şəbəkə və İnfrastruktur",
  "Printer və skanerlərin quraşdırılması",
  "Virtual maşınların qurulması",
  "Şəbəkə bilikləri (başlanğıc səviyyə)",
  "Hireboot"
];

let languages = [
  "Azərbaycan dili (ana dili)",
  "English (technical)",
  "Russian (technical)"
];

let profileText = `İT sahəsində təhsil alan, texnologiyalara maraqlı və öyrənməyə həvəsli bir tələbəyəm. Praktiki bacarıqlarımı inkişaf etdirmək və real layihələrdə iştirak etmək üçün fürsətlər axtarıram. Komanda ilə işləmə və problemləri həll etmə bacarığım güclüdür.`;

let workExperience = [
  {
    company: "Faiqoglu MMC",
    period: "İyun 2023 - İndiki zaman",
    details: [
      "İT specialist vəzifəsində kompüter sistemlərinin və şəbəkənin idarə edilməsi",
      "Texniki dəstək və problemlərin həlli",
      "Avadanlıqların quraşdırılması və texniki xidməti"
    ]
  },
  {
    company: "Ulduz şokalad fabriki",
    period: "Yanvar 2022 - May 2023",
    details: [
      "System Administrator kimi şirkətin IT infrastrukturunun idarə edilməsi",
      "Server və şəbəkə təhlükəsizliyinin təmin edilməsi",
      "Proqram təminatı və əməliyyat sistemlərinin yenilənməsi"
    ]
  },
  {
    company: "Bravo Market",
    period: "May 2021 - Dekabr 2021",
    details: [
      "Sistem infrastrukturunun qurulması və inkişafı",
      "POS terminallarının və ödəmə sistemlərinin quraşdırılması",
      "Şəbəkə avadanlıqlarının konfiqurasiyası və texniki xidməti"
    ]
  }
];

let references = [
  {
    name: "Cebiyev Kamil",
    position: "IT Manager, Faiqoglu MMC",
    address: "20-ci sahe, 223",
    phone: "+994 50 211 12 99",
    email: "faiqoglu.mmc@gmail.com"
  }
];



function renderSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.innerHTML = `
    <img class="profile-pic" src="${profilePic}" alt="Profile Picture" />

    <div class="sidebar-section">
      <button class="accordion" type="button">Contact</button>
      <div class="panel">
        <p>${contact.phone}</p>
        <p>${contact.email}</p>
        <p>${contact.address}</p>
      </div>
    </div>

    <div class="sidebar-section">
      <button class="accordion" type="button">Education</button>
      <div class="panel">
        <div id="education-section">
          ${education.map((e, idx) => `
            <p>
              ${e.years}<br />
              ${e.school}<br />
              ${e.specialty}
              <button class="remove-btn" onclick="removeEducation(${idx})">Sil</button>
            </p>
          `).join("")}
        </div>
        <button id="add-education-btn" class="add-btn">Yeni Təhsil Əlavə Et</button>
        <div id="education-form" class="hidden">
          <input type="text" id="edu-years" placeholder="İllər (məs: 2024-2028)" />
          <input type="text" id="edu-school" placeholder="Təhsil müəssisəsi" />
          <input type="text" id="edu-specialty" placeholder="İxtisas" />
          <button id="save-education-btn" class="save-btn">Əlavə et</button>
          <button id="cancel-education-btn" class="cancel-btn">Ləğv et</button>
        </div>
      </div>
    </div>

    <div class="sidebar-section">
      <button class="accordion" type="button">Skills</button>
      <div class="panel">
        <ul id="skills-section">
          ${skills.map((skill, idx) => `<li>${skill} <button class="remove-btn" onclick="removeSkill(${idx})">Sil</button></li>`).join("")}
        </ul>
        <button id="add-skill-btn" class="add-btn">Yeni Bacarıq Əlavə Et</button>
        <div id="skill-form" class="hidden">
          <input type="text" id="skill-input" placeholder="Bacarıq" />
          <button id="save-skill-btn" class="save-btn">Əlavə et</button>
          <button id="cancel-skill-btn" class="cancel-btn">Ləğv et</button>
        </div>
      </div>
    </div>

    <div class="sidebar-section">
      <button class="accordion" type="button">Languages</button>
      <div class="panel">
        <ul id="languages-section">
          ${languages.map((lang, idx) => `<li>${lang} <button class="remove-btn" onclick="removeLanguage(${idx})">Sil</button></li>`).join("")}
        </ul>
        <button id="add-language-btn" class="add-btn">Yeni Dil Əlavə Et</button>
        <div id="language-form" class="hidden">
          <input type="text" id="language-input" placeholder="Dil və səviyyə" />
          <button id="save-language-btn" class="save-btn">Əlavə et</button>
          <button id="cancel-language-btn" class="cancel-btn">Ləğv et</button>
        </div>
      </div>
    </div>
  `;
}

function renderMain() {
  const main = document.getElementById("main");
  main.innerHTML = `
    <h1><b>Nihad Adigozelov</b></h1>
    <h2><b>IT Specialist</b></h2>

    <div class="main-section">
      <button class="accordion" type="button">Profile</button>
      <div class="panel">
        <div class="section-title">Profile</div>
        <p id="profile-text">${profileText}</p>
        <button id="edit-profile-btn" class="add-btn">Profili Redaktə Et</button>
        <div id="profile-form" class="hidden">
          <textarea id="profile-input"></textarea>
          <button id="save-profile-btn" class="save-btn">Yadda saxla</button>
          <button id="cancel-profile-btn" class="cancel-btn">Ləğv et</button>
        </div>
      </div>
    </div>

    <div class="main-section">
      <button class="accordion" type="button">Work Experience</button>
      <div class="panel">
        <div class="section-title">Work Experience</div>
        <div id="work-section">
          ${workExperience.map((job, idx) => `
            <div class="job">
              <h4>${job.company}</h4>
              <div class="job-period">${job.period}</div>
              <ul>
                ${job.details.map(detail => `<li>${detail}</li>`).join("")}
              </ul>
              <button class="remove-btn" onclick="removeWork(${idx})">Sil</button>
            </div>
          `).join("")}
        </div>
        <button id="add-work-btn" class="add-btn">Yeni İş Əlavə Et</button>
        <div id="work-form" class="hidden">
          <input type="text" id="work-company" placeholder="Şirkət" />
          <input type="text" id="work-period" placeholder="Dövriyyə (məs: 2022 - 2023)" />
          <textarea id="work-description" placeholder="Vəzifə və iş təsviri"></textarea>
          <button id="save-work-btn" class="save-btn">Əlavə et</button>
          <button id="cancel-work-btn" class="cancel-btn">Ləğv et</button>
        </div>
      </div>
    </div>

    <div class="main-section">
      <button class="accordion" type="button">References</button>
      <div class="panel">
        <div class="section-title">References</div>
        <div class="reference" id="reference-section">
          ${references.map((ref, idx) => `
            <p>
              <strong>${ref.name}</strong><br />
              ${ref.position}<br />
              ${ref.address}<br />
              Tel: ${ref.phone}<br />
              ${ref.email}
              <button class="remove-btn" onclick="removeReference(${idx})">Sil</button>
            </p>
          `).join("")}
        </div>
        <button id="add-reference-btn" class="add-btn">Yeni Referans Əlavə Et</button>
        <div id="reference-form" class="hidden">
          <input type="text" id="ref-name" placeholder="Ad və soyad" />
          <input type="text" id="ref-position" placeholder="Vəzifə və şirkət" />
          <input type="text" id="ref-address" placeholder="Ünvan" />
          <input type="text" id="ref-phone" placeholder="Telefon" />
          <input type="text" id="ref-email" placeholder="E-mail" />
          <button id="save-reference-btn" class="save-btn">Əlavə et</button>
          <button id="cancel-reference-btn" class="cancel-btn">Ləğv et</button>
        </div>
      </div>
    </div>
  `;
}



function renderAll() {
  renderSidebar();
  renderMain();
  setAccordionHandlers();
  setFormHandlers();
}
window.onload = renderAll;


function setAccordionHandlers() {
  document.querySelectorAll('.accordion').forEach(function(btn) {
    btn.setAttribute('aria-expanded', 'false');
    btn.onclick = function() {
      const parent = btn.closest('.sidebar') || btn.closest('.main');
      parent.querySelectorAll('.panel').forEach(function(panel) {
        if (panel !== btn.nextElementSibling) {
          panel.style.maxHeight = null;
          if(panel.previousElementSibling && panel.previousElementSibling.classList.contains('accordion')) {
            panel.previousElementSibling.setAttribute('aria-expanded', 'false');
          }
        }
      });
      const panel = btn.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        btn.setAttribute('aria-expanded', 'false');
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        btn.setAttribute('aria-expanded', 'true');
      }
    };
  });
}



// Education
function removeEducation(idx) {
  education.splice(idx, 1);
  renderAll();
}
function setFormHandlers() {
  // Education
  let addEdu = document.getElementById('add-education-btn');
  if (addEdu) addEdu.onclick = function() {
    document.getElementById('education-form').classList.remove('hidden');
    document.getElementById('edu-years').focus();
  };
  let cancelEdu = document.getElementById('cancel-education-btn');
  if (cancelEdu) cancelEdu.onclick = function() {
    document.getElementById('education-form').classList.add('hidden');
    document.getElementById('edu-years').value = '';
    document.getElementById('edu-school').value = '';
    document.getElementById('edu-specialty').value = '';
  };
  let saveEdu = document.getElementById('save-education-btn');
  if (saveEdu) saveEdu.onclick = function() {
    const years = document.getElementById('edu-years').value.trim();
    const school = document.getElementById('edu-school').value.trim();
    const specialty = document.getElementById('edu-specialty').value.trim();
    if (years && school && specialty) {
      education.push({years, school, specialty});
      renderAll();
    }
  };

  // Skills
  let addSkill = document.getElementById('add-skill-btn');
  if (addSkill) addSkill.onclick = function() {
    document.getElementById('skill-form').classList.remove('hidden');
    document.getElementById('skill-input').focus();
  };
  let cancelSkill = document.getElementById('cancel-skill-btn');
  if (cancelSkill) cancelSkill.onclick = function() {
    document.getElementById('skill-form').classList.add('hidden');
    document.getElementById('skill-input').value = '';
  };
  let saveSkill = document.getElementById('save-skill-btn');
  if (saveSkill) saveSkill.onclick = function() {
    const skill = document.getElementById('skill-input').value.trim();
    if (skill) {
      skills.push(skill);
      renderAll();
    }
  };
}

function removeSkill(idx) {
  skills.splice(idx, 1);
  renderAll();
}

// Languages
function removeLanguage(idx) {
  languages.splice(idx, 1);
  renderAll();
}
function setLanguageHandlers() {
  let addLang = document.getElementById('add-language-btn');
  if (addLang) addLang.onclick = function() {
    document.getElementById('language-form').classList.remove('hidden');
    document.getElementById('language-input').focus();
  };
  let cancelLang = document.getElementById('cancel-language-btn');
  if (cancelLang) cancelLang.onclick = function() {
    document.getElementById('language-form').classList.add('hidden');
    document.getElementById('language-input').value = '';
  };
  let saveLang = document.getElementById('save-language-btn');
  if (saveLang) saveLang.onclick = function() {
    const lang = document.getElementById('language-input').value.trim();
    if (lang) {
      languages.push(lang);
      renderAll();
    }
  };
}
function setProfileEditHandlers() {
  let editBtn = document.getElementById('edit-profile-btn');
  if (editBtn) editBtn.onclick = function() {
    document.getElementById('profile-form').classList.remove('hidden');
    document.getElementById('profile-input').value = profileText;
    document.getElementById('profile-input').focus();
  };
  let cancelBtn = document.getElementById('cancel-profile-btn');
  if (cancelBtn) cancelBtn.onclick = function() {
    document.getElementById('profile-form').classList.add('hidden');
  };
  let saveBtn = document.getElementById('save-profile-btn');
  if (saveBtn) saveBtn.onclick = function() {
    const newText = document.getElementById('profile-input').value.trim();
    if (newText) {
      profileText = newText;
      renderAll();
    }
  };
}

// Work
function removeWork(idx) {
  workExperience.splice(idx, 1);
  renderAll();
}
function setWorkHandlers() {
  let addWork = document.getElementById('add-work-btn');
  if (addWork) addWork.onclick = function() {
    document.getElementById('work-form').classList.remove('hidden');
    document.getElementById('work-company').focus();
  };
  let cancelWork = document.getElementById('cancel-work-btn');
  if (cancelWork) cancelWork.onclick = function() {
    document.getElementById('work-form').classList.add('hidden');
    document.getElementById('work-company').value = '';
    document.getElementById('work-period').value = '';
    document.getElementById('work-description').value = '';
  };
  let saveWork = document.getElementById('save-work-btn');
  if (saveWork) saveWork.onclick = function() {
    const company = document.getElementById('work-company').value.trim();
    const period = document.getElementById('work-period').value.trim();
    const desc = document.getElementById('work-description').value.trim();
    if (company && period && desc) {
      workExperience.push({company, period, details:[desc]});
      renderAll();
    }
  };
}

// Reference
function removeReference(idx) {
  references.splice(idx, 1);
  renderAll();
}
function setReferenceHandlers() {
  let addRef = document.getElementById('add-reference-btn');
  if (addRef) addRef.onclick = function() {
    document.getElementById('reference-form').classList.remove('hidden');
    document.getElementById('ref-name').focus();
  };
  let cancelRef = document.getElementById('cancel-reference-btn');
  if (cancelRef) cancelRef.onclick = function() {
    document.getElementById('reference-form').classList.add('hidden');
    document.getElementById('ref-name').value = '';
    document.getElementById('ref-position').value = '';
    document.getElementById('ref-address').value = '';
    document.getElementById('ref-phone').value = '';
    document.getElementById('ref-email').value = '';
  };
  let saveRef = document.getElementById('save-reference-btn');
  if (saveRef) saveRef.onclick = function() {
    const name = document.getElementById('ref-name').value.trim();
    const position = document.getElementById('ref-position').value.trim();
    const address = document.getElementById('ref-address').value.trim();
    const phone = document.getElementById('ref-phone').value.trim();
    const email = document.getElementById('ref-email').value.trim();
    if (name && position && address && phone && email) {
      references.push({name, position, address, phone, email});
      renderAll();
    }
  };
}


function setFormHandlers() {
  setFormHandlersEduSkills();
  setLanguageHandlers();
  setProfileEditHandlers();
  setWorkHandlers();
  setReferenceHandlers();
}
function setFormHandlersEduSkills() {
  // Education
  let addEdu = document.getElementById('add-education-btn');
  if (addEdu) addEdu.onclick = function() {
    document.getElementById('education-form').classList.remove('hidden');
    document.getElementById('edu-years').focus();
  };
  let cancelEdu = document.getElementById('cancel-education-btn');
  if (cancelEdu) cancelEdu.onclick = function() {
    document.getElementById('education-form').classList.add('hidden');
    document.getElementById('edu-years').value = '';
    document.getElementById('edu-school').value = '';
    document.getElementById('edu-specialty').value = '';
  };
  let saveEdu = document.getElementById('save-education-btn');
  if (saveEdu) saveEdu.onclick = function() {
    const years = document.getElementById('edu-years').value.trim();
    const school = document.getElementById('edu-school').value.trim();
    const specialty = document.getElementById('edu-specialty').value.trim();
    if (years && school && specialty) {
      education.push({years, school, specialty});
      renderAll();
    }
  };

  // Skills
  let addSkill = document.getElementById('add-skill-btn');
  if (addSkill) addSkill.onclick = function() {
    document.getElementById('skill-form').classList.remove('hidden');
    document.getElementById('skill-input').focus();
  };
  let cancelSkill = document.getElementById('cancel-skill-btn');
  if (cancelSkill) cancelSkill.onclick = function() {
    document.getElementById('skill-form').classList.add('hidden');
    document.getElementById('skill-input').value = '';
  };
  let saveSkill = document.getElementById('save-skill-btn');
  if (saveSkill) saveSkill.onclick = function() {
    const skill = document.getElementById('skill-input').value.trim();
    if (skill) {
      skills.push(skill);
      renderAll();
    }
  };
}