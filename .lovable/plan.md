

## Add Supabase Auth-Based Admin Authentication

### Overview

Implement a protected `/admin` area with email/password login using Supabase Auth. Only users listed in the existing `public.admins` table can access the admin area. No signup flow -- admin accounts are created manually via the Supabase Dashboard.

### What Gets Created

**New files (5):**

1. `src/contexts/AuthContext.tsx` -- Auth context provider that wraps admin routes, manages session state via `onAuthStateChange`, and exposes `user`, `isAdmin`, `loading`, `signIn`, `signOut`
2. `src/pages/AdminLogin.tsx` -- Email + password login form at `/admin/login`. On successful login, checks the `admins` table; if user is not an admin, signs them out and shows "Access denied"
3. `src/pages/AdminDashboard.tsx` -- Placeholder admin dashboard at `/admin` with a welcome message and logout button
4. `src/components/admin/ProtectedRoute.tsx` -- Route guard component that redirects to `/admin/login` if not authenticated or not an admin
5. `src/components/admin/AdminLayout.tsx` -- Minimal layout wrapper for admin pages (header with logo + logout button)

**Modified files (1):**

1. `src/App.tsx` -- Add routes for `/admin/login` and `/admin` (wrapped in `AuthContext` and `ProtectedRoute`)

### Authentication Flow

```text
User visits /admin
  --> ProtectedRoute checks session
    --> No session? Redirect to /admin/login
    --> Has session? Query admins table for user_id
      --> Not in admins table? Sign out + show "Access denied"
      --> In admins table? Render AdminDashboard
```

### Technical Details

**AuthContext (`src/contexts/AuthContext.tsx`):**
- Sets up `onAuthStateChange` listener BEFORE calling `getSession()` (per Supabase best practices)
- On session change, queries `public.admins` where `user_id = session.user.id`
- Exposes: `user`, `isAdmin`, `loading`, `signIn(email, password)`, `signOut()`
- `signIn` method: calls `supabase.auth.signInWithPassword`, then checks admins table; if not admin, calls `signOut()` and throws error

**AdminLogin (`src/pages/AdminLogin.tsx`):**
- Simple form with email and password fields using existing UI components (Input, Button, Card)
- Shows error messages for invalid credentials or "Access denied" for non-admin users
- On successful admin login, redirects to `/admin` via `useNavigate`
- No signup link, no forgot password link

**ProtectedRoute (`src/components/admin/ProtectedRoute.tsx`):**
- Reads auth state from `AuthContext`
- While loading: shows a spinner
- If no user or not admin: redirects to `/admin/login`
- If authenticated admin: renders `children`

**AdminLayout (`src/components/admin/AdminLayout.tsx`):**
- Minimal header with "DPA Admin" branding and logout button
- No navigation to public site pages (keeps admin area separate)

**App.tsx changes:**
- Wrap `/admin/*` routes in `AuthContext.Provider`
- `/admin/login` renders `AdminLogin` (no protection needed)
- `/admin` renders `ProtectedRoute > AdminLayout > AdminDashboard`
- All existing public routes remain completely unchanged

### Security Notes

- Admin check uses the existing `is_admin()` security definer function server-side via RLS
- Client-side admin check queries `admins` table (protected by RLS -- only admins can SELECT from it)
- Since non-admins cannot read the `admins` table, the client will use `supabase.rpc('is_admin')` to check admin status instead, which works for any authenticated user
- No roles stored in localStorage or client state -- always verified against the database
- No signup page prevents unauthorized account creation
- Non-admin users are immediately signed out after the check

### How to Create Your First Admin

After this is deployed, you need to:
1. Go to the Supabase Dashboard > Authentication > Users
2. Click "Add user" and create a user with email + password
3. Go to SQL Editor and run: `INSERT INTO public.admins (user_id, email) VALUES ('<user-uuid>', '<email>');`
4. You can now log in at `/admin/login`

