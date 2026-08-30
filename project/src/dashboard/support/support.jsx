import React, {useState} from "react";
import { Link } from 'react-router-dom';
import {Search, LifeBuoy, AppWindow, Bell, Laptop, Landmark, MessageSquare, UserCheck, AlertTriangle, X, Send, Calendar, CheckCircle2, ChevronDown} from 'lucide-react';

const Support = () => {
    const [currentUser, setCurrentUser] = useState({name: "Alex Jackson", photoURL: ""});
    const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=2563eb&color=fff`;
    const profileImageSrc = currentUser.photoURL || defaultAvatar;
    const [formData, setFormData] = useState({
        category: '',
        subject: '',
        description: ''
    });
    const [category, setCategory] = useState("");

    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isBookOpen, setIsBookOpen] = useState(false);
    const [isTicketSuccessOpen, setIsTicketSuccessOpen] = useState(false);
    const [submittedTicketId, setSubmittedTicketId] = useState('');

    const [chatMessages, setChatMessages] = useState([
        { sender: 'agent', text: 'Hello! How can we help you today?' }
    ]);

    const [inputMessage, setInputMessage] = useState('');

    const [bookingData, setBookingData] = useState({
        date: '',
        time: '',
        notes: '',
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmitIssue = (e) => {
        e.preventDefault();

        if (!formData.category || !formData.subject.trim()) return;

        const randomTicketId = `TICK-${Math.floor(
            100000 + Math.random() * 900000
        )}`;

        setSubmittedTicketId(randomTicketId);
        setIsTicketSuccessOpen(true);
    };

    const closeTicketModel = () => {
        setIsTicketSuccessOpen(false);
        setFormData({ category: "", subject: "", description: "" });
    };

    const handleSendMessage = (e) => {
        e.preventDefault();

        if (!inputMessage.trim()) return;

        setChatMessages((prev) => [
            ...prev,
            { sender: "user", text: inputMessage.trim() },
        ]);
        setInputMessage("");

        setTimeout(() => {
            setChatMessages((prev) => [
                ...prev,
                {
                    sender: "agent",
                    text: "Thanks for reaching out! An advisor will be with you shortly.",
                },
            ]);
        }, 1000);
    };

    const handleBookingSubmit = (e) => {
        e.preventDefault();

        alert(
            `Advisor appointment booked for ${bookingData.date} at ${bookingData.time}!`
        );

        setIsBookOpen(false);
        setBookingData({ date: "", time: "", notes: "" });
    };


    const handleCloseModal = () => {
        setIsTicketSuccessOpen(false);
        setFormData({ category: "", subject: "", description: "" });
    };

    return (
        <div className="min-h-screen bg-[#F8F9FF] font-sans relative">
            <div className="flex w-full justify-end items-center gap-5 pr-10 mb-2">
                <Link to="/dashboard/announcement" className="relative mt-4" title="View Announcements">
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </Link>
                <div className="w-6 h-6 mt-4 rounded-full bg-gray-200 border border-gray-300 overflow-hidden cursor-pointer shrink-0">
                    <img src= {profileImageSrc} alt={currentUser.name} className="w-full h-full object-cover" onError={(e) => {e.target.src = defaultAvatar;}}/>
                </div>
            </div>
            <div className="h-0.5 w-full bg-gray-200 "></div>
            <div className="mx-auto w-full max-w-[1400px]">
                
                <div className="text-center mx-auto mt-20 mb-15">
                    <h1 className="text-[50px] font-[700]">How can we help?</h1>
                    <div className="relative m-auto w-200">
                        <Search className="absolute left-3.5 top-1/2 w-4 h-4 -translate-y-1/2 text-gray-600"/>
                        <input type="text" placeholder="Search for articles, guides or FAQs..." className="w-200 m-auto bg-white border border-[#C5C6CF] border-1px rounded-[15px] pl-10 pr-5 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all"/>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-4">
                    <div className="lg:col-span-8 flex flex-col gap-4">
                        <h2 className="text-[25px] font-[600]">Browse by Category</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
                            <button onClick={() => console.log('Registration clicked')} className="text-[#16171A] w-full rounded-[12px] h-auto shadow-sm bg-white p-5 border border-gray-200/80 flex flex-col items-start justify-between hover:shadow-md hover:border-blue-500 transition-all text-left group cursor-pointer">
                                <div className="bg-[#EFF4FF] text-[#2170E4] w-15 h-15 rounded-[12px] flex justify-center items-center">
                                    <AppWindow className=" h-7 w-7" />
                                </div>
                                <div className="text-[15px] mt-3 text-[#031635] font-[600]">Registration</div>
                                <div className="mt-1">Add/drop courses, deadlines and enrollment statuses</div>
                            </button>
                            <button onClick={() => setIsChatOpen(true)} className="text-[#16171A] w-full rounded-[12px] h-auto shadow-sm bg-white p-5 border border-gray-200/80 flex flex-col items-start justify-between hover:shadow-md hover:border-blue-500 transition-all text-left group cursor-pointer">
                                    <div className="bg-[#EFF4FF] text-[#2170E4] w-15 h-15 rounded-[12px] flex justify-center items-center">
                                        <Laptop className=" h-7 w-7" />
                                    </div>
                                    <div className="text-[15px] mt-3 text-[#031635] font-[600]">Tech Support</div>
                                    <div className="mt-1">Login issues, WiFi access and software troubleshooting</div>
                            </button>
                            <button onClick={() => console.log('Finances clicked')} className="text-[#16171A] w-full rounded-[12px] h-auto shadow-sm bg-white p-5 border border-gray-200/80 flex flex-col items-start justify-between hover:shadow-md hover:border-blue-500 transition-all text-left group cursor-pointer">
                                <div className="bg-[#EFF4FF] text-[#2170E4] w-15 h-15 rounded-[12px] flex justify-center items-center">
                                    <Landmark className=" h-7 w-7" />
                                </div>
                                <div className="text-[15px] mt-3 text-[#031635] font-[600]">Finances</div>
                                <div className="mt-1">Tuition payment, financial aids and scholarship queries</div>
                            </button>
                        </div>
                        <div className="px-5 flex gap-4">
                            <div className="py-4 pl-8 pr-5 bg-[#EBEFF4] border border-gray-200 w-auto rounded-[12px] shadow-sm flex items-center justify-between ">
                                <div className="flex items-center gap-5">
                                    <div className="text-[#00A774]">
                                        <MessageSquare className="h-7 w-7" />
                                    </div>
                                    <div className="flex flex-col leading-[20px]">
                                        <div className="font-[600]">Live Chat</div>
                                        <div className="font-[400]">Available 9AM - 5PM EST</div>
                                    </div>
                                    <button onClick={() => setIsChatOpen(true)} className="ml-15 px-4 py-2 font-[500] border border-gray-300 rounded-[10px] hover:bg-blue-200">Start Chat</button>
                                </div>
                            </div>
                            <div className="py-4 pl-8 pr-5 bg-[#E1E5F0] border border-gray-200 w-auto rounded-[12px] shadow-sm flex items-center justify-between ">
                                <div className="flex items-center gap-5">
                                    <div className="text-[#2170E4]">
                                        <UserCheck className="h-7 w-7" />
                                    </div>
                                    <div className="flex flex-col leading-[20px]">
                                        <div className="font-[600]">Academic Advisor</div>
                                        <div className="font-[400]">Schedule a meeting </div>
                                    </div>
                                    <button onClick={() => setIsBookOpen(true)} className="w-20 ml-15 px-4 py-2 font-[500] border border-gray-300 rounded-[10px] hover:bg-blue-200">Book</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-4 w-full bg-white p-6 border border-gray-200 rounded-[15px] shadow-md">
                        <div className="flex items-center gap-4 ">
                            <AlertTriangle className="text-[#2170E4] w-6 h-6" />
                            <div className="text-[22px] font-[700]">Report an Issue</div>
                        </div>
                        <form onSubmit={handleSubmitIssue} className="mt-4">
                            <label className="block text-[15px] font-[500] mb-1.5">
                                Category
                            </label>

                            <div className="relative">
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleFormChange}
                                    required
                                    className="w-full appearance-none bg-white border border-gray-300 rounded-[10px] p-3 pr-10"
                                >
                                    <option value="" disabled>
                                        Select a Category...
                                    </option>
                                    <option value="Portal Bug">Portal Bug</option>
                                    <option value="Course Missing">Course Missing</option>
                                    <option value="Grade Dispute">Grade Dispute</option>
                                    <option value="Other">Other</option>
                                </select>

                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                            </div>

                            <label className="block text-[15px] font-[600] mt-4 mb-1.5">
                                Subject
                            </label>

                            <input
                                name="subject"
                                value={formData.subject}
                                onChange={handleFormChange}
                                type="text"
                                placeholder="Brief Summary of the Issue"
                                required
                                className="w-full bg-white border border-gray-300 rounded-[10px] p-3"
                            />

                            <label className="block text-[15px] font-[600] mt-4 mb-1.5">
                                Description
                            </label>

                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleFormChange}
                                rows="4"
                                placeholder="Please provide details..."
                                className="w-full bg-white border border-gray-300 rounded-[10px] p-3 resize-none"
                            />

                            <button
                                type="submit"
                                className="w-full bg-[#2170E4] hover:bg-[#0043A8] text-white font-[600] py-3 rounded-[12px] mt-4"
                            >
                                Submit Ticket
                            </button>
                        </form>
                    </div>
                    
                </div>
            </div>
            {isChatOpen && (
                <div className="fixed inset-0 bg-black/40 z-50 flex justify-end transition-opacity">
                    <div className="bg-white w-full max-w-sm h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
                    
                    
                    <div className="bg-emerald-600 text-white p-4 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        <h3 className="text-sm font-bold">Live Support Chat</h3>
                        </div>
                        <button 
                        onClick={() => setIsChatOpen(false)} 
                        className="hover:bg-emerald-700 p-1 rounded transition-colors text-white"
                        >
                        ✕
                        </button>
                    </div>

                    
                    <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
                        {chatMessages.map((msg, index) => (
                        <div 
                            key={index} 
                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div 
                            className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                                msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-800 shadow-sm'
                            }`}
                            >
                            {msg.text}
                            </div>
                        </div>
                        ))}
                    </div>

                    
                    <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 bg-white flex items-center gap-2 shrink-0">
                        <input 
                        type="text" 
                        placeholder="Type your message..." 
                        value={inputMessage} 
                        onChange={(e) => setInputMessage(e.target.value)}
                        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                        />
                        <button 
                        type="submit" 
                        className="bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700 transition-colors shrink-0"
                        >
                        <Send className="w-4 h-4" />
                        </button>
                    </form>

                    </div>
                </div>
            )}
            {isBookOpen && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl space-y-4 relative animate-in zoom-in-95 duration-150">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-600" />
                        <h3 className="text-base font-bold text-gray-900">Book Advisor Meeting</h3>
                    </div>
                    <button 
                        onClick={() => setIsBookOpen(false)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                    </div>

                    <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Select Date</label>
                        <input 
                        type="date"
                        required
                        value={bookingData.date}
                        onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500"
                        />
                    </div>

                    <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Select Time Slot</label>
                        <select 
                        required
                        value={bookingData.time}
                        onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500"
                        >
                        <option value="" disabled>Choose time...</option>
                        <option value="10:00 AM">10:00 AM EST</option>
                        <option value="01:30 PM">01:30 PM EST</option>
                        <option value="03:00 PM">03:00 PM EST</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Meeting Topic / Notes</label>
                        <textarea 
                        rows={3}
                        placeholder="What would you like to discuss?"
                        value={bookingData.notes}
                        onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"
                        />
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                        <button 
                        type="button"
                        onClick={() => setIsBookOpen(false)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-lg transition-colors"
                        >
                        Cancel
                        </button>
                        <button 
                        type="submit"
                        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded-lg transition-colors shadow-sm"
                        >
                        Confirm Booking
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            )}
            {isTicketSuccessOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
                <div className="bg-white rounded-2xl max-w-sm w-full p-6 text-center shadow-xl relative transform transition-all scale-100">
                    
                    <button
                    onClick={closeTicketModel}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                    <X className="w-5 h-5" />
                    </button>

                    
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7 text-green-600" />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">Ticket Submitted!</h3>
                    <p className="text-xs text-gray-500 mb-6">
                    Your support ticket has been sent successfully. Our team will review your request and get back to you soon.
                    </p>

                    <button
                    onClick={closeTicketModel}
                    className="w-full bg-[#0052CC] hover:bg-[#0043A8] text-white font-semibold text-xs py-2.5 rounded-lg transition-colors shadow-sm"
                    >
                    Done
                    </button>
                </div>
                </div>
            )}
        </div>
    )
};

export default Support;