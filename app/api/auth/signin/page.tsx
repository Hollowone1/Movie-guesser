import { signIn, signOut, useSession } from "next-auth/react";

const SignIn: React.FC = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Connecté en tant que {session.user?.email}</p>
        <button onClick={() => signOut()}>Se déconnecter</button>
      </>
    );
  }

  return (
    <>
      <h1>Se connecter</h1>
      <button onClick={() => signIn("github")}>Se connecter avec GitHub</button>
    </>
  );
};

export default SignIn;
