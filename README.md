College Project
Overview

This project is a React application designed to manage and display faculty and student information. It includes several components that together provide functionality for login, navigation, and displaying content.
Component Breakdown
1. Nav Component

    Purpose: Provides navigation links or a navigation bar for easy access to different sections of the application.
    Location: Typically located at the top of the application.
    Features: Includes links to navigate between the Home, Login, and Faculty Login pages.

2. Home Component

    Purpose: Displays the main landing page of the application.
    Features: Contains a video carousel for showcasing featured content or videos.
    Data Source: Uses local data or content fetched from an API.

3. News Component

    Purpose: Displays news updates or announcements on the Home page.
    Data Source: Fetches data from local data files or a backend API.
    Features: Presents news items in a structured format.

4. Login Component

    Purpose: Default login page for students.
    Features:
        Allows students to log in using their email and password.
        Provides form validation and error handling.
        Redirects to the main application after successful login.

5. Flogin Component

    Purpose: Login page specifically for faculty members.
    Features:
        Contains fields for faculty login with email and password.
        Includes a button to toggle password visibility.
        Provides a link to switch to the student login page.
    Styling: Uses custom styles for layout and background images.

6. Post-Login Components

After logging in, the application presents two main components:
6.1 Infor Component

    Purpose: Serves as a side navigation bar or additional navigation features.
    Features:
        Provides links or options to navigate to different sections of the application.
        Includes links to the FacultyInfo and Studing components.

6.2 Student Profile Component

    Purpose: Displays detailed student information.
    Contains Two Subcomponents:
        FacultyInfo Component:
            Purpose: Displays information related to faculty members.
            Features: Shows faculty details and relevant information.
        Studing Component:
            Purpose: Displays student-related information.
            Features: Presents details about students and their academic progress.

            
    HOW TO RUN:

    Install Dependencies: Run npm install or yarn install to install the required dependencies.
    Start the Development Server: Run npm start or yarn start to start the development server.
    Open the Application: Navigate to http://localhost:3000 in your web browser.
