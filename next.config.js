/**
 * @type {import('next').NextConfig}
 */


// CHOOSE YOUR CONFIG FOR YOUR APP DEFAULT SSR

// OUTPUT SERVER SIDE RENDERING
var nextConfig = {
  // Tidak ada konfigurasi khusus yang diperlukan untuk SSR
};

// STATIC
// nextConfig = {
//   output: "export",

//   // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
//   // trailingSlash: true,

//   // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
//   // skipTrailingSlashRedirect: true,

//   // Optional: Change the output directory `out` -> `dist`
//   // distDir: 'dist',
// };


// STATIC SITE GENERATION
// nextConfig =  {
//     // Menggunakan getStaticProps untuk SSG
//     // Contoh: getStaticProps di dalam halaman Next.js
//     async getStaticProps() {
//       // Logika untuk mengambil data dari API atau database
//       const data = ...; // Contoh: Mendapatkan data dari API
  
//       return {
//         props: {
//           data,
//         },
//       };
//     },
// }; 

// ISR
// nextConfig = {
//     // Menggunakan revalidate dalam getStaticProps untuk ISR
//     // Contoh: getStaticProps di dalam halaman Next.js
//     async getStaticProps() {
//       // Logika untuk mengambil data dari API atau database
//       const data = ...; // Contoh: Mendapatkan data dari API
  
//       return {
//         props: {
//           data,
//         },
//         revalidate: 60, // Contoh: Mengatur waktu revalidate ke 60 detik
//       };
//     },
// };

// SERVERLESS
// nextConfig = {
//     // Menggunakan target serverless untuk serverless functions
//     target: 'serverless',
// }

module.exports = nextConfig;
