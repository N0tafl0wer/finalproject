import { Pencil, Search, Mail, Bell, Phone, MapPin, ShieldAlert, User, X, CheckCircle, } from "lucide-react";
import React, { useState } from "react";
import { Link } from 'react-router-dom';


const Profile = () => {
    const savedId = localStorage.getItem("studentId") || "202648921";
    const savedName = localStorage.getItem("studentName") || "Alex Jackson";

    const defaultAvatar = `http://ui-avatars.com/api/?name=${encodeURIComponent(savedName)}&background=2563eb&color=fff;`

   

    const [profile, setProfile] = useState({
        name: savedName,
        photoURL: " ",
        degree: "Bsc Computer Science",
        id: savedId,
        email: "a.jackson@bbaportal.edu.ng",
        phone: "+234 803 123 4567",
        address: '124, Campus Drive, North Hall, Room 403',
        department: "School of Engineering & Applied Sciences",
        major: "Computer Science",
        Level: "Sophomore (200 level)",
        status: "Active",
        advisor: "Dr. Sarah Jenkins",
        enrollmentStatus: "Full-Time Student",
        emergencyContact: {
            name: "Maria Rivera",
            relationship: "Mother",
            primaryPhone: "+234 812 987 6543",
            altPhone: "N/A",
        },
    });
    
    const profileImageSrc = profile.photoURL ||defaultAvatar;

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [formData, setFormData] = useState({ ...profile });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev ,[name]: value }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        setProfile(formData);
        setIsEditOpen(false);
    };


    return(
        <>
        <div className="min-h-screen bg-[#F8F9FF] flex flex-col text-gray-800 font-san">
            <header className="w-full sticky top-0 z-50 px-6 py-3 ">
                <div className="max-w-full mx-auto flex items-center justify-between gap-4">
                    <div className="relative ml-5 hidden bg-[#EFF4FF] sm:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
                        <input type="text" placeholder="Search..." className="w-130 text-[#6B789C] font-[800] border border-gray-400 rounded-[10px] pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"/>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Link to="/dashboard/announcement" className="relative" title="View Announcements">
                            <Bell className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </Link>
                        <div className="w-6 h-6 rounded-full bg-gray-200 border border-gray-300 overflow-hidden cursor-pointer shrink-0">
                            <img src= {profileImageSrc} alt={profile.name} className="w-full h-full object-cover" onError={(e) => {e.target.src = defaultAvatar;}}/>
                        </div>
                    </div>
                </div>
            </header>
            <div className="h-0.5 w-full bg-gray-200 "></div>

            <div className="mx-auto w-full max-w-5xl mt-15">
                <div className="flex items-center">
                    <div className="flex flex-col flex-1">
                        <div className="text-[50px] font-[650]">Student Profile</div>
                        <div className="text-[20px]">Manage your Personal and Academic details</div>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#2170E4] text-white font-[500] rounded-[8px] shadow-sm transition-colors cursor-pointer" onClick={() => {setFormData({ ...profile }); setIsEditOpen(true); }}>
                        <Pencil className="w-4 h-4" /> Edit Profile
                    </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mt-9 ">
                    <div className="bg-white border border-gray-100 rounded-[13px] p-6 shadow-sm space-y-6 pb-32">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-30 h-30 rounded-full overflow-hidden mb-4 flex items-center justify-center border-2 border-indigo-100 bg-indigo-50">
                                <img src= {profileImageSrc} alt={profile.name} className="w-full h-full object-cover" onError={(e) => {e.target.src = defaultAvatar;}}/>
                            </div>
                            <div className="text-[32px] font-[500]">{profile.name}</div>
                            <div className="text-[#215BBE] font-[600]">{profile.degree}</div>
                            <div className="bg-[#E5EEFF] px-3 py-0.2 mt-2 rounded-[24px] font-[600]">ID: {profile.id}</div>
                            <div className="w-full h-0.5 mt-5 bg-gray-200"></div>
                        </div>
                        <div>
                            <div className="mt-5 flex items-center gap-3 justify-start">
                                <Mail className="w-4 h-4" />
                                <div>{profile.email}</div>
                            </div>
                            <div className="mt-2 flex items-center gap-3 justify-start">
                                <Phone className="w-4 h-4" />
                                <div>{profile.phone}</div>
                            </div>
                            <div className="mt-3 flex items-center gap-3 justify-start">
                                <MapPin className="w-4 h-4" />
                                <div>{profile.address}</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="lg:col-span-2 space-y-3">
                        <div className="bg-white border border-gray-100 rounded-[15px] p-6 shadow-sm space-y-2">
                            <div className="text-[30px] font-[500] ">Academic Information</div>
                            <div className="w-full h-0.5 bg-gray-200"></div>
                            <div className="flex flex-1 gap-10 mr-10">
                                <div className="">
                                    <div className="flex flex-col mb-4 " >
                                        <div className="uppercase text-[12px] font-[700] tracking-wider text-gray-600 block mb-0.5">department</div>
                                        <div className="text-[18px] font-[500] text-gray-750">{profile.department}</div>
                                    </div>
                                    <div className="flex flex-col mb-4" >
                                        <div className="uppercase text-[12px] font-[700] tracking-wider text-gray-600 block mb-0.5">level / year</div>
                                        <div className="text-[18px] font-[500] text-gray-750">{profile.Level}</div>
                                    </div>
                                    <div className="flex flex-col mb-4" >
                                        <div className="uppercase text-[12px] font-[700] tracking-wider text-gray-600 block mb-0.5">enrollment status</div>
                                        <div className="text-[18px] font-[500] text-gray-750">{profile.enrollmentStatus}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col mb-4" >
                                        <div className="uppercase text-[12px] font-[700] tracking-wider text-gray-600 block mb-0.5">major</div>
                                        <div className="text-[18px] font-[500] text-gray-750">{profile.major}</div>
                                    </div>
                                    <div className="flex flex-col mb-4" >
                                        <div className="uppercase text-[12px] font-[700] tracking-wider text-gray-600 block mb-0.5">academic advisor</div>
                                        <div className="text-[18px] font-[500] text-gray-750">{profile.advisor}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-[15px] p-6 shadow-sm space-y-2">
                            <div className="flex items-center gap-2">
                                <ShieldAlert className="w-8 h-8 text-red-500" />
                                <div className="text-[30px] font-[500] ">Emergency Contact</div>
                            </div>
                            <div className="w-full h-0.5 bg-gray-200"></div>
                            <div className="flex flex-1 gap-10 mr-10">
                                <div className="">
                                    <div className="flex flex-col mb-4 " >
                                        <div className="uppercase text-[12px] font-[700] tracking-wider text-gray-600 block mb-0.5">name</div>
                                        <div className="text-[18px] font-[500] text-gray-750">{profile.emergencyContact.name}</div>
                                    </div>
                                    <div className="flex flex-col mb-4" >
                                        <div className="uppercase text-[12px] font-[700] tracking-wider text-gray-600 block mb-0.5">primary phone</div>
                                        <div className="text-[18px] font-[500] text-gray-750">{profile.emergencyContact.primaryPhone}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col mb-4" >
                                        <div className="uppercase text-[12px] font-[700] tracking-wider text-gray-600 block mb-0.5">relationship</div>
                                        <div className="text-[18px] font-[500] text-gray-750">{profile.emergencyContact.relationship}</div>
                                    </div>
                                    <div className="flex flex-col mb-4" >
                                        <div className="uppercase text-[12px] font-[700] tracking-wider text-gray-600 block mb-0.5">alternative phone</div>
                                        <div className="text-[18px] font-[500] text-gray-750">{profile.emergencyContact.altPhone}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {isEditOpen && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-6">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <h3 className="text-lg font-bold text-gray-900">Edit Student Profile</h3>
                    <button
                        onClick={() => setIsEditOpen(false)}
                        className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    </div>

                    <form onSubmit={handleSave} className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name
                        </label>
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg p-2.5 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address
                        </label>
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg p-2.5 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Phone Number
                        </label>
                        <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg p-2.5 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Campus Address
                        </label>
                        <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg p-2.5 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                        />
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                        <button
                        type="button"
                        onClick={() => setIsEditOpen(false)}
                        className="w-1/2 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                        Cancel
                        </button>
                        <button
                        type="submit"
                        className="w-1/2 py-2.5 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
                        >
                        Save Changes
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            )}
        </div>
        </>
    );
};

export default Profile;