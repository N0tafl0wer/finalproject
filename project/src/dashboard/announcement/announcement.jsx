import { useState } from "react";

function Announcement() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Campus Closure - Extreme Weather Warning",
      message:
        "Due to anticipated severe weather conditions, the main campus will be closing starting at 3:00 PM today. All evening classes are cancelled. Please check your student email for further updates regarding tomorrow's schedule.",
      time: "10 mins ago",
      type: "Emergency",
      icon: "fa-bullhorn",
      color: "red",
      unread: true,
      important: true,
    },

    {
      id: 2,
      title: "CS301 Midterm Project Due Tomorrow",
      message:
        "Reminder: Your final code repository and documentation for the Data Structures midterm project must be submitted via the portal by 11:59 PM tomorrow.",
      time: "2 hours ago",
      type: "Academic",
      icon: "fa-clipboard-list",
      color: "blue",
      unread: true,
      important: true,
    },

    {
      id: 3,
      title: "Tuition Installment Processed",
      message:
        "Your payment of ₦1,250,000 for the Fall 2026 semester installment has been successfully processed. You can download your receipt from the Fees & Payment section.",
      time: "Yesterday",
      type: "Payment",
      icon: "fa-wallet",
      color: "green",
      unread: false,
      important: false,
    },

    {
      id: 4,
      title: "Course Registration Opens Monday",
      message:
        "Course registration for the next semester will officially open on Monday at 8:00 AM. Students are advised to meet their academic advisers before registering their courses.",
      time: "Yesterday",
      type: "Registration",
      icon: "fa-book",
      color: "purple",
      unread: true,
      important: true,
    },

    {
      id: 5,
      title: "Mid-Semester Examination Timetable Released",
      message:
        "The mid-semester examination timetable has been released. Students are advised to check their timetable and report any timetable clashes to the academic office.",
      time: "2 days ago",
      type: "Examination",
      icon: "fa-calendar-days",
      color: "orange",
      unread: false,
      important: true,
    },

    {
      id: 6,
      title: "Student Union General Meeting",
      message:
        "The Student Union will be holding a general meeting this Friday at 4:00 PM in the main auditorium. All students are welcome to attend.",
      time: "3 days ago",
      type: "Event",
      icon: "fa-users",
      color: "blue",
      unread: false,
      important: false,
    },

    {
      id: 7,
      title: "Library Weekend Hours Updated",
      message:
        "The university library will now remain open until 8:00 PM on Saturdays and Sundays during the examination period.",
      time: "4 days ago",
      type: "General",
      icon: "fa-book-open",
      color: "green",
      unread: false,
      important: false,
    },

    {
      id: 8,
      title: "Semester Results Available",
      message:
        "Your semester results are now available. Please visit the Grades section of your student dashboard to view your results.",
      time: "5 days ago",
      type: "Results",
      icon: "fa-star",
      color: "yellow",
      unread: false,
      important: false,
    },
  ]);

  // Count unread announcements
  const unreadCount = announcements.filter(
    (announcement) => announcement.unread
  ).length;

  // Mark one announcement as read
  const markAsRead = (id) => {
    setAnnouncements(
      announcements.map((announcement) =>
        announcement.id === id
          ? { ...announcement, unread: false }
          : announcement
      )
    );
  };

  // Mark every announcement as read
  const markAllAsRead = () => {
    setAnnouncements(
      announcements.map((announcement) => ({
        ...announcement,
        unread: false,
      }))
    );
  };

  // Open an announcement
  const openAnnouncement = (announcement) => {
    markAsRead(announcement.id);
    setSelectedAnnouncement(announcement);
  };

  // Filter announcements
  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesSearch =
      announcement.title.toLowerCase().includes(search.toLowerCase()) ||
      announcement.message.toLowerCase().includes(search.toLowerCase());

    if (activeTab === "Unread") {
      return announcement.unread && matchesSearch;
    }

    if (activeTab === "Important") {
      return announcement.important && matchesSearch;
    }

    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f7f8fc] p-5 md:p-8">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Announcements
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Stay updated with university news and alerts.
          </p>
        </div>

        {/* Unread notification */}
        <div className="flex items-center gap-3">

          <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg">
            <i className="fa-solid fa-bell text-blue-600"></i>

            <span className="text-sm text-gray-600">
              {unreadCount} unread
            </span>
          </div>

          <button
            onClick={markAllAsRead}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium transition"
          >
            Mark all as read
          </button>

        </div>

      </div>


      {/* SEARCH */}
      <div className="relative mb-5">

        <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>

        <input
          type="text"
          placeholder="Search announcements..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white border border-gray-200 rounded-lg py-3 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

      </div>


      {/* TABS */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">

        <div className="flex gap-1 bg-gray-100 rounded-lg p-1 w-fit">

          <button
            onClick={() => setActiveTab("All")}
            className={`px-4 py-2 rounded-md text-sm transition ${
              activeTab === "All"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setActiveTab("Unread")}
            className={`px-4 py-2 rounded-md text-sm transition ${
              activeTab === "Unread"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Unread

            {unreadCount > 0 && (
              <span className="ml-2 bg-blue-600 text-white text-xs rounded-full px-2 py-0.5">
                {unreadCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("Important")}
            className={`px-4 py-2 rounded-md text-sm transition ${
              activeTab === "Important"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Important
          </button>

        </div>

        <span className="text-xs text-gray-400">
          {filteredAnnouncements.length} announcement
          {filteredAnnouncements.length !== 1 ? "s" : ""}
        </span>

      </div>


      {/* ANNOUNCEMENTS */}
      <div className="space-y-4">

        {filteredAnnouncements.map((announcement) => (

          <div
            key={announcement.id}
            onClick={() => openAnnouncement(announcement)}
            className={`bg-white rounded-xl p-5 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border ${
              announcement.unread
                ? "border-blue-200"
                : "border-gray-100"
            }`}
          >

            <div className="flex gap-4">

              {/* ICON */}
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${
                  announcement.color === "red"
                    ? "bg-red-50"
                    : announcement.color === "blue"
                    ? "bg-blue-50"
                    : announcement.color === "green"
                    ? "bg-green-50"
                    : announcement.color === "purple"
                    ? "bg-purple-50"
                    : announcement.color === "orange"
                    ? "bg-orange-50"
                    : "bg-yellow-50"
                }`}
              >
                <i
                  className={`fa-solid ${announcement.icon} ${
                    announcement.color === "red"
                      ? "text-red-500"
                      : announcement.color === "blue"
                      ? "text-blue-500"
                      : announcement.color === "green"
                      ? "text-green-500"
                      : announcement.color === "purple"
                      ? "text-purple-500"
                      : announcement.color === "orange"
                      ? "text-orange-500"
                      : "text-yellow-500"
                  }`}
                ></i>
              </div>


              {/* CONTENT */}
              <div className="flex-1 min-w-0">

                <div className="flex flex-col md:flex-row md:justify-between gap-2">

                  <div className="flex items-center gap-2">

                    <h2 className="font-semibold text-gray-800">
                      {announcement.title}
                    </h2>

                    {announcement.unread && (
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    )}

                  </div>

                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    {announcement.time}
                  </span>

                </div>


                <p className="text-sm text-gray-500 mt-2 leading-relaxed line-clamp-2">
                  {announcement.message}
                </p>


                <div className="flex items-center gap-3 mt-3">

                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                    {announcement.type}
                  </span>

                  {announcement.important && (
                    <span className="text-xs bg-red-50 text-red-500 px-2 py-1 rounded-md">
                      <i className="fa-solid fa-star mr-1"></i>
                      Important
                    </span>
                  )}

                  <span className="text-xs text-blue-600 ml-auto">
                    View details
                    <i className="fa-solid fa-arrow-right ml-1"></i>
                  </span>

                </div>

              </div>

            </div>

          </div>

        ))}


        {/* NO RESULTS */}
        {filteredAnnouncements.length === 0 && (

          <div className="bg-white rounded-xl p-10 text-center">

            <i className="fa-solid fa-bell-slash text-3xl text-gray-300"></i>

            <h2 className="font-semibold text-gray-700 mt-3">
              No announcements found
            </h2>

            <p className="text-sm text-gray-400 mt-1">
              Try changing your search or selecting another category.
            </p>

          </div>

        )}

      </div>


      {/* ANNOUNCEMENT MODAL */}
      {selectedAnnouncement && (

        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center p-5 z-50"
          onClick={() => setSelectedAnnouncement(null)}
        >

          <div
            className="bg-white rounded-xl max-w-lg w-full p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="flex justify-between items-start gap-4">

              <div>

                <span className="text-xs text-blue-600 font-medium">
                  {selectedAnnouncement.type}
                </span>

                <h2 className="text-xl font-bold text-gray-900 mt-1">
                  {selectedAnnouncement.title}
                </h2>

              </div>

              <button
                onClick={() => setSelectedAnnouncement(null)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 text-gray-500 transition"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

            </div>


            <div className="border-t border-gray-100 my-4"></div>

            <p className="text-sm text-gray-600 leading-7">
              {selectedAnnouncement.message}
            </p>


            <div className="flex justify-between items-center mt-6">

              <span className="text-xs text-gray-400">
                {selectedAnnouncement.time}
              </span>

              {selectedAnnouncement.important && (
                <span className="text-xs bg-red-50 text-red-500 px-3 py-1 rounded-md">
                  <i className="fa-solid fa-star mr-1"></i>
                  Important
                </span>
              )}

            </div>


            <button
              onClick={() => setSelectedAnnouncement(null)}
              className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium transition"
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Announcement;