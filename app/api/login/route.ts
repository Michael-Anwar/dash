import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const mockUser = {
    email: 'mikelhfzy@gmail.com',
    password: '123',
    name: 'Test User',
    token: 'abc123',
    profilePic: 'https://lh3.googleusercontent.com/ogw/AF2bZyjInrrL2xi_qtGgnlNHqrVU0qZiZaFExokg-VrRhQ5jxJ4=s32-c-mo', // URL to a profile picture
    userType: 'admin', 
    status: 'active',
  };

  if (email === mockUser.email && password === mockUser.password) {
    return NextResponse.json({
      user: {
        name: mockUser.name,
        email: mockUser.email,
        profilePic: mockUser.profilePic,
        userType: mockUser.userType,
        status: mockUser.status,
      },
      token: mockUser.token,
    });
  }
  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}