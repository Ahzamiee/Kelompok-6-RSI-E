<x-guest-layout>
    <div class="mb-4 text-sm text-gray-600">
        Kami telah mengirim kode OTP ke email <span class="font-semibold">{{ $email }}</span>.  
        Masukkan kode tersebut untuk verifikasi akun Anda.
    </div>

    @if (session('error'))
        <div class="text-red-600 mb-2">{{ session('error') }}</div>
    @endif

    <form method="POST" action="{{ route('verify.otp.post') }}">
        @csrf

        <div class="mt-4">
            <x-input-label for="otp" :value="__('Kode OTP')" />
            <x-text-input id="otp" class="block mt-1 w-full"
                            type="text"
                            name="otp"
                            required autofocus />
            @error('otp')
                <div class="text-red-600 text-sm mt-1">{{ $message }}</div>
            @enderror
        </div>

        <div class="flex items-center justify-end mt-4">
            <x-primary-button>
                {{ __('Verifikasi') }}
            </x-primary-button>
        </div>
    </form>
</x-guest-layout>
