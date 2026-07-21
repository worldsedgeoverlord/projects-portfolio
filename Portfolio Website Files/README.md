# joshuasookoo.dev — portfolio site

Plain HTML/CSS/JS, no build step. Three files do all the work:

- `index.html` — page structure
- `styles.css` — all styling, colors, and animations
- `script.js` — project data + interactivity

## Put this on GitHub Pages

1. Create a new repo on GitHub (e.g. `portfolio`).
2. Push these files to the repo root:
   ```
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Save.
5. GitHub gives you a URL like `https://<your-username>.github.io/<repo-name>/`
   after a minute or two. You can add a custom domain in the same Pages
   settings screen later if you want.

## Add a new project later

Everything lives in `script.js`, at the top, in the `projects` array.

1. Open `script.js`.
2. Copy the block between the `TEMPLATE` markers.
3. Paste it into the `projects` array and fill in the fields.
4. Put any images in a new folder: `assets/images/<your-project-id>/`.
5. List their paths in the project's `images` array.
6. Save and refresh — the tab and detail panel appear automatically.

No HTML or CSS edits are needed to add a project.

## Add your real images

The `assets/images/` folder has one subfolder per current project
(`manatee-domgas`, `campari`) plus a `template-project` folder to copy for
new ones. Drop photos, screenshots, panel drawings, or HMI captures in the
matching folder, then reference them in `script.js` as shown above.

## Update your contact links

In `index.html`, find the `<!-- TODO: replace with your real details -->`
comment inside the `#contact` section and swap in your email, LinkedIn, and
GitHub URLs.
