import { NextResponse } from 'next/server';

const posts = [
  { id: 1, title: 'First Post', content: 'This is the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the second post.' },
  { id: 3, title: 'Third Post', content: 'Another example post.' },
];

export async function GET() {
  return NextResponse.json(posts);
}
