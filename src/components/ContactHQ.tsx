import React, { useState } from 'react';
import { Mail, AlertTriangle, Send } from 'lucide-react';

const ContactHQ = () => {
  const [formData, setFormData] = useState({
    location: '',
    name: '',
    situation: '',
    resources: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('🦀 TRANSMISSION RECEIVED 🦀\n\nYour report has been sent to the Dota2 Techies Support Team. Expect a response after they finish planting remote mines (ETA: 24-48 Roshan respawns).');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-900 text-blue-200 px-4 py-2 rounded-full text-sm font-mono mb-4">
            <Mail size={16} />
            EMERGENCY COORDINATION CENTER
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-blue-400">CIVIL DEFENSE</span> REPORTING
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Submit emergency situation reports, request assistance, or provide community status updates. 
            <span className="text-green-400"> All communications are monitored and prioritized by response teams.</span>
          </p>
        </div>

        <div className="bg-gray-900 border-2 border-green-600 rounded-lg p-8">
          <div className="mb-6 bg-red-900 border border-red-600 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={20} className="text-red-400" />
              <h3 className="text-red-400 font-bold">EMERGENCY PROTOCOL NOTICE</h3>
            </div>
            <p className="text-red-200 text-sm font-mono">
              IMPORTANT: This channel is for non-immediate emergencies and coordination purposes. 
              For life-threatening situations, contact local emergency services immediately (911/999/112).
              <br />
              <span className="text-yellow-400">(We're helpful, but we're not faster than paramedics.)</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-green-400 font-mono text-sm mb-2">
                  GEOGRAPHIC LOCATION *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, State/Province, Country"
                  className="w-full bg-black border-2 border-gray-600 text-white p-3 rounded-lg focus:border-green-400 transition-colors font-mono"
                  required
                />
              </div>

              <div>
                <label className="block text-green-400 font-mono text-sm mb-2">
                  CONTACT IDENTIFIER *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name or Community Representative"
                  className="w-full bg-black border-2 border-gray-600 text-white p-3 rounded-lg focus:border-green-400 transition-colors font-mono"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-green-400 font-mono text-sm mb-2">
                SITUATION TYPE *
              </label>
              <select
                name="situation"
                value={formData.situation}
                onChange={handleChange}
                className="w-full bg-black border-2 border-gray-600 text-white p-3 rounded-lg focus:border-green-400 transition-colors font-mono"
                required
              >
                <option value="">Select Situation Category</option>
                <option value="supply-shortage">Supply Chain Disruption</option>
                <option value="infrastructure">Infrastructure Damage/Failure</option>
                <option value="community-safety">Community Safety Concern</option>
                <option value="resource-sharing">Resource Sharing Coordination</option>
                <option value="information-request">Emergency Information Request</option>
                <option value="volunteer">Volunteer for Community Support</option>
              </select>
            </div>

            <div>
              <label className="block text-green-400 font-mono text-sm mb-2">
                DETAILED SITUATION REPORT *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Provide comprehensive details about the situation, including timeline, affected population, immediate needs, and any actions already taken..."
                className="w-full bg-black border-2 border-gray-600 text-white p-3 rounded-lg focus:border-green-400 transition-colors font-mono resize-none"
                required
              />
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-sm font-mono">
              <input type="checkbox" required className="text-green-400" />
              <span>
                I confirm this information is accurate and understand it will be shared with appropriate response authorities
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-black font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              SUBMIT TO COORDINATION CENTER
            </button>
          </form>
        </div>

        <div className="mt-8 text-center text-gray-500 text-xs font-mono">
          FOR IMMEDIATE LIFE-THREATENING EMERGENCIES: Contact Local Emergency Services
          <br />
          Coordination response time: 24-48 hours for non-critical situations
          <br />
          <span className="text-yellow-400">(Please don't report your WiFi being down as a national emergency.)</span>
        </div>
      </div>
    </section>
  );
};

export default ContactHQ;
