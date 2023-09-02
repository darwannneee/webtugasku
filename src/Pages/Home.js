import React from 'react'
import '../css/Font.css'
import reminderTugas from '../img/remindertugas.png'
import Bot from '../img/bot.png';
import Logo from '../img/logo.png'

const Home = () => {
  function handleAdd() {
    window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=1140195754057670738&permissions=2147486720&scope=bot';
  }

  return (
    <div className="h-screen flex justify-center items-center mt-10">
      <div className="text-center">
        <img src={Logo} className='w-full h-full mx-auto md:w-80 md:h-full mt-52' ></img>
        <h1 className="text-4xl font-bold mb-10 fontJudul">TugasKU BOT</h1>
        <p className="text-lg fontDeskripsi text-slate-500">BOT yang siap membantu Anda!</p>
          {/* Tombol biru */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mt-4" onClick={handleAdd}>
          Add Bot ke Server 
        </button>
        <p className="text-sm mt-4 fontDeskripsi text-slate-500">
            Main Fitur : <br />
            Mengingatkan Reminder Tugas <br /> <br />
            Ketik "/tambahreminder" untuk menambahkan reminder tugas di server discord anda. <br />
            Ketik "/hapusreminder [idtugas]" untuk menghapus reminder tugas di server discord anda. <br />
            Ketik "/listreminder" untuk melihat ada tugas apa aja di server discord anda. <br />  <br />
        </p>
        <img src={reminderTugas} className='w-72 h-full mx-auto md:w-full md:h-56' ></img>
        <p className="text-sm mt-4 fontDeskripsi text-slate-500">
            Spesial Fitur : <br />
            Bot Chat GPT AI <br /> <br />
            Ketik "!tanya [pertanyaan Anda]" untuk mendapatkan jawaban. <br></br>
        </p>
        <img src={Bot} className='w-72 h-full mx-auto md:w-full md:h-56' ></img>
      </div>
    </div>
  )
}

export default Home
