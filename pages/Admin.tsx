import React, { useState } from "react";
import { useContent } from "../context/ContentContext";
import { Lock, Save, LayoutDashboard, Type, Phone } from "lucide-react";

export const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const { content, updateContent } = useContent();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect Password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 bg-primary">
        <form onSubmit={handleLogin} className="bg-white p-10 shadow-2xl max-w-sm w-full space-y-6 border border-wood-900/10 font-sans">
          <div className="flex justify-center mb-6">
              <div className="bg-wood-900/5 p-4 rounded-full">
                <Lock className="text-wood-900 h-6 w-6" />
              </div>
          </div>
          <h2 className="text-center text-2xl text-wood-900 font-serif font-medium">New Chapter Admin</h2>
          <div className="space-y-2">
             <label className="text-[10px] uppercase tracking-widest opacity-50">Password</label>
             <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-wood-900/20 bg-transparent py-2 text-sm focus:outline-none focus:border-wood-900" 
                placeholder="Enter Password (admin123)" 
             />
          </div>
          <button className="w-full bg-wood-900 text-white py-3 uppercase text-xs tracking-widest hover:bg-accent transition-colors">Access Dashboard</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary pt-24 pb-12 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-wood-900/10 pb-6">
            <div>
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold">New Chapter CMS</span>
                <h1 className="text-4xl text-wood-900 mt-2 font-serif font-medium">Content Dashboard</h1>
            </div>
            <div className="flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold">
            <Save size={14} /> Auto-Saving
            </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-3 space-y-2">
                <div className="p-3 bg-wood-900 text-white text-sm font-medium rounded flex items-center gap-2">
                    <LayoutDashboard size={16}/> Hero Section
                </div>
                <div className="p-3 hover:bg-wood-900/5 text-wood-900/60 text-sm font-medium rounded flex items-center gap-2 cursor-pointer transition-colors">
                    <Type size={16}/> About
                </div>
                <div className="p-3 hover:bg-wood-900/5 text-wood-900/60 text-sm font-medium rounded flex items-center gap-2 cursor-pointer transition-colors">
                    <Phone size={16}/> Contact Info
                </div>
            </div>

            {/* Content */}
            <div className="md:col-span-9 space-y-8">
                
                {/* Edit Hero Section */}
                <section className="bg-white p-8 shadow-sm border border-wood-900/5">
                <h2 className="text-xl mb-6 text-wood-900 border-b border-wood-900/10 pb-2 font-serif font-medium">Hero Section</h2>
                <div className="space-y-6">
                    <div>
                    <label className="block text-[10px] uppercase tracking-wider text-wood-900/50 mb-2 font-bold">Main Headline</label>
                    <input 
                        type="text" 
                        value={content.hero.title} 
                        onChange={(e) => updateContent('hero', 'title', e.target.value)}
                        className="w-full border-b border-wood-900/20 bg-transparent py-2 text-xl focus:border-wood-900 outline-none transition-all"
                    />
                    </div>
                    <div>
                    <label className="block text-[10px] uppercase tracking-wider text-wood-900/50 mb-2 font-bold">Subtitle</label>
                    <textarea 
                        value={content.hero.subtitle} 
                        onChange={(e) => updateContent('hero', 'subtitle', e.target.value)}
                        className="w-full border border-wood-900/20 p-3 bg-primary/30 text-wood-900 focus:border-wood-900 outline-none transition-all"
                        rows={3}
                    />
                    </div>
                    <div>
                    <label className="block text-[10px] uppercase tracking-wider text-wood-900/50 mb-2 font-bold">Button Text</label>
                    <input 
                        type="text" 
                        value={content.hero.cta} 
                        onChange={(e) => updateContent('hero', 'cta', e.target.value)}
                        className="w-full border-b border-wood-900/20 bg-transparent py-2 focus:border-wood-900 outline-none transition-all"
                    />
                    </div>
                </div>
                </section>

                {/* Edit About Section */}
                <section className="bg-white p-8 shadow-sm border border-wood-900/5">
                <h2 className="text-xl mb-6 text-wood-900 border-b border-wood-900/10 pb-2 font-serif font-medium">About</h2>
                <div className="space-y-6">
                     <div>
                        <label className="block text-[10px] uppercase tracking-wider text-wood-900/50 mb-2 font-bold">Title</label>
                        <input 
                            type="text" 
                            value={content.about.title} 
                            onChange={(e) => updateContent('about', 'title', e.target.value)}
                            className="w-full border-b border-wood-900/20 bg-transparent py-2 text-lg focus:border-wood-900 outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] uppercase tracking-wider text-wood-900/50 mb-2 font-bold">Company Story / Mission</label>
                        <textarea 
                        rows={4}
                        value={content.about.story} 
                        onChange={(e) => updateContent('about', 'story', e.target.value)}
                        className="w-full border border-wood-900/20 p-3 bg-primary/30 text-wood-900 focus:border-wood-900 outline-none transition-all"
                        />
                    </div>
                </div>
                </section>

                {/* Edit Contact Section */}
                <section className="bg-white p-8 shadow-sm border border-wood-900/5">
                <h2 className="text-xl mb-6 text-wood-900 border-b border-wood-900/10 pb-2 font-serif font-medium">Contact Details</h2>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-[10px] uppercase tracking-wider text-wood-900/50 mb-2 font-bold">Email</label>
                        <input 
                            type="text"
                            value={content.contact.email} 
                            onChange={(e) => updateContent('contact', 'email', e.target.value)}
                            className="w-full border-b border-wood-900/20 bg-transparent py-2 focus:border-wood-900 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] uppercase tracking-wider text-wood-900/50 mb-2 font-bold">Phone</label>
                        <input 
                            type="text"
                            value={content.contact.phone} 
                            onChange={(e) => updateContent('contact', 'phone', e.target.value)}
                            className="w-full border-b border-wood-900/20 bg-transparent py-2 focus:border-wood-900 outline-none"
                        />
                    </div>
                </div>
                </section>
            </div>
        </div>
      </div>
    </div>
  );
};