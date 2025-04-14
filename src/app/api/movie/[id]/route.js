import { NextResponse } from "next/server";
import { getMovie } from '@/app/common/api';

export async function GET(request, { params }) {
  const { id } = await params;
	return NextResponse.json(await getMovie(id));
}
