# HTTP Requests in React

## Understanding HTTP Requests and Responses

HTTP (Hypertext Transfer Protocol) is how browsers and servers communicate. When your React app needs data from a server or API, it makes an HTTP request and receives an HTTP response.

### The Request

An HTTP request consists of:

**URL (Uniform Resource Locator):** The address of the resource you want to access.
```
https://api.example.com/users/123
```

**Method:** The type of action you want to perform:
- **GET** - Retrieve data (most common)
- **POST** - Create new data
- **PUT** - Update existing data
- **DELETE** - Remove data
- **PATCH** - Partially update data

**Headers:** Metadata about the request (content type, authentication, etc.):
```
Content-Type: application/json
Authorization: Bearer abc123token
```

**Body:** The data you're sending (for POST, PUT, PATCH):
```json
{
  "name": "Alice",
  "email": "alice@example.com"
}
```

### The Response

The server sends back a response containing:

**Status Code:** A number indicating success or failure:
- **200-299** - Success (200 OK, 201 Created)
- **300-399** - Redirection
- **400-499** - Client errors (400 Bad Request, 401 Unauthorized, 404 Not Found)
- **500-599** - Server errors (500 Internal Server Error)

**Headers:** Metadata about the response (content type, caching info, etc.)

**Body:** The actual data, usually in JSON format:
```json
{
  "id": 123,
  "name": "Alice",
  "email": "alice@example.com"
}
```

## The Fetch API

The Fetch API is built into modern browsers and is the standard way to make HTTP requests in React. No installation required.

### Basic GET Request with Async/Await

```jsx
import { useState, useEffect } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch('https://api.example.com/user/123');
        
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchUser();
  }, []);
}
```

## POST Request (Creating Data)

```jsx
async function createUser(name, email) {
  try {
    const response = await fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    });

    if (!response.ok) {
      throw new Error('Failed to create user');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error:', err.message);
    throw err;
  }
}
```

## PUT Request (Updating Data)

```jsx
async function updateUser(userId, updatedData) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData)
    });

    if (!response.ok) {
      throw new Error('Failed to update user');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error:', err.message);
    throw err;
  }
}
```

## DELETE Request

```jsx
async function deleteUser(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Failed to delete user');
    }

    console.log('User deleted');
  } catch (err) {
    console.error('Error:', err.message);
    throw err;
  }
}
```

## Common Patterns

### Fetching on Component Mount

Use `useEffect` with an empty dependency array to fetch data once when the component loads:

```jsx
useEffect(() => {
  fetchData();
}, []); // Empty array = run once on mount
```

### Fetching Based on Props or State

Include dependencies in the array to refetch when they change:

```jsx
useEffect(() => {
  fetchUser(userId);
}, [userId]); // Refetch when userId changes
```

### Headers for Authentication

Include authentication tokens in headers:

```jsx
const response = await fetch('https://api.example.com/protected', {
  headers: {
    'Authorization': `Bearer ${authToken}`,
    'Content-Type': 'application/json'
  }
});
```

## Checking Response Status

Always check if the response was successful:

```jsx
if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}
```

The `response.ok` property is `true` for status codes 200-299.

## Parsing Response Data

Common response parsing methods:

```jsx
const jsonData = await response.json();     // Parse JSON
const textData = await response.text();     // Get as text
const blobData = await response.blob();     // Get as binary
```

Most APIs return JSON, so `response.json()` is most common.

## Working with Response Objects

The response object provides several useful properties and methods:

### Checking Status

```jsx
const response = await fetch('https://api.example.com/users');

console.log(response.status);      // Status code: 200, 404, 500, etc.
console.log(response.statusText);  // Status text: "OK", "Not Found", etc.
console.log(response.ok);          // true for 200-299, false otherwise

// Check for specific status codes
if (response.status === 404) {
  console.log('Resource not found');
}

if (response.status === 401) {
  console.log('Unauthorized - need to login');
}
```

### Reading Headers

```jsx
const response = await fetch('https://api.example.com/users');

// Get a specific header
const contentType = response.headers.get('Content-Type');
const authToken = response.headers.get('Authorization');

// Check if header exists
if (response.headers.has('X-Custom-Header')) {
  console.log('Custom header present');
}

// Iterate through all headers
response.headers.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
```

### Other Useful Properties

```jsx
console.log(response.url);         // Final URL (after redirects)
console.log(response.redirected);  // true if redirected
console.log(response.type);        // 'basic', 'cors', 'error', etc.
```

## Alternative Libraries

While Fetch API is built-in and sufficient for most cases, these libraries offer additional features:

**Axios:** Popular HTTP client with cleaner syntax and more features
- Automatic JSON parsing
- Request/response interceptors
- Better error handling
- Timeout support

**React Query (TanStack Query):** Advanced data fetching with caching
- Automatic caching and background updates
- Loading and error states managed automatically
- Pagination and infinite scroll support
- Optimistic updates

**SWR:** Similar to React Query, created by Vercel
- Stale-while-revalidate strategy
- Automatic revalidation
- Built-in cache

For learning React, stick with the Fetch API. Consider libraries for production apps with complex data fetching needs.
