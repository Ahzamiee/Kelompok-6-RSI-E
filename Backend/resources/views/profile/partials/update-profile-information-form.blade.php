<section>
    <header>
        <h2 class="text-lg font-medium text-white"> 
            {{-- UBAH: dari text-gray-900 menjadi text-white --}}
            {{ __('Profile Information') }}
        </h2>

        <p class="mt-1 text-sm text-gray-200">
            {{-- UBAH: dari text-gray-600 menjadi text-gray-200 --}}
            {{ __("Update your account's profile information, email address, and profile picture.") }}
        </p>
    </header>

    {{-- FORM DI SINI --}}
    <form method="post" action="{{ route('profile.update') }}" class="mt-6 space-y-6" enctype="multipart/form-data">
        @csrf
        @method('patch')

        {{-- ======================================================= --}}
        {{-- BLOK FOTO PROFIL DENGAN LIVE PREVIEW --}}
        {{-- ======================================================= --}}
        <div>
            <x-input-label for="profile_picture" :value="__('Foto Profil')" />

            {{-- ELEMEN GAMBAR UNTUK PREVIEW --}}
            <img 
                id="profile-picture-preview" 
                {{-- Gunakan foto lama atau placeholder jika foto belum ada --}}
                src="{{ $user->profile_picture ? asset('storage/' . $user->profile_picture) : 'https://via.placeholder.com/100?text=Pilih Foto' }}" 
                alt="Foto Profil" 
                class="w-20 h-20 rounded-full object-cover my-2 border-2 border-gray-300"
            >

            {{-- INPUT FILE (HARUS ADA ID INI) --}}
            <x-text-input 
                id="profile_picture_input" 
                name="profile_picture" 
                type="file" 
                class="mt-1 block w-full" 
            />
            <x-input-error class="mt-2" :messages="$errors->get('profile_picture')" />
        </div>
        
        {{-- BLOK NAMA --}}
        <div>
            <x-input-label for="name" :value="__('Name')" />
            <x-text-input id="name" name="name" type="text" class="mt-1 block w-full" :value="old('name', $user->name)" required autofocus autocomplete="name" />
            <x-input-error class="mt-2" :messages="$errors->get('name')" />
        </div>

        {{-- BLOK EMAIL --}}
        <div>
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input id="email" name="email" type="email" class="mt-1 block w-full" :value="old('email', $user->email)" required autocomplete="username" />
            <x-input-error class="mt-2" :messages="$errors->get('email')" />
        </div>

        {{-- BLOK TOMBOL SIMPAN --}}
        <div class="flex items-center gap-4">
            <x-primary-button>{{ __('Save') }}</x-primary-button>
            
            @if (session('status') === 'profile-updated')
                <p
                    x-data="{ show: true }"
                    x-show="show"
                    x-transition
                    x-init="setTimeout(() => show = false, 2000)"
                    class="text-sm text-gray-600 dark:text-gray-400"
                >{{ __('Saved.') }}</p>
            @endif
        </div>
    </form>
    
    {{-- ======================================================= --}}
    {{-- JAVASCRIPT UNTUK LIVE PREVIEW (TIDAK BOLEH HILANG) --}}
    {{-- ======================================================= --}}
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            // Ambil elemen input file dan elemen img preview
            const input = document.getElementById('profile_picture_input');
            const preview = document.getElementById('profile-picture-preview');

            // Event listener ketika ada file yang dipilih
            input.addEventListener('change', function(e) {
                const file = e.target.files[0];
                
                if (file) {
                    const reader = new FileReader();
                    
                    reader.onload = function(e) {
                        // Mengganti sumber (src) gambar dengan file yang baru dipilih
                        preview.src = e.target.result;
                    }
                    
                    // Membaca file sebagai URL data (base64 string)
                    reader.readAsDataURL(file);
                }
            });
        });
    </script>
</section>