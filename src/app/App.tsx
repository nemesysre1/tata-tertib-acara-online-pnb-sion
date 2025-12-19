import { ChristmasOrnament } from './components/ChristmasOrnament';
import { EventSection } from './components/EventSection';
import { ChristmasLights } from './components/ChristmasLights';
import christmasTreeImg from '../assets/images/christmas-tree.png';

export default function App() {
  const section1Items = [
    {
      title: 'Barisan prosesi',
      details: [],
    },
    {
      title: 'Kata Sambutan',
      details: [
        '1. Ketua Panitia Natal ( Samuel Silalahi )',
        '2. Ketua PNB/Remaja HKI Sion ( Josua Simamora )',
        '3. Pembina PNB/Remaja HKI Sion ( Cst.R.P.Lumbantoruan )',
        '4. Mewakili Penetua gereja ( St.D.Simanjuntak )',
        '5. Mewakili Orangtua ( )',
        '6. Mewakili Undangan ( )',
      ],
    },
  ];

  const section2Items = [
    {
      title: 'Bernyanyi KJ No 119: 1+4 — "Hai Dunia Gembiralah"',
      lyrics: [
        '• Hai dunia gembiralah dan sambut Rajamu,',
        'Di hatimu, terimalah bersama bersyukur.',
        'bersama bersyukur, Bersama-sama bersyukur',
        '• Dialah Raja semesta, benar dan mulia.',
        'Masyurkanlah hai dunia besar anugerah-Nya,',
        'Besar anugerah-Nya, besar, besar anugerah-Nya.',
      ],
    },
    {
      title: 'Votum (L : Liturgis, J : Jemaat)',
      subtitle: '(Jemaat Berdiri)',
      details: [
        'L: Di dalam nama Allah Bapa, Putra dan Roh kudus, Amen. Ibadah persyaan Natal PNB/R ini demi kemuliaan Allah yang datang menjelma dalam Yesus Kristus serta yang menuntun kehidupan manusia dan dunia dalam kuasa roh kudus.',
        '',
        'J: Sebab Yesus Kritus telah lahir untuk kita, seorang Putra telah diberikan untuk kita, lambang pemerintahan ada di atas bahu-Nya dan nama-Nya disebutkan orang Penasihat Ajaib, Allah yang perkasa, Bapa yang kekal,  Raja Damai.',
        '',
        'L: Bernyanyilah bagi Allah, mazmurkanlah Nama-Nya. Pujilah Tuhan yang membawa keselamatan bagi kita, dan memberikan kedamaian sejati bagi setiap orang percaya kepada-Nya.',
        '',
        'J: Tuhan adalah terangku dan keselamatanku. Dialah tempat perlindunganku dan hidupku adalah milik-Nya. Haleluya... Haleluya... Haleluya....',
        '',
        'L: Mari kita berdoa!... Amen.',
      ],
    },
    {
      title: 'PENYALAAN LILIN dan Bernyanyi KJ 92 — "MALAM KUDUS"',
      subtitle: '(Jemaat Berdiri)',
      details: [
        '1. Pengkhotbah ( Pdt.L. Br. Lumbantobing )',
        '2. Mewakili Penatua Gereja ( St.D.Simanjuntak )',
        '3. Pembina PNB/R HKI Sion ( Cst.R.P.Lumbantoruan )',
        '4. Ketua Panitia Natal (Samuel Silalahi)',
        '5. Ketua PNB/R HKI Sion (Josua Simamora )',
        '6. Mewakili Orangtua         ( )',
        '7. Mewakili Undangan         ( )',
      ],
      lyrics: [
        '• Malam kudus, sunyi senyap; dunia terlelap.',
        '  Hanya dua berjaga terus ayah bunda mesra dan kudus;',
        '  Anak tidur tenang, anak tidur tenang.',
        '',
        '• Malam kudus, sunyi senyap. Kabar Baik menggegap.',
        '  bala sorga menyanyikannya, kaum gembala menyaksikannya:',
        '  "Lahir Raja Syalom, lahir Raja Syalom!"',
        '',
        '• Malam kudus, sunyi senyap. Kurnia dan berkat',
        '  tercermin bagi kami terus di wajahMu, ya Anak kudus,',
        '  cinta kasih kekal, cinta kasih kekal.',
      ],
    },
    {
      title: 'Bernyanyi KJ No.99:1 + 2 — "Gita Sorga Bergema"',
      lyrics: [
        '• Gita sorga bergema, Lahir Raja mulia',
        '  Damai dan Sejahtera turun dalam dunia.',
        '  Bangsa-bangsa bangkitlah, dan bersoraklah serta,',
        "  Permaklumkan Kabar Baik, Lahir Kristus t'rang Ajaib,",
        '  Gita sorga bergema, Lahir Raja mulia!',
        '',
        '• Yang di surga disembah Kristus Raja yang baka',
        '  Lahir dalam dunia dan Maria bunda-Nya',
        '  Dalam daging dikenal, Firman Allah yang kekal',
        '  Dalam anak yang kecil, DatangIah Imanuel',
        '  Gita sorga bergema, Lahir Raja mulia!',
      ],
    },
    {
      title: 'Renungan Natal " Pdt. L. Br. Lumbantobing"',
    },
    {
      title: 'Bernyanyi KJ No. 33:7:1 — "Betapa kita tidak bersyukur"',
      lyrics: [
        '  Betapa kita tidak bersyukur',
        '  bertanah air kaya dan subur',
        '  lautnya luas, gunungnya megah,',
        '  menghijau padang, bukit dan lembah.',
        'REFF:',
        '  Itu semua berkat karunia',
        '  Allah yang Agung Maha Kuasa.',
        '  Itu semua berkat karunia',
        '  Allah yang Agung Maha Kuasa.',
      ],
    },
    {
      title: 'Liturgi "Penciptaan"',
    },
    {
      title: 'Persembahan Pujian : PPR HKI Sion',
    },
    {
      title: 'Bernyanyi KJ 109 — "Hai Mari Berhimpun"',
      lyrics: [
        '• Hai mari, berhimpun dan bersukaria!',
        '  Hai mari semua ke Betlehem!',
        '  Lihat yang lahir, Raja Balasorga!',
        '  Sembah dan puji Dia, sembah dan puji Dia,',
        '  Sembah dan puji Dia, Tuhanmu!',
        '',
        '• Terang yang ilahi, Allah yang sejati,',
        "  t'lah turun menjadi manusia.",
        '  Allah sendiri dalam rupa insan!',
        '  Sembah dan puji Dia, Sembah dan puji Dia,',
        '  Sembah dan puji Dia, Tuhanmu!',
      ],
    },
    {
      title: 'Pantonim "Kejatuhan Manusia Dalam Dosa"',
    },
    {
      title: 'Persembahan Pujian PA HKI Sion',
    },
    {
      title: 'Bernyanyi KJ 120 — "Hai Siarkan di Gunung"',
      lyrics: [
        'Hai siarkan di gunung di bukit dan di mana jua',
        'Hai siarkan di gunung lahirnya Almasih',
        'Di waktu kaum gembala menjaga dombanya',
        'Terpancar dari langit cahaya mulia',
        '',
        'Hai siarkan di gunung, di bukit, dan di mana jua',
        'Hai siarkan di gunung lahirnya Almasih',
      ],
    },
    {
      title: 'Drama "Kelahiran"',
    },
    {
      title: 'Persembahan Pujian Undangan',
    },
    {
      title: 'Bernyanyi "Dia lahir untuk kami"',
      lyrics: [
        'Dia lahir untuk kami, Dia mati untuk kami',
        'Dia bangkit untuk kami semua.',
        'Dia itu Tuhan kami Dia itu Allah kami',
        'Dia Raja diatas segala Raja,',
        '-',
        'Dia itu, firman Allah Yang turun ke bumi',
        'Yang jadi sama dengan manusia',
        '-',
        'Dia Yesus sobat kami',
        'Dia Yesus Tuhan Kami',
        'Sang Penebus Juruselamat dunia',
      ],
    },
    {
      title: 'KOOR PNB HKI SION "Joy To The World"',
    },
    {
      title: 'Persembahan Pujian Undangan',
    },
    {
      title: 'Bernyanyi KJ No 94 Ayat 4 : "Hai Kota Mungil Betlehem"',
      lyrics: [' Ya Yesus, Anak Betlehem, kunjungi kami pun;', '  sucikanlah, masukilah yang mau menyambutMu.', '  Telah kami dengarkan Berita mulia:', '  Kau beserta manusia kekal selamanya'],
    },
    {
      title: 'Drama "Kasih Yang Menyelamatkan"',
    },
    {
      title: 'Bernyanyi " KJ 101 — "Alam Raya Berkumandang"',
      lyrics: [
        '• Alam raya berkumandang oleh pujian mulia;',
        '  dari gunung, dari padang kidung malaikat bergema.',
        '  Glo....... ria in excelsis Deo!',
        '  Glo....... ria in excelsis Deo!',
        '',
        "• Hai gembala, kar'na apa sambutan ini menggegar?",
        '  Bagi Maharaja siapa sorak sorgawi terdengar?',
        '  Glo....... ria in excelsis Deo!',
        '  Glo....... ria in excelsis Deo!',
      ],
    },
    {
      title: 'Persembahan Pujian',
    },
    {
      title: 'Bernyanyi KJ 123 — "S\'lamat, S\'lamat Datang"',
      lyrics: [
        "• S'lamat, S'lamat datang, Yesus, Tuhanku!",
        '  Jauh dari sorga tinggi kunjunganMu.',
        "  S'lamat datang, Tuhanku, kedalam dunia",
        '  Damai yang Kau bawa tiada taranya, Salam, salam!',
        '',
        '• "Kyrie eleison". Tuhan, tolonglah!',
        '  Semoga kidung kami tak bercela',
        '  BundaMu Maria diberi karunia',
        '  Melahirkan Dikau kudus dan mulia',
        '  Salam, salam!',
      ],
    },
    {
      title: 'KOOR PNB HKI SION Peringatan Hari Ibu : "Di Doa Ibuku"',
    },
    {
      title: 'Doa Syafaat',
    },
    {
      title: 'Bernyanyi "Dison Adong Huboan Tuhan"  (Persembahan)',
      lyrics: [
        '• Dison adong huboan Tuhan,',
        'Parbueni ngolungku na so tardok nian.',
        'Sadia ma argana Tuhan',
        'molo sai nirajuman sude denggan basaM?',
        'Jalo ma Tuhan, sai las ma rohaM.',
        '',
        '• Tanganku na metmet da, Tuhan,',
        '  Na so hea mansari dope au on Tuhan;',
        '  Rohangku ma hulehon, Tuhan ',
        '  Na boi pelehononku gabe las ni rohaM,',
        '  Jalo ma Tuhan, sai las ma rohaM.',
        '  Huingot do hataM da, Tuhan,',
        '',
        '• Huingot do hataM da, Tuhan,',
        '  Ingkon sarihononhon anggim na metmet an',
        '  Ampehon ma tanganMu sangkan,',
        '  Itak na otik i unang suda nian,',
        '  Jalo ma Tuhan, sai las ma rohaM.',
      ],
    },
    {
      title: 'Doa Penutup/Doa Berkat  (Jemaat Berdiri)',
    },
  ];

  const section3Items = [
    {
      title: 'Tor-tor',
      details: [],
    },
    {
      title: 'Lucky draw',
      details: [],
    },
    {
      title: 'Snack',
      details: [],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E6D3] via-[#FFF8DC] to-[#F5DEB3] py-6 sm:py-8 px-3 sm:px-4">
      {/* Animated Christmas Lights Border Top */}
      <ChristmasLights position="top" />

      <div className="max-w-2xl mx-auto relative pt-12 sm:pt-16 pb-16 sm:pb-20">
        {/* Header Card */}
        <div className="mb-6 sm:mb-8 relative">
          {/* Top pine branches with berries and stars */}
          <div className="absolute -top-4 sm:-top-6 left-0 right-0 flex justify-between items-start pointer-events-none z-20">
            <div className="flex flex-col items-start">
              <ChristmasOrnament
                type="berry-branch"
                className="w-20 sm:w-32 h-10 sm:h-16"
              />
              <div className="ml-4 -mt-2">
                <ChristmasOrnament
                  type="star"
                  className="w-4 sm:w-6 h-4 sm:h-6"
                  color="#FFD700"
                />
              </div>
            </div>
            <div className="flex flex-col items-end">
              <ChristmasOrnament
                type="berry-branch"
                className="w-20 sm:w-32 h-10 sm:h-16 transform scale-x-[-1]"
              />
              <div className="mr-4 -mt-2">
                <ChristmasOrnament
                  type="star"
                  className="w-4 sm:w-6 h-4 sm:h-6"
                  color="#C0C0C0"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white via-amber-50/50 to-orange-50/40 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl border-3 sm:border-4 border-amber-300/70 relative overflow-hidden">
            {/* Scattered stars background */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <ChristmasOrnament
                type="star"
                className="w-6 h-6 absolute top-8 left-12"
                color="#FFD700"
              />
              <ChristmasOrnament
                type="star"
                className="w-4 h-4 absolute top-16 right-16"
                color="#C0C0C0"
              />
              <ChristmasOrnament
                type="star"
                className="w-5 h-5 absolute top-24 left-24"
                color="#FFD700"
              />
              <ChristmasOrnament
                type="star"
                className="w-3 h-3 absolute top-32 right-8"
                color="#FFD700"
              />
              <ChristmasOrnament
                type="star"
                className="w-6 h-6 absolute bottom-20 left-16"
                color="#C0C0C0"
              />
              <ChristmasOrnament
                type="star"
                className="w-4 h-4 absolute bottom-32 right-20"
                color="#FFD700"
              />
            </div>

            {/* Corner pine branches */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 opacity-40">
              <ChristmasOrnament
                type="berry-branch"
                className="w-16 sm:w-24 h-10 sm:h-14"
              />
            </div>
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 opacity-40 transform scale-x-[-1]">
              <ChristmasOrnament
                type="berry-branch"
                className="w-16 sm:w-24 h-10 sm:h-14"
              />
            </div>

            {/* Main Header Content */}
            <div className="text-center relative z-10">
              <div className="mb-4 sm:mb-6">
                <h1 className="text-amber-900 mb-2 text-lg sm:text-2xl px-2 font-extrabold">TATA IBADAH PERAYAAN NATAL</h1>
                <p className="text-amber-800 text-base sm:text-lg font-bold">PNB/HKI SION</p>
                <p className="text-amber-700 text-sm sm:text-base font-semibold">SABTU, 20 DESEMBER 2025</p>
              </div>

              <div className="my-4 sm:my-6 flex justify-center">
                <img
                  src={christmasTreeImg}
                  alt="Christmas Tree"
                  className="w-36 sm:w-48 h-auto rounded-xl shadow-lg"
                />
              </div>

              <div className="space-y-2 text-amber-900">
                <p className="italic text-xs sm:text-sm px-2 font-semibold">Jl. PENDIDIKAN GG. BARU NO 100 MARINDAL, MEDAN</p>
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-amber-100/60 rounded-xl border-2 border-amber-300 mx-2">
                <p className="text-amber-900 italic mb-1 sm:mb-2 text-sm sm:text-base font-bold">TEMA :</p>
                <p className="text-amber-800 text-sm sm:text-base font-extrabold">KASIH YANG MENYELAMATKAN</p>
                <p className="text-amber-700 text-xs sm:text-sm font-semibold">(MAZMUR 27:10)</p>
              </div>

              <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200 mx-2">
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  <span className="font-bold">SUB TEMA:</span>
                  <br />
                  <span className="italic font-semibold">
                    MELALUI PERAYAAN NATAL INI, PNB DAN REMAJA HKI SION MARINDAL MENYADARI BAHWA KASIH TUHAN ADALAH KASIH YANG MENYELAMATKAN, MELIMPAHKAN, MELENGKAPI DAN SELALU ADA SEPANJANG MASA.
                  </span>
                </p>
              </div>
            </div>

            {/* Bottom decorations - sleigh, snowman, gifts */}
            <div className="absolute bottom-2 sm:bottom-4 left-4 sm:left-8 opacity-40">
              <ChristmasOrnament
                type="sleigh"
                className="w-12 sm:w-16 h-10 sm:h-12"
                color="#8B4513"
              />
            </div>
            <div className="absolute bottom-2 sm:bottom-4 right-4 sm:right-8 opacity-40">
              <ChristmasOrnament
                type="snowman"
                className="w-10 sm:w-12 h-10 sm:h-12"
              />
            </div>
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-30">
              <ChristmasOrnament
                type="gift"
                className="w-6 sm:w-8 h-6 sm:h-8"
                color="#C41E3A"
              />
              <ChristmasOrnament
                type="gift"
                className="w-5 sm:w-7 h-5 sm:h-7"
                color="#B8860B"
              />
              <ChristmasOrnament
                type="gift"
                className="w-6 sm:w-8 h-6 sm:h-8"
                color="#2d5016"
              />
            </div>
          </div>
        </div>

        {/* Event Sections */}
        <EventSection
          sectionNumber="I"
          title="PRA IBADAH"
          items={section1Items}
          ornamentType="tree"
        />

        <EventSection
          sectionNumber="II"
          title="IBADAH"
          items={section2Items}
          ornamentType="star"
        />

        <EventSection
          sectionNumber="III"
          title="HIBURAN"
          items={section3Items}
          ornamentType="gift"
        />

        {/* Footer Decoration */}
        <div className="mt-8 sm:mt-12 relative">
          {/* Top pine branches with berries and stars */}
          <div className="absolute -top-4 sm:-top-6 left-0 right-0 flex justify-between items-start pointer-events-none z-20">
            <div className="flex flex-col items-start">
              <ChristmasOrnament
                type="berry-branch"
                className="w-20 sm:w-32 h-10 sm:h-16"
              />
              <div className="ml-4 -mt-2">
                <ChristmasOrnament
                  type="star"
                  className="w-4 sm:w-6 h-4 sm:h-6"
                  color="#FFD700"
                />
              </div>
            </div>
            <div className="flex flex-col items-end">
              <ChristmasOrnament
                type="berry-branch"
                className="w-20 sm:w-32 h-10 sm:h-16 transform scale-x-[-1]"
              />
              <div className="mr-4 -mt-2">
                <ChristmasOrnament
                  type="star"
                  className="w-4 sm:w-6 h-4 sm:h-6"
                  color="#C0C0C0"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white via-amber-50/50 to-orange-50/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border-3 sm:border-4 border-amber-300/70 relative overflow-hidden text-center">
            {/* Scattered stars background */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <ChristmasOrnament
                type="star"
                className="w-6 h-6 absolute top-8 left-12"
                color="#FFD700"
              />
              <ChristmasOrnament
                type="star"
                className="w-4 h-4 absolute top-12 right-16"
                color="#C0C0C0"
              />
              <ChristmasOrnament
                type="star"
                className="w-5 h-5 absolute bottom-8 left-16"
                color="#FFD700"
              />
              <ChristmasOrnament
                type="star"
                className="w-4 h-4 absolute bottom-12 right-12"
                color="#C0C0C0"
              />
            </div>

            {/* Corner pine branches */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 opacity-40">
              <ChristmasOrnament
                type="berry-branch"
                className="w-16 sm:w-24 h-10 sm:h-14"
              />
            </div>
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 opacity-40 transform scale-x-[-1]">
              <ChristmasOrnament
                type="berry-branch"
                className="w-16 sm:w-24 h-10 sm:h-14"
              />
            </div>

            <div className="relative z-10">
              <div className="flex justify-center gap-3 sm:gap-6 mb-4 sm:mb-6">
                <ChristmasOrnament
                  type="star"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  color="#FFD700"
                />
                <ChristmasOrnament
                  type="gift"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  color="#C41E3A"
                />
                <ChristmasOrnament
                  type="tree"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
                <ChristmasOrnament
                  type="snowman"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
                <ChristmasOrnament
                  type="sleigh"
                  className="w-10 h-8 sm:w-12 sm:h-10"
                  color="#8B4513"
                />
              </div>

              <div className="space-y-2 sm:space-y-3">
                <h2 className="text-amber-900 text-lg sm:text-xl font-extrabold">Selamat Natal dan Tahun Baru 2025</h2>
                <p className="text-amber-800 italic text-sm sm:text-base font-bold">Tuhan memberkati kita semua</p>
                <div className="pt-3 sm:pt-4 border-t-2 border-amber-300/50 mt-4">
                  <p className="text-amber-700 text-xs sm:text-sm font-bold">PNB/Remaja HKI Sion Marindal</p>
                </div>
              </div>
            </div>

            {/* Bottom decorations */}
            <div className="absolute bottom-2 sm:bottom-4 left-4 sm:left-8 opacity-40">
              <ChristmasOrnament
                type="sleigh"
                className="w-12 sm:w-16 h-10 sm:h-12"
                color="#8B4513"
              />
            </div>
            <div className="absolute bottom-2 sm:bottom-4 right-4 sm:right-8 opacity-40">
              <ChristmasOrnament
                type="snowman"
                className="w-10 sm:w-12 h-10 sm:h-12"
              />
            </div>
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-30">
              <ChristmasOrnament
                type="gift"
                className="w-6 sm:w-8 h-6 sm:h-8"
                color="#C41E3A"
              />
              <ChristmasOrnament
                type="gift"
                className="w-5 sm:w-7 h-5 sm:h-7"
                color="#B8860B"
              />
              <ChristmasOrnament
                type="gift"
                className="w-6 sm:w-8 h-6 sm:h-8"
                color="#2d5016"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animated Christmas Lights Border Bottom */}
      <ChristmasLights position="bottom" />
    </div>
  );
}
