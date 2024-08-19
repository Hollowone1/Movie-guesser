import type { NextApiRequest, NextApiResponse } from 'next';
import { hash } from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, pseudonym, password } = req.body;

  if (!email || !pseudonym || !password) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  // Vérifier si l'utilisateur existe déjà
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return res.status(400).json({ message: 'Un utilisateur avec cet email existe déjà' });
  }

  // Hacher le mot de passe
  const hashedPassword = await hash(password, 10);

  // Créer l'utilisateur
  const user = await prisma.user.create({
    data: {
      email,
      pseudonym,
      password: hashedPassword,
    },
  });

  return res.status(201).json({ message: 'Utilisateur créé avec succès', user });
}
