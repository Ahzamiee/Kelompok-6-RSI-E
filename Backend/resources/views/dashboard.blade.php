<x-app-layout>
    <div class="py-16 flex justify-center">
        <div class="text-center">
            <h1 class="text-3xl font-bold text-gray-800">Selamat Datang di Rinjani 🌄</h1>
            <p class="text-gray-600 mt-3">
                @auth
                    Hai, {{ Auth::user()->name }}! Senang melihatmu kembali.
                @else
                    Kamu belum login — silakan klik tombol <strong>Login</strong> di pojok kanan atas.
                @endauth
            </p>
        </div>
    </div>
</x-app-layout>
