const SUPABASE_URL = 'https://nxtckliabtixkexceffw.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54dGNrbGlhYnRpeGtleGNlZmZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk2Mzg5MTgsImV4cCI6MTk3NTIxNDkxOH0.cjq0XpKdcTVMbEd38x6tI54kqPmiTVNNM5zI8-p7k5c';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getRoster() {
    // from the roster table, select all items
    const response = await client.from('roster').select('*');
    // and return the response
    if (response.error) {
        throw new Error(response.error.message);
    }
    return response.data;
}

export async function getPlayer(id) {
    // from the roster table, select a single player who has the matching id
    const response = await client.from('roster').select('*').match({ id }).single();
    // and return the response
    if (response.error) {
        throw new Error(response.error.message);
    }
    return response.data;
}