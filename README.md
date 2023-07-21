# PWA-Text-Editor

![Screenshot](https://dochub.com/20peytra/7J4mQvgRv6o83g0Rj2pO5n/pwa-text-editor-screenshot-png?dt=uDZ_atmy7D6sSxEbPckZ)

## Description
The motivation behind building this project was to become more skilled at PWAs and to strengthen my overall knowledge of coding concepts. The purpose of this application is that it is an app that solves the problem of needing to create notes or code snippets with or without an internet connection. This simple text editor web application utilizes Progressive Web App (PWA) features, Webpack bundling, PWA Manifest, and IndexedDB (idb) for local content storage.

Check out the live demo of the application [here](https://jate-quill-892f91be6a60.herokuapp.com/).

## Table of Contents
- [Installation](#installaton)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
To run the text editor locally, follow these steps:
1. Clone the repository: `git clone git@github.com:pjt3232/PWA-Text-Editor.git`
2. Navigate to the directory: `cd PWA-Text-Editor`
3. Install dependencies: `npm install`
4. Start the development server: `npm run start`
5. Open your web browser and navigate to `https://localhost:3333`

## Usage
- Enter content info into the text-editor.
- The content is automatically saved to IndexedDB whenever you click off the DOM window.
- When you reopen the text editor, the previously saved content will be retrieved from IndexedDB.
- You can click on the "Install" button to download the web application as an icon on your desktop (PWA feature).

## Credits
This project was built using starter code from [Xandromus](https://github.com/coding-boot-camp/cautious-meme) and [Georgeyoo](https://github.com/coding-boot-camp/cautious-meme). The starter code is the second commit in my repository.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
