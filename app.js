/* ============================================================
   RENDER LOGIC — you shouldn't need to touch this file.
   It reads PORTFOLIO_DATA (from data.js) and builds the page.
   ============================================================ */


const $ = (sel) => document.querySelector(sel);

const el = (tag, cls, html) => {
  const n = document.createElement(tag);

  if (cls) n.className = cls;

  if (html !== undefined) {
    n.innerHTML = html;
  }

  return n;
};


function renderHero() {

  $('#heroTitle').textContent =
    PORTFOLIO_DATA.profile.name;

  $('#heroTagline').textContent =
    PORTFOLIO_DATA.profile.tagline;


  const meta = $('#heroMeta');

  meta.innerHTML = `
    <span class="match-score">
      ${PORTFOLIO_DATA.matchScore}% Match
    </span>

    <span class="dot"></span>

    <span>
      ${PORTFOLIO_DATA.profile.location}
    </span>

    <span class="dot"></span>

    <span>
      ${PORTFOLIO_DATA.caseStudies.length} Case Studies
    </span>
  `;


  const tags = $('#genreTags');

  PORTFOLIO_DATA.genres.forEach(g => {
    tags.appendChild(
      el('span', 'genre-tag', g)
    );
  });
}



function renderCaseStudies() {

  const row = $('#caseStudyRow');

  row.innerHTML = '';


  PORTFOLIO_DATA.caseStudies.forEach(cs => {

    const card = el('article', 'card');

    card.setAttribute('tabindex', '0');


    const linksHtml = (cs.links || [])
      .map(l => `
        <a
          href="${l.url}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${l.label} →
        </a>
      `)
      .join('');


    const statsHtml = (cs.stats || [])
      .map(s => `
        <div>
          <b>${s.value}</b>
          ${s.label}
        </div>
      `)
      .join('');


    const tagsHtml = (cs.tags || [])
      .map(t => `
        <span>${t}</span>
      `)
      .join('');


    const coverPosition =
      cs.coverPosition || 'center center';


    const coverGradient =
      cs.coverGradient ||
      'linear-gradient(135deg, #222, #111)';


    card.innerHTML = `

      <div
        class="card-cover"
        style="background: ${coverGradient};"
      >

        <img
          class="card-cover-image"
          src="${cs.coverImage}"
          alt="${cs.title} cover image"
          style="
            object-position: ${coverPosition};
          "
        >

        <div class="card-cover-overlay"></div>

        <span class="ep-label">
          ${cs.episode}
        </span>

      </div>


      <div class="card-body">

        <div>

          <div class="card-title">
            ${cs.title}
          </div>

          <div class="card-subtitle">
            ${cs.subtitle}
          </div>

        </div>


        <div class="card-tags">
          ${tagsHtml}
        </div>


        <div class="card-stats">
          ${statsHtml}
        </div>


        <p class="card-desc">
          ${cs.description}
        </p>


        ${
          cs.decision
            ? `
              <div class="card-decision">

                <span class="decision-label">
                  PM DECISION
                </span>

                <p>
                  ${cs.decision}
                </p>

              </div>
            `
            : ''
        }


        <div class="card-links">
          ${linksHtml}
        </div>

      </div>

    `;


    row.appendChild(card);

  });

}



function renderOrigin() {

  const box = $('#originText');

  box.innerHTML = '';


  PORTFOLIO_DATA.originStory.forEach(p => {

    box.appendChild(
      el('p', null, p)
    );

  });


  const listens = el('div', 'listens');

  listens.innerHTML = `
    <span class="eyebrow">
      Recently in my queue
    </span>
  `;


  const ul = el('ul');


  PORTFOLIO_DATA.listensTo.forEach(item => {

    ul.appendChild(
      el('li', null, item)
    );

  });


  listens.appendChild(ul);

  box.appendChild(listens);

}



function renderSeasons() {

  const list = $('#seasonList');

  list.innerHTML = '';


  PORTFOLIO_DATA.experience.forEach(job => {

    const row = el('div', 'season');


    const bullets = job.bullets
      .map(b => `<li>${b}</li>`)
      .join('');


    row.innerHTML = `

      <div class="season-tag">

        <b>
          ${job.seasonLabel}
        </b>

        ${job.period}

      </div>


      <div>

        <div class="season-role">
          ${job.role}
        </div>

        <div class="season-company">
          ${job.company}
        </div>

        <ul>
          ${bullets}
        </ul>

      </div>

    `;


    list.appendChild(row);

  });

}



function renderCast() {

  const groups = $('#castGroups');

  groups.innerHTML = '';


  PORTFOLIO_DATA.skillGroups.forEach(g => {

    const card = el(
      'div',
      'cast-group'
    );


    const pills = g.skills
      .map(s => `
        <span class="pill">
          ${s}
        </span>
      `)
      .join('');


    card.innerHTML = `
      <h3>${g.title}</h3>

      <div class="pill-row">
        ${pills}
      </div>
    `;


    groups.appendChild(card);

  });

}



function renderDetails() {

  const grid = $('#detailsGrid');

  grid.innerHTML = '';


  PORTFOLIO_DATA.details.forEach(d => {

    const cell = el(
      'div',
      'detail-cell'
    );


    cell.innerHTML = `

      <div class="k">
        ${d.k}
      </div>

      <div class="v">

        ${d.v}

        ${
          d.sub
            ? `<small>${d.sub}</small>`
            : ''
        }

      </div>

    `;


    grid.appendChild(cell);

  });

}



function renderFooter() {

  $('#emailBtn').href =
    `mailto:${PORTFOLIO_DATA.profile.email}`;


  const links = $('#footerLinks');

  links.innerHTML = '';


  PORTFOLIO_DATA.socials.forEach(s => {

    const link = el(
      'a',
      null,
      s.label
    );

    link.href = s.url;

    link.target = '_blank';

    link.rel = 'noopener noreferrer';

    links.appendChild(link);

  });


  $('#year').textContent =
    new Date().getFullYear();

}



renderHero();
renderCaseStudies();
renderOrigin();
renderSeasons();
renderCast();
renderDetails();
renderFooter();



/* Navigation scroll state */

const nav = $('#nav');

if (nav) {

  window.addEventListener('scroll', () => {

    nav.classList.toggle(
      'scrolled',
      window.scrollY > 40
    );

  });

}



/* Mobile navigation */

const navToggle = $('#navToggle');
const navLinks = $('#navLinks');


if (navToggle && navLinks) {

  navToggle.addEventListener(
    'click',
    () => {

      const open =
        navLinks.classList.toggle('open');


      navToggle.setAttribute(
        'aria-expanded',
        String(open)
      );

    }
  );


  navLinks
    .querySelectorAll('a')
    .forEach(a => {

      a.addEventListener(
        'click',
        () => {

          navLinks.classList.remove('open');

          navToggle.setAttribute(
            'aria-expanded',
            'false'
          );

        }
      );

    });

}
