import React, { useState } from "react";
import { Calendar, MapPin, User, Phone, X, Clock, CheckCircle } from "lucide-react";


const dharamshalaData = [
    {
        id: 1,
        name: "चंद्रवंशी खाती धर्मशाला बिजलपुर",
        image: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        location: "गोपालेशवर महादेव मंदिर",
        owner: "viraj patwari",
        contact: "+91-9999999991",
        availableDates: ["2025-05-25", "2025-05-28", "2025-05-30", "2025-06-02"],
        bookedDates: ["2025-05-26", "2025-05-27", "2025-05-29", "2025-06-01"],
        
    },
    {
        id: 2,
        name: "चंद्रवंशी खाती धर्मशाला बिजलपुर",
        image: "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SG90ZWxzfGVufDB8fDB8fHww",
        location: "neem chowke",
        owner: "viraj patwari",
        contact: "+91-9999999992",
        availableDates: ["2025-06-01", "2025-06-03", "2025-06-05"],
        bookedDates: ["2025-06-02", "2025-06-04", "2025-06-06"],
        
    },
    {
        id: 3,
        name: "जैन धर्मशाला",
        image: "https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SG90ZWxzfGVufDB8fDB8fHww",
        location: "near jain mandir",
        owner: "viraj patwari",
        contact: "+91-9999999993",
        availableDates: ["2025-06-05", "2025-06-10", "2025-06-12"],
        bookedDates: ["2025-06-06", "2025-06-07", "2025-06-11"],
        
    },
    {
        id: 4,
        name: "रूपचितर धर्मशाला",
        image: "https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
        location: "बिजलपुर वांडर्स बिजलपुर कब्बडी ग्राउंड",
        owner: "viraj patwari",
        contact: "+91-9999999994",
        availableDates: ["2025-06-15", "2025-06-18", "2025-06-20"],
        bookedDates: ["2025-06-16", "2025-06-17", "2025-06-19"],
        
    },
    {
        id: 5,
        name: "माली धर्मशाला",
        image: "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
        location: "भारत सागर पब्लिक स्कूल",
        owner: "viraj patwari",
        contact: "+91-9999999995",
        availableDates: ["2025-06-20", "2025-06-22", "2025-06-25"],
        bookedDates: ["2025-06-21", "2025-06-23", "2025-06-24"],
        
    },{
        id: 6,
        name: "श्री राम वाटिका",
        image: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        location: "श्री राम दरबार  ",
        owner: "viraj patwari",
        contact: "+91-9999999991",
        availableDates: ["2025-05-25", "2025-05-28", "2025-05-30", "2025-06-02"],
        bookedDates: ["2025-05-26", "2025-05-27", "2025-05-29", "2025-06-01"],
        
    },
    {
        id: 7,
        name: "मिनी स्कूल गार्डन",
        image: "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SG90ZWxzfGVufDB8fDB8fHww",
        location: "गुरुकुल आकाश बोर्डिंग",
        owner: "suresh sir",
        contact: "+91-9999999992",
        availableDates: ["2025-06-01", "2025-06-03", "2025-06-05"],
        bookedDates: ["2025-06-02", "2025-06-04", "2025-06-06"],

    },
    {
        id: 8,
        name: "पांचाल धर्मशाला ",
        image: "https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SG90ZWxzfGVufDB8fDB8fHww",
        location: "मुंडी रोड",
        owner: "Vishnu Prasad",
        contact: "+91-9999999993",
        availableDates: ["2025-06-05", "2025-06-10", "2025-06-12"],
        bookedDates: ["2025-06-06", "2025-06-07", "2025-06-11"],
       
    },
    {
        id: 9,
        name: "अष्ट विनायक गार्डन",
        image: "https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
        location: "शिव सिटी रोड",
        owner: "viraj patwari",
        contact: "+91-9999999994",
        availableDates: ["2025-06-15", "2025-06-18", "2025-06-20"],
        bookedDates: ["2025-06-16", "2025-06-17", "2025-06-19"],
        
    },
    {
        id: 10,
        name: "शिवधाम गार्डन",
        image: "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
        location: "मुंडी रोड",
        owner: "Anand Swami",
        contact: "+91-9999999995",
        availableDates: ["2025-06-20", "2025-06-22", "2025-06-25"],
        bookedDates: ["2025-06-21", "2025-06-23", "2025-06-24"],
       
    }
];

const CustomDatePicker = ({ selected, onDateSelect, availableDates, bookedDates }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const getDaysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const formatDateString = (year, month, day) => {
        return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    };

    const isDateAvailable = (dateStr) => availableDates.includes(dateStr);
    const isDateBooked = (dateStr) => bookedDates.includes(dateStr);
    const isDateSelected = (dateStr) => selected && selected.toISOString().split('T')[0] === dateStr;

    const renderCalendar = () => {
        const daysInMonth = getDaysInMonth(currentMonth);
        const firstDay = getFirstDayOfMonth(currentMonth);
        const days = [];

        // Empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="p-2"></div>);
        }

        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = formatDateString(currentMonth.getFullYear(), currentMonth.getMonth(), day);
            const available = isDateAvailable(dateStr);
            const booked = isDateBooked(dateStr);
            const selectedDay = isDateSelected(dateStr);

            let className = "p-2 text-center cursor-pointer rounded-lg transition-all duration-200 ";

            if (selectedDay) {
                className += "bg-blue-500 text-white font-bold";
            } else if (available) {
                className += "bg-green-100 text-green-800 hover:bg-green-200 font-medium";
            } else if (booked) {
                className += "bg-red-100 text-red-800 cursor-not-allowed";
            } else {
                className += "text-gray-400 cursor-not-allowed";
            }

            days.push(
                <div
                    key={day}
                    className={className}
                    // onClick={() => {
                    //     if (available) {
                    //         const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                    //         onDateSelect(newDate);
                    //     }
                    // }}
                >
                    {day}
                </div>
            );
        }

        return days;
    };

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    return (
        <div className="bg-white border rounded-lg p-4 shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <button onClick={prevMonth} className="p-1 hover:bg-gray-100 rounded">
                    ←
                </button>
                <h3 className="font-semibold text-lg">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h3>
                <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded">
                    →
                </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="p-2 text-center font-medium text-gray-600 text-sm">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1 mb-4">
                {renderCalendar()}
            </div>

            <div className="flex justify-between text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-100 rounded"></div>
                    <span>Available</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-100 rounded"></div>
                    <span>Booked</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span>Selected</span>
                </div>
            </div>
        </div>
    );
};

const DharamshalaList = () => {
    const [selected, setSelected] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
            {/* Header */}
            <div className="bg-orange-500 text-white py-6">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-lg mb-2 text-[#393939] font-bold">!! श्री गणेश !!     ॐ    !! जय जगदीश !!</h1>
                    <p className="text-black text-3xl font-bold">धर्मशाला बुकिंग सिस्टम बिजलपुर</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dharamshalaData.map((dharamshala) => (
                        <div
                            key={dharamshala.id}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden"
                            onClick={() => {
                                setSelected(dharamshala);
                                setSelectedDate(null);
                            }}
                        >
                            <div className="relative">
                                <img
                                    src={dharamshala.image}
                                    alt={dharamshala.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold text-orange-600">
                                    ⭐ {dharamshala.rating}
                                </div>
                            </div>

                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-2">{dharamshala.name}</h2>
                                <div className="flex items-center gap-2 text-gray-600 mb-2">
                                    <MapPin size={16} />
                                    <span>{dharamshala.location}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600 mb-3">
                                    <User size={16} />
                                    <span>{dharamshala.owner}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-orange-600">{dharamshala.price}</span>
                                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Enhanced Modal */}
            {selected && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-screen overflow-y-auto">
                        <div className="relative">
                            <img
                                src={selected.image}
                                alt={selected.name}
                                className="w-full h-64 object-cover rounded-t-2xl"
                            />
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-4 right-4 bg-white text-gray-600 hover:text-red-500 p-2 rounded-full shadow-lg transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{selected.name}</h2>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <MapPin className="text-orange-500" size={20} />
                                            <span className="text-lg">{selected.location}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <User className="text-orange-500" size={20} />
                                            <span className="text-lg">{selected.owner}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <Phone className="text-orange-500" size={20} />
                                            <span className="text-lg">{selected.contact}</span>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-4 rounded-lg mb-6">
                                        <div className="text-3xl font-bold text-orange-600 mb-1">{selected.price}</div>
                                        <div className="text-gray-600">⭐ {selected.rating} rating</div>
                                    </div>
                                </div>

                                <div>
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Calendar className="text-orange-500" size={20} />
                                            <label className="text-xl font-semibold text-gray-800">Select Booking Date</label>
                                        </div>

                                        <CustomDatePicker
                                            selected={selectedDate}
                                            onDateSelect={setSelectedDate}
                                            availableDates={selected.availableDates}
                                            bookedDates={selected.bookedDates}
                                        />
                                    </div>

                                    {selectedDate && (
                                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                            <div className="flex items-center gap-2 text-green-700 mb-2">
                                                <CheckCircle size={20} />
                                                <span className="font-semibold">Booking Confirmed!</span>
                                            </div>
                                            <p className="text-green-600">
                                                📅 Date: {selectedDate.toDateString()}
                                            </p>
                                            <p className="text-green-600">
                                                🏠 {selected.name}, {selected.location}
                                            </p>
                                            <button className="mt-3 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors w-full font-semibold">
                                                Confirm Booking
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DharamshalaList;