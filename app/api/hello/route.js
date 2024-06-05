/**
 * Mendefinisikan handler untuk request POST.
 * Anda bisa mendefinisikan handler untuk method HTTP lainnya seperti GET, PUT, DELETE, dll.
 *
 * @param {Request} request - Objek Request yang mewakili request dari klien.
 * @returns {Response} - Objek Response yang akan dikirim kembali ke klien.
 */
export async function POST(request) {
  try {
    // Mendapatkan data yang dikirim dari klien
    const data = await request.json();

    // Lakukan sesuatu dengan data, misalnya simpan ke database

    // Mengembalikan respons berhasil
    return new Response(
      JSON.stringify({ success: true, message: "Data berhasil disimpan." }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    // Mengembalikan respons jika terjadi kesalahan
    return new Response(
      JSON.stringify({
        success: false,
        message: "Terjadi kesalahan saat memproses data.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function GET(request) {
  return new Response(JSON.stringify({ message: "Hello, world!" }), {
    headers: { "Content-Type": "application/json" },
  });
}
