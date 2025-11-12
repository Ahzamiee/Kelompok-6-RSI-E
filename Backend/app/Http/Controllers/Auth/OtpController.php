<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class OtpController extends Controller
{
    /**
     * Tampilkan form verifikasi OTP
     */
    public function showVerifyForm()
    {
        $pendingUser = session('pending_user');

        if (!$pendingUser) {
            return redirect()->route('register')->with('error', 'Silakan daftar terlebih dahulu.');
        }

        $email = $pendingUser['email'];

        return view('auth.verify-otp', compact('email'));
    }

    /**
     * Verifikasi kode OTP
     */
    public function verifyOtp(Request $request)
    {
        $request->validate(['otp' => 'required|numeric']);

        // Cek OTP di session
        if ($request->otp == session('otp')) {
            $pendingUser = session('pending_user');

            // Simpan ke database (buat user baru)
            $user = User::create([
                'name' => $pendingUser['name'],
                'email' => $pendingUser['email'],
                'password' => $pendingUser['password'],
                'email_verified_at' => now(), // Tandai verified
            ]);

            // Bersihkan session
            session()->forget(['otp', 'pending_user']);

            // Login otomatis
            Auth::login($user);

            return redirect('/dashboard')->with('success', 'Registrasi berhasil diverifikasi!');
        }

        // Jika OTP salah
        return back()->withErrors(['otp' => 'Kode OTP salah.']);
    }
}