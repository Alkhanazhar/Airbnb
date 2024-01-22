import React from 'react'

const AccountProfile = ({user,logout}) => {
  return (
    <>
      <div className="text-center font-semibold mt-8">
        Logged in as {user.name} {user.email}
        <br />
        <button
          onClick={logout}
          className="bg-red-500 w-60 p-2 rounded-full text-white text-center my-4"
        >
          log-out
        </button>
      </div>
    </>
  );
}

export default AccountProfile
