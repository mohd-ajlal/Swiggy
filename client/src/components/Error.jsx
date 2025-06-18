import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 via-white to-blue-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl max-w-lg w-full p-8 text-center animate-fade-in">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">Oops!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Something went wrong. We're working on it.
        </p>

        <div className="bg-gray-100 p-4 rounded-xl text-left text-sm text-gray-800">
          <p><strong>Status:</strong> {error?.status || 'Unknown'}</p>
          <p><strong>Message:</strong> {error?.statusText || 'Unexpected error occurred.'}</p>
          {error?.data && <p><strong>Details:</strong> {error.data}</p>}
        </div>

        <button
          onClick={() => window.location.href = '/'}
          className="mt-6 inline-block px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full shadow-md transition duration-300"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Error;
