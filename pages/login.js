import { getProviders, signIn, useSession } from "next-auth/react";

export default function LoginPage({ providers }) {
  const { data, status } = useSession();
  console.log({ data, status });

  return (
    <div className="flex items-center justify-center h-screen">
      {Object.values(providers).map(provider => (
        <div>
          <button onClick={async () => { await signIn(provider.id) }}
            className="bg-twitterWhite pl-3 pr-5 py-2 text-black rounded-full flex items-center">
            <img src="google.png" alt="" className="h-8" />
            Sig in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
} // close home

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  }
}