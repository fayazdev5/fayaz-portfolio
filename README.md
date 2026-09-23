# Fayaz Ahmed — Portfolio

A personal developer portfolio built with Flask, HTML, CSS and vanilla JavaScript.

## Run it

```bash
pip install -r requirements.txt
python app.py
```

Then open http://127.0.0.1:5000 in your browser.

## Structure

```
portfolio/
├── app.py
├── requirements.txt
├── templates/
│   └── index.html
└── static/
    ├── css/style.css
    ├── js/script.js
    ├── images/profile.jpg      ← your real photo (already in place)
    └── files/Fayaz_Ahmed_Resume.pdf
```

## Before you deploy

- **GitHub / LinkedIn links** — the contact section currently has placeholder `#` links
  for GitHub and LinkedIn (search `href="#"` in `templates/index.html`, inside
  `.contact-links`). Drop your real profile URLs in.
- **Resume** — `static/files/Fayaz_Ahmed_Resume.pdf` is wired up to the "Download resume"
  link in the About section. Replace the file to update it.
- **Photo** — `static/images/profile.jpg` is already your real photo.
