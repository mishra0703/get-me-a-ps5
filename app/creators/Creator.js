"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { searchUsers } from "@/actions/useraction";
import UserCard from "@/components/UserCard";

const CreatorsPage = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      if (searchTerm) {
        setLoading(true);
        setError(null);
        try {
          const results = await searchUsers(searchTerm);
          setUsers(results);
        } catch (err) {
          setError("Failed to search users. Please try again.");
          console.error('Search error:', err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUsers();
  }, [searchTerm]);

  if (!searchTerm) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] pt-[8vh] px-10">
        <div className="container mx-auto py-10">
          <h1 className="text-3xl font-bold text-white text-center">
            Search for Creators
          </h1>
          <p className="text-gray-400 text-center mt-4">
            Use the search bar to find creators by name or username
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-[8vh] px-15">
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-white mb-2">
          Search Results for "{searchTerm}"
        </h1>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        )}

        {error && (
          <div className="text-red-500 text-center py-10 bg-red-900/20 rounded-lg">
            {error}
          </div>
        )}

        {!loading && !error && users.length === 0 && (
          <div className="text-gray-400 text-center py-20">
            <p className="text-3xl font-bold">
              No creators found matching "{searchTerm}"
            </p>
            <p className="text-md mt-2">
              Try searching with different keywords
            </p>
          </div>
        )}

        {!loading && !error && users.length > 0 && (
          <>
            <p className="text-gray-400 mb-8">
              Found {users.length} creator{users.length !== 1 ? "s" : ""}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {users.map((user) => (
                <UserCard key={user._id} user={user} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CreatorsPage;