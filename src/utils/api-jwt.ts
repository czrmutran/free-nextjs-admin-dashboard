import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'sua-secret-temporaria'; // deve estar no .env

export function generateResetToken(email: string): string {
  const payload = {
    email,
    type: 'reset',
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60 * 30 // expira em 30 min
  };

  return jwt.sign(payload, secret);
}

export function verifyResetToken(token: string): string | null {
  try {
    const decoded = jwt.verify(token, secret) as any;
    if (decoded?.type !== 'reset') return null;
    return decoded.email;
  } catch (err) {
    return null;
  }
}
