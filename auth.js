import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://srimyroyqasdgrbmajwk.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyaW15cm95cWFzZGdyYm1handrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxODU4NDUsImV4cCI6MjA3ODc2MTg0NX0.ydfJwywb94wEMsjS6go9GHkVs_uT8E9jUVIRHObi_Vw';

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function signUp(email, password, fullName, role = 'student') {
    const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
    });

    if (authError) throw authError;

    if (authData.user) {
        const { error: profileError } = await supabase
            .from('user_profiles')
            .insert({
                id: authData.user.id,
                email: authData.user.email,
                full_name: fullName,
                role: role,
                has_completed_survey: false
            });

        if (profileError) throw profileError;
    }

    return authData;
}

export async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) throw error;
    return data;
}

export async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
}

export async function getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}

export async function getUserProfile(userId) {
    const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

    if (error) throw error;
    return data;
}

export async function updateProfile(userId, updates) {
    const { error } = await supabase
        .from('user_profiles')
        .update(updates)
        .eq('id', userId);

    if (error) throw error;
}

export async function submitSurvey(userId, surveyData) {
    const { error } = await supabase
        .from('student_surveys')
        .insert({
            user_id: userId,
            ...surveyData
        });

    if (error) throw error;

    await updateProfile(userId, { has_completed_survey: true });
}

export function onAuthStateChange(callback) {
    return supabase.auth.onAuthStateChange((event, session) => {
        (async () => {
            await callback(event, session);
        })();
    });
}
