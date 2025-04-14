import { NextResponse } from 'next/server';
import { getMovie, getTv } from '@/app/common/api';

export async function GET(req, { params }) {
	const { id, season, episode } = params;
	if (isNaN(parseInt(id))) {
		return NextResponse.json({ error: 'Invalid tv id' });
	}
	if (isNaN(parseInt(season))) {
		return NextResponse.json({ error: 'Invalid season number' });
	}
	if (isNaN(parseInt(episode))) {
		return NextResponse.json({ error: 'Invalid episode number' });
	}
	const output = await getTv(id, season, episode);
	return NextResponse.json(output);
}
