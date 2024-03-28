# Angular Course Summary Exercise - Job Search Website

## Server-Side Project

1. In this project, there's a service providing the following actions:
   - A function that returns a list of jobs.
   - A function that takes a username and password and returns the corresponding user object. If one of the credentials is incorrect, it returns null.

2. In the Angular client-side project, the following data models (Models) are defined:
   - Job: Job field, Job name, Hours per week, Area, Requirements, Work from home indicator.
   - User: Identifier, Username, Password, Job search field.

## Components

3. The project includes the following components:

### Main Component
   - Displays the website's header and footer.
   - Displays details of the logged-in user.
   - Displays the job field the user is searching for.
   - Displays the number of CVs already sent through the system.
   - Displays the site logo.
   - Displays contact details with the site manager.

### Login Component
   - Allows the user to log in to the system by entering a username and password.
   - Stores the user details in localStorage.
   - Shows an error message if the input is invalid.
   - Redirects the user to the job list page after successful login.

### Job List Component
   - Displays a filtered list of jobs.
   - Shows details of each job and an option to view additional information.
   - Allows the user to send a CV to the company that posted the job.

## Debugging and Documentation
4. All logic is encapsulated in services and treats data cleanly and neatly.
5. Pipes or custom directives are used for special capabilities.

