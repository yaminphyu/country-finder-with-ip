import { NextResponse } from 'next/server';
import axios from 'axios';

// const IPINFO_API_KEY = process.env.IPINFO_API_KEY;
const IPINFO_API_KEY = '3600309447701f';

export async function GET(request) {
    if (!IPINFO_API_KEY) {
        return NextResponse.json({ error: 'IPINFO_API_KEY is not defined' }, { status: 500 });
    }

    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || request.ip;

    if (!ip) {
        return NextResponse.json({ error: 'IP address not found' }, { status: 400 });
    }

    try {
        const response = await axios.get(`https://ipinfo.io/${ip}?token=${IPINFO_API_KEY}`);
        const { country } = response.data;

        return NextResponse.json({ country }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Unable to fetch geolocation data' }, { status: 500 });
    }
}