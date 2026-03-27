// app/api/skills/[id]/route.ts
import { NextResponse } from 'next/server';

const mockSkill = {
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
};

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  // Returns mock skill data.
  return NextResponse.json({ ...mockSkill, id });
}
