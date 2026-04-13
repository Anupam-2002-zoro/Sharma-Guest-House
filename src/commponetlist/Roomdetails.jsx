import React, { useState } from "react";
import Room from "./Room";

// Mock Room Data
const ROOMS_DATA = [
  { num: 101, ac: false, occupied: false, floor: 1 },
  { num: 102, ac: true,  occupied: false, floor: 1 },
  { num: 103, ac: false, occupied: true,  floor: 1 },
  { num: 104, ac: true,  occupied: true,  floor: 1 },
  { num: 105, ac: false, occupied: false, floor: 1 },
  { num: 106, ac: true,  occupied: false, floor: 1 },
  { num: 201, ac: false, occupied: true,  floor: 2 },
  { num: 202, ac: true,  occupied: false, floor: 2 },
  { num: 203, ac: false, occupied: false, floor: 2 },
  { num: 204, ac: true,  occupied: false, floor: 2 },
  { num: 205, ac: false, occupied: true,  floor: 2 },
  { num: 206, ac: true,  occupied: true,  floor: 2 },
];

const PRICE_LIST = {
  normal_noac: 500,
  normal_ac: 1000,
  h24_noac: 800,
  h24_ac: 1500,
};

const Roomdetails = () => {
  const [rooms, setRooms] = useState(ROOMS_DATA);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [durType, setDurType] = useState("normal");
  const [durVal, setDurVal] = useState(1);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [filter, setFilter] = useState("all");

  const handleRoomClick = (room) => {
    if (room.occupied) return;
    setSelectedRoom(room);
    setIsModalOpen(true);
    setBookingSuccess(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
    setGuestName("");
    setGuestPhone("");
  };

  const calculateTotal = () => {
    if (!selectedRoom) return 0;
    const rate = durType === "24h" 
      ? (selectedRoom.ac ? PRICE_LIST.h24_ac : PRICE_LIST.h24_noac)
      : (selectedRoom.ac ? PRICE_LIST.normal_ac : PRICE_LIST.normal_noac);
    return rate * (parseInt(durVal) || 1);
  };

  const confirmBooking = () => {
    if (!guestName || !guestPhone) return alert("Details bharo!");
    setRooms(prev => prev.map(r => r.num === selectedRoom.num ? { ...r, occupied: true } : r));
    setBookingSuccess(true);
    setTimeout(() => closeModal(), 2000);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.brand}>Swastik Palace</h1>
        <p style={styles.subText}>Luxury jo yaad rahe</p>
      </header>

      <div style={styles.toolbar}>
        <div style={styles.stats}>
          <div style={styles.statItem}>Available: <b>{rooms.filter(r => !r.occupied).length}</b></div>
          <div style={{...styles.statItem, color: '#ff7e7e'}}>Occupied: <b>{rooms.filter(r => r.occupied).length}</b></div>
        </div>
        <div style={styles.filters}>
          {['all', 'ac', 'noac'].map(f => (
            <button 
              key={f} 
              onClick={() => setFilter(f)}
              style={{...styles.filterBtn, background: filter === f ? '#ffd880' : '#1e1b19', color: filter === f ? '#000' : '#ffd880'}}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.grid}>
        {rooms.filter(r => filter === 'all' || (filter === 'ac' ? r.ac : !r.ac)).map(room => (
          <div 
            key={room.num} 
            onClick={() => handleRoomClick(room)}
            style={{
              ...styles.roomCard, 
              borderLeft: room.occupied ? '4px solid #444' : '4px solid #ffd880',
              opacity: room.occupied ? 0.5 : 1
            }}
          >
            <div style={styles.roomNum}><span style={styles.bullet}>✦</span> Room {room.num}</div>
            <div style={styles.roomType}>{room.ac ? "Premium AC" : "Standard Non-AC"}</div>
            <div style={{...styles.status, color: room.occupied ? '#ff7e7e' : '#ffd880'}}>
              {room.occupied ? "Booked" : "Available"}
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            {!bookingSuccess ? (
              <>
                <div style={styles.modalHeader}>
                  <h2 style={{color: '#ffb38a'}}>Booking: Room {selectedRoom.num}</h2>
                  <button onClick={closeModal} style={styles.closeX}>&times;</button>
                </div>
                <div style={styles.formBody}>
                  <input placeholder="Guest Name" value={guestName} onChange={e => setGuestName(e.target.value)} style={styles.input}/>
                  <input placeholder="Mobile Number" value={guestPhone} onChange={e => setGuestPhone(e.target.value)} style={styles.input}/>
                  <div style={styles.row}>
                    <select value={durType} onChange={e => setDurType(e.target.value)} style={styles.input}>
                      <option value="normal">Normal Day</option>
                      <option value="24h">24 Hours</option>
                    </select>
                    <input type="number" value={durVal} onChange={e => setDurVal(e.target.value)} style={styles.input}/>
                  </div>
                  <div style={styles.billBox}>
                    <span style={{fontSize: '12px', letterSpacing: '1px'}}>PRICE STARTS FROM</span>
                    <div style={styles.totalAmt}>₹{calculateTotal()}<span style={{fontSize: '14px', color: '#888'}}>/night</span></div>
                  </div>
                  <button onClick={confirmBooking} style={styles.bookActionBtn}>BOOK NOW</button>
                </div>
              </>
            ) : (
              <div style={styles.successMsg}>
                <div style={{fontSize: '50px', color: '#ffd880'}}>✦</div>
                <h3 style={{color: '#ffd880'}}>Booking Successful!</h3>
                <p>Luxurious stay confirmed.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Roomdetails;

const styles = {
  container: { padding: "40px 20px", maxWidth: "1100px", margin: "0 auto", color: "#f0ead6", background: "#0c0b0a", minHeight: "100vh", fontFamily: "'Times New Roman', serif" },
  header: { textAlign: "center", marginBottom: "40px" },
  brand: { fontSize: "42px", margin: "0", color: "#ffb38a", fontWeight: "bold" },
  subText: { color: "#ffd880", margin: "10px 0", fontSize: "18px", fontStyle: "italic" },
  toolbar: { display: "flex", justifyContent: "space-between", marginBottom: "30px", flexWrap: "wrap", gap: "20px" },
  stats: { display: "flex", gap: "15px" },
  statItem: { padding: "10px 20px", background: "#1e1b19", borderRadius: "4px", fontSize: "14px", border: "1px solid #2e2b29" },
  filters: { display: "flex", gap: "10px" },
  filterBtn: { border: "none", padding: "8px 20px", borderRadius: "4px", cursor: "pointer", fontWeight: "bold", fontSize: "12px", letterSpacing: "1px", transition: "0.3s" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" },
  roomCard: { background: "#1e1b19", padding: "25px", borderRadius: "0 8px 8px 0", cursor: "pointer", transition: "0.3s", position: "relative" },
  bullet: { color: "#ffd880", marginRight: "10px" },
  roomNum: { fontSize: "22px", fontWeight: "bold", color: "#f0ead6" },
  roomType: { fontSize: "13px", margin: "10px 0", color: "#8c8c8c", textTransform: "uppercase", letterSpacing: "1px" },
  status: { fontSize: "14px", fontWeight: "bold", marginTop: "15px" },
  
  overlay: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.9)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 },
  modal: { background: "#110f0e", width: "95%", maxWidth: "400px", borderRadius: "12px", padding: "30px", border: "1px solid #ffd880" },
  modalHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px" },
  closeX: { background: "none", border: "none", color: "#ffd880", fontSize: "30px", cursor: "pointer" },
  formBody: { display: "flex", flexDirection: "column", gap: "20px" },
  input: { padding: "12px", background: "#1e1b19", border: "1px solid #2e2b29", color: "#f0ead6", borderRadius: "4px", outline: "none", fontSize: "15px" },
  row: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" },
  billBox: { marginTop: "10px", padding: "20px", background: "#1e1b19", borderRadius: "8px", textAlign: "center", border: "1px dotted #ffd880" },
  totalAmt: { fontSize: "32px", fontWeight: "bold", color: "#f0ead6", marginTop: "5px" },
  bookActionBtn: { padding: "15px", background: "#ffd880", border: "none", color: "#000", borderRadius: "4px", fontWeight: "bold", fontSize: "16px", cursor: "pointer", letterSpacing: "2px" },
  successMsg: { textAlign: "center", padding: "40px 0" }
};