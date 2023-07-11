import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import TableLayout from '../../components/TableLayout';
import { useSession } from 'next-auth/react';

export default function Profile() {
  const { status, data: session } = useSession();
  const symbolNumber = session?.user?.sNum;
  const router = useRouter();
  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    // User is not authenticated, redirect to login page
    router.push('/login');
    return null;
  }
  return (
    <Layout title="User Profile">
      <div className="w-full pt-[80px] p-10">
        {/* User Details */}
        <div className="grid p-3  text-base font-semibold gap-2">
          {status === 'loading' ? (
            'Loading...'
          ) : session?.user ? (
            <>
              <span>Symbol Number: {session.user.sNum}</span>
              <span>User Name: {session.user.name}</span>
            </>
          ) : (
            <span>Not signed in</span>
          )}
        </div>
        <div className="flex justify-center flex-col">
          {/* Result of Semester table*/}
          <div className="p-3">
            <h2 className="font-medium text-lg">Results:</h2>
            <TableLayout symbolNumber={symbolNumber} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
