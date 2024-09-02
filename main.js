console.log('Hello World!'); 
const firebaseConfig = {
  apiKey: "AIzaSyBGjJL_CZywtNhviywiyI9cmssS1ClpgEk",
  authDomain: "insan-cemerlang-eb73e.firebaseapp.com",
  projectId: "insan-cemerlang-eb73e",
  storageBucket: "insan-cemerlang-eb73e.appspot.com",
  messagingSenderId: "515339537614",
  appId: "1:515339537614:web:0506f2bcdd9d980048d49f",
  measurementId: "G-PZ68JZKS69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export async function ambildaftarsiswa() {
  const refdokumen = collection(basisdata, "siswa$");
  const kueri = query(refdokumen, orderby("nama"));
  const cuplikankueri =await getdocs(kueri);
  
  let hasilkueri = [];
  cuplikankueri.forEach((dokume) => {
    hasilkueri.push({
      id: dokumen.id, 
      nama: dokumen.data().nama, 
      alamat: dokumen.data().alamat
    })
  })
  return hasilkueri;
  
  } 