import React from 'react';
import Link from 'next/link';

const UserCard = ({ user }) => {

  return (
    <Link href={`/${user.username}`}>
      <div className="bg-[#1e1e1e] rounded-xl p-6 hover:bg-[#252525] transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-800 hover:border-[#8e51ea]">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            <img
              src={user.profilepic || "/default-avatar.png"}
              alt={user.name || user.username}
              className="w-30 h-30 rounded-full border-4 border-[#8e51ea] object-cover"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-white mb-1">
            {user.name || user.username}
          </h3>
          <p className="text-gray-400 text-sm">@{user.username}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#0f0f0f] rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-[#8e51ea]">
              {user.donorCount || 0}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {user.donorCount === 1 ? 'Supporter' : 'Supporters'}
            </p>
          </div>
          <div className="bg-[#0f0f0f] rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-green-500">
              ₹{(user.totalAmount)/100}
            </p>
            <p className="text-xs text-gray-400 mt-1">Raised</p>
          </div>
        </div>

        {/* Join Date */}
        <div className="mt-4 pt-4 border-t border-gray-800">
          <p className="text-xs text-gray-500 text-center">
            Joined {new Date(user.createdAt).toLocaleDateString('en-US', { 
              month: 'short', 
              year: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;