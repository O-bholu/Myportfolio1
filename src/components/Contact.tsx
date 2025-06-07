import { Github, Linkedin, Instagram, Twitter, Mail } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const socialLinks = [
    { icon: <Github size={34} className="text-white" />, url: 'https://github.com/O-bholu', label: 'GitHub' },
    { icon: <Linkedin size={34} className="text-[#0077B5]" />, url: 'https://www.linkedin.com/in/bholu-yadav-b64b3a293/', label: 'LinkedIn' },
    // { icon: <Instagram size={24} className="text-[#E4405F]" />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <Twitter size={34} className="text-[#1DA1F2]" />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <Mail size={34} className="text-[#EA4335]" />, url: 'mailto:vasu02062001@gmail.com', label: 'Email' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = { name, email, subject, message };
    console.log('Sending form data:', formData);

    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.text();
      console.log('Server response:', responseData);

      if (response.ok) {
        setStatus('Message sent successfully!');
        // Clear form after successful submission
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setStatus(`Failed to send message: ${responseData}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to connect to server. Please try again.');
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black to-gray-900" id="contact">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div data-aos="fade-right" className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">Let's Connect</h2>
            
            <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              I'm currently looking for new opportunities, my inbox is always open. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 mb-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={`Visit my ${link.label} profile`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div 
            className="bg-gray-800/30 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl border border-gray-700"
            data-aos="fade-left"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Bholu Yadav"
                  className="w-full p-2 sm:p-3 bg-gray-900/70 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-red-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm sm:text-base text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="helloWorld@email.com"
                  className="w-full p-2 sm:p-3 bg-gray-900/70 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm sm:text-base text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Just saying hi"
                  className="w-full p-2 sm:p-3 bg-gray-900/70 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Let's talk about..."
                  rows={4}
                  className="w-full p-2 sm:p-3 bg-gray-900/70 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-red-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-red-500 to-purple-500 rounded-full text-white text-sm sm:text-base font-medium hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
              {status && <p className="mt-4 text-center text-sm sm:text-base text-gray-400">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;