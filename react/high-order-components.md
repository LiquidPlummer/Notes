# Higher-Order Components (HOCs)

## What Are HOCs?

**Higher-Order Components (HOCs)** are functions that take a component and return a new component with additional props or behavior. They're a pattern for reusing component logic.

**Basic concept:**
```jsx
const EnhancedComponent = higherOrderComponent(OriginalComponent);
```

HOCs don't modify the original component - they wrap it to add functionality.

## Example: Adding Loading State

```jsx
function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
}

// Original component
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

// Enhanced component with loading behavior
const UserListWithLoading = withLoading(UserList);

// Usage
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  
  return <UserListWithLoading isLoading={isLoading} users={users} />;
}
```

## Common Use Cases (Historical)

Before Hooks, HOCs were used for:
- Adding authentication checks
- Injecting data from APIs
- Adding loading/error states
- Connecting to global state (like Redux's `connect()`)
- Adding analytics or logging

## Why HOCs Existed

Before React 16.8 (2019) introduced Hooks, HOCs were the primary way to share logic between components without duplicating code. They solved the problem of reusing stateful logic.

## HOCs Today: Legacy Pattern

**HOCs are now considered a legacy pattern.** You should not write new HOCs. Instead, use **custom Hooks** for sharing logic.

**Why Hooks replaced HOCs:**
- Simpler syntax
- No wrapper hell (multiple HOCs create deep nesting)
- Easier to understand and debug
- More composable
- Better TypeScript support

## Where You'll Still See HOCs

You'll encounter HOCs in:
- Older codebases (pre-2019)
- Some libraries (React Router's old `withRouter`, Redux's `connect`)
- Legacy tutorials and Stack Overflow answers

When you see an HOC in existing code, understand what it does, but prefer Hooks for new code.

## Modern Alternative: Custom Hooks

Instead of an HOC, use a custom Hook:

```jsx
// Old way: HOC
const UserListWithLoading = withLoading(UserList);

// Modern way: Custom Hook
function UserList() {
  const { data: users, isLoading } = useUsers();
  
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

function useUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchUsers().then(data => {
      setUsers(data);
      setIsLoading(false);
    });
  }, []);
  
  return { data: users, isLoading };
}
```

The Hook approach is cleaner and more readable.

## Key Takeaways

- HOCs are functions that wrap components to add behavior
- They were the standard pattern before Hooks
- They're now considered legacy - use custom Hooks instead
- You'll see them in older code and some libraries
- Don't write new HOCs - use Hooks for sharing logic
