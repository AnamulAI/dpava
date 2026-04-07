
-- Enable pg_cron extension
CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA extensions;

-- Schedule a keep-alive job every 4 days
SELECT cron.schedule(
  'keep-alive-ping',
  '0 0 */4 * *',
  'SELECT 1'
);
