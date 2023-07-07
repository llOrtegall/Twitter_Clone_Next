import { getProviders } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">

    </div>
  )

} // close home

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  }
}