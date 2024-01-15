https://dev.to/frontendengineer/10-reactjs-coding-exercises-with-codepen-exercise-and-solution--22k7
https://reactchallenges.live/dashboard/overview
https://codeinterview.io/blog/reactjs-coding-interview-questions/
https://www.codevertiser.com/free-reactjs-coding-challenges-for-responsive-UI/
https://profy.dev/article/react-coding-challenges

The React.js assessment evaluates a candidate's proficiency in using the React.js library for building user interfaces. It assesses their understanding of React.js concepts, component-based architecture, state management, and JSX syntax. Here the Talent needs to implement a React Component that renders a running clock counting time down until 0 seconds.

1. Build a User Registration Form
   Create a user registration form with fields for username, email, and password. Validate inputs and display appropriate error messages.

Skills tested: Form handling, input validation, state management
Difficulty: Easy
Tasks:

Implement the user registration form UI
Validate the form inputs and display error messages
Integrate form submission with a mock API call (simulated delay).
Add a success message upon successful registration
Hints:

Create a controlled form component with state to manage input values.
Use regular expressions or a library like Yup for input validation.

---

2. Create a Responsive Navbar
   Design a responsive navigation bar with options for home, about, services, and contact. Ensure it adapts well to different screen sizes.

Skills tested: CSS, responsive design, React component composition
Difficulty: Medium
Tasks:

Implement the responsive navigation bar UI.
Ensure it collapses into a hamburger menu on smaller screens.
Add functionality to navigate between pages.
Hints:

Use CSS flexbox or grid for layout.
Utilize React Router for page navigation.

---

3. Todo List with Local Storage
   Build a to-do list that allows users to add, edit, and remove tasks. Persist the tasks using local storage.

Skills tested: Local storage, state management, CRUD operations
Difficulty: Medium
Tasks:

Create the todo list UI with options to add, edit, and delete tasks.
Implement local storage to persist tasks across page refreshes.
Add functionality to mark tasks as completed.
Hints:

Use React state to manage the list of tasks.
Utilize the local Storage API to store and retrieve tasks.

---

4. Accordion Component
   Design an accordion component that allows users to expand and collapse sections to view content.

Skills tested: React component composition, state management
Difficulty: Easy – Medium
Tasks:

Implement the accordion component UI.
Ensure only one section can be expanded at a time.
Add animations for smooth transitions.
Hints:

Use React state to track the active section.
CSS transitions or animations can be used for visual effects.

---

5. Sortable List
   Create a list of items that users can drag and drop to reorder. Update the list order dynamically.

Skills tested: Drag-and-drop, state management, reordering operations
Difficulty: Medium – Hard
Tasks:

Implement the sortable list UI.
Add drag-and-drop functionality to allow users to reorder items.
Update the list order in real-time
Hints:

Consider using a library like react-dnd for drag-and-drop functionality.
Use React state to manage the list order.

---

6. Pagination Component with API Integration
   Build a pagination component that fetches and displays data from an API, showing a fixed number of items per page.

Skills tested: API integration, state management, pagination logic
Difficulty: Medium
Tasks:

Implement the pagination component UI.
Fetch data from a mock API (simulated delay)
Display a fixed number of items per page and update pagination controls accordingly
Hints:

Use React state to manage the current page and total number of items.
Fetch data from a mock API using fetch or a library like Axios.

---

7. Image Carousel
   Design an image carousel that allows users to navigate through a collection of images.

Skills tested: React component composition, state management, event handling
Difficulty: Medium
Tasks:

Implement the image carousel UI.
Add navigation controls (previous/next).
Allow users to click on individual images to navigate.
Hints:

Use React state to track the current image index.
Utilize event handlers to handle navigation.

---

8. User Authentication with Firebase
   Create a user authentication system using Firebase, including sign up, log in, and log out functionality.

Skills tested: Firebase authentication, form handling, state management
Difficulty: Medium
Tasks:

Implement the authentication forms (sign up, log in, log out).
Integrate Firebase authentication services.
Add user authentication state management.
Hints:

Use Firebase SDK for authentication services.
Use React state to manage user authentication state.

---

9. Interactive Map with Markers
   Integrate a map component (e.g., Google Maps, Mapbox) and allow users to add and remove markers.

Skills tested: Map integration, state management, event handling
Difficulty: Medium – Hard
Tasks:

Implement the interactive map UI
Allow users to add and remove markers on the map
Update marker positions in real-time
Hints:

Utilize the API of the chosen map component for adding and removing markers
Use React state to manage the list of markers

---

10. E-commerce Product Filter
    Build a product filtering component that allows users to filter products by categories, price range, and ratings.

Skills tested: Filtering logic, state management, event handling
Difficulty: Medium
Tasks:

Implement the product filter UI.
Add functionality to filter products based on selected criteria.
Update the product list dynamically.
Hints:

Use React state to manage the selected filter criteria.
Implement filtering logic based on the selected criteria.

---

11. Weather App with External API
    Build a weather application that fetches and displays the current weather conditions for a user's location using an external API.

Skills tested: API integration, state management, conditional rendering
Difficulty: Medium
Tasks:

Implement the weather app component UI.
Fetch weather data from an external API (e.g., OpenWeatherMap).
Display the current weather conditions.
Hints:

Use React state to manage the weather data.
Fetch data from the API using fetch or a library like Axios.

---

12. Infinite Scroll Gallery with Lazy Loading
    Build an image gallery that loads more images as the user scrolls down the page. Implement lazy loading for improved performance.

Skills tested: Infinite scroll, lazy loading, API integration
Difficulty: Medium - Hard
Tasks:

Implement the infinite scroll gallery UI.
Fetch more images as the user scrolls down the page.
Implement lazy loading for images.
Hints:

Use React state to manage the list of loaded images.
Use Intersection Observer API for lazy loading.

---

13. Blog Post Editor with Markdown Support
    Create a blog post editor that allows users to write and preview blog posts with Markdown syntax.

Skills tested: Markdown parsing, state management, real-time preview
Difficulty: Medium
Tasks:

Implement the blog post editor UI with separate input and preview panes.
Parse Markdown syntax for real-time preview.
Hints:

Use a Markdown parsing library (e.g., marked.js) to convert Markdown to HTML.
Use React state to manage the editor content.

---

14. Real-time Chat Application with Socket.IO
    Develop a real-time chat application using React and Socket.IO for real-time updates.

Skills tested: Socket.IO integration, real-time updates, state management
Difficulty: Medium - Hard
Tasks:

Implement the chat application UI with a message input and message display area.
Integrate Socket.IO for real-time communication.
Display new messages in real-time.
Hints:

Use Socket.IO for server-client communication.
Use React state to manage the list of messages.

---

15. Quiz App with Timer
    Create a quiz application with a timer that counts down as users answer questions. Display results at the end.

Skills tested: Timer implementation, state management, quiz logic
Difficulty: Medium - Hard
Tasks:

Implement the quiz application UI with questions and multiple-choice options.
Add a countdown timer that starts when the quiz begins.
Calculate and display results at the end
Hints:

Use React state to manage the quiz state and timer.
Use JavaScript's setInterval for timer functionality.

---

Challenge #1: Text Analyzer Tool
It is an easy challenge in which you have to build logic for a text analyzer that will count the number of words, letters, paragraphs, and more of the text written in the textarea.

---

Challenge #2: React Password Generator
The React Password Generator challenge is suitable for beginner React developers who are struggling to write logic in ReactJS. In this challenge, you will develop logic for a password generator, including options for creating and validating a password with a specified strength, copying the password, and passwords with desired characters.

---

Challenge #3: Random Quote Generator
Challenge yourself to build a random quote generator using ReactJS and showcase your front-end development skills. Flourish your creativity with this fun code challenge! This challenge differs slightly from Text Analyzer and Password Generator because you need to fetch data from json-server using Axios.

---

Challenge #4: CRUD Typescript Tasklist App
This React Typescript Tasklist/Todo challenge requires you to perform CRUD operations with instructions to write clean, reusable, manageable, and scalable code. This challenge is different and more challenging than the last three challenges you have completed. If you can complete this ReactJS Typescript Tasklist challenge independently, you can be easily hired as an intern/junior React developer.

---

Challenge #5: React Memory Game
Do you wonder how Memory Game logic works or want to write your own using ReactJS? This challenge is specially designed to test your JavaScript and React logics.
