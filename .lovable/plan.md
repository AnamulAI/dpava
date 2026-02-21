

## Fix Admin Login Loading Problem

### Root Cause

After `signInWithPassword()` succeeds, two things happen simultaneously:
1. The `signIn` method calls `checkAdmin()` (via `supabase.rpc("is_admin")`)
2. The `onAuthStateChange` listener fires and also calls `checkAdmin()`

These concurrent RPC calls and state updates can cause the login flow to hang, leaving the spinner stuck indefinitely.

### Solution

Simplify the auth flow to avoid the race condition:

1. In the `onAuthStateChange` handler, avoid calling the RPC during the initial sign-in event -- let the `signIn` method handle it
2. In the `signIn` method, after the admin check passes, directly update the context state (`setUser`, `setIsAdmin`) so the navigation works immediately without waiting for `onAuthStateChange`
3. Add a `setTimeout` wrapper around the `checkAdmin` call in `onAuthStateChange` to defer it slightly (Supabase best practice to avoid async deadlocks inside the listener callback)

### File Changes

**`src/contexts/AuthContext.tsx`** -- Fix the race condition:

- Wrap the async work inside `onAuthStateChange` with `setTimeout` to avoid blocking the Supabase auth flow (per Supabase docs, the callback should not perform long async operations synchronously)
- In the `signIn` method, after successful admin check, set `user` and `isAdmin` state directly so `ProtectedRoute` immediately allows access
- Keep `getSession` for initial page load (session restore)

### Technical Details

The key change in `onAuthStateChange`:
```text
Before: async callback directly awaits checkAdmin (can deadlock)
After:  callback sets user immediately, defers admin check via setTimeout
```

The key change in `signIn`:
```text
Before: only calls checkAdmin, relies on onAuthStateChange to set state
After:  calls checkAdmin AND sets user/isAdmin state directly
```
