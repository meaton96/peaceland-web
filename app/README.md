
# Website for [Peaceland Game](https://github.com/Peaceland-Game/Peaceland)

This website uses [react](https://react.dev/learn) for its front end, written in JSX, and a [Strapi](https://docs.strapi.io/dev-docs/intro) content management system (CMS) hosted on an Ubuntu server.

Back-end deployment and database management questions should be answered by the Strapi docs.
Deployment guide for Digital Ocean (Ubuntu server): [here](https://docs.strapi.io/dev-docs/deployment/digitalocean)

Other questions can be sent to me3870@rit.edu

---

Almost all content is delivered via the Strapi content management system using the REST API. 

The site is designed to not have to be modified structurally very often. 

The following can be done in the CMS:

- Change/add/remove all images and the splash video
- Add info boxes to the home page between the splash video and image gallery
- Add/remove/edit news articles or devblog posts 
- Add/remove/edit team member names and info

The following needs to be done by editing the source code and rebuilding the webpage

- Add/remove pages (eg. about/history page/play/download)
- change color scheme
- adjust styles/function of components

---
## Source Documentation

Components:
### Header
### Homepage
- Splash.jsx
- ArtInfoDisplay.jsx
- ArtAndInfoBox.jsx
- ImageGallery.jsx
### Play (unused)
### History (unused)
### News
- News.jsx
- NewsCard.jsx
- NewsModal.jsx
### Team
- Team.jsx
- TeamMemberCard.jsx
### Footer

---
REST API calls are handled in the ajax.cjs file

Styles are a mix of css with scss variables and Bulma. 
The primary color scheme is definited in src/colors.scss
Most of the layout is done with Bulma styles.
[Bulma documentation](https://bulma.io/documentation/)

