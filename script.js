// ─────────────────────────────────────────────────────────────────
//  CONTENT
//  Both pages use the same slideshow. Each MONTH (sidebar label) holds
//  one or more GROUPS; each group is one scroll section with its own
//  description (shown via the ⓘ button) and its media.
//
//    {
//      label: "März",                  ← month, shown in the orange sidebar
//      groups: [
//        {
//          title: "Sketches",          ← optional heading + sidebar sub-chapter
//          text: "…",                  ← optional body text shown inline in the scroll
//          description: "…",           ← text for this group (ⓘ button)
//          layout: "grid",             ← optional: "column" | "row" | "grid"
//                                         (defaults to grid when >1 media, else column)
//          columns: 3,                 ← optional: number of grid columns (default 2)
//          media: [                    ← one or many items, stacked & scrollable
//            { src: "Images/screen.png" },                  // image (add full: true to span all grid columns)
//            { text: "A paragraph" },                       // text block (repeatable)
//            { src: "Videos/clip.mp4" },                    // video — controls: false hides all; hideControls: ["volume"] hides parts
//            { embed: "https://www.figma.com/proto/..." },  // Figma prototype
//            { embed: "Web Apps/Phone app 1.0/index.html", frame: "phone" }, // app in a phone (add theme: "dark" to force dark mode)
//          ],
//          (add frame: "phone" to an embed to wrap it in a phone mockup)
//        },
//      ],
//    }
//
//  Media files live in the Images/ and Videos/ folders next to this file.
// ─────────────────────────────────────────────────────────────────

// ── DESIGN page ────────────────────────────────────────────────
const designSlides = [
  {
    label: "Kick-Off",
    groups: [
      {
        media: [
          {
            text: 
`Language apps have gained significant traction in recent years, offering 
an accessible and affordable way to learn new languages. A prime example 
is Duolingo, which engages users through a recognizable character and 
teaches vocabulary through mini-games.`,
          },
          {
            text: 
`Since I use language apps myself, the mechanics behind them have always 
interested me. I wanted to explore them further. During my summer internship,
I had the opportunity to develop my own app, which inspired me to take on 
another one independently.`,
          },
          {
            text: 
`For my theoretical thesis, I examined existing language apps including
Duolingo, Babbel, LingoDeer, and PingoAI. The first part covers psychological
theories of learning, the historical background of gamification, and language
acquisition. The second part addresses various aspects of these apps through
case studies, such as animation, haptic feedback, game mechanics, and social
features. Through analyzing the successes and shortcomings of these apps,
I observed how audiovisual elements and haptic feedback influence user 
motivation. This led me to experiment with these aspects in an experimental
dialect app that contains different versions of the same lesson.`,
          },
          {
            text: 
`Before beginning the project, I spoke with Studio Freisicht, a studio 
specializing in app development for the museum sector, who offered tips 
mainly on the technical and marketing side. I also interviewed Zeynep 
Köylü, a researcher specializing in second language acquisition. During
the writing process, I considered incorporating AI as a feature, but 
decided against it after the interview, as AI carries the risk of convey-
ing language inaccurately, especially with dialects.`,
          },
          {
            text: 
`I chose the Basel dialect because I noticed that very few language apps offer 
dialect learning, and it is the dialect I know best, having grown up in Basel.`,
          },
        ],
      },
    ],
  },
  {
    label: "April",
    groups: [
      {
        title: "Ideation and Sketches",
        description:
`During my research, I found that
combining animation, sound,
and haptic feedback could po-
tentially boost user engagement
and motivation. I wanted to use a 
dialect learning app as a small
testbed for this idea.

Since I was initially unsure about
the direction of the project,
I started by designing a visual
identity for the app. I first 
explored a more Swiss-inspired
identity, but eventually decided
to take a different approach.`,
        layout: "grid",
        media: [
          { src: "Images/Sketch.jpeg" },
          { src: "Images/Other apps as inspiration.png" },
          { src: "Images/first sketches.png" },
          { src: "Images/collection.png" },
          { src: "Images/Visual identity.png", full: "true" },
        ],
      },
      {
        title: "Research and Data Collecting",
        description:
`Before starting development,
I wanted to establish a solid
content foundation for the app.
This meant building a strong
understanding of the Basel
dialect, its vocabulary and
pronunciation.

To do this, I researched the
dialect and found two books
as well as a lexicon website
dedicated to Baseldeutsch.
To build a comprehensive word
collection, I scraped data 
from the website and collected 
1674 words.`,

        media: [
          { src: "Videos/Aufzeichnung 2026-06-23 122314.mp4" },
          { src: "Videos/data collection.mp4" },
          {
            src: "Images/WhatsApp Image 2026-06-25 at 15.10.30 (2).jpeg",
            full: "true",
          },
          { src: "Images/WhatsApp Image 2026-06-25 at 15.10.30.jpeg" },
          { src: "Images/WhatsApp Image 2026-06-25 at 15.10.30 (1).jpeg" },
        ],
      },

      {
        title: "Animations",
        description:
`For the thesis, I found it
interesting, that typography
animation could potentially
help with pronounciation of
the words. 

At first, I made some anima-
tions with Adobe After Effects.
I also tried to make icon 
animations for the app.`,

        media: [
          { src: "Videos/Komp 2.mp4", width: "340px", controls: false },
          { src: "Videos/Komp 3.mp4", width: "340px", controls: false },
          { src: "Videos/Komp 4.mp4", width: "340px", controls: false },
          { src: "Videos/microphone.mp4", width: "340px", controls: false },
          { src: "Videos/spreaker.mp4", width: "340px", controls: false },
        ],
      },
      {
        title: "Typography Animations",
        description:
`I produced more typography
animation with other words.
I made more typography ani-
mations to look at possibi-
lities, how it could help
out with pronounciation.
For certain vocals, I stretch-
ed them out like the double 
vocals.`,
        layout: "grid",
        columns: 3,
        media: [
          { src: "Videos/nääbel.mp4", width: "340px", controls: false },
          { src: "Videos/nyt.mp4", width: "340px", controls: false },
          { src: "Videos/Oobe.mp4", width: "340px", controls: false },
          { src: "Videos/scheen.mp4", width: "340px", controls: false },
          { src: "Videos/schütteln_1.mp4", width: "340px", controls: false },
          { src: "Videos/schütteln 2.mp4", width: "340px", controls: false },
          { src: "Videos/schütteln 3.mp4", width: "340px", controls: false },
          { src: "Videos/haart.mp4", width: "340px", controls: false },
          { src: "Videos/Heer.mp4", width: "340px", controls: false },
        ],
      },
      {
        title: "First Prototype",
        description:
`
The core focus of my thesis 
was experimenting with combi-
nations of animation, sound,
and haptic feedback. To do
this, I planned to build an
experimental app prototype
featuring multiple versions
of the same lesson, each with
a different combination of 
the three elements. This
required a deliberately simple
interface to focus on the
combinations.

The tasks are based on the first
chapter of the Baseldeutsch-
Grammatik-Buch, specifically
'die Lautgesetze'. The initial 
thought was to use all of the
seven rules.`,
        layout: "row",
        media: [
          { src: "Images/flow chart.png", full: "true" },
          { src: "Images/first prototype.png" },
          { src: "Videos/Prototype 1.mp4" },
        ],
      },
      {
        title: "First Interim Presentation",
        text: 
`Following the interim presentation in late April, feedback pointed toward making
the design more playful. The core concept, experimenting with animation, sound,
and haptic feedback was well received, with typography animations to aid pronunciation
standing out as the most promising direction. However, they questioned, if it would 
work to involve pronounciation in the lesson tasks, since dialects focus more on 
speaking instead of writing.`,
      },
    ],
  },
  {
    label: "May",
    groups: [
      {
        title: " Further Prototyping",
        description:
`The design is based on the
initial sketches I made, but
I wasn't sure which visual 
elements I wanted to integrate.
At first, I based the visual 
style on Basel's coat of arms,
which is typically black 
and white. 

During designing the lesson,
I realized that some rules are
difficult to visualize, so I 
decided to use 4 rules instead
of all seven. I planned to make
four main pages: Lesson Page, 
Lexicon Page, Training Page 
and Settings Page.
I also noticed that it is 
difficult to simulate
haptic feedback because of
technical limiations:
I planned to program with
HTML/CSS/JS, since I am
most familiar with it and
it has limited haptic
feature compared to other
programming languages.`,
        layout: "row",
        media: [
          { src: "Videos/Prototype 3.mp4" },
          { src: "Images/Layout of the Lesson.png" },
          { src: "Images/Lesson Development.png" },
          { src: "Images/One tof the first Design.png" },
          { src: "Videos/Prototype 2.mp4" },
          {
            embed: "Web Apps/Phone app 1.0/index.html",
            frame: "phone",
            center: true,
          },
        ],
      },
      {
        title: "Animation Rules",
        description:
`I was trying to make animation
rules depending on which vocals
are on the word. The animation
should be more intuitive and
help the user to understand how
to pronounce the word. Then I
made a tool to animate the words
depending on which vocals are
in the word. This gave me the
opportunity to test out anima-
tions to see if the pronunci-
ation of the word is under-
standable.
Since there would be rules,
I thought it would be possible
to program a tool, in which
it would generate typography
animations. Depending which
letter is on the word, it 
would animate something
different.

The website is interactive!`,
        layout: "row",
        media: [
          { src: "Images/Animation rules.png" },
          { embed: "Digital Tools/letter scaler 1.2/index.html" },
        ],
      },
      {
        title: "Visual Style Development",
        description:
`Based on the feedback received,
I worked on developing a new
visual style that shifts focus
toward the words themselves 
rather than the interface. 
Following the interim presen-
tation, I also planned to make
the interface more colorful,
since a lot of gamified apps
tend to be playful.

Then for Version 1.1, I imple-
mented the design in code.
The app is interactive.`,
        layout: "row",
        media: [
          { src: "Images/Entwurf für die Lexikon.png" },
          { src: "Images/Frame 12.png" },
          {
            embed: "Web Apps/Phone app 1.3/index.html",
            frame: "phone",
            center: true,
          },
        ],
      },
      {
        title: "Second Interim Presentation",
        text: 
`The main feedback was around visual design and animation. The app could use 
more color to better convey its mood, with the possibility of letting users 
choose their own colors. On the animation side, there is room to experiment more, 
particularly with how pronunciation is shown, such as animating certain letters 
differently. Giving users more control over the animations was also suggested. 
A bigger open question is whether the project should focus on app design or 
lean more into audiovisual elements, which needs to be clarified going forward.`,
      },
    ],
  },

  {
    label: "June",
    groups: [
      {
        title: "Letter Scaler Tool",
        description:
`I developed the tool further
to allow more control over
the animations, adding sliders
to customize the stretching
and duration of the typography
animations.`,
        layout: "row",
        media: [{ embed: "Digital Tools/letter scaler/index.html" }],
      },
      {
        title: "Personas",
        description:
`
After the second interim 
presentation, I received
feedback that my project
needed to be more specific,
particularly whether it
should focus on app design
or experimentation with 
audiovisual elements.

After some thought, I decided
to focus on app design, as
there is potential to develop
a language app centered around
dialects. My target audience
is young immigrants who only 
know standard German, and my
secondary audience is Swiss
people living outside of Basel.
To better understand these
groups, I created two personas:
A young international student 
from Germany as the primary 
persona, and a teenager from 
outside Basel as the secondary
persona.`,
        media: [{ src: "Images/Personas.png" }],
      },
      {
        title: "Light/Dark Mode?",
        align: "center",
        description:
`Version 1.2 — For this version,
I implemented a dark/light mode.
I wanted to see, how the light 
mode feels. 

It is interactive!`,
        media: [
          { embed: "Web Apps/Phone app 1.4/settings.html", frame: "phone" },
        ],
      },
      {
        title: "Interface Development",
        description:
`I developed the visual style
further by introducing more
color and experimenting with
lighting effects to make the
interface feel more dynamic 
and engaging. 

I also tried to include some
cultural references by using
certain words for the tasks
and including an info button
for explaining cultural 
references.

The phone is interactive!`,
        layout: "row",
        media: [
          { src: "Images/Entwicklung des Interfaces.png" },
          { src: "Images/Frame 11.png" },
          { src: "Images/Frame 14.png" },
          {
            embed: "Web Apps/Phone app 1.5/index.html",
            frame: "phone",
            center: true,
          },
        ],
      },
      {
        title: "Interface and Icon Revision",
        description:
`After receiving feedback from
my mentors, I worked on making
the interface and icons more 
consistent. The main critique
was that the map and icons did
not feel cohesive. I revised 
the icons to better align with
the map and the overall design
of the app.
I also received feedback that
the audio button was unclear
in its active state, so I made
it audioreactive when activated.`,
        layout: "row",
        media: [
          { src: "Images/Entwurf Icon Design.png" },
          { src: "Images/Icon Design.png" },
          { src: "Images/Audio Button Dev.png" },
          { src: "Images/Layout verbesserungen.png" },
          {src: "Videos/Dok Video_compressed (1).mp4", hideControls: ["volume"],}
        ],
      },
      {
        title: "User Testing",
        media: [
          {
            text: 
`I had the opportunity to test the app with four people: 
- a young woman who grew up in Basel and speaks the modern Basel dialect.
- two German men who live in Germany and have no experience with the dialect.
- a young woman who lives in Romandie but does not speak Swiss German dialects.

\n\n
The user testing was helpful for understanding how the app is used and where issues arise. 
I received a lot of feedback on both the design and usability.

Key findings:
- The German participants had no familiarity with the pronunciation of the words, even it is written. 
- All of the users found it weird that the lexikon page was empty at the beginning.
- The testers found it useful for the typography animation. It helped, what exactly they need to pronounce.
- Technical issues were found. The voice recording had bugs or couldn't hear the word.`
          },
        ],
      },
    ],
  },
];

// ── THEORETICAL THESIS page (placeholder — add your content) ───
const theoreticalSlides = [
  {
    label: "Thesis",
    groups: [
      {
        title: "Gamifiy Learning",
        text: 
`For the theoretical part of my thesis, I examined whether gamified learning
experiences, specifically language apps, support second language acquisition.
To build my argument, I summarized the history of gamification and language 
acquisition, analyzed four language apps, and reviewed relevant psychological 
theories. Finally, using the knowledge I had gathered, I argued whether
gamification helps with language learning or not.`,
        media: [{ embed: "theo thesis/Arkaz_Senem.pdf" }],
      },
    ],
  },
];

// ── IMPRESSIUM page (placeholder — add your content) ───────────
const impressiumSlides = [
  {
    label: "Impressum",
    groups: [
      {
        text: `Concept and design: 
Senem Arkaz

Tutors: 
Thomas Birchner
Viola Diehl 

Photography: 
Senem Arkaz 

Models:
Sofia Curbelo
Mikail Arkaz
Turan Efe Arkaz

Typeface: 
Manrope 

Resources: 
Suter, R., & Christoph Merian Stiftung. (1976). Baseldeutsch-Grammatik. Christoph Merian Verlag.
Suter, R., & Christoph Merian Stiftung. (1984). Baseldeutsch-Wörterbuch. Christoph Merian Verlag.
Holeiter, D. (n.d.). Baseldeutsch Wörterbuch Online. https://baseldeutsch-woerterbuch.floatleft.ch/ 

Tools: 
Figma 
Adobe After Effects 
HTML, CSS & JavaScript 

Acknowledgements: 
Studio Freisicht — advice on technical and marketing aspects
Zeynep Köylü — interview on second language acquisition 
Erik Beitinger — user testing and advice on UX/layout
Florian Hergenröder — user testing and advice on UX/layout
Taylor Kovacevic — user testing
Zoé Gebele — user testing and advice on UX/layout

FHNW, Basel Academy of Art and Design 
Institute Digital Communication Environments 
Bachelor Visual Communication and Digital Spaces 
Specialization: Digital Spaces 
© 2026 Senem Arkaz / FHNW HGK Basel. 
All rights reserved.`,
        media: [],
      },
    ],
  },
];

// Menu (home) entries. key → { title shown atop the sidebar, slides }.
// The order here is the order of the menu on the home page.
const PAGES = {
  theoretical: { title: "Theoretical Thesis", slides: theoreticalSlides },
  design: { title: "Practical Thesis", slides: designSlides },
  impressium: { title: "Impressum", slides: impressiumSlides },
};

// ─────────────────────────────────────────────────────────────────
//  Everything below renders the page — you don't need to touch it.
// ─────────────────────────────────────────────────────────────────

// Render text, turning lines that start with "- ", "* " or "•" into a real
// bullet list (with hanging indent). Blank lines separate paragraphs.
function setRichText(el, str) {
  el.innerHTML = "";
  const lines = String(str || "").replace(/\r/g, "").split("\n");
  let para = [];
  let list = null;
  const flushPara = () => {
    if (!para.length) return;
    const p = document.createElement("p");
    p.className = "rich-p";
    p.textContent = para.join("\n");
    el.appendChild(p);
    para = [];
  };
  lines.forEach((line) => {
    const m = line.match(/^\s*[-*•]\s+(.*)$/);
    if (m) {
      flushPara();
      if (!list) {
        list = document.createElement("ul");
        list.className = "rich-list";
        el.appendChild(list);
      }
      const li = document.createElement("li");
      li.textContent = m[1];
      list.appendChild(li);
    } else if (line.trim() === "") {
      flushPara();
      list = null;
    } else {
      list = null;
      para.push(line);
    }
  });
  flushPara();
}

const VIDEO_EXTS = new Set(["mp4", "webm", "mov", "ogg"]);
function isVideo(src) {
  return VIDEO_EXTS.has(src.split(".").pop().toLowerCase());
}

// Make any Figma proto/design link embeddable: use the embed host and make
// sure the required embed-host parameter is present (Figma blocks it otherwise).
function figmaEmbedUrl(url) {
  if (!/(?:www\.)?figma\.com/.test(url)) return url;
  let u = url.replace(/(?:www\.)?figma\.com/, "embed.figma.com");
  if (!/[?&]embed-host=/.test(u))
    u += (u.includes("?") ? "&" : "?") + "embed-host=share";
  return u;
}

// Normalise a group's media to an array (one item or many).
function mediaList(group) {
  if (!group || !group.media) return [];
  return Array.isArray(group.media) ? group.media : [group.media];
}

// A month's groups (supports a legacy { media, text } month with no groups).
function groupsOf(slide) {
  if (Array.isArray(slide.groups)) return slide.groups;
  return [{ description: slide.text || "", media: slide.media }];
}

const slideshowEl = document.getElementById("stage");
let slides = []; // the current page's months
let sections = []; // current page flattened into scroll sections

// Flatten the current page's months → groups into one list of scroll sections.
function buildSections() {
  sections = [];
  slides.forEach((slide, mi) => {
    groupsOf(slide).forEach((g) => {
      sections.push({
        monthIndex: mi,
        label: slide.label,
        title: g.title || "", // heading + sidebar sub-chapter (optional)
        text: g.text || "", // body text shown inline in the scroll (optional)
        description: g.description || "",
        layout: g.layout, // "column" | "row" | "grid" (optional)
        align: g.align, // "center" to override the design page's left alignment
        columns: g.columns, // grid column count (optional, default 2)
        media: mediaList(g),
      });
    });
  });
}

let sectionIndex = 0;
let textOpen = false;

// ── Lightbox state ─────────────────────────────────────────────
let lightboxItems = []; // images/videos only (embeds aren't lightboxed)
let lightboxIndex = 0;

function buildLightboxItems() {
  lightboxItems = [];
  sections.forEach((sec) =>
    sec.media.forEach((m) => {
      if (m.src && !m.embed) lightboxItems.push(m.src);
    }),
  );
}

// flat lightbox index of media item mIdx within section secIdx (skips embeds)
function lightboxIndexFor(secIdx, mIdx) {
  let idx = 0;
  for (let i = 0; i < secIdx; i++)
    idx += sections[i].media.filter((m) => m.src && !m.embed).length;
  for (let j = 0; j < mIdx; j++) {
    const mm = sections[secIdx].media[j];
    if (mm.src && !mm.embed) idx++;
  }
  return idx;
}

// ── Slideshow render ───────────────────────────────────────────
//  All slides are rendered as full-height sections; scrolling moves
//  between them (scroll-snap). The sidebar / arrows / text follow the
//  section that's currently in view.

function renderNav() {
  if (sections.length === 0) return;

  // Sidebar: one button per month, with titled sections as sub-chapters.
  // Single-month pages (e.g. Impressium) only show the title, so skip the nav.
  const nav = document.getElementById("slide-nav-items");
  nav.innerHTML = "";
  if (slides.length > 1)
    slides.forEach((s, mi) => {
      const b = document.createElement("button");
      b.className = "slide-nav-item";
      b.dataset.month = mi;
      b.textContent = s.label || mi + 1;
      b.addEventListener("click", () => goToMonth(mi));
      nav.appendChild(b);

      // Sub-chapters: this month's sections that have a title
      const sub = document.createElement("div");
      sub.className = "subnav";
      sub.dataset.month = mi;
      sections.forEach((sec, si) => {
        if (sec.monthIndex === mi && sec.title) {
          const sb = document.createElement("button");
          sb.className = "subnav-item";
          sb.dataset.section = si;
          sb.textContent = sec.title;
          sb.addEventListener("click", () => goToSection(si));
          sub.appendChild(sb);
        }
      });
      if (sub.children.length) nav.appendChild(sub);
    });
}

function renderSections() {
  if (sections.length === 0) return;
  const scroll = document.getElementById("slide-scroll");
  scroll.innerHTML = "";
  sections.forEach((sec, i) => {
    const layout = sec.layout || (sec.media.length > 1 ? "grid" : "column");
    const section = document.createElement("section");
    section.className = "slide-section layout-" + layout;
    if (sec.align === "center") section.classList.add("align-center");
    section.dataset.index = i;
    if (layout === "grid")
      section.style.setProperty("--cols", sec.columns || 2);

    // Month heading at the start of each month's first section
    const firstOfMonth =
      i === 0 || sections[i - 1].monthIndex !== sec.monthIndex;
    if (firstOfMonth && sec.label) {
      const mh = document.createElement("div");
      mh.className = "section-month";
      mh.textContent = sec.label;
      section.appendChild(mh);
    }

    if (sec.title) {
      const h = document.createElement("h2");
      h.className = "section-title";
      h.textContent = sec.title;
      section.appendChild(h);
    }

    if (sec.text) {
      const p = document.createElement("div");
      p.className = "section-text";
      setRichText(p, sec.text);
      section.appendChild(p);
    }

    sec.media.forEach((m, mIdx) => {
      let el;
      if (m.text) {
        el = document.createElement("div");
        el.className = "section-text";
        setRichText(el, m.text);
        section.appendChild(el);
        return; // text isn't a media file, skip lightbox handling
      }
      if (m.embed) {
        const iframe = document.createElement("iframe");
        // Lazy: load the heavy embed only when its section nears the viewport
        iframe.dataset.src = encodeURI(figmaEmbedUrl(m.embed));
        iframe.allowFullscreen = true;
        // Embedded apps share localStorage (same origin), so one app's dark
        // mode would otherwise bleed into the others. Force this embed's own
        // theme once it loads (default light). Set theme: "dark" to demo dark.
        if (!/figma\.com/.test(m.embed)) {
          const theme = m.theme || "light";
          iframe.dataset.appTheme = theme; // used to seed localStorage before load
          // Re-apply on every page the iframe loads (incl. in-app navigation),
          // overriding whatever another app left in the shared localStorage.
          iframe.addEventListener("load", () => {
            try {
              iframe.contentDocument.documentElement.setAttribute(
                "data-theme",
                theme,
              );
            } catch (e) {}
          });
        }
        if (m.frame === "phone") {
          el = document.createElement("div");
          el.className = "phone";
          el.appendChild(iframe);
        } else {
          el = iframe;
        }
      } else if (isVideo(m.src)) {
        el = document.createElement("video");
        el.dataset.src = m.src; // lazy — set src when the section is near
        el.muted = true;
        el.autoplay = true;
        el.loop = true;
        el.playsInline = true;
        el.controls = m.controls !== false; // set controls: false to hide them
        if (Array.isArray(m.hideControls))
          applyHideControls(el, m.hideControls);
        el.preload = "none";
        el.addEventListener("click", () =>
          openLightbox(lightboxIndexFor(i, mIdx)),
        );
      } else {
        el = document.createElement("img");
        el.src = m.src;
        el.alt = sec.label || "";
        el.loading = "lazy";
        el.addEventListener("click", () =>
          openLightbox(lightboxIndexFor(i, mIdx)),
        );
      }
      if (m.width != null)
        el.style.width = typeof m.width === "number" ? m.width + "px" : m.width;
      if (m.full) el.classList.add("media-full"); // span the whole row/grid width
      if (m.center) {
        // Put this item on its own full-width line, centred (rest stays left)
        const wrap = document.createElement("div");
        wrap.className = "media-center";
        wrap.appendChild(el);
        el = wrap;
      }
      section.appendChild(el);
    });

    scroll.appendChild(section);
  });

  observeSections();
  observeLazyMedia();
  setActive(0);
}

function renderSlideshow() {
  renderNav();
  renderSections();
}

// Set src on a section's deferred media (videos / iframes)
function loadLazyMedia(section) {
  section.querySelectorAll("[data-src]").forEach((el) => {
    if (el.dataset.appTheme) {
      try {
        localStorage.setItem("theme", el.dataset.appTheme);
      } catch (e) {}
    }
    el.src = el.dataset.src;
    delete el.dataset.src;
  });
}

// Load each section's heavy media just before it scrolls into view
let lazyObs;
function observeLazyMedia() {
  if (lazyObs) lazyObs.disconnect();
  const scroll = document.getElementById("slide-scroll");
  lazyObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          loadLazyMedia(e.target);
          lazyObs.unobserve(e.target);
        }
      });
    },
    { root: scroll, rootMargin: "600px 0px" },
  );
  scroll.querySelectorAll(".slide-section").forEach((s) => lazyObs.observe(s));
}

function goToSection(i) {
  const sec = document.querySelector(`.slide-section[data-index="${i}"]`);
  if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Scroll to a month's first group
function goToMonth(mi) {
  const first = sections.findIndex((s) => s.monthIndex === mi);
  if (first >= 0) goToSection(first);
}

// Which section is currently centred in the viewport
function observeSections() {
  const scroll = document.getElementById("slide-scroll");
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(+e.target.dataset.index);
      });
    },
    { root: scroll, rootMargin: "-49% 0px -49% 0px", threshold: 0 },
  );
  scroll.querySelectorAll(".slide-section").forEach((sec) => obs.observe(sec));
}

function setActive(i) {
  sectionIndex = i;
  const month = sections[i].monthIndex;
  const nav = document.getElementById("slide-nav-items");
  nav
    .querySelectorAll(".slide-nav-item")
    .forEach((b) => b.classList.toggle("active", +b.dataset.month === month));
  // Show only the active month's sub-chapters, and mark the current one
  nav
    .querySelectorAll(".subnav")
    .forEach((s) => s.classList.toggle("open", +s.dataset.month === month));
  nav
    .querySelectorAll(".subnav-item")
    .forEach((b) => b.classList.toggle("active", +b.dataset.section === i));

  setRichText(
    document.querySelector("#slide-text .slide-text-inner"),
    sections[i].description || "",
  );
  syncTextPanel();

  if (slidePrev) slidePrev.disabled = i === 0;
  if (slideNext) slideNext.disabled = i === sections.length - 1;
}

// Show the "Info" column for the active section (hidden if it has no text)
function syncTextPanel() {
  const panel = document.getElementById("slide-text");
  const sec = sections[sectionIndex];
  const hasText = !!(sec && sec.description && sec.description.trim());
  panel.style.visibility = hasText ? "visible" : "hidden";
}

function slideStep(dir) {
  goToSection(Math.max(0, Math.min(sectionIndex + dir, sections.length - 1)));
}

const slidePrev = document.getElementById("slide-prev");
const slideNext = document.getElementById("slide-next");
if (slidePrev) slidePrev.addEventListener("click", () => slideStep(-1));
if (slideNext) slideNext.addEventListener("click", () => slideStep(1));

// ── Lightbox ───────────────────────────────────────────────────
const lightbox = document.getElementById("lightbox");
const lbContent = document.getElementById("lb-content");

function openLightbox(idx) {
  lightboxIndex = idx;
  showLightboxItem();
  lightbox.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.add("hidden");
  document.body.style.overflow = "";
  lbContent.innerHTML = "";
}

function showLightboxItem() {
  lbContent.innerHTML = "";
  const src = lightboxItems[lightboxIndex];
  if (!src) return;

  if (isVideo(src)) {
    const vid = document.createElement("video");
    vid.src = src;
    vid.controls = true;
    vid.autoplay = true;
    lbContent.appendChild(vid);
  } else {
    const img = document.createElement("img");
    img.src = src;
    img.alt = src.split("/").pop();
    lbContent.appendChild(img);
  }
}

function navigate(dir) {
  lightboxIndex =
    (lightboxIndex + dir + lightboxItems.length) % lightboxItems.length;
  showLightboxItem();
}

document.getElementById("lb-close").addEventListener("click", closeLightbox);
document
  .getElementById("lb-prev")
  .addEventListener("click", () => navigate(-1));
document.getElementById("lb-next").addEventListener("click", () => navigate(1));

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  // Slideshow arrow-key navigation (only while a page is open)
  if (
    document.body.classList.contains("page") &&
    lightbox.classList.contains("hidden")
  ) {
    if (e.key === "ArrowLeft") slideStep(-1);
    if (e.key === "ArrowRight") slideStep(1);
  }
  if (lightbox.classList.contains("hidden")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") navigate(-1);
  if (e.key === "ArrowRight") navigate(1);
});

// ── Page switching / router ────────────────────────────────────
function openPage(key) {
  const page = PAGES[key];
  if (!page) return showHome();

  // Cheap part — runs inside the transition (no heavy section building)
  const cheap = () => {
    slides = page.slides || [];
    slideshowEl.dataset.set = key; // keeps per-page CSS (e.g. design widths)
    sectionIndex = 0;
    textOpen = false;
    buildSections();
    buildLightboxItems();
    document.getElementById("slide-nav-title").textContent = page.title || "";
    renderNav();
    document.getElementById("slide-scroll").innerHTML = ""; // drop old sections
    document.body.classList.add("page");
  };

  const fromHome = !document.body.classList.contains("page");
  const link = fromHome
    ? document.querySelector(`.hero-menu a[href="#/${key}"]`)
    : null;
  const titleEl = document.getElementById("slide-nav-title");

  if (document.startViewTransition && link) {
    link.style.viewTransitionName = "page-title";
    const vt = document.startViewTransition(() => {
      link.style.viewTransitionName = "";
      titleEl.style.viewTransitionName = "page-title";
      cheap();
    });
    // Build the heavy sections AFTER the snapshot (during the animation, which
    // runs on the compositor) so opening is instant and the morph stays smooth.
    vt.ready.then(renderSections, renderSections); // render even if skipped
    vt.finished.finally(() => {
      link.style.viewTransitionName = "";
      titleEl.style.viewTransitionName = "";
    });
  } else {
    cheap();
    renderSections();
  }
}

function showHome() {
  const key = slideshowEl.dataset.set;
  const link = document.querySelector(`.hero-menu a[href="#/${key}"]`);
  const titleEl = document.getElementById("slide-nav-title");

  // Reverse: the page title drops back down into its menu word
  morphTitle(titleEl, link, () => document.body.classList.remove("page"));
}

// Run `apply` inside a View Transition that morphs `fromEl` into `toEl`
function morphTitle(fromEl, toEl, apply) {
  if (!document.startViewTransition || !fromEl || !toEl) {
    apply();
    return;
  }
  fromEl.style.viewTransitionName = "page-title";
  const vt = document.startViewTransition(() => {
    fromEl.style.viewTransitionName = "";
    toEl.style.viewTransitionName = "page-title";
    apply();
  });
  vt.finished.finally(() => {
    fromEl.style.viewTransitionName = "";
    toEl.style.viewTransitionName = "";
  });
}

function route() {
  const key = location.hash.replace(/^#\/?/, "");
  if (PAGES[key]) openPage(key);
  else showHome();
}

window.addEventListener("hashchange", route);
route();

// ── Home diashow (crossfade) ───────────────────────────────────
// Slowly crossfades through the mockup photos. The incoming image fades in
// on top of the current one, so there's always a full image (no blank).
const diashowImages = [
  "Images/Mock up pics/DSC02326.png",
  "Images/Mock up pics/DSC02343.png",
  "Images/Mock up pics/DSC02354.png",
  "Images/Mock up pics/nachbearbeitung.png",
  "Images/Mock up pics/nachbearbeitung2.png",
];

(function startDiashow() {
  const layers = document.querySelectorAll("#home-diashow .diashow-layer");
  if (layers.length < 2 || diashowImages.length === 0) return;

  let idx = 0;
  let top = 0; // index of the layer currently on top
  layers[0].style.backgroundImage = `url("${diashowImages[0]}")`;
  layers[0].style.zIndex = "2";
  layers[0].style.opacity = "1";
  layers[1].style.zIndex = "1";

  const FADE = 2500; // match the CSS transition
  const HOLD = 6000; // time each photo stays before the next fades in

  setInterval(() => {
    idx = (idx + 1) % diashowImages.length;
    const cur = layers[top];
    const nxt = layers[1 - top];
    nxt.style.backgroundImage = `url("${diashowImages[idx]}")`;
    nxt.style.zIndex = "2";
    cur.style.zIndex = "1";
    void nxt.offsetWidth;
    nxt.style.opacity = "1";
    setTimeout(() => {
      cur.style.opacity = "0";
    }, FADE + 50);
    top = 1 - top;
  }, HOLD);
})();

// Hide specific parts of the native video controls (keep the rest).
// parts: "volume" | "timeline" | "fullscreen" | "playbackrate" | "download" | "pip"
function applyHideControls(video, parts) {
  parts.forEach((p) => video.classList.add("hc-" + p));
  const cl = [];
  if (parts.includes("download")) cl.push("nodownload");
  if (parts.includes("fullscreen")) cl.push("nofullscreen");
  if (parts.includes("playbackrate")) cl.push("noplaybackrate");
  if (cl.length) video.setAttribute("controlsList", cl.join(" "));
  if (parts.includes("pip")) video.disablePictureInPicture = true;
}
