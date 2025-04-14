import { NextResponse } from 'next/server';
import { getMovie } from '@/app/common/api';

export async function GET(request, { params }) {
	const { id } = await params;
	return new NextResponse(JSON.stringify(await getMovie(id)), {
		status: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type'
		}
	});
}
