-- Drop the existing overly permissive INSERT policy
DROP POLICY IF EXISTS "Public can create contact submissions" ON public.contact_submissions;

-- Create a new INSERT policy with field validation
CREATE POLICY "Public can create contact submissions"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  full_name IS NOT NULL AND length(trim(full_name)) > 0 AND length(full_name) <= 100
  AND email IS NOT NULL AND length(trim(email)) > 0 AND length(email) <= 255 AND email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND message IS NOT NULL AND length(trim(message)) > 0 AND length(message) <= 1000
  AND (company_name IS NULL OR length(company_name) <= 100)
  AND (service_needed IS NULL OR length(service_needed) <= 200)
  AND (vessel_count IS NULL OR (vessel_count >= 0 AND vessel_count <= 1000))
  AND notes IS NULL
  AND status = 'new'
);