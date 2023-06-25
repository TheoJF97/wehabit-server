
# Project Title

WeHabit is a social habit tracking application that helps users establish and maintain positive habits. The application allows users to create their own habits, track their progress, and spur growth through encouraging others.
## Developer Installation Instructions

**Client**

    1. Clone the repository: git clone https://github.com/TheoJF97/wehabit-client.git
    2. Navigate to the project directory: cd wehabit-client
    3. Install dependencies: npm install
    4. Set up the environment variables:
        - Create a .env file in the root directory of the project.
        - Define the required environment variables in the .env file 
            (e.g. REACT_APP_SERVER_URL=http://localhost:8080)
        - Start the development server: npm start
The client will be accessible at http://localhost:3000 in your web browser.

**Server**

    1. Clone the repository: git clone https://github.com/TheoJF97/wehabit-server.git
    2. Navigate to the project directory: cd wehabit-server
    3. Install dependencies: npm install
    4. Set up the environment variables:
        - Create a .env file in the root directory of the project.
        - Define the required environment variables as templated in the .env.example 
        - Start the development server: npm run dev
The server will be accessible at http://localhost:8080 in your web browser.



## Tech Stack

**Client:** React, HTML5, CSS3, Sass

**Server:** Node.js, Express.js, MySQL

**Tools and Libraries:** Axios, JWT, Knex, Bcrypt, CORS, Dotenv


## Features

WeHabit offers the following features to users:

    1. User Registration and Login:
        - Users can create a new account by providing their details and registering
        - Existing users can log in using their credentials
    2. Habit Tracking
        - Users can create habits 
        - Habit completion can be tracked by clicking the checkbox
    3. Social Features
        - Users view friends' habits, and provide encouragemint
## Screenshots

Screenshots can be viewed here:
- https://snipboard.io/l8KTXS.jpg


## Lessons Learned

During the development of WeHabit, several important lessons were learned and challenges overcome, such as:

- **Authentication and Authorization**: Implementing user sign-up and login functionality with authentication and authorization was a crucial aspect of the project. Understanding the concepts of user sessions, token-based authentication (JWT), and securing routes helped create a secure user experience.

- **Deployment**: Deploying the website to a live server required configuring the server environment, setting up the necessary dependencies, and ensuring proper handling of environment variables. Learning the deployment process and best practices helped in making the application accessible to users.

- **Importance of Planning**: Proper planning and defining project requirements before starting development proved to be essential. Creating wireframes, user flows, API endpoints, and outlining features and functionalities helped streamline the development process and avoid unnecessary rework.

- **User Experience and Interface Design**: Designing a website with a focus on user experience and interface played a significant role in creating an intuitive and engaging application. I've mainly had web page designs already given to me via pdf/figma so creating the design itself was a challenge.


## Next Steps
The development of WeHabit does not stop here. Here are some planned next steps and future enhancements for the application:

- **Monthly Calendar View Mode**: Introduce a monthly calendar view mode that provides an overview of habits and completion status for each day.

- **Expanded Habit Details**: Enhance the habit details section to include additional information such as a description, frequency, and goal tracking.

- **Public/Private View Mode**: Implement the ability for users to set their habits as public or private, or allowing specific people to view specific habits, giving visibility control to the user.

- **Habit Analysis**: Provide in-depth habit analysis and tracking features, including streaks tracking and visual representations of habit progress through graphs and charts.

- **Edit and Delete Habit**: Allow users to edit and delete their habits, providing flexibility in managing their habit list.

- **AccomplishMints**: Introduce an "AccomplishMint" feature, where users can share their achievements and milestones with the WeHabit community.

- **Mints Currency**: Introduce a virtual currency called "Mints" that users can earn by completing habits, receiving EncourageMints, and achieving milestones. Users can then use Mints to unlock additional features and rewards.

- **Education Section**: Incorporate an education section with articles and resources on creating and maintaining long-lasting habits, providing valuable insights and guidance to users.

These next steps will further enhance the functionality, engagement, and user experience of WeHabit, making it a comprehensive habit tracking solution.