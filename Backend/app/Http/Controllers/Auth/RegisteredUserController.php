<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Mail;
use App\Mail\OtpMail;

class RegisteredUserController extends Controller
{
    public function create()
    {
        return view('auth.register');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        // 1. Simpan data user sementara ke session (BELUM ke DB)
        session([
            'pending_user' => [
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]
        ]);

        // 2. Buat OTP acak
        $otp = rand(100000, 999999);
        session(['otp' => $otp]);

        // 3. Kirim OTP ke email user
        Mail::to($request->email)->send(new OtpMail($otp));

        // 4. Arahkan ke halaman verifikasi OTP
        return redirect()->route('verify.otp')->with('status', 'Kode OTP telah dikirim ke email Anda.');
    }
}