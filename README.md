_**ECG React Frontend**_
- Written in Javascript using React.js. 
- Graphical User Interface designed using Google's Material UI CSS Library.
- Authentication implemented using Java Web Token stored in LocalStorage. 
- Also includes JWT Refresh token implementation which utilisied axios interceptors (found within the api.js file) to ensure users can maintain a uninterrupted authenticated session (for 24 hours). 
- Axios interceptors are used to check JWT expiration. 
- If JWT expiration has occured, users are automatically logged out with their location saved. 

_**Overall Architecture**_
- Implemented using Single Page Application (SPA) design pattern. This means that the web application has a singular HTML page (index.html) which is initially loaded and not reloaded during use. Throughout a user’s interaction, the application dynamically rewrites and updates the users current page rather than loading a new page from a server.
- Designed to ensure that client-side routing (found in App.js), component rendering (found in components directory) and services for interacting with the API (found in services directory) can be built independently and in isolation.
- All directories are descriptive to show what functionality they provide. 

_**CI/CD**_
- Contains a .env file (not present in this repository) to contain environment variables which are injected during runtime. Most important variable being the NODE_ENV which I have configured to either be test or production. 
- Dockerfile is used to build a container which is used for deployment to production (server provided by Charles Gillan). 
- Deployment pipeline configured in gitlab-ci.yml file. Pipeline contains 3 main jobs; lint code, test code and deployment (deployment is configured using SSH within Gitlab runner to automate deployment to server on each commit to master branch).

_**Usage & Deployment**_
- Application was fully deployed.
- Note that it is was only accessible within the QUB VPC.
