# hello/route.js

API route ini akan mengembalikan respons JSON yang berisi pesan "Hello, world!".

## Penjelasan

- **`export async function GET(request)`**: Mendefinisikan handler untuk request GET. Anda juga bisa mendefinisikan handler untuk method HTTP lainnya seperti POST, PUT, DELETE, dll.
- **`new Response(JSON.stringify({ message: "Hello, world!" }))`**: Membuat objek response dengan payload JSON. Dalam hal ini, kita mengirim pesan sederhana "Hello, world!".
- **`headers: { 'Content-Type': 'application/json' }`**: Mengatur header response agar klien tahu bahwa konten yang dikirim adalah JSON.

## Contoh Kode

```javascript
export async function GET(request) {
  return new Response(JSON.stringify({ message: "Hello, world!" }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
