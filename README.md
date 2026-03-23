# YouTube Clone Web Application

## Overview

This project is a YouTube-inspired web application built using HTML, CSS, and JavaScript. It demonstrates core frontend development concepts such as dynamic rendering, CRUD operations, API integration, and client-side state management.

The application includes a video browsing section and a music library with full CRUD functionality.

---

## Features

### Video Module

* Fetches and displays videos using the Pexels API
* Renders video thumbnails with playback support
* Dynamically generates video cards

### Music Library

* Add music entries with title, artist name, and YouTube link
* View music in a structured card layout
* Edit entries using inline input fields (no popup)
* Delete entries with confirmation dialog
* Open music links in a new browser tab

### Search

* Real-time filtering of music data
* Supports search by title and artist name

### User Interface

* Sidebar navigation with toggle functionality
* Navbar with integrated search
* Card-based responsive layout

### Authentication

* Basic login state handled using LocalStorage
* Redirects unauthorized users to login page

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* LocalStorage (client-side persistence)
* Pexels API (video content)

---

## Project Structure

```
project/
│
├── index.html        # Video page
├── music.html        # Music library
├── login.html        # Login page
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── assets/
│   └── images/
```

---

## Application Flow

### CRUD Operations

```
User Action → Update Data Array → Save to LocalStorage → Render UI
```

### Search Functionality

```
User Input → Filter Data → Render Filtered Results
```

### Video Data Fetching

```
API Request → Receive Data → Render Video Cards
```

---

## Key Concepts

* DOM manipulation
* Event handling
* Event propagation control
* Array methods (map, filter)
* Template literals
* Async/await for API calls
* LocalStorage for state persistence

---

## Future Improvements

* Integrated media player
* Pagination or infinite scrolling
* Favorites or bookmarking feature
* Backend integration with database
* User authentication system

---

## Author

Salamonraja P
LinkedIn profile : https://www.linkedin.com/in/salamonrajap/

---

## License

This project is intended for educational purposes only.

