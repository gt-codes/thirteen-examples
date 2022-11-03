import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export default async function middleware(req: NextRequest) {
	const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

	if (!token) {
		req.nextUrl.pathname = '/login';
		return NextResponse.redirect(req.nextUrl);
	} else return NextResponse.next();
}

export const config = {
	matcher: ['/dashboard'],
};
