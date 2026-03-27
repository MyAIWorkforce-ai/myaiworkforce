// app/api/skills/route.ts
import { NextResponse } from 'next/server';

const mockSkills = [
  {
    id: '1',
    title: 'Sales GPT',
    description: 'A GPT that helps you write sales emails.',
    price: 1000, // in cents
    isFree: false,
    category: 'Sales',
    tags: ['sales', 'gpt', 'email'],
    author: {
        username: 'testuser'
    }
  },
  {
    id: '2',
    title: 'Marketing GPT',
    description: 'A GPT that helps you write marketing copy.',
    price: 1000, // in cents
    isFree: false,
    category: 'Marketing',
    tags: ['marketing', 'gpt', 'copywriting'],
    author: {
        username: 'testuser'
    }
  },
];


export async function GET() {
  // Returns mock skill data based on the schema.
  return NextResponse.json(mockSkills);
}

export async function POST(request: Request) {
    // TODO: Verify user auth
    // TODO: Upload file to Supabase Storage
    // TODO: Create skill record in Supabase DB
    // For now, return the received data as confirmation
    const data = await request.json();
    return NextResponse.json(data, { status: 201 });
}
