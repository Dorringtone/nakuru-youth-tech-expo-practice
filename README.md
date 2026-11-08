# Nakuru Youth Tech Expo

Group A's three-page class project for a fictional technology and careers expo on Saturday, 5 December 2026. The programme runs from 9:00 AM to 3:30 PM Kenya time.

- [Home](index.html): expo overview, highlights and a live countdown.
- [Programme](programme.html): schedule and six innovator profiles, each with a proposed talk topic.
- [Register](register.html): demo registration form, expandable FAQ and a WhatsApp contact link. The form does not save registrations.

The proposed topics are for the classroom exercise. The profiles do not indicate confirmed speakers. Keep this copy within the class unless permission to publish the profiles and portraits has been obtained.

## Run locally

Open the extracted folder in VS Code and run this from its terminal:

```sh
python -m http.server 8000
```

Open <http://localhost:8000/>. On Windows, try `py -m http.server 8000` if `python` is unavailable. You can also open `index.html` directly in a browser.

## Final checks

| Width | Check |
| --- | --- |
| 375 px | Menu starts closed; the hero, profiles, form and FAQ stack; the page does not scroll sideways. |
| 768 px | Navigation links are visible and the profiles use two columns. |
| 1280 px | Home shows the image beside the countdown, Programme uses three profile columns, and Register puts the FAQ beside the form. |

On each page, press **Tab** to reveal **Skip to main content**, then **Enter** to jump past the navigation. At 375 px, open **Menu**, tab to a link, and press **Escape**; the menu should close and focus should return to its button. On Programme, check **Back to top**. On Register, try the FAQ with Enter or Space and use sample details to check form validation. Check the browser Console for errors.

## Contribution log

Before submission, replace the placeholders with actual contributions. Add one row per contribution and include a commit reference where available.

| Date | Name | Work completed | Commit or evidence |
| --- | --- | --- | --- |
| YYYY-MM-DD | Member name | Describe the work completed | Commit, file or test result |

## Submission

- Team repository link and optional live site link, if approved for publication.
- Final Home screenshots: `home-375px.png`, `home-768px.png` and `home-1280px.png`.
- Completed contribution log and the names of the members presenting each part.
