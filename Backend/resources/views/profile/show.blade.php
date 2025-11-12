<x-app-layout>
    <div class="max-w-4xl mx-auto py-10">
        <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Profil Saya</h2>

            <div class="flex items-center space-x-6">
                @if (Auth::user()->profile_picture)
                    <img src="{{ asset('storage/' . Auth::user()->profile_picture) }}" alt="Foto Profil" class="w-24 h-24 rounded-full object-cover">
                @else
                    {{-- Ganti dengan path ke default foto kamu --}}
                    <img src="https://via.placeholder.com/100" alt="Default Foto" class="w-24 h-24 rounded-full object-cover">
                @endif

                <div>
                    <p class="text-lg font-semibold">{{ Auth::user()->name }}</p>
                    <p class="text-gray-600">{{ Auth::user()->email }}</p>
                </div>
            </div>

            <a href="{{ route('profile.edit') }}" class="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-300">
                Edit Profil & Foto
            </a>
            
            {{-- Ubah link ini --}}
            <a href="{{ route('password.edit') }}" class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500">
                Ganti Password
            </a>

            {{-- Tombol Logout dipindah ke sini --}}
            <form method="POST" action="{{ route('logout') }}" class="mt-6">
                @csrf
                <button type="submit" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                    {{ __('Logout') }}
                </button>
            </form>
        </div>
    </div>
</x-app-layout>