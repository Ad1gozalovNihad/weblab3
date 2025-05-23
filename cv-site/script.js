const cvData = {
  name: "Nihad Adigozelov",
  title: "IT Specialist",
  profilePic: "images/helpdesk.png",
  contact: [
    "+994 55 607 12 57",
    "adigozelovnihad113@gmail.com",
    "Baki şəhəri, Nizami rayonu, Keşlə qəsəbəsi, Pəhlivan Fərzəliyev 160"
  ],
  education: [
    {
      years: "2024 - 2028",
      school: "Azərbaycan Texniki Universiteti",
      major: "İnformasiya təhlükəsizliyi"
    },
    {
      years: "2024 - 2025",
      school: "IKT lab təlim və tədris mərkəzi",
      major: "İT Specialist"
    }
  ],
  skills: [
    "Əməliyyat Sistemləri və Proqram Təminatı",
    "Hardware və Troubleshooting",
    "Təhlükəsizlik və Məlumat Bərpası",
    "Şəbəkə və İnfrastruktur",
    "Printer və skanerlərin quraşdırılması",
    "Virtual maşınların qurulması",
    "Şəbəkə bilikləri (başlanğıc səviyyə)",
    "Hireboot"
  ],
  languages: [
    "Azərbaycan dili (ana dili)",
    "English (technical)",
    "Russian (technical)"
  ],
  profile: [
    "İT sahəsində təhsil alan, texnologiyalara maraqlı və öyrənməyə həvəsli bir tələbəyəm. Praktiki bacarıqlarımı inkişaf etdirmək və real layihələrdə iştirak etmək üçün daim öz üzərimdə çalışıram."
  ],
  jobs: [
    {
      company: "Faiqoglu MMC",
      period: "İyun 2023 - İndiki zaman",
      tasks: [
        "İT specialist vəzifəsində kompüter sistemlərinin və şəbəkənin idarə edilməsi",
        "Texniki dəstək və problemlərin həlli",
        "Avadanlıqların quraşdırılması və texniki xidməti"
      ]
    },
    {
      company: "Ulduz şokalad fabriki",
      period: "Yanvar 2022 - May 2023",
      tasks: [
        "System Administrator kimi şirkətin IT infrastrukturunun idarə edilməsi",
        "Server və şəbəkə təhlükəsizliyinin təmin edilməsi",
        "Proqram təminatı və əməliyyat sistemlərinin yenilənməsi"
      ]
    },
    {
      company: "Bravo Market",
      period: "May 2021 - Dekabr 2021",
      tasks: [
        "Sistem infrastrukturunun qurulması və inkişafı",
        "POS terminallarının və ödəmə sistemlərinin quraşdırılması",
        "Şəbəkə avadanlıqlarının konfiqurasiyası və texniki xidməti"
      ]
    }
  ],
  references: [
    {
      name: "Cebiyev Kamil",
      position: "IT Manager, Faiqoglu MMC",
      address: "20-ci sahe, 223",
      tel: "+994 50 211 12 99",
      email: "faiqoglu.mmc@gmail.com"
    }
  ]
};

function renderAll() {
  document.getElementById('profile-pic').src = cvData.profilePic;
  document.getElementById('main-name').textContent = cvData.name;
  document.getElementById('main-title').textContent = cvData.title;
  renderList('contact');
  renderEducation();
  renderList('skills');
  renderList('languages');
  renderList('profile');
  renderJobs();
  renderReferences();
}

function renderList(type) {
  let arr = cvData[type];
  let ul = document.getElementById(type + '-ul');
  if (!ul) return;
  // Əlavə inputdan başqa hər şeyi sil
  let addInput = ul.querySelector('.add-new-item');
  ul.innerHTML = '';
  arr.forEach((item, idx) => {
    let li = document.createElement('li');
    li.innerHTML = `
      <span>${item}</span>
      <button class="edit-btn" onclick="editField('${type}',${idx})">&#9998;</button>
      <button class="delete-btn" onclick="deleteField('${type}',${idx})">&#10006;</button>
    `;
    ul.appendChild(li);
  });
  if (addInput) ul.appendChild(addInput);
}

function renderEducation() {
  let ul = document.getElementById('education-ul');
  ul.innerHTML = '';
  cvData.education.forEach((item, idx) => {
    let li = document.createElement('li');
    li.innerHTML = `
      <span>${item.years}<br>${item.school}<br>${item.major}</span>
      <button class="edit-btn" onclick="editEducation(${idx})">&#9998;</button>
      <button class="delete-btn" onclick="deleteEducation(${idx})">&#10006;</button>
    `;
    ul.appendChild(li);
  });
  let addInput = ul.querySelector('.add-new-item');
  if (addInput) ul.appendChild(addInput);
}

function renderJobs() {
  let jobsDiv = document.getElementById('jobs-container');
  jobsDiv.innerHTML = '';
  cvData.jobs.forEach((job, idx) => {
    let div = document.createElement('div');
    div.className = "job";
    div.innerHTML = `
      <h4>${job.company}</h4>
      <div class="job-period">${job.period}</div>
      <ul>${job.tasks.map(t=>`<li>${t}</li>`).join('')}</ul>
      <button class="edit-btn" onclick="editJob(${idx})">&#9998;</button>
      <button class="delete-btn" onclick="deleteJob(${idx})">&#10006;</button>
    `;
    jobsDiv.appendChild(div);
  });
  let addInput = jobsDiv.querySelector('.add-new-item');
  if (addInput) jobsDiv.appendChild(addInput);
}

function renderReferences() {
  let ul = document.getElementById('references-ul');
  ul.innerHTML = '';
  cvData.references.forEach((ref, idx) => {
    let li = document.createElement('li');
    li.innerHTML = `
      <span>
        <strong>${ref.name}</strong><br>
        ${ref.position}<br>
        ${ref.address}<br>
        Tel: ${ref.tel}<br>
        ${ref.email}
      </span>
      <button class="edit-btn" onclick="editReference(${idx})">&#9998;</button>
      <button class="delete-btn" onclick="deleteReference(${idx})">&#10006;</button>
    `;
    ul.appendChild(li);
  });
  let addInput = ul.querySelector('.add-new-item');
  if (addInput) ul.appendChild(addInput);
}

// Generic for contact, skills, languages, profile
function editField(type, idx) {
  let ul = document.getElementById(type + '-ul');
  let val = cvData[type][idx];
  let li = ul.children[idx];
  li.innerHTML = `
    <input type="text" value="${val}" />
    <button class="save-btn" onclick="saveField('${type}',${idx}, this)">✔</button>
    <button class="cancel-btn" onclick="renderList('${type}')">✖</button>
  `;
}
function saveField(type, idx, btn) {
  let input = btn.parentElement.querySelector('input');
  if (!input.value.trim()) return alert('Boş buraxmayın!');
  cvData[type][idx] = input.value;
  renderList(type);
}
function deleteField(type, idx) {
  if (!confirm("Silməyə əminsiniz?")) return;
  cvData[type].splice(idx, 1);
  renderList(type);
}

// Education
function editEducation(idx) {
  let ul = document.getElementById('education-ul');
  let item = cvData.education[idx];
  let li = ul.children[idx];
  li.innerHTML = `
    <input type="text" value="${item.years}" placeholder="İllər" /><br>
    <input type="text" value="${item.school}" placeholder="Təhsil müəssisəsi" /><br>
    <input type="text" value="${item.major}" placeholder="İxtisas" /><br>
    <button class="save-btn" onclick="saveEducation(${idx}, this)">✔</button>
    <button class="cancel-btn" onclick="renderEducation()">✖</button>
  `;
}
function saveEducation(idx, btn) {
  let inputs = btn.parentElement.querySelectorAll('input');
  if ([...inputs].some(i=>!i.value.trim())) return alert("Boş buraxmayın!");
  cvData.education[idx] = {
    years: inputs[0].value,
    school: inputs[1].value,
    major: inputs[2].value
  };
  renderEducation();
}
function deleteEducation(idx) {
  if (!confirm("Silməyə əminsiniz?")) return;
  cvData.education.splice(idx, 1);
  renderEducation();
}

// Jobs
function editJob(idx) {
  let jobsDiv = document.getElementById('jobs-container');
  let job = cvData.jobs[idx];
  let div = jobsDiv.children[idx];
  div.innerHTML = `
    <input type="text" value="${job.company}" placeholder="Şirkət" /><br>
    <input type="text" value="${job.period}" placeholder="İş dövrü" /><br>
    <textarea rows="3" placeholder="Tapşırıqlar (sətir-sətir)">${job.tasks.join('\n')}</textarea>
    <br>
    <button class="save-btn" onclick="saveJob(${idx}, this)">✔</button>
    <button class="cancel-btn" onclick="renderJobs()">✖</button>
  `;
}
function saveJob(idx, btn) {
  let parent = btn.parentElement;
  let inputs = parent.querySelectorAll('input');
  let tasks = parent.querySelector('textarea').value.split('\n').map(t=>t.trim()).filter(Boolean);
  if ([...inputs].some(i=>!i.value.trim()) || tasks.length === 0) return alert("Boş buraxmayın!");
  cvData.jobs[idx] = {
    company: inputs[0].value,
    period: inputs[1].value,
    tasks
  };
  renderJobs();
}
function deleteJob(idx) {
  if (!confirm("Silməyə əminsiniz?")) return;
  cvData.jobs.splice(idx, 1);
  renderJobs();
}

// References
function editReference(idx) {
  let ul = document.getElementById('references-ul');
  let ref = cvData.references[idx];
  let li = ul.children[idx];
  li.innerHTML = `
    <input type="text" value="${ref.name}" placeholder="Ad Soyad" /><br>
    <input type="text" value="${ref.position}" placeholder="Vəzifə və şirkət" /><br>
    <input type="text" value="${ref.address}" placeholder="Ünvan" /><br>
    <input type="text" value="${ref.tel}" placeholder="Telefon" /><br>
    <input type="text" value="${ref.email}" placeholder="Email" /><br>
    <button class="save-btn" onclick="saveReference(${idx}, this)">✔</button>
    <button class="cancel-btn" onclick="renderReferences()">✖</button>
  `;
}
function saveReference(idx, btn) {
  let inputs = btn.parentElement.querySelectorAll('input');
  if ([...inputs].some(i=>!i.value.trim())) return alert("Boş buraxmayın!");
  cvData.references[idx] = {
    name: inputs[0].value,
    position: inputs[1].value,
    address: inputs[2].value,
    tel: inputs[3].value,
    email: inputs[4].value
  };
  renderReferences();
}
function deleteReference(idx) {
  if (!confirm("Silməyə əminsiniz?")) return;
  cvData.references.splice(idx, 1);
  renderReferences();
}

// === 4. Add New Data ===
function showAddField(type) {
  let ul;
  if (type === 'education') ul = document.getElementById('education-ul');
  else if (type === 'jobs') document.getElementById('jobs-container').insertAdjacentHTML('beforeend', addJobHtml());
  else if (type === 'references') ul = document.getElementById('references-ul');
  else if (type === 'profile') ul = document.getElementById('profile-ul');
  else ul = document.getElementById(type + '-ul');

  if (ul) {
    let prev = ul.querySelector('.add-new-item');
    if (prev) prev.remove();
  }

  if (type === 'education') {
    let li = document.createElement('li');
    li.className = 'add-new-item';
    li.innerHTML = `
      <input type="text" placeholder="İllər" /><br>
      <input type="text" placeholder="Təhsil müəssisəsi" /><br>
      <input type="text" placeholder="İxtisas" /><br>
      <button class="save-btn" onclick="addEducation(this)">✔</button>
      <button class="cancel-btn" onclick="this.parentElement.remove()">✖</button>
    `;
    ul.appendChild(li);
  } else if (type === 'jobs') {
    // handled by addJobHtml()
  } else if (type === 'references') {
    let li = document.createElement('li');
    li.className = 'add-new-item';
    li.innerHTML = `
      <input type="text" placeholder="Ad Soyad" /><br>
      <input type="text" placeholder="Vəzifə və şirkət" /><br>
      <input type="text" placeholder="Ünvan" /><br>
      <input type="text" placeholder="Telefon" /><br>
      <input type="text" placeholder="Email" /><br>
      <button class="save-btn" onclick="addReference(this)">✔</button>
      <button class="cancel-btn" onclick="this.parentElement.remove()">✖</button>
    `;
    ul.appendChild(li);
  } else if (type === 'profile') {
    let li = document.createElement('li');
    li.className = 'add-new-item';
    li.innerHTML = `
      <textarea placeholder="Profil mətni" rows="3"></textarea>
      <button class="save-btn" onclick="addProfile(this)">✔</button>
      <button class="cancel-btn" onclick="this.parentElement.remove()">✖</button>
    `;
    ul.appendChild(li);
  } else {
    let li = document.createElement('li');
    li.className = 'add-new-item';
    li.innerHTML = `
      <input type="text" placeholder="Yeni məlumat" />
      <button class="save-btn" onclick="addSimple('${type}', this)">✔</button>
      <button class="cancel-btn" onclick="this.parentElement.remove()">✖</button>
    `;
    ul.appendChild(li);
  }
}

function addSimple(type, btn) {
  let input = btn.parentElement.querySelector('input');
  if (!input.value.trim()) return alert("Boş buraxmayın!");
  cvData[type].push(input.value);
  renderList(type);
}
function addEducation(btn) {
  let inputs = btn.parentElement.querySelectorAll('input');
  if ([...inputs].some(i=>!i.value.trim())) return alert("Boş buraxmayın!");
  cvData.education.push({
    years: inputs[0].value,
    school: inputs[1].value,
    major: inputs[2].value
  });
  renderEducation();
}
function addProfile(btn) {
  let textarea = btn.parentElement.querySelector('textarea');
  if (!textarea.value.trim()) return alert("Boş buraxmayın!");
  cvData.profile.push(textarea.value);
  renderList('profile');
}
function addReference(btn) {
  let inputs = btn.parentElement.querySelectorAll('input');
  if ([...inputs].some(i=>!i.value.trim())) return alert("Boş buraxmayın!");
  cvData.references.push({
    name: inputs[0].value,
    position: inputs[1].value,
    address: inputs[2].value,
    tel: inputs[3].value,
    email: inputs[4].value
  });
  renderReferences();
}
function addJobHtml() {
  return `
    <div class="job add-new-item">
      <input type="text" placeholder="Şirkət" /><br>
      <input type="text" placeholder="İş dövrü" /><br>
      <textarea rows="3" placeholder="Tapşırıqlar (sətir-sətir)"></textarea>
      <br>
      <button class="save-btn" onclick="addJob(this)">✔</button>
      <button class="cancel-btn" onclick="this.parentElement.remove()">✖</button>
    </div>
  `;
}
function addJob(btn) {
  let parent = btn.parentElement;
  let inputs = parent.querySelectorAll('input');
  let tasks = parent.querySelector('textarea').value.split('\n').map(t=>t.trim()).filter(Boolean);
  if ([...inputs].some(i=>!i.value.trim()) || tasks.length === 0) return alert("Boş buraxmayın!");
  cvData.jobs.push({
    company: inputs[0].value,
    period: inputs[1].value,
    tasks
  });
  renderJobs();
}

// Dropdown toggles
document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
  toggle.addEventListener('click', function() {
    const targetId = this.getAttribute('data-target');
    const content = document.getElementById(targetId);
    if (!content) return;
    content.classList.toggle('closed');
    // Rotate arrow
    const arrow = this.querySelector('.arrow');
    if (content.classList.contains('closed')) {
      arrow.style.transform = "rotate(-90deg)";
    } else {
      arrow.style.transform = "rotate(0deg)";
    }
  });
});

window.onload = renderAll;