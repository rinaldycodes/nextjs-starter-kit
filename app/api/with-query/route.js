// hello/route.js

const db = require("../../lib/db");

export async function POST(request) {
  try {
    const data = await request.json();
    // Misalnya, untuk menambahkan data ke dalam tabel 'users'
    await db.query("INSERT INTO users SET ?", data);

    // Contoh untuk mengambil semua data dari tabel 'users'
    // const rows = await db.query("SELECT * FROM users");

    // Contoh untuk menambahkan data baru ke dalam tabel 'users'
    // const newData = { username: "john_doe", email: "john@example.com" };
    // await db.query("INSERT INTO users SET ?", newData);

    // Contoh untuk mengubah data dengan ID tertentu di dalam tabel 'users'
    // const updatedData = { email: "john_updated@example.com" };
    // await db.query("UPDATE users SET ? WHERE id = ?", [updatedData, userId]);

    // Contoh untuk menghapus data dengan ID tertentu dari tabel 'users'
    // await db.query("DELETE FROM users WHERE id = ?", userId);

    return new Response(
      JSON.stringify({ success: true, message: "Data berhasil disimpan." }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
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
