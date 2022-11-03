import { supabase } from '../utils/supabase';

type Data = {
	message: string;
	author: number;
};

export const addMessage = async (input: Data, refresh: () => void) => {
	const { data, error } = await supabase.from('messages').insert([input]);
	refresh();
};
