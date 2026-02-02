import { MessageSquare, User, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [showChat, setShowChat] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <>
      <header className="bg-[#1f2b55] sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            
            {/* LEFT */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                🩺
              </div>
              <div>
                <h1 className="text-lg font-bold text-purple-300">
                  HealthAI Pro
                </h1>
                <p className="text-xs text-purple-400">
                  Your Advanced Health Companion
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex gap-2 relative">
              <button
                onClick={() => setShowChat(true)}
                className="p-2 rounded-xl bg-white/10 text-purple-200 hover:bg-white/20"
              >
                <MessageSquare size={18} />
              </button>

              <button
                onClick={() => setShowUserMenu((prev) => !prev)}
                className="p-2 rounded-xl bg-white/10 text-purple-200 hover:bg-white/20"
              >
                <User size={18} />
              </button>

              {/* USER DROPDOWN */}
              {showUserMenu && (
                <div className="absolute right-0 top-14 w-56 bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-4 border-b">
                    <p className="font-semibold">Guest User</p>
                    <p className="text-sm text-gray-500">
                      guest@healthai.com
                    </p>
                  </div>
                  <button
                    className="w-full text-left px-4 py-3 hover:bg-gray-100 text-red-600"
                    onClick={() => {
                      alert("Logged out (frontend only)");
                      setShowUserMenu(false);
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* CHAT MODAL */}
      {showChat && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-md p-5">
            
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-lg">Support Chat</h3>
              <button onClick={() => setShowChat(false)}>
                <X />
              </button>
            </div>

            <textarea
              className="w-full h-32 border rounded-xl p-3 text-sm"
              placeholder="Type your message..."
            />

            <button
              onClick={() => {
                alert("Message sent (demo)");
                setShowChat(false);
              }}
              className="mt-3 w-full py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold"
            >
              Send Message
            </button>
          </div>
        </div>
      )}
    </>
  );
}
